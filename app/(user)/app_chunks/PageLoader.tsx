"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
const MotionImage = motion(Image);
const PageLoader = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Loader />
  </Suspense>
);

export default PageLoader;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [isHardRefresh, setIsHardRefresh] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true); // Ensure we're on the client

    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const isHard = navEntry?.type === "reload" || navEntry?.type === "navigate";
    setIsHardRefresh(isHard);

    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!isMounted) return null; // Avoid SSR hydration mismatch
  return (
    <AnimatePresence mode="wait">
      {isLoading &&
        (isHardRefresh ? (
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
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Logo with motion animation */}
              <motion.div
                className="relative w-28 h-28"
                animate={{
                  rotate: [0, -2, 2, -1, 1, 0],
                  x: [0, -2, 2, -1, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MotionImage
                  src="/Logo/Logoicon.webp"
                  alt="Dimondra Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Shimmer slider below the image */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "5px",
                  width: "80px",
                  borderRadius: "2.5px",
                  overflow: "hidden",
                  transform: "translate3d(0, 0, 0)",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "black",
                    borderRadius: "2.5px",
                    animation: "zoom 1.4s ease-in-out infinite",
                  }}
                />
                <style>{`
        @keyframes zoom {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
              </div>
            </div>
          </div>
        ))}
    </AnimatePresence>
  );
};
