"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap/all";
import clsx from "clsx";
import { useIsLoaded } from "../context/isLoaded";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pageContext } = useIsLoaded();

  const [count, setCount] = useState(0);

  useEffect(() => {
    const obj = { val: 0 };
    CustomEase.create("countEase", "0.86, 0, 0.07, 1");
    gsap.to(obj, {
      val: 100,
      duration: 1.7,
      ease: "countEase",
      onUpdate: () => {
        setCount(Math.round(obj.val));
      },
    });
  }, []);

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

  const buttonRef = useRef<HTMLButtonElement>(null);
  pageContext;
  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    gsap.set(button, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      width: "14rem",
      height: "14rem",
      fontSize: "4rem",
    });
    CustomEase.create("customEaseIn", "0, 1.1, 0.68, 0.98");
    gsap.to(button, {
      width: "unset",
      height: "unset",
      top: "unset",
      left: "unset",
      bottom: "2rem",
      right: "2rem",
      xPercent: "unste",
      yPercent: "unset",
      duration: 1.1,
      ease: "customEaseIn",
      position: "fixed",
      delay: 2.4,
      fontSize: "1rem",
      padding: "1rem",
    });
  }, []);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (count === 100) {
      const timer = setTimeout(() => {
        setShowArrow(true);
      }, 850);

      return () => clearTimeout(timer); // cleanup
    }
  }, [count]);

  const showButtonIcon = () => {
    if (showArrow) {
      return (
        <div>
          <motion.div
            animate={{ rotate: isVisible ? "0deg" : "180deg" }}
            transition={{ duration: 0.6, ease: [0.19, 1.2, 0.4, 1] }}
            className="inline-block"
          >
            <ArrowUp className={`inline-block size-5 `} />
          </motion.div>
          {isVisible ? "Top" : null}
        </div>
      );
    } else {
      return count;
    }
  };
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;
  return (
    <>
      <button
        ref={buttonRef}
        onClick={isVisible ? scrollToTop : scrollToBottom}
        className={clsx(
          showArrow
            ? `z-[999] border border-slate-100/20 text-slate-700 bg-blue-100/30 backdrop-filter backdrop-blur-xl rounded-full shadow-lg`
            : "text-black z-[999]"
        )}
      >
        {showButtonIcon()}
        {showArrow ? null : (
          <svg
            className="radial-progress absolute inset-0 w-full h-full rotate-90 "
            viewBox="0 0 100 100"
          >
            <circle
              className="bg fill-none "
              style={{ strokeWidth: 1 }}
              cx="50"
              cy="50"
              r="45"
            />
            <circle
              style={{
                stroke: "#0f172a",
                strokeLinecap: "round",
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                strokeWidth: 1,
              }}
              className="progress  fill-none  "
              cx="50"
              cy="50"
              r="45"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default Backtotop;
