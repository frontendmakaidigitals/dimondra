"use client";
import { Globe, Users } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useElementInViewport } from "../app_chunks/ImageAnimationLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import PopForm from "../app_chunks/PopFrom";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-teal-800 pt-[55rem] lg:pt-52 pb-12">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-12 ">
        <div
          ref={ref}
          className="h-[350px] lg:h-[570px] relative overflow-hidden"
        >
          <svg
            className="absolute top-0 left-0 w-full h-full  pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="wavy1">
                <feTurbulence
                  x="0"
                  y="0"
                  baseFrequency="0.2"
                  numOctaves="5"
                  seed="4"
                />
                <feDisplacementMap in="SourceGraphic" scale="10" />
              </filter>
            </defs>

            {/* Wavy border shape */}
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              stroke="white"
              strokeWidth="10"
              filter="url(#wavy1)"
            />
          </svg>
          <motion.div className="w-full h-full">
            {/* SVG filter and border layer */}

            {/* Normal image without filter */}
            <img
              className="w-full h-full object-cover"
              src="/media/homepage/aboutHero.webp"
              alt=""
            />
          </motion.div>
        </div>
        <div className="Abouttrigger text-dimondra-white">
          <h2 className="text-5xl tracking-tighter font-dmSans leading-[3.4rem] aboutText font-[600] mt-3">
            Helping Your Business Grow. Helping Your People Thrive
          </h2>
          <p className="mt-5 font-quicksand font-[500] text-dimondra-white/80">
            At Dimondra, we do more than just outsourcing; we partner with
            businesses to build smarter, stronger, and more efficient
            operations. With a deep understanding of what organizations need, we
            deliver tailored solutions across HR, recruitment, administration,
            IT, legal, marketing, and government relations. Our mission is
            simple: to support your growth while enabling your people to thrive.
            Whether you&apos;re scaling up, entering a new market, or
            streamlining operations, Dimondra offers a one-stop hub for
            integrated business support. We combine global expertise with local
            insight to help you grow compliantly, confidently, and
            competitively.
          </p>
          <div className="mt-5">
            <div className="flex items-start gap-4">
              {/* Left: Icon */}
              <div className="text-slate-50 mt-1">
                <Globe className="w-6 h-6" />
                {/* Replace with your actual icon */}
              </div>

              {/* Right: Heading + Description */}
              <div>
                <h3 className="text-lg font-dmSans font-semibold text-dimondra-white">
                  Global Capability, Local Focus
                </h3>
                <p className="text-sm text-dimondra-white/80 font-quicksand font-[600]">
                  Serving clients across the UAE, GCC, and beyond with
                  region-specific insights
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-start gap-4">
              {/* Left: Icon */}
              <div className="text-slate-50 mt-1">
                <Users className="w-6 h-6" />
                {/* Replace with your actual icon */}
              </div>

              {/* Right: Heading + Description */}
              <div>
                <h3 className="text-lg font-semibold text-dimondra-white font-dmSans">
                  Experienced Specialists
                </h3>
                <p className="text-sm text-dimondra-white/80 font-quicksand font-[600]">
                  A team of trusted experts bringing deep industry knowledge and
                  hands-on experience
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-[.6rem] text-sm font-quicksand font-[600] bg-dimondra-black hover:bg-dimondra-teal text-dimondra-white rounded-xl mt-7"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
