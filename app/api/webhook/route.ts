import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { ServiceAccount, initializeApp, cert } from "firebase-admin/app";
import * as admin from "firebase-admin";
import { Resend } from "resend";
export const runtime = "nodejs";
const resend = new Resend(
  process.env.RESEND_API_KEY || "re_X5r2mbNL_ALcDw9cKjq8QGXbHVk6bBABT"
);

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

const firestore = admin.firestore();

async function buffer(request: NextRequest) {
  const arrayBuffer = await request.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(request: NextRequest) {
  console.log("⚡️ Stripe webhook triggered");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-07-30.basil",
  });
  const buf = await buffer(request);
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
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
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

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
        client:'stripe'
      });
      await resend.emails.send({
        from: process.env.SMTP_USER || "Dimondra <noreply@dimondra.com>",
        to: [email],
        subject: `🎉 Purchase Confirmation - ${packageName}`,
        html: `
          <div style="font-family: sans-serif; color: #333; padding: 16px;">
            <h2 style="color: #0F766E;">Hello ${name},</h2>
            <p>Thank you for your recent payment of <strong>$${price}</strong> for the <strong>${packageName}</strong> package.</p>
            <p>Your transaction has been successfully processed and we’re excited to start working with you.</p>
            <p>If you have any questions or need further assistance, feel free to reply to this email — we’re here to help.</p>
            <br />
            <p>Best regards,<br /><strong>Team Dimondra</strong></p>
          </div>
  `,
      });

      // Send internal copy to yourself
      await resend.emails.send({
        from: process.env.SMTP_USER || "Dimondra <noreply@dimondra.com>",
        to: ["connect.dimondra@gmail.com"],
        subject: `🎉🧾 New Purchase - ${packageName}`,
        html: `
          <div style="font-family: sans-serif; color: #333; padding: 16px;">
            <h2>New Purchase Notification</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Package:</strong> ${packageName}</p>
            <p><strong>Price:</strong> $${price}</p>
          </div>
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
    const price = session.metadata?.price;
    if (email && name) {
      await resend.emails.send({
        from:
          process.env.RESEND_FROM_EMAIL || "Dimondra <onboarding@resend.dev>",
        to: [email],
        subject: "❌ Payment Failed – Please Try Again",
        html: `
    <div style="font-family: Arial, sans-serif; padding: 24px; color: #333; background-color: #f9fafb;">
      <h2 style="color: #dc2626;">Hello ${name},</h2>
      <p>We're sorry, but your recent payment attempt of ${price} was <strong>unsuccessful</strong>.</p>
      <p>This might be due to a temporary issue with your payment method or a network error.</p>
      <p>Please try again using the payment link provided, or feel free to reach out if you need any help.</p>

      <div style="margin: 24px 0;">
        <a href="mailto:support@dimondra.com" style="padding: 12px 24px; background-color: #14b8a6; color: white; border-radius: 6px; text-decoration: none;">Contact Support</a>
      </div>

      <p>If you've already completed your payment, you may safely disregard this message.</p>

      <br />
      <p>Best regards,<br /><strong>Team Dimondra</strong></p>
    </div>
  `,
        replyTo: email,
      });
    }
  }

  return NextResponse.json({ received: true });
}
