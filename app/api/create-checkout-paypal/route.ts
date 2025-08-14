import { NextResponse } from "next/server";
import * as admin from "firebase-admin";
import { ServiceAccount, initializeApp, cert } from "firebase-admin/app";
import { Resend } from "resend";
export const runtime = "nodejs";
const PAYPAL_API_URL =
  process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";
const resend = new Resend(
  process.env.RESEND_API_KEY || "re_X5r2mbNL_ALcDw9cKjq8QGXbHVk6bBABT"
);

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
        brand_name: "Dimondra",
        landing_page: "BILLING",
        user_action: "PAY_NOW",
        return_url: `https://dimondra.com/payment/success`,
        cancel_url: `https://dimondra.com/payment/cancel`,
      },
    }),
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error("Invalid response from PayPal when creating order");
  }
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

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error("Invalid PayPal response");
  }
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
    // If orderID is present, we capture the payment
    if (orderID) {
      const captureData = await capturePayPalOrder(orderID, accessToken);

      if (captureData.status !== "COMPLETED") {
        return NextResponse.json(
          {
            error: `Payment capture failed with status: ${captureData.status}`,
          },
          { status: 400 }
        );
      }

      // ✅ Save to Firestore
      const userRef = admin
        .firestore()
        .collection("userPaymentInfo")
        .doc(email);
      const purchasesRef = userRef.collection("purchases");

      await purchasesRef.add({
        name,
        price,
        packageName,
        purchasedAt: new Date().toISOString(),
        client: 'paypal'
      });
      
       await resend.emails.send({
        from: process.env.SMTP_USER || "noreply@dimondra.com",
        to: [email],
        subject: "✅ Payment Successful – Dimondra",
        html: `
          <div style="font-family: sans-serif; color: #333; padding: 16px;">
            <h2 style="color: #0F766E;">Hello ${name},</h2>
            <p>Thank you for your payment of <strong>$${price}</strong> for the <strong>${packageName}</strong> package.</p>
            <p>We’ve successfully received your payment and we’re excited to start working with you!</p>
            <br />
            <p>Best regards,<br /><strong>Team Dimondra</strong></p>
          </div>
        `,
      });

      await resend.emails.send({
        from: process.env.SMTP_USER || "noreply@dimondra.com",
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

      return NextResponse.json(
        {
          success: true,
          message: "Payment captured and processed",
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
    }

    // If no orderID: Create the PayPal order
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
  } catch (error) {
    console.error("PayPal error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
