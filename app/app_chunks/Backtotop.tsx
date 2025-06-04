"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";
const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToBottom = () => {
    window.scrollTo({ top: 950, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.button
          animate={{
            width: isVisible ? "5.5rem" : "3rem",
            height: isVisible ? "2.8rem" : "3rem",
          }}
          transition={{ duration: 0.6, ease: [0.19, 1.2, 0.4, 1] }}
          onClick={isVisible ? scrollToTop : scrollToBottom}
          className={clsx(
            `fixed overflow-hidden z-[999] border border-slate-100/20 origin-center bottom-6 right-6 text-slate-700 bg-purple-100/30 backdrop-filter backdrop-blur-xl   rounded-full shadow-lg transition-opacity duration-300 `
          )}
        >
          <motion.div
            animate={{ rotate: isVisible ? "0deg" : "180deg" }}
            transition={{ duration: 0.6, ease: [0.19, 1.2, 0.4, 1] }}
            className="inline-block"
          >
            <ArrowUp className={`inline-block size-5 `} />
          </motion.div>

          {isVisible ? "Top" : null}
        </motion.button>
      </AnimatePresence>
    </>
  );
};

export default Backtotop;
