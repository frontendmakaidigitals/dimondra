"use client";
import React, { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

const Loading = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("name");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, [pathname, query]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Panels Animation */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-white"
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] }}
          />

          {/* Logo and shimmer animation */}
          <div className="relative flex flex-col items-center justify-center space-y-4 z-10">
            {/* Shimmer Bar */}
            <div className="relative h-[5px] w-[80px] rounded-[2.5px] overflow-hidden bg-black/10">
              <div className="absolute inset-0 bg-black animate-zoom rounded-[2.5px]" />
              <style>{`
                @keyframes zoom {
                  0% {
                    transform: translateX(-100%);
                  }
                  100% {
                    transform: translateX(100%);
                  }
                }
                .animate-zoom {
                  animation: zoom 1.4s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>f
        </motion.div>
      )}
    </AnimatePresence>
  );
};
