"use client";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import React, { useState } from "react";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import Industry from "../../(business-service-section)/Industry";
import CTA from "../../(business-service-section)/CTA";
import FAQ from "@/app/(user)/app_chunks/FAQ";
import Service from "../(sections)/service";
import "@/styles/globals.css";
import About from "../(sections)/About";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import { AnimatePresence } from "framer-motion";
import {
  Users,
  UserPlus,
  GaugeCircle,
  BriefcaseBusiness,
  BookOpenCheck,
  Smile,
  Repeat,
} from "lucide-react";
import AreaOfExpertise from "../(sections)/AreaOfExpertise";
const industrySectors = [
  {
    title: "Professional Services",
    description:
      "Helping consultancies, legal firms, and agencies recruit and retain high-impact talent.",
    imgUrl: "/services/callCenter.jpg",
  },
  {
    title: "Financial Services & Fintech",
    description:
      "Supporting agile workforce strategies in fast-paced, regulated environments.",
    imgUrl: "/services/financial-services.jpg",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Building clinical and non-clinical talent pipelines for resilient care delivery.",
    imgUrl: "/services/healthcare.jpg",
  },
  {
    title: "Technology & Software",
    description:
      "Driving skills development and engagement in competitive, innovation-driven teams.",
    imgUrl: "/services/it2.jpg",
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "Enhancing workforce planning, safety training, and performance management.",
    imgUrl: "/services/manufacturing.jpg",
  },
  {
    title: "Retail & Consumer Goods",
    description:
      "Aligning people, customer experience, and brand through strategic talent planning.",
    imgUrl: "/services/retail.jpg",
  },
  {
    title: "Education & Nonprofit",
    description:
      "Strengthening mission-aligned hiring, leadership development, and retention.",
    imgUrl: "/services/education.jpg",
  },
  {
    title: "Government & Public Sector",
    description:
      "Enhancing performance and accountability through workforce modernization.",
    imgUrl: "/services/govt.jpg",
  },
];

const TalentFAQs = [
  {
    question: "What industries does Dimondra serve?",
    answer:
      "We work across a variety of sectors, including tech, finance, healthcare, education, and manufacturing. Our solutions are adaptable to your specific organizational needs.",
  },
  {
    question: "How are your consulting services delivered?",
    answer:
      "Our services are available in-person, virtually, or in hybrid formats based on your preference and location.",
  },
  {
    question: "Do you offer customized talent solutions?",
    answer:
      "Yes. Every organization is unique, so we tailor our approach to align with your strategy, structure, and goals.",
  },
  {
    question: "How soon can we start?",
    answer:
      "After an initial consultation, we can typically begin within 1–2 weeks, depending on your requirements.",
  },
  {
    question: "Is there support after implementation?",
    answer:
      "Absolutely. We offer ongoing support, coaching, and training to ensure long-term impact and success.",
  },
];

const serviceObj = [
  {
    title: "Talent Management Services",
    desc: "We offer a robust suite of Talent Management solutions designed to align people strategies with organizational goals:",
    img: "/services/talent-management.jpg",
    arr: [
      {
        title: "Strategic Workforce Planning",
        desc: "Develop forward-looking talent strategies based on business goals, market trends, and internal capabilities.",
      },
      {
        title: "Full-Cycle Recruitment Support",
        desc: "Design efficient, equitable hiring processes that enhance candidate experience and employer brand.",
      },
      {
        title: "Performance Management System Design",
        desc: "Create systems that support meaningful feedback, goal alignment, and development at every level.",
      },
    ],
  },
  {
    title: "Leadership & Talent Growth Solutions",
    desc: "Empower your organization from the inside out. Dimondra’s solutions help you identify future leaders, develop key talent, and foster a culture where growth and engagement thrive.",
    img: "/services/growth-people.jpg",
    arr: [
      {
        title: "Succession Planning",
        desc: "Identify, assess, and develop internal talent pipelines to support business continuity and growth.",
      },
      {
        title: "Leadership Coaching & Training",
        desc: "Provide leaders with practical tools, real-time feedback, and personalized development plans.",
      },
      {
        title: "Competency Frameworks & Career Pathing",
        desc: "Clarify role expectations and career progression to increase engagement and development.",
      },
      {
        title: "Culture & Engagement Strategies",
        desc: "Measure engagement, strengthen communication, and foster inclusive, purpose-driven workplaces.",
      },
    ],
  },
  {
    title: "In-house Training Academy & Learning Needs Analysis",
    desc: "We help organizations design and implement in-house training academies tailored to their strategic goals. Our structured approach ensures relevant, high-impact learning experiences that strengthen skills, support growth, and enhance performance.",
    img: "/services/training.jpg",
    arr: [
      {
        title: "Training Academy Design & Implementation",
        desc: "We support you in establishing an in-house training academy, from governance and curriculum planning to digital infrastructure and content development, designed to build internal capability at scale.",
      },
      {
        title: "Learning Needs Analysis",
        desc: "Our consultants assess organizational needs, team capabilities, and individual learning priorities to shape a training roadmap that delivers impact and supports long-term performance.",
      },
      {
        title: "Customized Curriculum Development",
        desc: "We design targeted learning modules, including eLearning, workshops, and hybrid formats, tailored to your industry, roles, and business objectives.",
      },
      {
        title: "Learning Technology Integration",
        desc: "From LMS selection to content digitization, we help integrate technology that enhances accessibility, engagement, and learning measurement.",
      },
    ],
  },
];

