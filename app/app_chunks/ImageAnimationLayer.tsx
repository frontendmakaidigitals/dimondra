"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function useBottomHitsViewportCenter(
  ref: React.RefObject<HTMLElement>,
  once = true
) {
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const rect = ref.current!.getBoundingClientRect();
      const viewportCenter = window.innerHeight;
      const isAtCenter = rect.bottom <= viewportCenter;

      if (isAtCenter) {
        setInView(true);
        if (once) window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, once]);

  return inView;
}

const ImageAnimationLayer = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useBottomHitsViewportCenter(ref, true);

  return (
    <motion.div
      ref={ref}
      animate={{ height: inView ? "0%" : "100%" }}
      initial={{ height: "100%" }}
      transition={{ duration: 1.6, ease: [0.19, 1, 0.22, 1] }}
      className={clsx("absolute inset-0 w-full bg-teal-50")}
    />
  );
};

export default ImageAnimationLayer;
