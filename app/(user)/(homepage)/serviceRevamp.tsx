"use client";
import React from "react";
import PopForm from "../app_chunks/PopFrom";
import {
  Briefcase,
  ClipboardList,
  Server,
  GraduationCap,
  BarChart3,
  LifeBuoy,
} from "lucide-react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import { useState } from "react";
const ServiceRevamp = () => {
  const services = [
    {
      title: "HR Outsourcing",
      description:
        "Streamline HR. Enhance People. Scale Smarter — with outsourcing solutions that cover everything from policy and process optimization to daily HR operations, all delivered with a global mindset and local expertise. End-to-end HR support for contracts, payroll, and employee management",
      row: "row-span-1",
      icon: Briefcase,
      pos: "left",
      img: "/media/homepage/services/hrOutsource.webp",
    },

    {
      title: "Remote Workforce",
      description:
        "Companies no longer need to be limited by geography when finding the perfect candidate. Across the globe organizations are now using a remote and hybrid workforce for both permanent employees and contract professionals. In doing this, they're discovering the hiring process is faster and allows them to attract a much larger talent pool",
      row: "row-span-1",
      icon: ClipboardList,
      pos: "left",
      img: "/media/homepage/services/remote-workforce.webp",
    },
    {
      title: "Executive Search",
      description:
        "Dimondra’s Executive Search service helps organizations identify and attract top-tier leadership talent that drives business growth and transformation. We specialize in sourcing high-caliber executives with the right expertise, cultural fit, and vision to meet your strategic goals.",
      row: "row-span-1",
      icon: LifeBuoy,
      pos: "right",
      img: "/media/homepage/services/executive-research.webp",
    },
    {
      title: "RPO",
      description:
        "RPO services in can be a game changer for businesses. By teaming up with an RPO Service provider, you can access specialized recruitment expertise for scalable talent acquisition and a better candidate experience. We act as an extension of your team, blending dedicated professionals, top notch tech, proven methods, and data insights. This helps us anticipate future talent needs and streamline every step of hiring, from sourcing to onboarding. Our goal is to align your workforce with your goals, ensuring you have the right talent to drive success.",
      row: "row-span-1",
      icon: Server,
      pos: "right",
      img: "/media/homepage/services/rpo.webp",
    },
    {
      title: "Government Relations ",
      description:
        "We provide comprehensive support to ensure your business stays compliant with local regulations. Our government relations team handles all essential documentation, licensing, and coordination with local authorities—saving you time and ensuring accuracy every step of the way. Whether you're establishing, growing, or maintaining your business, our team is here to support you with efficient, reliable, and compliant government liaison services. ",
      row: "row-span-1",
      icon: GraduationCap,
      pos: "left",
      img: "/media/homepage/services/govt-relation.webp",
    },
    {
      title: "Business Support ",
      description:
        "Call centers, operational services, and business processing built for efficiency. Dimondra provides end-to-end business support solutions designed to keep your operations running smoothly. Our services include inbound and outbound call center management, customer support outsourcing, and business process outsourcing (BPO) across key functions such as admin, finance, and client handling. We act as an operational backbone that delivers reliability, responsiveness, and results — helping your teams focus on what matters most.",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "/media/homepage/services/business-support.webp",
    },
    {
      title: "IT & Digital Services ",
      description:
        "IT & Digital Services Technology and digital marketing tailored for your business growth. At Dimondra, we combine IT expertise with creative digital strategy to help your business run smarter and grow faster. From setting up secure, scalable infrastructure to managing your digital presence, we deliver solutions that align with your goals and adapt to your needs. ",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "/media/homepage/services/it-digital.webp",
    },
    {
      title: "Strategy & Advisory",
      description:
        "Smart planning and expert guidance to scale and strengthen your business. At Dimondra, our Strategy & Advisory services are built to support you at every step of your  business  lifecycle —  whether  you're  entering  a  new  market,  restructuring  your organization,   or   planning   for   sustainable   growth.   We   work   closely   with   you   to understand  your  vision,  assess  your  challenges,  and  design  solutions  that  are  both practical and strategic. ",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "/media/homepage/services/strategy-advisory.webp",
    },
    {
      title: "Workplace & Facilities Outsourcing Services ",
      description:
        "Our Workplace & Facilities Outsourcing Services offer end-to-end solutions to manage and support your office environment through experienced, outsourced staff. We help businesses maintain a professional, efficient, and welcoming workplace by handlingdaily operations and essential facility services, allowing you to focus on your core activities.",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "/media/homepage/services/workplace-facilities.webp",
    },
  ];

  useSplitText({
    selector: ".serviceText",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".serviceTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-20">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container serviceTrigger mx-auto px-4">
        <p className="text-center text-sm text-gray-500">Our Services</p>
        <h1 className="text-5xl serviceText font-dmSans leading-[3.6rem] lg:leading-[4rem] tracking-tighter text-center font-[600] text-dimondra-black">
          Empowering Your Business Vision
        </h1>
        <div className="grid grid-cols-1 gap-12 mt-12">
          {services.map((service, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-6 rounded-3xl shadow-sm 
                  ${
                    isOdd
                      ? "lg:flex-row-reverse lg:bg-gradient-to-l from-dimondra-black/10"
                      : "lg:bg-gradient-to-r from-dimondra-black/10"
                  }`}
              >
                {/* Image */}
                <div
                  className={`overflow-hidden rounded-2xl shadow-md ${
                    isOdd ? "order-2 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col gap-4 ${
                    isOdd ? "order-2 lg:pr-8" : "order-1 lg:pl-8"
                  }`}
                >
                  <h2 className="text-3xl font-dmSans font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-slate-700 font-quicksand font-[600]">
                    {service.description}
                  </p>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="group mt-3 relative cursor-pointer w-fit border border-slate-300 bg-white rounded-full overflow-hidden text-black text-center font-medium text-sm shadow-sm"
                  >
                    <span className="px-6 py-2 inline-block transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                      Learn more
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center bg-dimondra-teal text-white rounded-full group-hover:rounded-none translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Learn more
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceRevamp;
