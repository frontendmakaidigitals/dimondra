"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useIsLoaded } from "./context/isLoaded";
import useElementHeight from "./hooks/useElementHeight";

const Loader = () => {
  const { setPageContext, pageContext } = useIsLoaded();
  const { height } = useElementHeight({ className: "navMenu" });
  useEffect(() => {
    const handleLoad = () =>
      setPageContext((prev) => ({
        ...prev,
        pageLoad: true,
      }));
    if (document.readyState === "complete") {
      setPageContext((prev) => ({
        ...prev,
        pageLoad: true,
      }));
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (pageContext.pageLoad) {
      gsap.to(".window", {
        height: height,
        duration: 2.2,
        ease: "power4.inOut",
        delay: 0.5,
        onComplete: () =>
          setPageContext((prev) => ({ ...prev, loadingAnimation: true })),
      });
    }
  }, [pageContext.pageLoad, height]);

  if (pageContext.loadingAnimation) return null;
  return (
    <div className={clsx("fixed inset-0 z-[99] w-screen h-screen")}>
      <div className={clsx(`w-full h-full bg-white window origin-top`)} />
    </div>
  );
};

export default Loader;
