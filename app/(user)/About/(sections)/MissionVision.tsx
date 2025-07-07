"use client";
import React, { useRef, useEffect } from "react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const MissionVision = () => {
  useSplitText({
    selector: ".missionhead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".missionTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".missionhead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".missionPara",
    type: "words, lines",
    linesClass: "line-wrapper++",
  });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".card");

      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // triggers as each card enters
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: index % 2 === 0 ? -200 : 200, // even index: from left, odd index: from right
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[10%]  from-teal-800 to-[90%] to-[#EEF7FF] py-20 px-4 md:px-8">
      <div className="max-w-6xl missionTrigger mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-dmSans tracking-tight missionhead text-center font-[600] text-dimondra-white mb-2">
            Our Mission & Vision
          </h2>
          <p className="text-slate-100 missionPara font-quicksand font-[600] max-w-2xl mx-auto">
            Helping businesses grow smarter and stronger with modern,
            people-first solutions.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="card p-6 bg-white/30 backdrop-filter backdrop-blur-md rounded-2xl shadow-sm border border-gray-200/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-dimondra-tealDark rounded" />
              <h3 className="text-3xl font-[400] font-rubik text-gray-800">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 mb-4 font-quicksand font-[600]">
              We help organizations work smarter, grow faster, and build
              stronger teams through expert-led services in HR, operations,
              digital, and strategic planning.
            </p>
          </div>

          {/* Vision */}
          <div className="card p-6 bg-white/30 backdrop-filter backdrop-blur-md rounded-2xl shadow-sm border border-gray-200/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-dimondra-tealDark rounded" />
              <h3 className="text-3xl font-[400] text-gray-800 font-rubik">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 mb-4 font-quicksand font-[600]">
              We aim to create a future where businesses of all sizes can
              operate efficiently and confidently, powered by the right support
              systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
