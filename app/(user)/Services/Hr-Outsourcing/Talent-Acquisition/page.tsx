"use client";
import React, { useState } from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import IndustriesSection from "../../(sections)/Industries";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import Process from "../../(sections)/process";
import Services from "../../(sections)/services";
import CTA from "@/app/(user)/app_chunks/CTA";
import FAQ from "@/app/(user)/app_chunks/FAQ";
import Choose from "../../(sections)/choose";
import { motion } from "motion/react";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import {
  Workflow,
  UserPlus,
  Users,
  Flag,
  Timer,
  Globe2,
  Code,
  Megaphone,
  MonitorSmartphone,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

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
  const recruitmentServices = [
    {
      title: "Outsourced Recruitment Process",
      desc: "Leveraging our Recruitment Process Outsourcing (RPO) allows businesses of all sizes to streamline their hiring, ensuring a smooth and consistent experience for both the company and the applicant while maintaining process integrity.",
      icon: Workflow,
    },
    {
      title: "Permanent Placement",
      desc: "As a dedicated hiring partner, we collaborate closely with you to understand your business and the specific attributes of an ideal employee, whether for a strategic acquisition or to augment your existing team.",
      icon: UserPlus,
    },
    {
      title: "Flexible Staffing Solutions",
      desc: "Contingent staffing solutions are designed to help you meet demanding production targets. Our expertise allows you to identify optimal candidates to enhance your business processes and boost overall productivity.",
      icon: Users,
    },
    {
      title: "Emiratisation Support",
      desc: "Emiratisation in Dubai is a crucial initiative. Talented Emiratis, highly valued by the government and the larger private sector, are essential. We facilitate Emiratisation services for foreign companies operating in the region.",
      icon: Flag,
    },
    {
      title: "Temporary & Contract Workforce",
      desc: "Contract staffing, also known as temporary staffing, offers businesses the flexibility to hire workers for short-term projects on a daily, weekly, monthly, or annual basis. Temporary workers are valuable for diverse needs.",
      icon: Timer,
    },
    {
      title: "Employer of Record (EOR) & PEO Services",
      desc: "We assist you in bringing personnel into the UAE and navigating the new market, enabling you to achieve excellent results with your short and long-term projects. We manage all your HR, payroll, and salary transfer requirements.",
      icon: Globe2,
    },
  ];
  const industries = [
    {
      title: "Energy & Resources",
      description:
        "As a premier recruitment partner for the UAE's oil and gas sector, we deliver exceptional services to staff vital roles. Our specialized division is dedicated to connecting leading energy companies with top-tier talent across the industry's diverse landscape.",
      imgUrl: "/services/energy&resources.jpg",
    },
    {
      title: "Financial Services",
      description:
        "Entrust your hiring requirements to our expert recruitment specialists in the financial and banking industries. Our dedicated teams are committed to assisting businesses in securing highly qualified candidates for their permanent positions within the banking and finance sectors.",
      imgUrl: "/services/financial-services.jpg",
    },
    {
      title: "Technology & Engineering",
      description:
        "Dimondra provides unparalleled workforce consultancy for all your technology-related hiring needs. Sourcing top-tier network engineers, system architects, programmers, analysts, and other essential professionals is paramount for success in this dynamic field.",
      imgUrl: "/services/Technology.jpg",
    },
    {
      title: "Healthcare",
      description:
        "As a leading healthcare recruitment firm, we specialize in identifying skilled physicians, nurses, and other medical professionals who perfectly align with your requirements. Our expertise lies in delivering specialized healthcare consulting and staffing solutions.",
      imgUrl: "/services/healthcare.jpg",
    },
    {
      title: "Audit & Finance",
      description:
        "As a top-tier accounting and finance recruitment agency, we are equipped to address all your staffing demands. We meticulously manage all hiring documentation and facilitate seamless, direct screenings with your most promising finance and accounting candidates.",
      imgUrl: "/services/audit.jpg",
    },
    {
      title: "Sales & Business Development",
      description:
        "We are committed to providing you with an outstanding staffing experience, from sourcing CVs for sales and marketing roles to filling executive positions in Dubai. Our extensive experience and professionalism in this area are consistently demonstrated through our results.",
      imgUrl: "/services/business-development.jpg",
    },
  ];

  const recruitmentSteps = [
    {
      step: "Step 1",
      title: "Understand Your Vision",
      description:
        "We begin by thoroughly understanding your company's culture, strategic goals, and the specific requirements of the role. Through in-depth consultations, we gain insights into the ideal candidate profile.",
      imgUrl: "/services/vision.jpg",
    },
    {
      step: "Step 2",
      title: "Precision Talent Sourcing",
      description:
        "Our rigorous sourcing methods ensure we present you with a curated selection of candidates who not only meet but exceed your expectations.",
      imgUrl: "/services/talentOutsource.jpg",
    },
    {
      step: "Step 3",
      title: "Rigorous Vetting & Assessment",
      description:
        "Every candidate undergoes a comprehensive vetting process, including detailed interviews, skill assessments, and thorough background checks. We present you with a highly qualified and pre-screened individual.",
      imgUrl: "/services/assesment.jpg",
    },
    {
      step: "Step 4",
      title: "Quick Integration & Support",
      description:
        "Our commitment extends beyond placement. We facilitate smooth onboarding and provide ongoing support to ensure the successful integration of your new hire. Dimondra remains your dedicated partner.",
      imgUrl: "/services/support.jpg",
    },
  ];
  const services = [
    {
      title: "Web Development",
      icon: Code,
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
    },
    {
      title: "UI/UX Design",
      icon: MonitorSmartphone,
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheck,
    },
    {
      title: "Consulting",
      icon: UserCheck,
    },
  ];

  const faqs = [
    {
      question: "What types of roles does Dimondra specialize in filling?",
      answer:
        "Dimondra specializes in sourcing and placing top talent across various key industries in the UAE, including IT, Technology & Engineering, Sales & Marketing, Healthcare, Banking & Finance, Oil & Gas, and Audit & Accounting. Our expertise allows us to fill a wide range of positions, from entry-level to senior leadership roles.",
    },
    {
      question: "How does Dimondra ensure the quality of candidates presented?",
      answer:
        "Our commitment to quality is paramount. We employ a multi-stage vetting process that includes in-depth interviews, skill assessments, thorough background checks, and detailed reference verification. This ensures that only the most qualified and culturally aligned candidates are presented to you.",
    },
    {
      question:
        "What is the typical timeframe for filling a position through Dimondra?",
      answer:
        "While the timeframe can vary based on the complexity of the role and market availability, our streamlined process is designed for efficiency. We work diligently to present suitable candidates within a competitive timeframe, often exceeding industry standards, and will provide you with clear timelines from the outset.",
    },
    {
      question:
        "Can Dimondra assist with both permanent and temporary staffing needs?",
      answer:
        "Yes, absolutely. Dimondra offers talent solutions that cover both permanent recruitment and temporary or contract staffing. Whether you need a long-term strategic hire or flexible workforce solutions for specific projects, we have the expertise to meet your requirements.",
    },
    {
      question:
        "How does Dimondra handle candidate confidentiality and data privacy?",
      answer:
        "We adhere to the highest standards of confidentiality and strictly comply with all relevant data protection laws in the UAE. All sensitive information, both client and candidate data, is handled with utmost care and secured through protocols throughout the entire recruitment process.",
    },
    {
      question:
        "What makes Dimondra's approach unique compared to other recruitment agencies?",
      answer:
        "Our unique approach lies in our blend of a deeply personalized methodology, extensive local market insight, and a commitment to process efficiency. We act as a true strategic partner, not just a vendor, focusing on understanding your unique vision and delivering talent that genuinely drives your business growth.",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        animate={{ height: ["150vh", "70vh"] }}
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
          src={"/services/talentHero.jpg"}
          alt={"Talent Acquisition"}
        />
        <div className="container  tracking-tighter h-full flex flex-col items-start justify-end py-16 relative z-10 text-dimondra-white">
          <h2 className="text-4xl lg:text-5xl font-dmSans tracking-tight leading-[3rem] lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
            Secure Top Talent. Drive Business Success with Dimondra
          </h2>
          <p className=" talentPara max-w-3xl  mt-2 text-slate-100 font-quicksand font-[600]">
            Navigate the dynamic UAE market with our recruitment and staffing
            services, designed to connect you with the brightest minds and drive
            your success forward. We connect ambitious companies with
            extraordinary professionals, transforming your workforce for growth.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2 rounded-lg border border-dimondra-white transition-colors duration-200
         hover:border-dimondra-tealDark hover:bg-dimondra-tealDark mt-5"
          >
            Discover Your Next Hire
          </button>
        </div>
      </motion.div>
      <Services
        heading={"Recruitment Services Offered in the UAE"}
        subHeading={
          "We provide comprehensive hiring and workforce solutions to meet your business needs."
        }
        data={recruitmentServices}
      />
      <IndustriesSection data={industries} heading={"Industries we serve"} />
      <Process
        data={recruitmentSteps}
        heading={"Our Work Process at Dimondra Talent Solutions"}
        subHeading={
          "At Dimondra, we've refined our process to ensure seamless and effective talent acquisition for your business"
        }
      />
      <Choose
        title={"Why Choose Dimondra?"}
        desc={
          "When it comes to finding the right talent in the UAE, Dimondra stands out as your ideal partner. We believe in a truly systematic approach, which means we don't just look at resumes; we take the time to deeply understand your company's unique culture, core values, and the specific requirements of each role. This allows us to identify candidates who not only possess the necessary skills and experience but also integrate into your team and contribute positively from day one. Beyond just finding individuals, we offer an incredibly Efficient Process that is designed to save you valuable time and effort. \nFrom the initial in-depth screening of potential candidates to coordinating interviews, conducting thorough reference checks, and even assisting with the final negotiations, we manage every step of the recruitment journey. This approach ensures a smooth and effective hiring experience for you. Choosing Dimondra means choosing a partner dedicated to your success, delivering exceptional talent with integrity and efficiency.D"
        }
        data={services}
      />
      <FAQ
        data={faqs}
        desc="At Dimondra, we understand you may have questions about how our talent solutions can benefit your business. We've compiled some of the most common inquiries to provide clarity on our services, process, and the value we bring to your recruitment efforts in the UAE."
      />
      <HomeForm />
      <CTA
        title={"Ready to Find Your Next Great Hire?"}
        desc={
          "Connect with Dimondra's expert team today and discover how our talent solutions can empower your business growth."
        }
        button=" Get Started Now"
      />
    </>
  );
};

export default Page;
