import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { App, ServiceAccount, initializeApp, cert } from "firebase-admin/app";
import * as admin from "firebase-admin";
export const runtime = "nodejs";
export const config = {
  api: {
    bodyParser: false,
  },
};
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

const serviceAccount = {
  type: "service_account",
  project_id: "expreiment-284ae",
  private_key_id: "bac8adeb703553828563b5629b73c378a4c92039",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCuQbf5qot0+gep\nsv7Rd/3zTHtN6dnGwl+WluqxdnsXsVsYJVPPGsY/1dyGIZC9HaBwxLzAh0Lt/2CO\ns8ywaSfVr1ZwrofIvuGtkVK49S1sjwhx8wa9avmL8Hx47DY/Dz4g5t/mZPomE/au\nRoLEgK2Anphb059gviUsfXBIzIEp8FNdHpIBnIw5BZnKo+apOXSu5fNQCcxuHaip\nAy6PyQa3MqMhWo/d9b/u0YrR4/bOYVUjNu4Z3Kgb7EHVjnGl1Qv9n5+r2AIoeyDM\n8auS8mzZH0bic+LtlsVHvOGbvU5Yyzcxmq++FfmjMT7O+OpGZx4A/bktQJOGw9Wq\n2OI7e/zbAgMBAAECggEAJgH6lU/ADDsu6bI7h0fDUcp4SJW9pO8nd0qilSORFKlg\nA6O8pHskC69jYrQ2hDFOmdoni1zVWeDuWCHafw3onOCaG4jN4BjWU4vTfbkod7m4\n71XBPhZzqLTDCYMID/gMppOE+ZVDxINtNjT199NTRK8S71B4vlqq9AnGMHK+p31C\nIC19TkdhcYCg+iHQRxaYgiNGdsnRLQm1vO8vmTzaRtOnRRLsufTdEoVce23aB9Jg\na0iSO8stvuiq3wGaMBuxR6/uf3pOVbkB/Vkwk0Xk3tsM01mxfsQngKJe8nR7SRg3\nfP3tMkaMKae4WREK4Zi4qdYwVmZQ3ryNLuCBxRPpSQKBgQDYLHR1JJVEofcgikut\nDxfKmneygSAd6WmVVsUQlQf0MAWR7AG4KkMJGH44hiAbrNvCSldy9Q3wyyISKXRC\nWYoB3OC0oMcSrG/4+TUBUFmGdV+4UUdG1vifOOTzm1/y+dvPKE5n1mE/+VORVc0F\nJlOIJDZqGHjYP584UdjnWUl06QKBgQDOXE5/53vj2RqEjmMETDiBbBcPuj/w5ESP\na0NKzpwCbLUzXZ7xIoRti/fzI+uo0AK8Nsv8noS+B6aq7YGh7f7ZCFdLHhte7oCy\niOasBlxmnQ72TDciTtchV76IhfVBsmr6Ft2VAjT2sZiDWKRKA1lBcob1dD3GGA/M\nAHjvRuxZIwKBgAc3lLvEeOdNsP55H4Wrl1PATHa9MOFOxaOivfmLwDQ61jTE+Fm5\nr3tCQhSJBdFmt/+Ik9rWq5x6a6zHjYYZjy34vdfJ9lt9Pk/FoitlD1gZ2xRAQmzv\nCGXodFxdt5pZFSmZYuS8l4qXPF8BylJ9sRQ+gUKRhpdRqHMs6Fzw8i7hAoGALv7M\njcpc54XQyTFYEWl+UNMZ6WYEG8sQZg0KdSXaV58EIR+IC+hNelku7XtXtskwZkag\na/Z5yoEZjsGqDQOTTz/cCWpg11y/iGkvBywnrOLFvoea4sBLs/c0mAjR0tVcEXpV\nmhK3lxrY3ci5GXXrxMDdRVbknpFqP443/F4NgzsCgYAbsKR8mDQ+87qtIMdsQ/hM\nAaoKM3dztDC8HrdUD6CE3yHbJ/S9uC6FZU8oU5DgPlbkXE8ECS9+LOvWiQNM1qd/\nBWXlpVJN3e5/q1XfqxzX3aNR02F8vXr1+CGwsw/NfW36xcuejsFfKU/goeJ4JpZ/\nLyo9gk4S3WyH7iUzRq7awg==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-fbsvc@expreiment-284ae.iam.gserviceaccount.com",
  client_id: "109380993197899885543",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40expreiment-284ae.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

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
