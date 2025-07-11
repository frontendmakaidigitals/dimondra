import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";



export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});
  try {
    const { email, price, name } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Number(price) * 100,
            product_data: {
              name: name,
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
        name: name,
        price: price,
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error("Stripe checkout session error", err);
    return NextResponse.json(
      { error: "Stripe checkout failed" },
      { status: 500 }
    );
  }
}
