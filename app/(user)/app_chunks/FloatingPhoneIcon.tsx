"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import PopForm from "./PopFrom";
const FloatingPhoneIcon = () => {
  const number = "+971562787553";
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      animate={{ bottom: isVisible ? "95px" : "25px" }}
      className="fixed  right-12 z-50 group"
    >
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(true)} className="relative w-12 h-12">
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
      </button>
    </motion.div>
  );
};

export default FloatingPhoneIcon;
