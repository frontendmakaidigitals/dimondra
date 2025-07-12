"use client";
import React, { useState } from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import { motion } from "motion/react";
import Service from "../../(business-service-section)/service";
import Industry from "../../(business-service-section)/Industry";
import CTA from "../../(business-service-section)/CTA";
import Advantage from "../../(business-service-section)/Advantage";
import Choose from "../../(business-service-section)/Choose";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import {
  Wrench,
  Bug,
  ShieldCheck,
  Navigation,
  Leaf,
  Recycle,
  UserCheck,
  Hammer,
  Building2,
  PiggyBank,
  GraduationCap,
  Clock,
  Layers3,
  Cpu,
  SlidersHorizontal,
  BrushCleaning,
} from "lucide-react";
const facilityManagementFAQs = [
  {
    question:
      "What services are included in your facility management offering?",
    answer:
      "We provide a wide range of soft and hard services, including cleaning, maintenance, pest control, security, waste management, front-of-house support, and more.",
  },
  {
    question: "Can your services be customized to suit our facility’s needs?",
    answer:
      "Yes, all our services are tailored based on your industry, site requirements, and operational goals to ensure maximum efficiency and value.",
  },
  {
    question: "Do you offer support for multi-site operations?",
    answer:
      "Absolutely. We have the capability to manage multiple sites while ensuring consistent quality and reporting across all locations.",
  },
  {
    question: "How do you ensure compliance with safety and hygiene standards?",
    answer:
      "Our teams are trained to follow the latest health, safety, and environmental regulations. We also conduct regular audits and quality checks.",
  },
  {
    question: "Do you use any technology or automation in your operations?",
    answer:
      "Yes, we leverage smart tools and systems to streamline service delivery, track performance, and provide transparent reporting.",
  },
  {
    question:
      "Can I outsource only one specific service, or do I need a full package?",
    answer:
      "You can choose individual services or a full integrated solution. We offer complete flexibility based on your needs.",
  },
];

