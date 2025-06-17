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
  Cpu
} from "lucide-react";

const sectors = [
  {
    title: "Banking & Financial Services",
    description:
      "The financial sector is undergoing rapid change, requiring skilled professionals in areas like banking operations, wealth management, risk & compliance, and fintech solutions.",
    linkText: "Learn more →",
    icon: Banknote,
  },
  {
    title: "Construction & Engineering",
    description:
      "We support major infrastructure, construction, and engineering projects by supplying skilled talent that drives progress and supports urban development across the region.",
    linkText: "Learn more →",
    icon: Hammer,
  },
  {
    title: "Corporate Services",
    description:
      "Our team specializes in placing top-tier talent across finance, HR, legal, strategy, and executive support roles—ensuring your core functions run seamlessly.",
    linkText: "Learn more →",
    icon: Briefcase,
  },
  {
    title: "Commercial & Sales",
    description:
      "Dimondra supports businesses by placing result-driven professionals in sales, account management, business development, and customer service to boost commercial growth.",
    linkText: "Learn more →",
    icon: ShoppingCart,
  },
  {
    title: "Hospitality, Retail & Events",
    description:
      "With deep roots in the region’s vibrant service sectors, we provide tailored staffing solutions for hotels, restaurants, retail chains, and live event operations.",
    linkText: "Learn more →",
    icon: Hotel,
  },
  {
    title: "Pharmaceutical & Healthcare",
    description:
      "Our healthcare and life sciences recruitment team connects providers with top professionals in clinical, regulatory, research, and pharmaceutical fields.",
    linkText: "Learn more →",
    icon: Stethoscope,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "We provide end-to-end recruitment solutions for logistics, warehousing, procurement, and distribution—helping businesses streamline operations and meet global demands.",
    linkText: "Learn more →",
    icon: Truck,
  },
  {
    title: "Technology & Digital",
    description:
      "Dimondra helps businesses stay ahead in the digital age by sourcing talent across software development, cybersecurity, data analytics, cloud solutions, and emerging tech, powering innovation and digital transformation. ",
    linkText: "Learn more →",
    icon: Cpu,
  },
];

const Sector = () => {
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
  });

  const sectorRef = useRef<HTMLDivElement>(null);
  const inView = useElementInViewport(sectorRef, "center", true);
  return (
    <div className="py-20 relative">
      <img
        src={"sector.jpg"}
        alt={"sector bg"}
        className="w-full absolute inset-0 h-full object-cover"
      />
      <div className="container  relative mx-auto px-4">
        <div className="max-w-2xl sectorTrigger">
          {" "}
          <h1 className="text-5xl sectorText leading-[5.3rem] mt-1 text-start font-[600] text-dimondra-white">
            Sectors
          </h1>
          <p className="text-slate-50 sectorPara">
            From technology to logistics, construction to finance, Dimondra
            delivers strategic recruitment and workforce solutions across a wide
            array of industries. We understand the unique demands of each sector
            and tailor our approach to meet the evolving needs of our clients.
            Here&nbsp;s a glimpse into some of the industries where Dimondra
            excels:
          </p>
        </div>
        <div
          ref={sectorRef}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-14"
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                animate={{ scale: inView ? 1 : 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.06,
                  type: "spring",
                }}
                whileHover={{ borderColor: "#14b8a6" }}
                key={index}
                className="flex relative  flex-col justify-between p-3 rounded-lg border border-slate-50/0  items-center text-center"
              >
                <div className="flex flex-col items-center">
                  <Icon className="w-16 h-16 text-teal-500 mb-4" />
                  <h2 className="text-xl text-slate-50 font-semibold">
                    {sector.title}
                  </h2>
                </div>
                <p className="text-slate-50 mt-3">{sector.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sector;
