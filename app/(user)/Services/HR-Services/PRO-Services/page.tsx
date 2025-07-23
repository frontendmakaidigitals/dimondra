"use client";
import React, { useState } from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import Process from "../../(sections)/process";
import Services from "../../(sections)/services";
import CTA from "@/app/(user)/app_chunks/CTA";
import FAQ from "@/app/(user)/app_chunks/FAQ";
import Choose from "../../(sections)/choose";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Globe2,
  Users,
  Megaphone,
  CalendarCheck,
  Banknote,
  UserCheck,
  Layers,
  BadgeDollarSign,
  Users2,
  Sliders,
  Headset,
} from "lucide-react";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
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
  const proServices = [
    {
      icon: ShieldCheck, // Use a relevant Lucide icon
      title: "Company and Regulatory Compliance",
      desc: "Our PRO team helps you stay compliant with UAE laws by managing company formation, trade licenses, NOC letters, and approvals. We handle the paperwork and government communication so you can focus on running your business smoothly.",
    },
    {
      icon: Globe2,
      title: "Visa and Immigration Assistance",
      desc: "Dimondra’s PROs manage all visa and immigration tasks — from securing employment and residency visas to renewing Emirates IDs and labor cards. We ensure your team and their families have the documents they need to live and work legally in the UAE.",
    },
    {
      icon: Users,
      title: "Family and Personal Services",
      desc: "We assist with family visa applications so employees can bring loved ones to the UAE. Our team also manages document attestation, making sure all your personal and professional documents are officially recognized.",
    },
    {
      icon: Megaphone,
      title: "Media Relations and Crisis Management",
      desc: "Our PROs help shape your brand image through press releases, media coordination, and press events. In times of crisis, we plan and deliver clear communication to protect your reputation across all channels.",
    },
    {
      icon: CalendarCheck,
      title: "Public Event Management",
      desc: "Dimondra supports your business with end-to-end event management, from securing venues to coordinating vendors and guest lists. We help create memorable events that strengthen your brand presence.",
    },
    {
      icon: Banknote,
      title: "Financial and Security Services",
      desc: "We assist with corporate bank account setup, trade license renewals, and security pass approvals. Our PRO services ensure your financial and operational processes stay secure and compliant with UAE laws.",
    },
  ];
  const companySetupSteps = [
    {
      title: "Strategy and Planning",
      description:
        "We work with you to choose the right business structure and activity for your company. Our team explains the steps, requirements, and timeline so you know exactly what to expect during the setup.",
      imgUrl: "/services/planning.webp", // Replace with actual image
    },
    {
      title: "Incorporation",
      description:
        "Dimondra takes care of the full company setup process — from securing your business license and preparing legal documents to registering your company and handling visa files.",
      imgUrl: "/services/Incorporation.webp",
    },
    {
      title: "Bank Account Opening",
      description:
        "We guide you through opening your corporate bank account, helping you prepare the documents and meet the bank’s requirements for a smooth process.",
      imgUrl: "/services/bankAccount.webp",
    },
    {
      title: "Staying Compliant",
      description:
        "Our job doesn’t end at setup. We provide ongoing PRO support to make sure your company stays compliant with UAE laws, including renewals and government filings.",
      imgUrl: "/services/compliant.webp",
    },
  ];
  const coreBenefits = [
    {
      title: "Single Partner",
      icon: UserCheck,
    },
    {
      title: "One-Stop Solution",
      icon: Layers,
    },
    {
      title: "Transparent Pricing",
      icon: BadgeDollarSign,
    },
    {
      title: "Experienced Team",
      icon: Users2,
    },
    {
      title: "Tailored Services",
      icon: Sliders,
    },
    {
      title: "Reliable Support",
      icon: Headset,
    },
  ];
  const proFAQ = [
    {
      question: "What are PRO services in the UAE?",
      answer:
        "PRO (Public Relations Officer) services cover all government-related paperwork and approvals required for businesses, including trade licenses, visas, labor cards, and legal documentation.",
    },
    {
      question: "Why should I outsource PRO services?",
      answer:
        "Outsourcing PRO services helps you save time, reduce costs, and ensure compliance with UAE laws. It allows you to focus on your business while experts manage the complex paperwork and approvals.",
    },
    {
      question: "Can Dimondra assist with company formation and licensing?",
      answer:
        "Yes, we provide end-to-end support for company formation, trade license applications, renewals, and related approvals so you can set up and operate your business without hassle.",
    },
    {
      question: "Do you offer support for visa processing?",
      answer:
        "Absolutely. We manage employee, family, and investor visa applications, renewals, and cancellations, ensuring all processes are handled smoothly and on time.",
    },
    {
      question: "Is there flexibility in the services offered?",
      answer:
        "Yes, our PRO services are customizable. You can choose support for specific tasks or opt for full-service packages depending on your business needs.",
    },
    {
      question: "How do I get started with Dimondra’s PRO services?",
      answer:
        "Simply contact us for a consultation. Our team will assess your needs, explain the process, and provide a clear plan and cost structure to get started.",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        animate={{ height: ["150vh", "85vh"] }}
        transition={{
          duration: 1.3,
          ease: [0.19, 1, 0.22, 1],
          delay: 0.1,
        }}
        className=" relative"
      >
        <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
        <BgLayer color={"bg-black/50 z-[5] "} />
        <img
          className="absolute inset-0 object-top w-full h-full object-cover"
          src={"/services/topTalentHero.webp"}
          alt={"Talent Acquisition"}
        />
        <div className="container  tracking-tighter h-full flex flex-col items-start justify-end py-16 relative z-10 text-dimondra-white">
          <h2 className="text-4xl lg:text-5xl font-dmSans tracking-tight leading-[3rem] lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
            PRO Services in UAE – Dimondra
          </h2>
          <p className=" talentPara max-w-3xl mt-2 text-slate-100">
            Looking for trusted PRO services in the UAE? Dimondra offers
            reliable, efficient support for all your government liaison and
            legal clearance needs. Our experienced professionals ensure smooth
            handling of approvals, documentation, and regulatory processes so
            you can focus on your business. With Dimondra, getting PRO services
            is simple, effective, and designed for results.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2 rounded-lg border border-dimondra-white transition-colors duration-200
         hover:border-dimondra-tealDark hover:bg-dimondra-tealDark mt-5"
          >
            Discover Our Services
          </button>
        </div>
      </motion.div>
      <Services
        heading={"Key Services by Public Relations Officer in UAE"}
        subHeading={""}
        data={proServices}
      />

      <Process
        data={companySetupSteps}
        heading={"Our Work Process"}
        subHeading={""}
      />
      <Choose
        title={"Why Choose Dimondra for Corporate PRO Services in UAE "}
        desc={
          "At Dimondra, we make it simple for businesses to handle all government-related processes under one roof. From company formation and licensing to visa services and regulatory approvals, our experienced team ensures smooth, efficient, and compliant operations at every stage. We offer cost-effective solutions tailored to your business, backed by transparency, professionalism, and a commitment to delivering personal attention to every client. With Dimondra, you gain a reliable partner who understands the unique challenges of doing business in the UAE and helps you overcome them with confidence."
        }
        data={coreBenefits}
      />
      <FAQ
        data={proFAQ}
        desc={
          "Dimondra’s PRO (Public Relations Officer) Services are designed to simplify and manage all your government-related processes in the UAE. From company formation and trade licensing to visa processing and regulatory compliance, our experienced team ensures every detail is handled efficiently and in full accordance with UAE laws. Whether you're starting a new business or managing an existing one, we act as your trusted liaison with government departments—saving you time, reducing administrative burdens, and helping your operations run smoothly."
        }
      />
      <HomeForm />
      <CTA
        title={"Ready to Simplify Your PRO Tasks?"}
        desc={
          "Let Dimondra handle your government paperwork, approvals, and legal formalities—so you can focus on growing your business. Our team is here to provide fast, reliable, and cost-effective PRO solutions tailored to your needs. Get in touch today and experience hassle-free PRO services in the UAE."
        }
        button="Make an Enquiry"
      />
    </>
  );
};

export default Page;
