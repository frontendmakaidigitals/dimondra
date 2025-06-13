"use client";
import { User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { useElementInViewport } from "../app_chunks/ImageAnimationLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
const About = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useElementInViewport(ref, "center");
  useSplitText({
    selector: ".aboutText",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".Abouttrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });

  return (
    <div className="bg-[#CDE8E5] pt-[55rem] lg:pt-52 pb-12">
      <div
        
        className="container grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-5 "
      >
        <div ref={ref} className="h-[350px] lg:h-[650px] relative overflow-hidden">
          <motion.div
            animate={{
              height: inView ? "100%" : "0%",
              scale: inView ? "1" : "2",
            }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="w-full"
          >
            <img
              className="w-full h-full object-cover"
              src={
                "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={`About us images`}
            />
          </motion.div>
        </div>
        <div className="Abouttrigger">
          <h2 className="text-5xl leading-[3.4rem] aboutText font-semibold mt-3">
            Helping Your Business Grow. Helping Your People Thrive
          </h2>
          <p className="mt-5">
            At Dimondra, we do more than just outsourcing — we partner with
            businesses to build smarter, stronger, and more efficient
            operations. With a deep understanding of what organizations truly
            need, we deliver tailored solutions across HR, recruitment,
            administration, IT, legal, marketing, and government relations. Our
            mission is simple: to support your growth while enabling your people
            to thrive. Whether you&nbsp;re scaling up, entering a new market, or
            streamlining your operations, Dimondra offers a one-stop hub for
            integrated business support services. We combine global expertise
            with local insight to help you grow the right way — compliantly,
            confidently, and competitively. We pride ourselves on being not just
            a vendor, but a true extension of your team— working alongside you
            to simplify the complex, reduce the operational load, and empower
            your leaders to focus on strategic priorities. From startups to
            large enterprises, from admin support to advisory — we are here to
            help you run better, hire smarter, and achieve more. Dimondra —
            Empowering Businesses. Enabling People
          </p>
          <div className="mt-5">
            <div className="flex items-start gap-4">
              {/* Left: Icon */}
              <div className="text-blue-600 mt-1">
                <User className="w-6 h-6" />
                {/* Replace with your actual icon */}
              </div>

              {/* Right: Heading + Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Global Capability, Local Focus
                </h3>
                <p className="text-sm text-gray-600">
                  Serving clients across the UAE, GCC, and beyond with
                  region-specific insights
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-start gap-4">
              {/* Left: Icon */}
              <div className="text-blue-600 mt-1">
                <User className="w-6 h-6" />
                {/* Replace with your actual icon */}
              </div>

              {/* Right: Heading + Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Experienced Specialists
                </h3>
                <p className="text-sm text-gray-600">
                  A team of trusted experts bringing deep industry knowledge and
                  hands-on experience
                </p>
              </div>
            </div>
          </div>
          <button className="px-5 py-[.7rem] bg-dimondra-tealDark hover:bg-dimondra-teal text-dimondra-white rounded-xl mt-7">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
