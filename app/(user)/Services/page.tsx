"use client";
import React from "react";
import BgLayer from "../app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
const Page = () => {
  useSplitText({
    selector: ".talentHead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".talentPara",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    type: "words, lines",
    linesClass: "line-wrapper++",
    delay: 0.5,
  });
  return (
    <div className="h-[85vh] relative">
      <BgLayer color={"bg-black/50 z-10 "} />
      <img
        className="absolute inset-0 object-top w-full h-full object-cover"
        src={
          "https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"Talent Acquisition"}
      />
      <div className="container tracking-tighter h-full flex flex-col items-center justify-center relative z-10 text-dimondra-white">
        <h2 className="text-5xl leading-[3.5rem] talentHead font-[600] text-center">
          Hire Right. Hire Smart. Hire Fast
        </h2>
        <p className="text-center talentPara max-w-4xl mt-2 text-slate-100">
          At Dimondra, we help you find, attract, and hire top talent that fits
          your business needs and company culture. Our Talent Acquisition
          solutions go beyond basic recruitment. We bring strategy, speed, and
          expertise to help you build high-performing teams at every level.
          Whether you're hiring for a few key roles or scaling up rapidly, we
          offer support that saves you time and ensures quality hires.
        </p>
        <button
          className="px-5 py-2 rounded-lg border border-dimondra-white transition-colors duration-200
         hover:border-dimondra-tealDark hover:bg-dimondra-tealDark mt-7"
        >
          Get a professional help
        </button>
      </div>
    </div>
  );
};

export default Page;
