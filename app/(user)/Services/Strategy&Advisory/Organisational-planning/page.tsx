"use client";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import React from "react";

import Industry from "../../(business-service-section)/Industry";
import CTA from "../../(business-service-section)/CTA";
import FAQ from "@/app/(user)/app_chunks/FAQ";
import "@/styles/globals.css";

const industrySectors = [
  {
    title: "Professional Services",
    description:
      "Strategy firms, consultancies, marketing agencies, and legal practices—helping them grow through optimized processes and strategic alignment.",
    imgUrl: "/images/sectors/professional-services.jpg",
  },
  {
    title: "Financial Services & Fintech",
    description:
      "Banking, insurance, finance, and financial technology firms—empowering teams to adapt in a changing regulatory and tech-driven landscape.",
    imgUrl: "/images/sectors/financial-services.jpg",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Providers, labs, hospitals, and biotech companies—supporting quality improvement, training, and agile leadership in mission-driven environments.",
    imgUrl: "/images/sectors/healthcare-life-sciences.jpg",
  },
  {
    title: "Technology & Software",
    description:
      "SaaS companies, software development teams, and IT departments—enhancing productivity, cross-functional collaboration, and scaling practices.",
    imgUrl: "/images/sectors/technology-software.jpg",
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "Production plants, industrial operations, and supply-chain organizations—streamlining workflows and improving operational outcomes.",
    imgUrl: "/images/sectors/manufacturing-industrial.jpg",
  },
  {
    title: "Retail & Consumer Goods",
    description:
      "E‑commerce, retail chains, and consumer product companies—aligning people, structure, and processes to support customer‑centric growth.",
    imgUrl: "/images/sectors/retail-consumer-goods.jpg",
  },
  {
    title: "Education & Nonprofit",
    description:
      "Educational institutions, nonprofit organizations, and mission-driven groups—building organizational resilience and optimizing resource allocation.",
    imgUrl: "/images/sectors/education-nonprofit.jpg",
  },
  {
    title: "Government & Public Sector",
    description:
      "Federal, state, and municipal agencies, strengthening organizational strategy, change readiness, training, and performance measurement.",
    imgUrl: "/images/sectors/government-public-sector.jpg",
  },
];

const organizationalFAQs = [
  {
    question: "What is organizational planning and why is it important?",
    answer:
      "Organizational planning aligns your strategy, structure, and people to improve performance and adaptability. It helps ensure that every part of your business works toward a common goal.",
  },
  {
    question: "How do you tailor your services for different industries?",
    answer:
      "We begin by understanding your unique context—industry, goals, challenges—then customize strategies that are relevant, actionable, and measurable.",
  },
  {
    question: "Can you support us through just one part of the process?",
    answer:
      "Yes. Whether you need help with strategic planning, process improvement, or team training, we offer flexible, targeted support based on where you need it most.",
  },
  {
    question: "Do you offer in-person or remote consulting?",
    answer:
      "We offer both. Our team can work onsite or virtually—whatever suits your organization best.",
  },
  {
    question: "What types of organizations do you typically work with?",
    answer:
      "We partner with clients across various sectors, including technology, healthcare, government, education, finance, and more.",
  },
];

