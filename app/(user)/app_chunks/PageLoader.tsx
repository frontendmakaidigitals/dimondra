"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CubeLoader from "./Loading";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200); // artificial delay
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen z-50 bg-white backdrop-blur-sm flex items-center justify-center">
      <div>
        <CubeLoader />
      </div>
    </div>
  );
}
