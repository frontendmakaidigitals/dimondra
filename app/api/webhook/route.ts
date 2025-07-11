import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { App, ServiceAccount, initializeApp, cert } from "firebase-admin/app";
import * as admin from "firebase-admin";
import serviceAccount from "@/public/serviceAccount.json";
export const runtime = "nodejs";
export const config = {
  api: {
    bodyParser: false,
  },
};
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

if (!admin.apps.length) {
  initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  });
}
const firestore = admin.firestore();

async function buffer(request: NextRequest) {
  const arrayBuffer = await request.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(request: NextRequest) {
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

    if (email && name && price) {
      const userRef = firestore.collection("userPaymentInfo").doc(email);
      const purchasesRef = userRef.collection("purchases");

      await purchasesRef.add({
        name,
        price,
        purchasedAt: new Date().toISOString(),
      });

      console.log(`✅ Purchase stored under user: ${email}`);
    }
  }

  return NextResponse.json({ received: true });
}
