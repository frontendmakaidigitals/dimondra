"use client";
import { Check, Book, LibraryBig, Brain, DollarSign } from "lucide-react";
import React, { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "@/app/context/AuthContext";
import {motion} from "motion/react";
const RightSide = ({ Price, name, price }: { Price?: React.ReactNode, name?:string, price?:number }) => {
  // if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  //   throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
  //}
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
  );
  const { user, loading, googleSignIn } = useAuth();
  interface purchaseType {
    id: string;
    packageName: string;
  }
  const [purchases, setPurchases] = useState<purchaseType[]>([]);
  useEffect(() => {
    if (user?.email) {
      const getUserPurchases = async () => {
        try {
          const purchasesSnapshot = await getDocs(
            collection(db, "userPaymentInfo", user.email ?? "", "purchases")
          );

          const allPurchases = purchasesSnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              packageName: data.packageName ?? "",
            };
          });

          setPurchases(allPurchases);
        } catch (err) {
          console.error("Error fetching user purchases:", err);
        }
      };

      getUserPurchases();
    }
  }, [user]);

  const [shouldCheckout, setShouldCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState<{
    price: number | string;
    name: string;
  } | null>(null);

  useEffect(() => {
    if (user && shouldCheckout && checkoutData) {
      handleCheckout(checkoutData.price, checkoutData.name);
      setShouldCheckout(false); // reset
      setCheckoutData(null);
    }
  }, [user, shouldCheckout, checkoutData]);

  const handleCheckout = async (price: string | number, name: string) => {
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        name: user?.displayName,
        price: price,
        packageName: name,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", errorText);
      alert(`Error: ${errorText}`);
      return;
    }

    const { id } = await response.json();

    if (!stripe) {
      alert("Stripe failed to load.");
      return;
    }

    const { error } = await stripe.redirectToCheckout({ sessionId: id });

    if (error) alert(error.message);
  };

  const handleSigninOrCheckout = (price: number | string, name: string) => {
    if (!user) {
      setShouldCheckout(true);
      setCheckoutData({ price, name });
      googleSignIn(); // assumed async internally
    } else {
      handleCheckout(price, name);
    }
  };
  return (
    <aside className="bg-teal-800 w-full lg:sticky left-0 top-20  border-r rounded-md border-gray-200 p-6 space-y-6">
      <nav className="text-dimondra-white text-sm ">
        <h1 className="text-xl font-dmSans font-[700] tracking-tight">
          HRCI Certification Preparation Course Package
        </h1>
        <p className="font-[600] font-quicksand pb-4 mt-1">
          Prepare to earn your globally recognized HRCI certification with our
          comprehensive, instructor-led training designed to set you up for
          success.
        </p>

        <hr className="border-[.04px] border-teal-50" />

        <div className="py-4">
          <h2 className="text-lg font-dmSans font-[600] mb-1">
            Course Highlights:
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              32 Hours of Virtual Live Classes via Zoom
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              Weekend Sessions for maximum flexibility
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              Interactive Learning Environment with HR experts
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              Led by a Certified HRCI Instructor with real-world HR expertise
            </li>
          </ul>
        </div>
        <hr className="border-[.04px] border-teal-50" />
        <div className="pt-4">
          <h2 className="text-lg mb-1">Package Includes:</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div>
                <Book className="size-[16px] mt-[2px]" />
              </div>
              Comprehensive Study Materials aligned with the latest HRCI exam
              content
            </li>
            <li className="flex items-start gap-2">
              <div>
                <LibraryBig className="size-[16px] mt-[2px]" />
              </div>
              Access to 500+ Practice Questions in our Exam Bank (Unlimited
              Access)
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Brain className="size-[16px] mt-[2px]" />
              </div>
              Case-Based Discussions & Practice Scenarios
            </li>

            {Price ? (
              <li className="flex items-center gap-2">
                <p className="flex justify-between items-center w-full bg-slate-100 px-3 py-2 rounded">
                  <span className="whitespace-nowrap flex items-center gap-2 text-slate-950">
                    <DollarSign className="size-[16px] " /> Package Price
                  </span>
                  <span className="flex items-center justify-end border-l border-slate-500 pl-4">
                    {Price}
                  </span>
                </p>
              </li>
            ) : null}
            {price && name ? (
              <li className="mt-3">
                 {purchases.some(
                  (purchase) =>
                    purchase?.packageName?.toLowerCase() ===
                    name.toLowerCase()
                ) ? (
                  <motion.button
                    disabled
                 
                    className="w-full !bg-dimondra-black !text-[#ffffff] font-rubik border py-[.6rem] flex items-center justify-center gap-2 rounded-xl border-slate-700/10"
                  >
                    Already Subscribed
                  </motion.button>
                ) : (
                    <button
                  onClick={() => handleSigninOrCheckout(price, name)}
                  className="w-full px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-lg hover:scale-[1.03] transition-transform duration-300"
                >
                  Subscribe Now
                </button>
                )}
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default RightSide;
