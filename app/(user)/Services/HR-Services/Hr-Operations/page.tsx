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
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import {
  UserPlus,    
  ServerCog,
  Wallet,
  AlertTriangle,
  BarChart2,
  Layers,
  GraduationCap,
  RefreshCcw,
  Sliders,
  TrendingUp,
  Scale,
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
  const hrServices = [
    {
      title: "Employee Onboarding & Offboarding",
      desc: "We make it easy to welcome new hires and smoothly manage exits, ensuring a positive experience for employees at every stage.",
      icon: UserPlus,
    },
    {
      title: "HR System Maintenance",
      desc: "Our team keeps your HR systems up-to-date, accurate, and secure, so your data stays reliable and your processes run without a hitch.",
      icon: ServerCog,
    },
    {
      title: "Payroll and Benefits Management",
      desc: "We handle your payroll and benefits, making sure employees are paid on time and benefits are managed correctly, with full compliance.",
      icon: Wallet,
    },
    {
      title: "Employee Complaints or Disputes Management",
      desc: "We support you in addressing employee concerns fairly and efficiently, helping maintain a positive and respectful workplace.",
      icon: AlertTriangle,
    },
    {
      title: "Employee Appraisals",
      desc: "Our service ensures appraisals are handled properly, giving clear feedback, setting goals, and boosting employee growth and motivation.",
      icon: BarChart2,
    },
    {
      title: "Other Monthly/Adhoc Services",
      desc: "Whether it’s reports, compliance checks, or special HR tasks, we provide flexible support when you need it, on a monthly or on-demand basis.",
      icon: Layers,
    },
  ];

  const onboardingSteps = [
    {
      title: "Initial Consultation",
      description:
        "We start by sitting down with you to understand your business, your goals, and any challenges you’re facing. From there, we create a clear plan to take care of your HR tasks in a way that fits your needs.",
      imgUrl: "/services/consultation.webp",
    },
    {
      title: "HR Process Management",
      description:
        "Once we’ve agreed on the plan, we put practical HR processes in place. These will help you support your team while making sure everything is aligned with UAE labor laws.",
      imgUrl: "/services/processManangement.webp",
    },
    {
      title: "Performance Appraisals",
      description:
        "We help you track and review employee performance in a way that benefits both your staff and your business. Our guidance ensures fair rewards and the right compensation decisions.",
      imgUrl: "/services/bonus.webp",
    },
    {
      title: "Productive Workplace",
      description:
        "Our mission is to help you build a workplace where your people thrive. By supporting your employees, we help drive greater productivity and long-term success.",
      imgUrl: "/services/workplace.webp",
    },
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      icon: GraduationCap,
    },
    {
      title: "Cost Efficiency",
      icon: Wallet,
    },
    {
      title: "Flexible Support",
      icon: RefreshCcw,
    },
    {
      title: "Specialized Services",
      icon: Sliders,
    },
    {
      title: "Boosted Productivity",
      icon: TrendingUp,
    },
    {
      title: "Legal Compliance",
      icon: Scale,
    },
  ];

  const hrFaqs = [
    {
      question: "What is HR outsourcing and how can it help my business?",
      answer:
        "HR outsourcing means letting an external team handle some or all of your HR tasks. This helps reduce costs, save time, and ensure your business stays compliant with UAE laws.",
    },
    {
      question: "Is HR outsourcing suitable for small businesses or startups?",
      answer:
        "Yes. HR outsourcing is ideal for small businesses and startups because it provides expert support without the cost of a full-time in-house HR team.",
    },
    {
      question: "Can I choose which HR tasks to outsource?",
      answer:
        "Absolutely. Our services are flexible — you can outsource as much or as little as you need, from payroll to performance appraisals or employee onboarding.",
    },
    {
      question: "Will my business stay compliant with UAE employment laws?",
      answer:
        "Yes. Our team stays up-to-date on UAE labor laws to ensure that your HR processes follow all legal requirements.",
    },
    {
      question: "How do you ensure data privacy and confidentiality?",
      answer:
        "We take data protection seriously. All employee and company information is handled securely, with strict confidentiality at every step.",
    },
    {
      question:
        "Can Dimondra support us with short-term or project-based HR needs?",
      answer:
        "Yes, we offer both ongoing HR support and short-term solutions for specific projects, depending on what your business requires.",
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
          src={"/services/hroperationshero.webp"}
          alt={"Talent Acquisition"}
        />
        <div className="container  tracking-tighter h-full flex flex-col items-start justify-end py-16 relative z-10 text-dimondra-white">
          <h2 className="text-4xl lg:text-5xl font-dmSans tracking-tight leading-[3rem] lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
            Smarter HR Outsourcing for Dubai Businesses
          </h2>
          <p className=" talentPara max-w-3xl mt-2 text-slate-100">
            At Dimondra, we offer modern HR outsourcing services that match
            Dubai&nbsp;s dynamic business world. We help turn your HR functions
            into a key strength that supports your company&nbsp;s success.
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
        heading={"Services We Offer"}
        subHeading={""}
        data={hrServices}
      />
      <div className="container ">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl  text-center font-[600] text-dimondra-black">
            Typical Employee Journey in our Outsourced HR Services
          </h1>
        </div>
        <img src={"/services/process.webp"} alt={""} className="w-full" />
      </div>

      <Process
        data={onboardingSteps}
        heading={"Our Work Process at Dimondra Talent Solutions"}
        subHeading={
          "At Dimondra, we've refined our process to ensure seamless and effective talent acquisition for your business"
        }
      />
      <Choose
        title={"Why Choose Dimondra for HR Outsourcing "}
        desc={
          "At Dimondra, we understand that managing HR can be time-consuming and complex, especially in a fast-moving business environment like Dubai. That's why we offer HR outsourcing solutions designed to make your life easier. By partnering with us, you gain access to a team of experienced HR professionals who not only understand the local laws and regulations but also bring practical insights that can help your business grow. We focus on delivering flexible, cost-effective services that match your exact needs, whether you’re looking for help with everyday HR tasks, project-based support, or expert advice on specific challenges. Our goal is to help you build a workplace where your employees feel supported, your processes run smoothly, and your business can achieve greater productivity without the stress of managing HR in-house. With Dimondra, you can stay focused on what matters most: driving your business forward."
        }
        data={benefits}
      />
      <FAQ
        data={hrFaqs}
        desc={
          "At Dimondra, we know that choosing the right HR outsourcing partner is an important decision. Here are answers to some common questions to help you understand how our services can support your business."
        }
      />
      <HomeForm />
      <CTA
        title={"Let’s Make HR Simple for Your Business"}
        desc={
          "Take the stress out of managing HR. Whether you need ongoing support or help with a specific project, Dimondra is here to help you focus on what matters most — growing your business."
        }
        button={"Get a free consultation"}
      />
    </>
  );
};

export default Page;
