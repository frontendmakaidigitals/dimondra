"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
const FloatingPhoneIcon = () => {
  const number = "+971562787553";

  return (
    <Link
      href={`https://wa.me/${number.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-12 z-50 group"
    >
      <div className="relative w-14 h-14">
        {/* Ripple effect */}
        <motion.span
          initial={{ x: "-50%", y: "-50%" }}
          animate={{
            scale: [1, 6],
            opacity: [0.8, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.8,
            ease: "easeInOut",
            repeatDelay: 0.2,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full"
        />

        {/* WhatsApp icon with hover scaling */}
        <div className="relative z-10 flex items-center justify-center w-full bg-slate-50 h-full  rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <img src="/phone-call.png" alt="WhatsApp" className="w-full h-full" />
        </div>
      </div>
    </Link>
  );
};

export default FloatingPhoneIcon;
