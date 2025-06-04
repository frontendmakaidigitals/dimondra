"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useIsLoaded } from "./context/isLoaded";
import useElementHeight from "./hooks/useElementHeight";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { setIsLoadingComplete, isLoadingComplete } = useIsLoaded();
  const { height } = useElementHeight({ className: "navMenu" });
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      // already loaded
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      gsap.to(".window", {
        height: height,
        duration: 2.2,
        ease: "power4.inOut",
        delay: 0.5,
        onComplete: () => setIsLoadingComplete(true),
      });
    }
  }, [isLoaded, height]);

  if (isLoadingComplete) return null;
  return (
    <div className={clsx("fixed inset-0 z-[99] w-screen h-screen")}>
      <div className={clsx(`w-full h-full bg-white window origin-top`)} />
    </div>
  );
};

export default Loader;
