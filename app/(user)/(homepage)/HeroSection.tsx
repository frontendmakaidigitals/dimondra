"use client";
import React, { useState } from "react";
import BgLayer from "../app_chunks/BgLayer";
import { motion } from "motion/react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import "@/styles/globals.css";
import { Briefcase, Globe, Headphones } from "lucide-react";
import PopForm from "../app_chunks/PopFrom";
const HeroSection = () => {
  const stats = [
    {
      title: "Backed by 20+ Years of Industry Expertise",
      description:
        "Our leadership team brings decades of hands-on experience across HR, BPO, operations, and strategic advisory.",
      icon: Briefcase,
    },
    {
      title: "Built for Global-Standard Service Delivery",
      description:
        "Dimondra is founded on best practices gained from serving multinational environments, ensuring readiness for clients across regions.",
      icon: Globe,
    },
    {
      title: "Committed to Future 24/7 Support Capability",
      description:
        "Our scalable model is designed to evolve into full-time global service coverage as we grow.",
      icon: Headphones,
    },
  ];
  useSplitText({
    selector: ".spanText",
    duration: 0.8,
    y: -80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".trigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
    delay: 1,
  });
  useSplitText({
    selector: ".heroText",
    duration: 1,
    y: 500,
    stagger: 0.01,
    type: "chars, lines",
    linesClass: "line-wrapper++",
    delay: 1.2,
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[90dvh] lg:h-[110vh] relative w-full trigger">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="absolute w-full h-full overflow-hidden inset-0">
        {" "}
        <motion.video
          initial={{ scale: 1.7 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 1.4, ease: "circOut" }}
          className="w-full h-full object-cover lg:object-top object-right "
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={"/media/homepage/hero/heroBg.mp4"} />
        </motion.video>
      </div>

      <BgLayer color="bg-slate-900/50" />
      <div className="relative z-20 container w-full h-full flex justify-center items-center flex-col">
        <h3 className="text-dimondra-white overflow-hidden spanText font-semibold">
          #1 in the Market: Dimondra
        </h3>
        <h1 className="max-w-4xl font-dmSans heroText leading-[2.4rem] lg:leading-[5.2rem] tracking-tight text-dimondra-white/80 text-center text-3xl lg:text-7xl font-[700] ">
          Empowering <span className="text-dimondra-teal">Businesses</span>,
          Enabling People.
        </h1>

        <motion.h3
          initial={{ filter: "blur(5px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1.7 }}
          className="text-dimondra-white max-w-3xl text-center text-xs lg:text-sm px-3 py-2  rounded-lg font-semibold mt-5 bg-slate-50/40  backdrop-blur-md backdrop-filter"
        >
          Comprehensive Back Office Solutions with Offshoring, Virtual Support,
          HR Excellence, Strategic Consulting, and Business Growth.
        </motion.h3>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
        >
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-3 text-sm transition-all duration-200 text-dimondra-white border-dimondra-gray/70  hover:bg-dimondra-tealDark hover:border-slate-50/0  border rounded-xl mt-6"
          >
            Book a Free Consultation
          </button>
        </motion.div>
      </div>
      <div className="absolute container -bottom-[105%] lg:bottom-0 z-20 left-1/2 -translate-x-1/2 lg:translate-y-1/2 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {stats.map(({ title, description, icon }, idx) => {
          const Icon = icon;
          return (
            <motion.div
              key={idx}
              className={`bg-slate-50 rounded-xl p-5 border border-slate-400/20 shadow-lg`}
              initial={{ y: "200px" }}
              whileInView={{
                y: "0px",
                rotate: ["5deg", "0deg"],
                transition: {
                  ease: [0.165, 0.84, 0.44, 1],
                  duration: 0.5,
                  delay: idx * 0.055,
                },
              }}
              whileHover={{
                x: [0, -5, 5, -5, 5, 0],
                y: [0, -2, 2, -2, 2, 0],
                transition: {
                  duration: 0.6,
                  ease: [0.19, 1, 0.22, 1],
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Icon className="size-[52px] text-dimondra-teal" />
              <div className="mt-3">
                <span className="text-lg font-[700] font-sans">{title}</span>
                <span className="inline-block text-sm mt-2">{description}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
