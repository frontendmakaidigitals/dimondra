"use client";
import React, { useRef } from "react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import { motion } from "motion/react";
import { useElementInViewport } from "../app_chunks/ImageAnimationLayer";
import {
  Banknote,
  Hammer,
  Briefcase,
  ShoppingCart,
  Hotel,
  Stethoscope,
  Truck,
  Cpu,
} from "lucide-react";

const sectors = [
  {
    title: "Banking & Financial Services",
    description:
      "The financial sector is undergoing rapid change, requiring skilled professionals in areas like banking operations, wealth management, risk & compliance, and fintech solutions.",
    icon: Banknote,
  },
  {
    title: "Construction & Engineering",
    description:
      "We support major infrastructure, construction, and engineering projects by supplying skilled talent that drives progress and supports urban development across the region.",
    icon: Hammer,
  },
  {
    title: "Corporate Services",
    description:
      "We place top-tier talent across finance, HR, legal, strategy, and executive roles—ensuring your core functions run seamlessly.",
    icon: Briefcase,
  },
  {
    title: "Commercial & Sales",
    description:
      "We support growth by placing professionals in sales, business development, and customer success roles.",
    icon: ShoppingCart,
  },
  {
    title: "Hospitality, Retail & Events",
    description:
      "We provide staffing solutions for hotels, restaurants, retail chains, and live event operations.",
    icon: Hotel,
  },
  {
    title: "Pharmaceutical & Healthcare",
    description:
      "We connect providers with top professionals in clinical, regulatory, research, and pharmaceutical fields.",
    icon: Stethoscope,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "We offer recruitment for logistics, procurement, and warehousing to support global supply chains.",
    icon: Truck,
  },
  {
    title: "Technology & Digital",
    description:
      "We source talent for software, cybersecurity, data, cloud, and emerging technologies.",
    icon: Cpu,
  },
];

const Sector = () => {
  const sectorRef = useRef<HTMLDivElement>(null);
  const inView = useElementInViewport(sectorRef, "center", true);

  useSplitText({
    selector: ".sectorText",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".sectorTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });

  useSplitText({
    selector: ".sectorPara",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".sectorTrigger",
    type: "words, lines",
    linesClass: "line-wrapper++",
    delay: 1,
  });

  return (
    <div className="py-20 relative bg-teal-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl sectorTrigger mx-auto lg:mx-0">
          <h1 className="text-5xl lg:text-6xl sectorText font-dmSans tracking-tighter leading-[4.5rem] mt-1 text-center lg:text-start font-[600] text-dimondra-white">
            Sectors
          </h1>
          <p className="text-slate-50 sectorPara text-center font-quicksand font-[600] mt-4 lg:text-start">
            From technology to logistics, construction to finance — Dimondra
            delivers strategic workforce solutions across industries. Here&apos;s
            where we shine:
          </p>
        </div>

        {/* Cards */}
        <div
          ref={sectorRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={index}
                animate={{
                  scale: inView ? 1 : 0.95,
                  opacity: inView ? 1 : 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.25, 0.8, 0.25, 1],
                  },
                }}
                whileHover={{ y: -8, borderColor: "#14b8a6" }}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <Icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold font-dmSans text-white">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-slate-100 mt-2 font-quicksand font-medium">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sector;
