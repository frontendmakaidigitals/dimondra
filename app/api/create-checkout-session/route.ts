import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export async function POST(request: NextRequest) {
  try {
    const { email, videoId } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 2000, // $20
            product_data: {
              name: "Cool T-shirt",
            },
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000/cancel",

      customer_email: email,
    

      metadata: {
        email: email,
        videoId: videoId
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error("Stripe checkout session error", err);
    return NextResponse.json({ error: "Stripe checkout failed" }, { status: 500 });
  }
}
