import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { ServiceAccount, initializeApp, cert } from "firebase-admin/app";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";
export const runtime = "nodejs";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true if port is 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
export const config = {
  api: {
    bodyParser: false,
  },
};

if (!admin.apps.length) {
  initializeApp({
    credential: cert({
      type: process.env.GOOGLE_TYPE,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: process.env.GOOGLE_AUTH_URI,
      token_uri: process.env.GOOGLE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
      client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
      universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
    } as ServiceAccount),
  });
}
console.log("🔥 Firebase ENV project_id:", process.env.SMTP_TO);
const firestore = admin.firestore();

async function buffer(request: NextRequest) {
  const arrayBuffer = await request.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-06-30.basil",
  });
  const buf = await buffer(request);
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    console.error("❌ Missing stripe-signature header");
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("❌ Invalid signature", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // ✅ Payment successful
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_email;
    const name = session.metadata?.name;
    const price = session.metadata?.price;
    const packageName = session.metadata?.packageName;

    if (email && name && price) {
      const userRef = firestore.collection("userPaymentInfo").doc(email);
      const purchasesRef = userRef.collection("purchases");

      await purchasesRef.add({
        name,
        price,
        packageName,
        purchasedAt: new Date().toISOString(),
      });

      await transporter.sendMail({
        from: `"Your Company" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "✅ Payment Successful",
        html: `
            <h3>Hi ${name},</h3>
            <p>Thank you for your payment of <strong>$${price}</strong>.</p>
            <p>Your transaction has been successfully processed.</p>
          `,
      });
    }
  }
  if (
    event.type === "checkout.session.async_payment_failed" ||
    event.type === "payment_intent.payment_failed"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;
    const name = session.metadata?.name;
    const packageName = session.metadata?.packageName;

    if (email && name) {
      await transporter.sendMail({
        from: `"Your Company" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "❌ Payment Failed",
        html: `
          <h3>Hi ${name},</h3>
          <p>Unfortunately, your payment could not be processed.</p>
          <p>Please try again or contact support.</p>
        `,
      });

      console.log(`❌ Payment failed email sent to ${email}`);
    }
  }

  return NextResponse.json({ received: true });
}
