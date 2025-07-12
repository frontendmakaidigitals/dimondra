"use client";
import React, { useState } from "react";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import { motion } from "motion/react";
import Service from "../../(business-service-section)/service";
import CTA from "../../(business-service-section)/CTA";
import Advantage from "../../(business-service-section)/Advantage";
import Choose from "../../(business-service-section)/Choose";
import Process from "../../(sections)/process";
import {
  ShieldCheck,
  PiggyBank,
  Monitor,
  Network,
  Code,
  Shield,
  Cloud,
  Headphones,
  Compass,
  RotateCcw,
  ServerCog,
  FileCheck2,
  Activity,
  Users,
  Expand,
  AlarmClock,
  Map,
  Briefcase,
} from "lucide-react";

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

  const itServices = [
    {
      title: "Hardware Support",
      description:
        "Installation, troubleshooting, upgrades, and maintenance of desktops, laptops, servers, and other hardware devices.",
      img: "",
    },
    {
      title: "Network Management",
      description:
        "Monitoring, configuration, and optimization of your business network for seamless connectivity and performance.",
      img: "",
    },
    {
      title: "Software Support",
      description:
        "Installation, updates, issue resolution, and license management for your critical business applications.",
      img: "",
    },
    {
      title: "Security Management",
      description:
        "Firewall setup, threat detection, antivirus management, and data protection solutions to safeguard your systems.",
      img: "",
    },
    {
      title: "Cloud Services",
      description:
        "Cloud migration, storage, and management solutions to ensure accessibility, scalability, and security.",
      img: "",
    },
    {
      title: "24/7 Help Desk",
      description:
        "Round-the-clock technical support for any IT-related issues, ensuring minimal downtime and fast resolutions.",
      img: "",
    },
    {
      title: "IT Consultancy & Planning",
      description:
        "Strategic guidance to align your IT infrastructure with business goals, ensuring efficiency and scalability.",
      img: "",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Regular data backups and recovery plans to protect your business against unexpected data loss or system failures.",
      img: "",
    },
    {
      title: "IT Infrastructure Setup",
      description:
        "End-to-end setup of new office or remote IT infrastructure, including cabling, systems, and configuration.",
      img: "",
    },
    {
      title: "Vendor & License Management",
      description:
        "Handling of third-party software licenses, renewals, and vendor coordination for seamless operations.",
      img: "",
    },
  ];

  const advantage = [
    "End-to-End IT Management",
    "24/7 Helpdesk & Remote Support",
    "Proactive Monitoring & Maintenance",
    "Cybersecurity & Threat Protection",
    "Cloud Services & Backup Solutions",
    "Network & Infrastructure Management",
    "Software & Hardware Support",
    "Scalable & Customizable Plans",
  ];

  const itSupportProcess = [
    {
      title: "Assessment & Planning",
      description:
        "We audit your current IT environment, identify gaps, and build a tailored support plan.",
      imgUrl: "/services/consultation.jpg", // Replace with your actual image path
    },
    {
      title: "Onboarding",
      description:
        "A seamless transition process with full documentation, system handover, and user alignment.",
      imgUrl: "/services/onBoard.jpg",
    },
    {
      title: "Monitoring & Support",
      description:
        "Our helpdesk and onsite engineers proactively monitor and resolve issues to minimize downtime.",
      imgUrl: "/services/support.jpg",
    },
    {
      title: "Reporting",
      description:
        "Get regular reports, performance reviews, and service insights to keep you informed and in control.",
      imgUrl: "/services/talentHero.jpg",
    },
  ];
  const itBenefits = [
    {
      title: "Cost Efficiency",
      description:
        "Save on infrastructure and staffing costs with flexible support plans tailored to your needs. Enjoy enterprise-level service without the overhead of an in-house team.",
      icon: PiggyBank,
    },
    {
      title: "Business Continuity & Uptime",
      description:
        "Our proactive monitoring and maintenance minimize downtime and ensure uninterrupted operations, keeping your systems reliable and your team productive.",
      icon: Activity,
    },
    {
      title: "Access to Certified Experts",
      description:
        "Leverage a pool of experienced IT professionals with expertise across multiple domains, including networking, cloud, cybersecurity, and hardware.",
      icon: Users,
    },
    {
      title: "Scalable Support",
      description:
        "Whether you’re a small business or scaling fast, our IT solutions grow with you. We adjust resources to match your needs, with no unnecessary costs or delays.",
      icon: Expand,
    },
    {
      title: "Fast Response & Resolution",
      description:
        "Our 24/7 help desk and rapid on-site support mean issues are resolved quickly, minimizing disruptions and restoring operations swiftly.",
      icon: AlarmClock,
    },
    {
      title: "Advanced Security & Compliance",
      description:
        "Protect your business with our comprehensive cybersecurity protocols and compliance with standards like ISO, SOC II, and GDPR.",
      icon: ShieldCheck,
    },
    {
      title: "Customized IT Strategies",
      description:
        "We don’t just fix problems, we plan ahead. Our IT audits and roadmaps help you make smarter tech investments and long-term decisions.",
      icon: Map,
    },
    {
      title: "Focus on Core Business",
      description:
        "With Dimondra managing your tech, you free up time and resources to focus on what matters most: growing your business and serving your customers.",
      icon: Briefcase,
    },
  ];

  const itAmcFAQs = [
    {
      question:
        "What is included in your IT Annual Maintenance Contract (AMC)?",
      answer:
        "Our AMC includes regular system health checks, preventive maintenance, software updates, security monitoring, and unlimited helpdesk support based on your selected plan.",
    },
    {
      question: "Do you offer on-demand IT support without a contract?",
      answer:
        "Yes. We provide flexible, on-demand IT support for businesses that require immediate assistance without a long-term commitment.",
    },
    {
      question: "How quickly can you respond to IT issues?",
      answer:
        "We offer rapid response through our 24/7 helpdesk and field engineers. Most issues are resolved remotely within minutes, and on-site support is available when needed.",
    },
    {
      question: "Can you support remote teams or multiple office locations?",
      answer:
        "Absolutely. Our solutions are designed to support remote workers and distributed teams across different locations with seamless connectivity and support.",
    },
    {
      question: "Do you provide cybersecurity services?",
      answer:
        "Yes. We offer a full suite of cybersecurity solutions, including firewall management, antivirus deployment, threat monitoring, and compliance advisory.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "We serve businesses of all sizes and industries—from startups and SMEs to large enterprises—tailoring our services to fit your specific IT needs.",
    },
    {
      question: "Do you assist with cloud migration and management?",
      answer:
        "Yes. We provide complete cloud services, including cloud setup, migration, and ongoing management across platforms like AWS, Azure, and Google Cloud.",
    },
    {
      question: "Is there a minimum contract period for AMC services?",
      answer:
        "Our AMC plans are flexible, with both short-term and long-term options available based on your business requirements.",
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
          src={"/services/itSupport.jpg"}
          alt={"Talent Acquisition"}
        />
        <div className=" relative  z-[3] w-full h-full">
          <div className="container tracking-tighter h-full flex flex-col items-start justify-center py-16 relative z-10 text-dimondra-white">
            <h2 className="text-3xl lg:text-5xl lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
              Reliable IT Support That Keeps Your Business Moving
            </h2>
            <p className=" talentPara max-w-3xl mt-2 text-slate-50">
              Stay focused on growth while we handle your IT. At Dimondra, we
              offer flexible Annual Maintenance Contracts (AMC) and on-demand IT
              outsourcing tailored to your business. Whether you&nbsp;re a
              startup or an enterprise, our expert team ensures minimal
              downtime, enhanced productivity, and dependable tech support
              whenever and wherever you need it.
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
        data={itServices}
        desc={
          "From system setup to security, Dimondra delivers comprehensive IT support solutions designed to keep your business running smoothly and securely."
        }
        title={"Services We Provide"}
      />
      <Process
        heading={"How it Works"}
        subHeading={
          "Our structured approach ensures smooth onboarding and reliable ongoing support, so you can focus on your business while we manage your tech."
        }
        data={itSupportProcess}
      />
      <Choose
        data={itBenefits}
        title={"Why Outsource Your IT Services to Dimondra?"}
        desc={
          "Outsourcing your IT services to Dimondra empowers your business with expert-driven, scalable, and cost-effective tech solutions, so you can focus on growing your business while we ensure your IT runs seamlessly"
        }
      />
      <Advantage
        data={advantage}
        title={"Dimondra – Your Trusted IT Services Partner"}
        description={
          "Dimondra provides reliable, flexible, and cost-effective IT services tailored to your business needs. Whether you require ongoing IT support, infrastructure management, or cybersecurity solutions, our expert teams deliver seamless service with minimal disruption. We help you stay focused on your core business while we take care of the technology that powers it."
        }
        img1="/services/It1.jpg"
        img2="/services/It2.jpg"
      />
      <FAQ data={itAmcFAQs} desc={""} />
      <HomeForm />
      <CTA
        title={"Let’s Simplify Your IT Operations"}
        desc={
          "Don’t let IT challenges slow down your business. With Dimondra’s expert support and scalable solutions, you get peace of mind knowing your tech is in good hands."
        }
        button={"Contact us today"}
      />
    </>
  );
};

export default Page;
