"use client";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import React from "react";

const industries = [
  {
    title: "Oil & Gas",
    image:
      "https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "We are the main oil and gas recruitment agency in UAE. Therefore, we offer top-notch services to fill out oil and gas jobs in UAE. Our division specializes in providing the best staff for a wide spectrum of oil & gas companies operating.",
  },
  {
    title: "Banking & Finance",
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Let our recruitment specialists in the financial and banking industries handle your hiring needs. Hence, our committed banking and financial services recruiting teams help businesses fill permanent positions with qualified candidates.",
  },
  {
    title: "IT, Technology and Engineering",
    image:
      "https://images.unsplash.com/photo-1611087889903-b4837b46857c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "For all of your IT-related hiring needs, we offer the best IT workforce consultancy services. It is critical to hire the best network engineers, system architects, programmers, analysts, and other professionals.",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "As a top healthcare recruitment agency, we locate competent physicians, nurses, and other health professionals who best meet your needs. Specialty healthcare consulting and staffing services are our area of expertise.",
  },
  {
    title: "Audit & Accounting",
    image:
      "https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?q=80&w=3141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "As a top accounting and finance recruitment agency, we will cover all your needs. Also, by taking care of all the hiring paperwork and setting up easy back-to-back screenings with your top finance and accounting candidates.",
  },
  {
    title: "Sales & Marketing",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "We will do everything in our power to give you an excellent staffing experience. From receiving CVs to fulfilling executive jobs in Dubai. Our extensive expertise & professionalism speak for themselves.",
  },
];

export default function IndustriesSection() {
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
        <h1 className="text-5xl industryHead text-center tracking-tighter text-dimondra-white font-[600]">
          Industries we serve
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-12">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="bg-white/50 border border-white/10 backdrop-blur-md backdrop-filter rounded-lg p-1 overflow-hidden"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-[250px] rounded-md object-cover"
              />
              <div className="p-3 mt-1 text-dimondra-black">
                <h3 className="text-xl font-semibold  mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-dimondra-white">
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