import FAQ from "../../../app_chunks/FAQ";
const Page = () => {
  useSplitText({
    selector: ".talentHead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    type: "chars, lines",
    linesClass: "line-wrapper++",
    delay: 1,
  });
  useSplitText({
    selector: ".talentPara",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    type: "words, lines",
    linesClass: "line-wrapper++",
    delay: 1.5,
  });

  const facilityServices = [
    {
      title: "Cleaning Services",
      description:
        "Providing thorough and consistent cleaning to keep your environment safe, hygienic, and welcoming.",
      img: "",
    },
    {
      title: "Hard Services",
      description:
        "Maintaining your buildings through planned preventative maintenance, reactive repairs, and infrastructure improvements.",
      img: "",
    },
    {
      title: "Pest Control",
      description:
        "Tailored pest management solutions to protect your facility from pests and maintain health standards.",
      img: "",
    },
    {
      title: "Security Services",
      description:
        "Comprehensive security covering access control, visitor screening, monitoring, and emergency response.",
      img: "",
    },
    {
      title: "Passenger Services",
      description:
        "Professional assistance for passengers, including wayfinding, customer support, and smooth facility navigation.",
      img: "",
    },
    {
      title: "Carbon & Energy Management",
      description:
        "Optimizing energy consumption and managing carbon emissions to support sustainability goals.",
      img: "",
    },
    {
      title: "Waste Management & Recycling",
      description:
        "Efficient collection, disposal, and recycling processes to minimize environmental impact and ensure compliance.",
      img: "",
    },
    {
      title: "Reception & Visitor Management",
      description:
        "Welcoming visitors with organized reception, screening, and guest services that enhance their experience.",
      img: "",
    },
    {
      title: "Minor Works & Repairs",
      description:
        "Handling small-scale repairs and refurbishments to keep your facility functional and attractive.",
      img: "",
    },
    {
      title: "Capital Projects & Upgrades",
      description:
        "Managing large-scale renovations and improvements to modernize and future-proof your facility.",
      img: "",
    },
  ];

  const advantage = [
    "Integrated Service Delivery",
    "Tailored Solutions",
    "Skilled Workforce",
    "24/7 Support",
    "Sustainability Focused",
    "Technology-Driven Operations",
    "Reliable Compliance",
    "Proactive Maintenance Approach",
    "Scalable Solutions",
    "Sector-Specific Expertise",
  ];
  const features = [
    {
      title: "Cost Efficiency",
      description:
        "Reduce overheads with scalable solutions that eliminate the need for in-house management.",
      icon: PiggyBank,
    },
    {
      title: "Specialised Expertise",
      description:
        "Benefit from industry-trained professionals with deep knowledge of sector-specific needs.",
      icon: GraduationCap,
    },
    {
      title: "Improved Compliance & Safety",
      description:
        "We maintain high standards in health, safety, and regulatory compliance across all services.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Operational Support",
      description:
        "Our team ensures continuous support and fast response times to keep your facilities running.",
      icon: Clock,
    },
    {
      title: "Integrated Services",
      description:
        "Access a full suite of soft and hard services, all managed under one trusted provider.",
      icon: Layers3,
    },
    {
      title: "Technology-Driven Solutions",
      description:
        "We leverage smart systems, analytics, and automation to improve service delivery and reporting.",
      icon: Cpu,
    },
    {
      title: "Customised Strategies",
      description:
        "Every site is unique, so we tailor our facility management plan to fit your space, industry, and goals.",
      icon: SlidersHorizontal,
    },
    {
      title: "Focus on Sustainability",
      description:
        "Our practices aim to reduce waste, lower energy use, and promote greener operations.",
      icon: Leaf,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.div className="w-full h-[90vh] relative">
        <BgLayer
          color={
            "bg-slate-900/60 lg:bg-gradient-to-l from-transparent from-[0%] to-teal-950 to-[60%] z-[2] "
          }
        />
        <img
          className="absolute inset-0 object-top w-full h-full object-cover"
          src={"/services/facilityhero.jpg"}
          alt={"Talent Acquisition"}
        />
        <div className=" relative  z-[3] w-full h-full">
          <div className="container tracking-tighter h-full flex flex-col items-start justify-center py-16 relative z-10 text-dimondra-white">
            <h2 className="text-3xl lg:text-5xl lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
              Facility Management Solutions
            </h2>
            <p className=" talentPara max-w-3xl mt-2 text-slate-50">
              At Dimondra, we provide end-to-end facility management services
              designed to optimize your workplace environment, enhance
              operational efficiency, and ensure safety and comfort. From
              maintenance and cleaning to security and space management, our
              expert team delivers reliable, cost-effective solutions
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-5 py-2 rounded-lg border border-dimondra-white transition-colors duration-200
         hover:border-dimondra-tealDark hover:bg-dimondra-tealDark mt-5"
            >
              Discover Our Services
            </button>
          </div>
        </div>
      </motion.div>
      <Service
        data={facilityServices}
        desc={""}
        title={"Facility Services as a single-line solution"}
      />

      <Choose
        data={features}
        title={"Why Outsource Your Facility Management to Dimondra?"}
        desc={
          "At Dimondra, we go beyond traditional facility management by aligning our services with your business goals. Outsourcing to us means gaining a strategic partner committed to efficiency, safety, and long-term value. Our integrated approach allows you to focus on your core operations while we ensure your environments run smoothly, safely, and sustainably."
        }
      />
      <Advantage
        data={advantage}
        title={"Dimondra – Your Partner for Facility Management"}
        description={
          "At Dimondra, we don’t just maintain spaces, we create environments where people and businesses thrive. As your dedicated facility management partner, we combine industry expertise with tailored service delivery to meet the unique needs of every site we manage. Whether it’s a high-traffic venue, a critical healthcare facility, or a fast-paced commercial space, we ensure everything runs efficiently, safely, and sustainably. From day-to-day operations to long-term infrastructure improvements, Dimondra is committed to raising standards and delivering results that support your success."
        }
        img1={"/services/facility1.jpg"}
        img2={"/services/facility2.jpg"}
      />
      <FAQ data={facilityManagementFAQs} desc={""} />
      <HomeForm />
      <CTA
        title={"Ready to Simplify Your Office Operations?"}
        desc={
          " Let Dimondra take care of your workplace and facility needs, so you can focus on growing your business. Whether it’s reception, maintenance, cleaning, or technical support, we’ve got you covered with reliable, professional service."
        }
        button={"Get a Customized Facilities Plan"}
      />
    </>
  );
};

export default Page;
