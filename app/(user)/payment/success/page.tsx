import { cookies } from "next/headers";
import SucessUi from "../(components)/Sucess-Ui";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; PayerID?: string }>;
}) {
  const { token: orderID  } = await searchParams;

  if (!orderID) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-semibold">❌ Missing order ID.</p>
      </div>
    );
  }

  const cookieStore = await cookies();
  const email = cookieStore.get("user_email")?.value || "user@example.com";
  const name = cookieStore.get("user_name")?.value || "John Doe";

  const price = cookieStore.get("user_price")?.value || "user@example.com";
  const packageName =
    cookieStore.get("user_packageName")?.value || "user@example.com";

  let success = false;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/create-checkout-paypal`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, price, packageName, orderID }),
        cache: "no-store",
      }
    );

    const data = await res.json();
    if (res.ok && data.success) {
      success = true;
    }
  } catch (e) {
    success = false;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {success ? (
        <SucessUi />
      ) : (
        <>
          <h1 className="text-2xl font-bold text-red-600">❌ Payment Failed</h1>
          <p className="mt-2 text-gray-700">
            There was an issue capturing your payment.
          </p>
        </>
      )}
    </div>
  );
}
