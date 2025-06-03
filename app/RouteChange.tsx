// components/RouteLoader.tsx
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Loader from "./Loader";

const RouteLoader = () => {
  useEffect(() => {
    const handleStart = () => <Loader />;
    const handleStop = () => <Loader />;

    // Next.js 13+ (App Router): use global event listeners
    window.addEventListener("routeChangeStart", handleStart);
    window.addEventListener("routeChangeComplete", handleStop);
    window.addEventListener("routeChangeError", handleStop);

    return () => {
      window.removeEventListener("routeChangeStart", handleStart);
      window.removeEventListener("routeChangeComplete", handleStop);
      window.removeEventListener("routeChangeError", handleStop);
    };
  }, []);

  return null;
};

export default RouteLoader;