const AOE = [
  {
    title: "Workforce Planning",
    desc: "We help you forecast talent needs, identify critical roles, and create scalable workforce plans. Our data-informed planning ensures you have the right people, in the right roles, at the right time.",
    icon: Users,
  },
  {
    title: "Talent Acquisition",
    desc: "From employer branding to interview design, we support you in building a hiring process that is inclusive, effective, and competitive, so you can consistently bring in the talent your organization needs to thrive.",
    icon: UserPlus,
  },
  {
    title: "Performance Management",
    desc: "We help design and implement performance systems that reinforce goals, encourage feedback, and support employee development, fostering a culture of high performance and continuous improvement.",
    icon: GaugeCircle,
  },
  {
    title: "Leadership Development",
    desc: "Through coaching, workshops, and strategic mentoring programs, we help emerging and senior leaders build the skills, mindsets, and resilience they need to lead with impact.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Learning & Development",
    desc: "Our learning programs combine eLearning, instructor-led training, and on-the-job support. Whether you're upskilling employees or strengthening cross-functional capabilities, we help make learning part of your culture.",
    icon: BookOpenCheck,
  },
  {
    title: "Employee Engagement & Retention",
    desc: "We analyze engagement trends, identify turnover risks, and develop programs to enhance employee satisfaction. From culture-building to recognition programs, we help you create an environment where people want to stay.",
    icon: Smile,
  },
  {
    title: "Change Management",
    desc: "Whether you're launching new systems or restructuring teams, we help you manage the people side of change. Our approach emphasizes communication, readiness, and adoption, minimizing disruption and building buy-in.",
    icon: Repeat,
  },
];
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="relative">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />

      <section className="relative overflow-hidden h-[85vh]">
        <div className="w-full h-full object-cover absolute inset-0">
          <img
            src={"/bg-strategy.jpg"}
            alt={""}
            className="w-full h-full object-cover"
          />
        </div>
        <BgLayer color="bg-gradient-to-t from-slate-800/40 via-transparent to-slate-800/60" />
        <div className="relative z-10 flex h-full flex-col justify-end container items-start py-16">
          <h1 className="text-4xl lg:text-6xl font-dmSans font-[600] max-w-4xl">
            Talent Management Consulting
          </h1>

          <p className="max-w-3xl font-quicksand font-[600] mt-3">
            Talent management blends both strategic insight and practical tools,
            and every organization&apos;s needs are unique; there is no
            “one-size-fits-all.” Dimondra offers customized consulting solutions
            designed to align with your organization&apos;s goals, backed by
            years of experience and proven frameworks to help you achieve
            lasting success.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-[.4rem] bg-dimondra-black rounded-md mt-5 text-slate-50"
          >
            Get started
          </button>
        </div>
      </section>
      <About
        title={"Build a Workforce That Grows With You"}
        desc={
          "Your people are the foundation of your organization’s success. At Dimondra, we partner with you to create talent strategies that not only meet today’s needs but support future growth. Our comprehensive approach brings together workforce planning, performance management, leadership development, and employee engagement, helping you build a resilient, motivated, and future-ready team. \n We tailor our solutions to fit your unique culture and goals, whether you're scaling rapidly, navigating change, or strengthening leadership pipelines."
        }
        img={"/services/callCenter2.jpg"}
      />
      <AreaOfExpertise
        title="Areas of Expertise"
        desc="At Dimondra, we understand that Talent Management is not one-size-fits-all. That’s why we offer a flexible, modular approach, providing targeted solutions and strategic guidance to help you meet workforce challenges with confidence."
        data={AOE}
      />
      <Service data={serviceObj} />
      <section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center container gap-10">
          <div>
            <h2 className="text-5xl font-dmSans font-[500]">
              Our Talent Management Mission
            </h2>
            <p className="mt-3">
              At Dimondra, our mission is to help organizations thrive through
              better people practices. We believe that when individuals succeed,
              organizations succeed. That’s why our work focuses on aligning
              talent with purpose through smart strategy, empowering tools, and
              human-centered design. We help build workplaces where people grow,
              teams perform, and organizations lead with clarity and confidence.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-6">
            {[
              {
                text: "Identify and attract talents",
                gradient:
                  "bg-gradient-to-b from-[#818cf8] via-[#6366f1] to-[#2563eb]",
              },
              {
                text: "Build a talent management policy",
                gradient:
                  "bg-gradient-to-bl from-[#65a30d] via-[#16a34a] to-[#15803d]",
              },
              {
                text: "Support talent growth",
                gradient:
                  "bg-gradient-to-tl from-[#c2410c] via-[#f97316] to-[#fdba74]",
              },
            ].map((text, idx) => (
              <li
                key={idx}
                className={`w-full aspect-square  rounded-full p-[2px] ${text.gradient} shadow-md`}
              >
                <div className="bg-blue-50 rounded-full w-full h-full flex justify-center items-center">
                  {" "}
                  <p
                    className={`text-center inline-block bg-clip-text text-transparent text-sm lg:text-2xl font-dmSans font-[500] px-4 ${text.gradient}`}
                  >
                    {text.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="py-5 bg-dimondra-white">
        <Industry data={industrySectors} desc="" />
      </div>

      <FAQ desc="" data={TalentFAQs} />
      <HomeForm />
      <CTA
        title={"Ready to Transform Your Talent Strategy?"}
        desc={
          "Let Dimondra be your trusted partner in unlocking growth, engagement, and leadership potential."
        }
        button="Book a Free Consultation"
      />
    </main>
  );
};

export default Page;
