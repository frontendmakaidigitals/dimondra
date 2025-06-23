"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "15+", label: "Countries of Operation" },
    { value: "28", label: "Languages Supported" },
    { value: "100+", label: "Businesses Served" },
    { value: "99%", label: "Client Retention Rate" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".stat-card");

    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="py-16" ref={containerRef}>
      <h1 className="text-5xl font-dmSans tracking-tighter text-center font-[600] text-dimondra-black container mb-10">
        By the Numbers in Dimondra
      </h1>
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-200 rounded-lg p-5 stat-card">
            <h2 className="text-5xl font-rubik text-center font-[500] text-dimondra-tealDark">
              {stat.value}
            </h2>
            <p className="text-dimondra-dark mt-2 text-center font-quicksand font-[600]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
