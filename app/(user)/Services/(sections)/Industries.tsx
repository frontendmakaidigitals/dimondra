"use client";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import React from "react";

interface IndustryProps {
  title: string;
  description: string;
  imgUrl: string;
}

export default function IndustriesSection({
  data,
  heading,
}: {
  data: IndustryProps[];
  heading: string;
}) {
  useSplitText({
    selector: ".industryHead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".IndustryTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  return (
    <div className="py-24 bg-teal-800">
      <div className="container IndustryTrigger">
        <h1 className="text-6xl industryHead text-center font-dmSans tracking-tighter text-dimondra-white/75 font-[500]">
          {heading}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-12">
          {data.map((industry, i) => (
            <div
              key={i}
              className="bg-white/30 border border-white/10 backdrop-blur-lg backdrop-filter rounded-lg p-1 overflow-hidden"
            >
              <img
                src={industry.imgUrl}
                alt={industry.title}
                className="w-full h-[250px] rounded-md object-cover"
              />
              <div className="p-3 mt-1 text-dimondra-white ">
                <h3 className="text-xl font-semibold  mb-2 font-rubik">
                  {industry.title}
                </h3>
                <p className="text-sm text-dimondra-white font-quicksand font-[600]">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
