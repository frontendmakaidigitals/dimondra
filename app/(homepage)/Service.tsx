"use client";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import {
  Briefcase,
  Users,
  ClipboardList,
  MonitorSmartphone,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Service = () => {
  const imgAdd =
    "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0";

  const services = [
    {
      title: "Business Analysis",
      description:
        "Override the digital divide with additional clickthroughs from developers and nanodigital divide.",
      row: "row-span-1",
      icon: Briefcase,
      pos: "left",
    },
    {
      img: imgAdd,
      row: "row-span-2",
      pos: "right",
    },
    {
      title: "Reports Analysis",
      description:
        "Override the digital divide with additional clickthroughs from developers and nanodigital divide.",
      row: "row-span-1",
      icon: ClipboardList,
      pos: "left",
    },
    {
      img: imgAdd,
      row: "row-span-2",
      pos: "left",
    },
    {
      title: "IT Consulting",
      description:
        "Override the digital divide with additional clickthroughs from developers and nanodigital divide.",
      row: "row-span-1",
      icon: MonitorSmartphone,
      pos: "right",
    },

    {
      title: "Management Consulting",
      description:
        "Override the digital divide with additional clickthroughs from developers and nanodigital divide.",
      row: "row-span-1",
      icon: Users,
      pos: "right",
    },
  ];

  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, idx) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: services[idx].pos === "left" ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            scrub: 1.1,
          },
          stagger: 0.15,
        }
      );
    });
  }, []);

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500">Our Services</p>
        <h1 className="text-5xl mt-1 text-center  font-[600] text-dimondra-black">
          Empowering Your Business Vision
        </h1>

        <div className="grid grid-cols-2 gap-5 mt-12 auto-rows-[130px]">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                ref={(el) => {
                  itemsRef.current[idx] = el;
                }}
                className={clsx(
                  service.img
                    ? "overflow-hidden rounded-xl"
                    : "p-6 flex items-start rounded-xl border border-teal-100/30 bg-teal-50/70 gap-5",
                  service.row
                )}
              >
                {service.img ? (
                  <img
                    src={service.img}
                    alt="Service visual"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="shrink-0">
                      {Icon && <Icon className="size-[48px] text-teal-600" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {service.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
