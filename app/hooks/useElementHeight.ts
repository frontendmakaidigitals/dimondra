"use client";
import { useEffect, useRef, useState } from "react";

type SelectorType = { className?: string; id?: string };

const useElementHeight = <T extends HTMLElement>(selector?: SelectorType) => {
  const internalRef = useRef<T | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let element: T | null = null;

    if (selector?.className) {
      element = document.querySelector<T>(`.${selector.className}`);
    } else if (selector?.id) {
      element = document.getElementById(selector.id) as T | null;
    } else if (internalRef.current) {
      element = internalRef.current;
    }

    if (!element) return;

    const updateHeight = () => {
      setHeight(element?.clientHeight ?? 0);
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    updateHeight();

    return () => observer.disconnect();
  }, [selector?.className, selector?.id]);

  return {
    ref: selector ? null : internalRef,
    height,
  };
};

export default useElementHeight;
