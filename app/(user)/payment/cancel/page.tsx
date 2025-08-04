"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PayPalReturnPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // This is the orderID from PayPal

  useEffect(() => {
    if (token) {
      fetch("/api/create-checkout-paypal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "customer@example.com", // You should store this in session or retrieve appropriately
          name: "Customer Name",
          price: 10,
          packageName: "Pro Plan",
          orderID: token,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            console.log("✅ Payment completed:", data);
            // redirect or show success message
          } else {
            console.error("❌ Payment error:", data);
          }
        })
        .catch(err => {
          console.error("❌ API error:", err);
        });
    }
  }, [token]);

  return (
    <div className="p-10">
      <h1>Processing your payment...</h1>
    </div>
  );
}
