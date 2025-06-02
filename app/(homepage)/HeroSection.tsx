"use client";
import React from "react";
import BgLayer from "../app_chunks/BgLayer";
import { motion } from "motion/react";
import { useSplitText } from "../hooks/useSplitTExt";
import "@/styles/globals.css";
import { Briefcase, Globe, Headphones } from "lucide-react";
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
  });
  useSplitText({
    selector: ".heroText",
    duration: 1,
    y: 500,
    stagger: 0.01,
    type: "chars, lines",
    trigger: ".trigger",
    linesClass: "line-wrapper++",
  });
  return (
    <div className="h-screen relative w-full trigger">
      <img
        className="w-full h-full object-cover object-top absolute inset-0"
        src={"media/homepage/hero/heroBg.jpg"}
        alt={"hero Images"}
      />
      <BgLayer />
      <div className="relative z-10 w-full h-full flex justify-center items-center flex-col">
        <p className="text-dimondra-white overflow-hidden spanText font-semibold">
          #1 in the Market: Dimondra
        </p>
        <h1
          style={{ lineHeight: "5.2rem" }}
          className="max-w-4xl heroText tracking-tight text-dimondra-white/80 text-center text-3xl lg:text-7xl font-[600] "
        >
          Empowering <span className="text-dimondra-teal">Businesses</span>,
          Enabling People.
        </h1>
        <motion.h3
          initial={{ filter: "blur(5px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="text-dimondra-dark text-sm px-3 py-1 bg-slate-100 rounded-lg font-medium mt-5"
        >
          Expert support in HR, IT, operations, legal, and business strategy.
        </motion.h3>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
        >
          <button className="px-5 py-3 text-sm transition-all duration-200 text-dimondra-white border-dimondra-gray/70  hover:bg-dimondra-tealDark hover:border-slate-50/0  border rounded-xl mt-6">
            Book a Free Consultation
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 grid grid-cols-3 gap-8 max-w-5xl w-full">
        {stats.map(({ title, description, icon }, idx) => {
          const Icon = icon;
          return (
            <motion.div
              key={idx}
              className={`bg-slate-50 p-5 border border-slate-400/20 shadow-lg`}
              initial={{ y: "200px" }}
              whileInView={{ y: "0px", rotate: ["5deg", "0deg"] }}
              transition={{
                ease: [0.165, 0.84, 0.44, 1],
                duration: 0.7,
                delay: idx * 0.07,
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
