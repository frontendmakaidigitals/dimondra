import { NextResponse } from "next/server";

const PAYPAL_API_URL =
  process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken() {
  const auth = Buffer.from(
    `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  return data.access_token;
}

async function createPayPalOrder(
  {
    email,
    name,
    price,
    packageName,
  }: {
    email: string;
    name: string;
    price: number | string;
    packageName: string;
  },
  accessToken: string
) {
  const res = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: packageName,
          description: `Subscription package: ${packageName}`,
          amount: {
            currency_code: "USD",
            value: String(price),
          },
        },
      ],
      application_context: {
        brand_name: "Your Company",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel`,
      },
    }),
  });

  return res.json();
}

async function capturePayPalOrder(orderID: string, accessToken: string) {
  const res = await fetch(
    `${PAYPAL_API_URL}/v2/checkout/orders/${orderID}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
}

export async function POST(request: Request) {
  try {
    const { email, name, price, packageName, orderID } = await request.json();

    if (!email || !name || !price || !packageName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    if (orderID) {
      // Capture step
      const captureData = await capturePayPalOrder(orderID, accessToken);

      if (captureData.status !== "COMPLETED") {
        return NextResponse.json(
          {
            error: `Payment capture failed with status: ${captureData.status}`,
          },
          { status: 400 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Payment captured successfully",
          data: {
            name,
            email,
            amount: price,
            orderID,
            captureID: captureData.id,
            captureStatus: captureData.status,
          },
        },
        { status: 200 }
      );
    } else {
      // Create order
      const orderData = await createPayPalOrder(
        { email, name, price, packageName },
        accessToken
      );
      const approvalUrl = orderData.links?.find(
        (link: any) => link.rel === "approve"
      )?.href;

      if (!approvalUrl) {
        return NextResponse.json(
          { error: "No approval URL found" },
          { status: 500 }
        );
      }

      return NextResponse.json({ approvalUrl }, { status: 200 });
    }
  } catch (error) {
    console.error("PayPal error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
