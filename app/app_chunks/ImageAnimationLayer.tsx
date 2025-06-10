"use client";
import React from "react";
type TriggerPosition = "top" | "center" | "bottom";

export function useElementInViewport(
  ref: React.RefObject<HTMLElement>,
  trigger: TriggerPosition = "center",
  once = true
) {
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const checkInView = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      let isVisible = false;

      if (trigger === "top") {
        isVisible = rect.top <= vh && rect.bottom >= 0;
      } else if (trigger === "center") {
        const center = vh / 2;
        isVisible = rect.top <= center && rect.bottom >= center;
      } else if (trigger === "bottom") {
        isVisible = rect.bottom <= vh && rect.bottom >= 0;
      }

      if (isVisible) {
        setInView(true);
        if (once) window.removeEventListener("scroll", checkInView);
      } else if (!once) {
        setInView(false);
      }
    };

    window.addEventListener("scroll", checkInView, { passive: true });
    checkInView(); // initial check

    return () => window.removeEventListener("scroll", checkInView);
  }, [ref, trigger, once]);

  return inView;
}
