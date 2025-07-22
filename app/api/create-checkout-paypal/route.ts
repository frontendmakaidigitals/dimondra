// /app/api/paypal-capture/route.js (Next.js App Router)
import { NextResponse } from "next/server";

interface PaypalAccessTokenResponse {
  access_token: string;
  [key: string]: any;
}

interface PaypalCaptureResponse {
  id: string;
  status: string;
  [key: string]: any;
}

interface RequestBody {
  orderID: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  const { orderID }: RequestBody = await req.json();

  const accessTokenResponse = await fetch(
    "https://api-m.paypal.com/v1/oauth2/token",
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
  );

  const { access_token }: PaypalAccessTokenResponse =
    await accessTokenResponse.json();

  const captureResponse = await fetch(
    `https://api-m.paypal.com/v2/checkout/orders/${orderID}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const data: PaypalCaptureResponse = await captureResponse.json();

  return NextResponse.json(data);
}
