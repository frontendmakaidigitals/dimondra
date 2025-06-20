"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { Suspense, useState, useEffect } from "react";
import CubeLoader from "./Loading";
const PageLoader = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Loader />
    </Suspense>
  );
};

export default PageLoader;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState !== "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", handleLoad);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed flex justify-center items-center overflow-hidden inset-0 bg-white z-[99999] w-screen h-screen">
          <div>
            <CubeLoader />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
