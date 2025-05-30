"use client";
import React from "react";
import BgLayer from "../app_chunks/BgLayer";
import { motion } from "motion/react";
const HeroSection = () => {
  const stats = [
    { num: "24/7", label: "Global Support Coverage" },
    { num: "100+", label: "Clients Served Globally" },
    { num: "20+", label: "Years of Industry Experience" },
  ];
  return (
    <div className="h-[95vh] relative w-full">
      <img
        className="w-full h-full object-cover object-top absolute inset-0"
        src={"media/homepage/hero/heroBg.jpg"}
        alt={"hero Images"}
      />
      <BgLayer />
      <div className="relative z-10 w-full h-full flex justify-center items-center flex-col">
        <p className="text-dimondra-white font-semibold">
          #1 in the Market: Dimondra
        </p>
        <h1 className="max-w-4xl text-dimondra-white/80 text-center text-3xl lg:text-7xl font-[600] ">
          Empowering <span className="text-dimondra-teal">Businesses</span>,
          Enabling People.
        </h1>
        <h3 className="text-dimondra-dark text-sm px-3 py-1 bg-slate-100 rounded-lg font-medium mt-5">
          Expert support in HR, IT, operations, legal, and business strategy.
        </h3>
        <button className="px-5 py-3 text-sm transition-all duration-200 text-dimondra-white border-dimondra-gray/70  hover:bg-dimondra-tealDark hover:border-slate-50/0  border rounded-xl mt-6">
          Book a Free Consultation
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 grid grid-cols-3 gap-8 max-w-3xl w-full">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className={`bg-slate-50 p-5 border border-slate-400/20 rounded-xl shadow-lg`}
            whileInView={{ y: ["150px", "0px"], rotate: ["5deg", "0deg"] }}
            transition={{
              ease: [0.165, 0.84, 0.44, 1],
              duration: 0.4,
              delay: idx * 0.07,
            }}
            viewport={{ once: true }}
          >
            <span className="text-4xl font-[700] font-sans">{stat.num}</span>
            <span className="inline-block text-sm mt-2">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