const serviceObj = [
  {
    title: "Direction Setting Services",
    desc: "Our organizational development services include a comprehensive suite of direction-setting capabilities to establish a clear, actionable path forward:",
    arr: [
      {
        title: "Organizational Analysis and Diagnosis",
        desc: "Conduct a deep dive assessment of your current state to pinpoint strengths, gaps, and strategic opportunities.",
      },
      {
        title: "Strategic Planning",
        desc: "Collaborate with your leadership to craft a strategic blueprint aligned with long‑term vision and business objectives.",
      },
      {
        title: "Change Management",
        desc: "Identify potential resistance, design effective mitigation strategies, and guide your organization through transitions with minimal disruption.",
      },
      {
        title: "Stakeholder & Invested-Party Engagement",
        desc: "Facilitate inclusive discussions and engagement with key stakeholders to build consensus, alignment, and commitment.",
      },
      {
        title: "Strategy",
        desc: "",
      },
    ],
  },
  {
    title: "Operational Improvement",
    desc: "We focus on driving continuous improvement across all areas of your organization. At Dimondra, we help streamline workflows, eliminate inefficiencies, enhance productivity, and ensure your operations deliver measurable outcomes.",
    arr: [
      {
        title: "Process Improvement",
        desc: "We support you in developing better processes, policies, and technologies to strengthen operations and boost efficiency.",
      },
      {
        title: "Business Process Mapping",
        desc: "Our team reviews and maps your workflows to uncover bottlenecks, identify gaps, and reveal opportunities for improvement.",
      },
      {
        title: "Performance and Quality Management",
        desc: "We help you measure, monitor, and optimize your outcomes to ensure long-term, sustainable success.",
      },
    ],
  },
  {
    title: "Structural Design",
    desc: "A well-aligned organizational structure boosts engagement, decision-making, and overall efficiency. At Dimondra, we help you build a framework that reflects your team’s needs and supports your strategic goals.",
    arr: [
      {
        title: "Organization Design",
        desc: "From redefining reporting lines to optimizing team configurations and enhancing decision-making, we ensure your structure supports growth and clarity.",
      },
      {
        title: "Supporting HR Programs and Metrics",
        desc: "We create tailored HR programs to drive employee engagement, talent development, and performance, while establishing clear metrics to measure success.",
      },
    ],
  },
  {
    title: "Education and Training",
    desc: "At Dimondra, we deliver impactful learning experiences that empower teams and leaders. Our customized eLearning programs, paired with instructor-led sessions, offer cost-effective, high-quality training. We tailor content to fit your needs, ensuring engagement, knowledge retention, and measurable outcomes.",
    arr: [
      {
        title: "Leadership Development",
        desc: "We help leaders grow through targeted learning in decision-making, communication, and strategic thinking, supported by coaching and mentorship.",
      },
      {
        title: "New Employee Onboarding and Training",
        desc: "Our onboarding programs create a smooth, structured entry for new hires, helping them integrate quickly and confidently.",
      },
      {
        title: "Job Skill Development",
        desc: "We maximize talent development investments by delivering focused training that enhances skills, boosts productivity, and supports long-term growth.",
      },
    ],
  },
];


const Page = () => {
  return (
    <main>
      <section className="relative overflow-hidden h-[85vh]">
        <div className="w-full h-full object-cover absolute inset-0">
          <img
            src={
              "https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?t=st=1751102008~exp=1751105608~hmac=131041420dd9f797c023992a02d4a2fc8f1b8397a4296bcf2a8ee60d07400323&w=2000"
            }
          />
        </div>
        <BgLayer color="bg-gradient-to-t from-slate-800/40 via-transparent to-slate-800/60" />
        <div className="relative z-10 flex h-full flex-col justify-end container items-start py-16">
          <h1 className="text-6xl font-dmSans font-[600] max-w-4xl">
            Organizational Planning That Drives Sustainable Growth
          </h1>

          <p className="max-w-4xl font-quicksand font-[600] mt-3">
            At Dimondra, we help you align your people, processes, and
            priorities to build a stronger, more agile organization. Through
            tailored planning, we guide your leadership teams in creating a
            roadmap that supports long-term goals, drives performance, and
            adapts to change.
          </p>
          <button className="px-5 py-[.4rem] bg-dimondra-black rounded-md mt-5 text-slate-50">
            Get started
          </button>
        </div>
      </section>

      <div className="py-5 bg-dimondra-white">
        <Industry data={industrySectors} desc="" />
      </div>
      <FAQ desc="" data={organizationalFAQs} />
      <CTA
        title={"Let’s Build Your Organization’s Future"}
        desc={
          " Whether you`re restructuring, scaling, or aligning your teams for the future, Dimondra is here to guide you. Our experts are ready to help you create a roadmap that drives impact."
        }
        button="Book a Free Consultation"
      />
    </main>
  );
};

export default Page;
