"use client";

export default function PayPalCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">❌ Payment Canceled</h1>
        <p className="mt-2 text-gray-700">
          You canceled the payment. No charges were made.
        </p>
      </div>
    </div>
  );
}
