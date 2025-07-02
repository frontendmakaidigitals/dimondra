"use client";
import BgLayer from "../../app_chunks/BgLayer";
import React, { useState } from "react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import { motion } from "motion/react";
import PopForm from "../../app_chunks/PopFrom";
const HeroSection = () => {
  useSplitText({
    selector: ".aboutHead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    delay: 1.2,
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".aboutText",
    duration: 1,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    type: "chars, lines",
    linesClass: "line-wrapper++",
    delay: 1.6,
  });
  useSplitText({
    selector: ".aboutPara",
    duration: 1,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    type: "words, lines",
    linesClass: "line-wrapper++",
    delay: 2,
  });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: {
      duration: 0.5,
      ease: [0.86, 0, 0.07, 1],
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-[95vh]  w-full">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 w-full bg-white gap-x-1 overflow-hidden h-full grid grid-cols-1 lg:grid-cols-3"
      >
        <motion.div variants={item} className="w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"Hero 1"}
          />
        </motion.div>
        <motion.div variants={item} className="w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1709715357479-591f9971fb05?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"Hero 2"}
          />
        </motion.div>
        <motion.div variants={item} className="w-full h-full overflow-hidden">
          {" "}
          <img
            alt={"Hero 3"}
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1541726260-e6b6a6a08b27?q=80&w=2959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </motion.div>
      </motion.div>
      <BgLayer color="bg-slate-950/50" />
      <div className="w-full relative z-10  container h-full flex flex-col items-center justify-center">
        {" "}
        <div className=" text-slate-50 w-full flex flex-col items-center justify-center ">
          <p className="aboutHead px-2 flex items-center gap-2 text-xs text-white rounded-md">
            About Us
          </p>
          <h1 className="text-4xl lg:text-6xl text-dimondra-white/75 font-dmSans text-center tracking-tight font-[600] leading-[2.4rem] lg:leading-[4.3rem] aboutText max-w-3xl mt-2">
            Simplifying Business with Expert Support Services
          </h1>
          <p className="max-w-3xl mt-3 text-center font-quicksand font-[600] aboutPara">
            Dimondra is a multi-service business support company that provides
            solutions across HR, IT, digital, legal, and strategic
            operations.{" "}
          </p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.86, 0, 0.07, 1], delay: 1.2 }}
            onClick={()=>setIsOpen(true)}
            className="group relative mt-4 inline-flex h-10 text-sm items-center justify-center overflow-hidden bg-dimondra-teal border rounded-md font-medium"
          >
            <div className="inline-flex h-10 translate-y-0 items-center justify-center px-4  bg-gradient-to-r text-slate-50 transition duration-500 group-hover:-translate-y-[150%]">
              Book a free consultation
            </div>
            <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="absolute h-full w-full translate-y-full skew-y-11 scale-y-0 bg-dimondra-tealDark  transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
              <span className="z-10">Book a free consultation</span>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
