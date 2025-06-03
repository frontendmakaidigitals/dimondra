"use client";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import {
  Briefcase,
  Users,
  ClipboardList,
  MonitorSmartphone,
  Server,
  GraduationCap,
  BarChart3,
  LifeBuoy,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Service = () => {
  const services = [
    {
      title: "HR Outsourcing",
      description:
        "Streamline your workforce management with tailored HR solutions, from recruitment to compliance.",
      row: "row-span-1",
      icon: Briefcase,
      pos: "left",
    },
    {
      img: "media/homepage/services/img1.jpg",
      row: "row-span-2",
      pos: "right",
    },
    {
      title: "Talent Solutions",
      description:
        "Access a curated pool of skilled professionals and elevate your hiring strategy with precision.",
      row: "row-span-1",
      icon: ClipboardList,
      pos: "left",
    },
    {
      img: "media/homepage/services/img2.jpg",
      row: "row-span-2",
      pos: "left",
    },
    {
      title: "Business Support",
      description:
        "Enhance productivity with comprehensive back-office services including admin, payroll, and operations.",
      row: "row-span-1",
      icon: LifeBuoy,
      pos: "right",
    },
    {
      title: "IT & Digital Services",
      description:
        "Empower your business with custom tech solutions, including cloud services, app development, and cybersecurity.",
      row: "row-span-1",
      icon: Server,
      pos: "right",
    },
    {
      title: "Career & Development",
      description:
        "Foster employee growth with training programs, career planning, and leadership development tools.",
      row: "row-span-1",
      icon: GraduationCap,
      pos: "left",
    },
    {
      title: "Strategy & Advisory",
      description:
        "Navigate complex challenges with expert consulting in business strategy, transformation, and growth planning.",
      row: "row-span-1",
      icon: BarChart3,
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
          x: services[idx].pos === "left" ? -200 : 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "bottom bottom", // element's bottom hits viewport bottom
            end: "bottom +70%",
            scrub: 1.2,
          },
          stagger: 0.15,
        }
      );
    });
  }, []);

  return (
    <div className="my-16 overflow-hidden">
      <div className="container  mx-auto px-4">
        <p className="text-center text-sm text-gray-500">Our Services</p>
        <h1 className="text-5xl mt-1 text-center  font-[600] text-dimondra-black">
          Empowering Your Business Vision
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 auto-rows-[130px]">
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
