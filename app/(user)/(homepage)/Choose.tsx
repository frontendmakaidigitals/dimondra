"use client";
import React, { useEffect, useRef } from "react";
import {
  Layers,
  Users2,
  Settings2,
  Globe2,
  Headset,
  LineChart,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import BgLayer from "../app_chunks/BgLayer";
const highlights = [
  {
    title: "End-to-End Services",
    description: "Everything your business needs, under one roof.",
    icon: Layers,
  },
  {
    title: "Experienced Team",
    description: "Led by certified experts with the latest market insight.",
    icon: Users2,
  },
  {
    title: "Custom Solutions",
    description: "Expert support that fits your goals and industry.",
    icon: Settings2,
  },
  {
    title: "Global & Local Reach",
    description: "We blend international expertise with regional knowledge.",
    icon: Globe2,
  },
  {
    title: "Dedicated 24/7 Support",
    description: "We work as an extension of your team, not just a vendor.",
    icon: Headset,
  },
  {
    title: "Proven Results",
    description: "Track record of driving growth, efficiency, and impact.",
    icon: LineChart,
  },
];
gsap.registerPlugin(ScrollTrigger);
const Choose = () => {
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    numbersRef.current.forEach((el, i) => {
      if (!el) return;

      const tween = gsap.fromTo(
        el,
        { scale: 0, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          delay: i * 0.13,
          duration: 0.75,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  useSplitText({
    selector: ".chooseText",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".chooseTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });

  return (
    <div className="my-28">
      <div className="container chooseTrigger">
        <h1 className="text-6xl leading-[3.5rem] font-dmSans tracking-tighter chooseText mt-1 text-center  font-[600] text-dimondra-black">
          Why Choose <span className="text-dimondra-teal">Dimondra?</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-14 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className=" rounded-2xl relative pt-8 pb-6 px-5 overflow-hidden gap-5"
            >
              <BgLayer color="z-10 bg-black/50" />
              <img
                src={`/choose${index + 1}.jpg`}
                className="w-full h-full object-cover absolute inset-0"
                alt={""}
              />
              <span
                ref={(el) => {
                  numbersRef.current[index] = el;
                }}
                className="text-5xl relative z-10 font-[500] text-dimondra-white/70 font-rubik"
              >
                0{index + 1}
              </span>
              <div className="mt-3 relative z-10">
                <h4 className="text-2xl text-dimondra-white font-[600] font-dmSans tracking-tight">
                  {item.title}
                </h4>
                <p className=" text-dimondra-white/90 mt-2 font-quicksand font-[600]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
