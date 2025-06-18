"use client";
import React from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import { motion } from "motion/react";
import { Headphones, HandCoins, Check, ArrowRight } from "lucide-react";
import CTA from "../../app_chunks/CTA";
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
import FAQ from "../../app_chunks/FAQ";
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
  const services = [
    {
      title: "24/7 Customer Service / Helpdesk",
      description:
        "Our Philippines call center provides unparalleled customer support to address real-time inquiries, complaints, and requests. Fusion CX ensures customer satisfaction by leveraging trained agents who excel in communication and empathy. With 24/7 availability, your customers receive the attention they deserve, boosting retention and loyalty while maintaining a solid brand reputation.",
      icon: Headphones,
    },
    {
      title: "Sales / Pre-Sale & After-Sale Support",
      description:
        "Increase conversions with Fusion CX’s sales support services. Our team professionally engages prospects and customers from pre-sale inquiries to post-sale follow-ups. We create a seamless buying experience that fosters customer trust and long-term relationships by addressing questions, recommending products, and solving issues.",
      icon: HandCoins,
    },
  ];

  return (
    <>
      <motion.div className="w-full h-[90vh] relative">
        <BgLayer
          color={
            "bg-gradient-to-l from-transparent from-[0%] to-teal-950 to-[60%] z-[2] "
          }
        />
        <img
          className="absolute inset-0 object-top w-full h-full object-cover"
          src={
            "https://images.unsplash.com/photo-1573495804669-ec82ad00f327?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"Talent Acquisition"}
        />
        <div className=" relative  z-[3] w-full h-full">
          <div className="container   tracking-tighter h-full flex flex-col items-start justify-center py-16 relative z-10 text-dimondra-white">
            <p className="text-sm">HR Outsourcing Services in Dubai</p>
            <h2 className="text-5xl leading-[3.5rem] max-w-2xl talentHead font-[600]">
              Smarter HR Outsourcing for Dubai Businesses
            </h2>
            <p className=" talentPara max-w-3xl mt-2 text-slate-50">
              At Dimondra, we offer modern HR outsourcing services that match
              Dubai&nbsp;s dynamic business world. We help turn your HR
              functions into a key strength that supports your company&nbsp;s
              success.
            </p>
            <button
              className="px-5 py-2 rounded-lg border border-dimondra-white transition-colors duration-200
         hover:border-dimondra-tealDark hover:bg-dimondra-tealDark mt-5"
            >
              Discover Our Services
            </button>
          </div>
        </div>
      </motion.div>
      <div className="container my-20">
        <h1 className="text-5xl font-[600] text-dimondra-black tracking-tight text-center">
          Our Services
        </h1>
        <div className="grid  grid-cols-1 gap-5 mt-10 lg:grid-cols-2">
          {services.map(({ title, description, icon: Icon }, idx) => (
            <div className="" key={idx}>
              <div className="flex items-start gap-5">
                <div className=" bg-slate-200 rounded-lg p-2">
                  <Icon className="size-[40px] stroke-dimondra-teal" />
                </div>
                <h2 className="mt-3 text-2xl font-[600]">{title}</h2>
              </div>
              <p className="mt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-20 mb-40">
        <h1 className="text-center text-5xl font-[600]">Industry we serve</h1>
        <div className="grid grid-cols-1 gap-5 mt-12 lg:grid-cols-4">
          <div className="w-full relative h-[300px] ">
            <img
              src={
                "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="w-full h-full object-cover"
              alt={""}
            />
            <div className="absolute w-[95%] left-1/2 -translate-x-1/2 rounded-lg  bottom-0 translate-y-1/2 p-4 bg-white">
              <Headphones className="absolute stroke-white size-12 right-2 bg-dimondra-teal rounded-full p-2 -top-6" />
              <h3 className="text-xl font-[600]">
                {" "}
                Smarter HR Outsourcing for Dubai Businesses
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, a. Autem deserunt hic earum, totam, eum rem facere
                possimus accusantium ducimus laborum quisquam veritatis!
                Corrupti rem cum odio illo iure.
              </p>
            </div>
          </div>
          <div className="w-full relative h-[300px] ">
            <img
              src={
                "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="w-full h-full object-cover"
              alt={""}
            />
            <div className="absolute w-[95%] left-1/2 -translate-x-1/2 rounded-lg  bottom-0 translate-y-1/2 p-4 bg-white">
              <Headphones className="absolute stroke-white size-12 right-2 bg-dimondra-teal rounded-full p-2 -top-6" />
              <h3 className="text-xl font-[600]">
                {" "}
                Smarter HR Outsourcing for Dubai Businesses
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, a. Autem deserunt hic earum, totam, eum rem facere
                possimus accusantium ducimus laborum quisquam veritatis!
                Corrupti rem cum odio illo iure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-56 container grid grid-cols-1 gap-14 lg:grid-cols-2 ">
        <div>
          {" "}
          <h1 className="text-6xl font-[600]">
            Building quality through industrial innovation
          </h1>
          <div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              error nisi veritatis eum id mollitia soluta ratione nesciunt
              voluptatem veniam, impedit voluptatibus incidunt nemo maxime
              inventore ducimus deleniti repellendus aliquam.impedit
              voluptatibus incidunt nemo maxime inventore ducimus deleniti
              repellendus aliquam.
            </p>

            <ul className="mt-8">
              {Array.from({ length: 4 }).map((_, idx) => (
                <li key={idx} className="mt-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-md p-1">
                      <Check className="stroke-white size-4" />
                    </div>
                    <p>Lorem ipsum dolor sit, amet .</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-8 border-2 pl-4 rounded-lg border-black  flex items-center gap-2">
              Learn more{" "}
              <span className="bg-black p-2">
                <ArrowRight className="stroke-white" />
              </span>
            </button>
          </div>
        </div>

        <div className="h-auto relative w-full ">
          <div className="bg-slate-100 overflow-hidden w-[340px] h-[210px] absolute top-0 left-0 rounded-2xl">
            <img
              src={
                "https://images.unsplash.com/photo-1638727295415-286409421143?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-400 w-[400px] overflow-hidden border-4 border-[#eef7ff] right-0 h-[500px] absolute top-32  rounded-2xl">
            <img
              src={
                "https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <FAQ data={hrFaqs} desc={""} />
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
