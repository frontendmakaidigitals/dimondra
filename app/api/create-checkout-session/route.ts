import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-07-30.basil",
  });
  try {
    const { email, price, name, packageName } = await request.json();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Number(price) * 100,
            product_data: {
              name: packageName,
            },
          },
          quantity: 1,
        },
      ],
      success_url: "https://Dimondra.com/Services/HR-Services/Virtual-Admin-Support",
      cancel_url: "https://Dimondra.com/Services/HR-Services/Virtual-Admin-Support",

      customer_email: email,

      metadata: {
        email: email,
        name: name,
        price: price,
        packageName: packageName,
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
