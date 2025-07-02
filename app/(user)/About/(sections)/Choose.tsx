"use client";
import React, { useEffect, useRef } from "react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import {
  Users,
  Globe,
  Building2,
  ShieldCheck,
  MessageCircle,
  FileCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BgLayer from "../../app_chunks/BgLayer";

gsap.registerPlugin(ScrollTrigger);
const list = [
  {
    label: "One partner for HR, IT, admin, legal & strategy",
    icon: Users,
  },
  {
    label: "Deep market knowledge with personalized service",
    icon: Globe,
  },
  {
    label: "Solutions for all business sizes",
    icon: Building2,
  },
  {
    label: "Reliable support for local and international operations",
    icon: ShieldCheck,
  },
  {
    label: "Fast setup and clear communication.",
    icon: MessageCircle,
  },
  {
    label: "Compliance with all local regulations",
    icon: FileCheck,
  },
];
const Choose = () => {
  useSplitText({
    selector: ".chooseHead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".chooseTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".choosePara",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".chooseTrigger",
    type: "words, lines",
    linesClass: "line-wrapper++",
  });
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ulRef.current) {
      const items = ulRef.current.querySelectorAll("li");
      if (items) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: ulRef.current,
            start: "top 80%", // when 80% of viewport has reached ul
            toggleActions: "play none none none", // play only once
          },
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }
  }, []);
  return (
    <div className="py-14 bg-teal-800">
      <div className="container grid chooseTrigger grid-cols-1  lg:grid-cols-[1fr_1fr] gap-6">
        <div className="w-full">
          <h1 className="text-[3.5rem] font-dmSans chooseHead text-dimondra-white font-[600] tracking-tighter">
            Why Choose Dimondra?
          </h1>
          <p className="mt-1 choosePara font-quicksand font-[600] text-dimondra-white">
            At Dimondra, we make business easier. We offer all the support you
            need. HR, IT, admin, legal, and strategy — in one place. Our team
            understands your goals and works with you to achieve them.
            We&nbsp;re not just service providers, we&nbsp;re your trusted
            partners. Whether you&nbsp;re a small business or a growing company,
            our solutions are flexible, practical, and built to fit your needs.
            With us, you get clear communication, fast setup, and expert help
            every step of the way.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-rubik font-[600] tracking-tight text-dimondra-white">
              We make operations easier and more effective every step of the
              way.
            </h3>
            <ul ref={ulRef} className="mt-5 space-y-6">
              {list.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className=" flex items-start gap-3">
                    <div>
                      <div className="bg-dimondra-white rounded-sm">
                        <Icon className="size-[24px] p-1 text-teal-950 mt-[1px]" />
                      </div>
                    </div>
                    <span className="text-dimondra-white font-quicksand font-[500]">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="h-[400px] lg:h-[600px] w-full relative z-10">
          <BgLayer color={"bg-lime-300/30 blur-[12rem]"} />
          <div className=" absolute h-[350px] lg:h-[500px] top-5 left-0 w-[240px] lg:w-[280px] overflow-hidden rounded-[50px] lg:rounded-[90px]">
            <img
              src="https://images.unsplash.com/photo-1627397159237-d2acb7f500af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your local asset or URL
              alt="Team High Five"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute h-[400px] lg:h-[500px] top-28 right-0 w-[240px] lg:w-[280px] overflow-hidden rounded-[50px] lg:rounded-[90px] grayscale">
            <img
              src="https://images.unsplash.com/photo-1470608756445-2c9906b0680f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your local asset or URL
              alt="Designer Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
