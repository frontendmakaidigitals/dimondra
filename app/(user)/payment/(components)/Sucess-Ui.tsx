'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SuccessUi = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5); // Redirect after 5 seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <svg
        className="animate-spin h-10 w-10 text-blue-600 mb-4"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        />
      </svg>

      <h1 className="text-2xl font-bold text-green-600">✅ Payment Successful</h1>
      <p className="mt-2 text-gray-700">Thank you for your purchase!</p>
      <p className="mt-1 text-sm text-gray-500">
        Redirecting to homepage in <span className="font-medium">{seconds}</span> second{seconds !== 1 && 's'}...
      </p>
    </div>
  );
};

export default SuccessUi;
