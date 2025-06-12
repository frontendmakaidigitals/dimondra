"use client";
import React, { useRef } from "react";
import { useSplitText } from "../hooks/useSplitTExt";
import { motion } from "motion/react";
import {
  PiggyBank,
  Hammer,
  BriefcaseBusiness,
  Handshake,
  Wine,
  Truck,
  Stethoscope,
} from "lucide-react";
import { useElementInViewport } from "../app_chunks/ImageAnimationLayer";

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
  const sectors = [
    {
      title: "Banking",
      icon: PiggyBank,
    },
    {
      title: "Construction and Engineering",
      icon: Hammer,
    },
    {
      title: "Corporate",
      icon: BriefcaseBusiness,
    },
    {
      title: "Commercial and Sales",
      icon: Handshake,
    },
    {
      title: "Hospitality, Retail and Events",
      icon: Wine,
    },
    {
      title: "Logistics",
      icon: Truck,
    },
    {
      title: "Pharmaceutical and Healthcare",
      icon: Stethoscope,
    },
  ];
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint
            cumque illo optio enim sit, dicta repellendus atque et iste ipsa
            facilis tempore deleniti esse, vero mollitia, inventore consequuntur
            magnam.
          </p>
        </div>
        <div
          ref={sectorRef}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10"
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
                  <h2 className="text-xl text-slate-50 font-semibold serviceText">
                    {sector.title}
                  </h2>
                </div>
                <p className="text-slate-50 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta quasi officiis aut illum.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sector;
