import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import * as admin from "firebase-admin";
import serviceAccount from "@/public/serviceAccount.json";

export const runtime = "nodejs";
export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
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

    const email = session.customer_email || session?.metadata?.email;
    const videoId = session?.metadata?.videoId;

    if (!email) {
      console.warn("No email found in session, cannot update Firestore.");
    } else {
      try {
        const userRef = firestore.collection("userPaymentInfo").doc(email);
        await userRef.update({ [`videoId${videoId}`]: true });
        console.log(`Firestore updated for user: ${email} videoId${videoId}`);
      } catch (err) {
        console.error("❌ Failed to update Firestore:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
