"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";

const PageLoader = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Loader />
  </Suspense>
);

export default PageLoader;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isHardRefresh, setIsHardRefresh] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true); // Ensure we're on the client

    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const isHard = navEntry?.type === "reload" || navEntry?.type === "navigate";
    setIsHardRefresh(isHard);

    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!isMounted) return null; // Avoid SSR hydration mismatch

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        isHardRefresh ? (
          <div className="fixed grid grid-cols-1 grid-rows-2 overflow-hidden inset-0 z-[99999] w-screen h-screen">
            <motion.div
              className="bg-white"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] }}
            />
            <motion.div
              className="bg-white"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] }}
            />
          </div>
        ) : (
          <div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              height="40"
              width="40"
              className="animate-spin"
            >
              <circle
                cx="20"
                cy="20"
                r="17.5"
                pathLength="100"
                strokeWidth="5px"
                fill="none"
                stroke="rgba(0, 0, 0, 0.1)"
              />
              <circle
                cx="20"
                cy="20"
                r="17.5"
                pathLength="100"
                strokeWidth="5px"
                fill="none"
                stroke="black"
                strokeDasharray="25, 75"
                strokeDashoffset="0"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )
      )}
    </AnimatePresence>
  );
};
