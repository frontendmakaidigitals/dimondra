"use client";
import React, { useState } from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import { motion } from "motion/react";
import CTA from "../../(business-service-section)/CTA";

import PopForm from "@/app/(user)/app_chunks/PopFrom";

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

  const callCenterFAQs = [
    {
      question: "What types of call center services does Dimondra provide?",
      answer:
        "We offer a full range of services, including 24/7 customer support, sales and pre/post-sale assistance, technical support, appointment setting, refunds and claims processing, loyalty programs, lead generation, order fulfillment, complaint handling, and debt collection.",
    },
    {
      question: "How does Dimondra ensure high-quality customer service?",
      answer:
        "Our teams are highly trained, use the latest technology, including AI tools, and follow strict quality standards. We also provide ongoing coaching and use data-driven insights to continuously improve service.",
    },
    {
      question: "Can Dimondra support customers in multiple languages?",
      answer:
        "Yes, we provide multilingual and bilingual support with agents fluent in English and many other major languages, ensuring seamless communication with your global customers.",
    },
    {
      question: "How does outsourcing to Dimondra help reduce costs?",
      answer:
        "By outsourcing your call center needs to us, you can significantly lower operational expenses related to hiring, training, infrastructure, and technology, while maintaining high service quality.",
    },
    {
      question: "Is my customer data safe with Dimondra?",
      answer:
        "Absolutely. We follow global compliance standards such as PCI DSS, SOC II, ISO, and HIPAA to ensure that your data and your customers’ data are fully protected.",
    },
    {
      question: "Can your call center scale with my business?",
      answer:
        "Yes, Dimondra offers flexible and scalable solutions that can grow or adjust based on your business demands, seasonal needs, or market changes.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We support a wide range of industries, including banking, retail, telecommunications, travel and hospitality, healthcare, technology, utilities, and home improvement sectors.",
    },
    {
      question: "How do I get started with Dimondra’s call center services?",
      answer:
        "Simply fill out the contact form on this page or get in touch with our team. We’ll discuss your specific needs and design a customized solution that fits your business goals.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "Inbound & Outbound Customer Support",
      tagline: "Always connected, always responsive.",
      description: `At Dimondra, we offer complete inbound and outbound customer support services to help your business stay connected with customers at every step. Our trained customer service agents are ready to manage incoming calls, answer questions, solve problems, and handle requests in a friendly and professional way. We also handle outbound services like feedback calls, follow-ups, appointment reminders, and order confirmations to improve your customer experience and keep your brand top of mind. Whether it's voice calls, email support, live chat, or social media messaging, we make sure every communication is fast, accurate, and on-brand. We also manage escalations and tough conversations with care, so your customers always feel heard and supported. Our 24/7 availability means your customers can reach you anytime, which builds trust.`,
      img: "/services/callCenter.jpg",
    },
    {
      title: "Multilingual Support Solutions",
      tagline: "Speak Every Customer's Language with Confidence",
      description: `At Dimondra, we understand that great customer service starts with clear communication. That’s why we offer multilingual support solutions to help your business connect with customers from different language backgrounds. Our trained contact center agents speak multiple languages fluently, making it easier for your customers to explain their concerns and feel heard. Whether you're serving international clients or a diverse local audience, our team ensures every interaction is culturally appropriate, respectful, and efficient. By offering language-specific teams, we help reduce misunderstandings, speed up resolution times, and provide a more personalized customer experience. This leads to higher customer satisfaction, increased loyalty, and better business outcomes. Our multilingual customer service ensures that language is never a barrier between you and your clients, helping your brand grow across regions with trust and clarity.`,
      img: "/services/callCenter2.jpg",
    },
    {
      title: "Technical Helpdesk & Product Support",
      tagline: "Reliable Technical Support That Keeps Your Customers Confident",
      description: `At Dimondra, we provide technical helpdesk and product support services that make it easy for businesses to deliver fast, accurate, and friendly assistance. Our trained support agents are equipped to handle everything from basic tech queries to more complex product issues. Whether your customers need help setting up a product, fixing a software glitch, or understanding a feature, we’re here to guide them with step-by-step solutions. We manage both Level 1 and Level 2 technical support, ensuring that basic and advanced issues are resolved quickly. From creating support tickets and managing escalations to offering remote troubleshooting and walkthroughs, our team works as an extension of your brand. With our technical customer support, your customers get timely, knowledgeable help, improving satisfaction, building trust, and reducing product returns or complaints. Our goal is to keep your users happy, confident, and loyal.`,
      img: "/services/callCenterHero.jpg",
    },
    {
      title: "Customer Retention & Loyalty Programs",
      tagline: "Keep Your Customers Coming Back with Proactive Support",
      description: `At Dimondra, we help businesses retain customers and build long-term relationships through smart customer retention strategies and well-managed loyalty programs. Our team works closely with your customers to make sure they feel valued, heard, and appreciated—key elements for turning one-time buyers into loyal brand supporters. We use proactive engagement, like friendly follow-ups, helpful recommendations, and personalized offers, to keep your audience interested and involved. Our agents are also trained in upselling and cross-selling, making sure your customers are introduced to the right products or services at the right time. We also run win-back campaigns to re-engage customers who haven’t interacted in a while, and collect useful feedback to improve our services. With our support, your business can increase repeat sales, improve customer satisfaction, and build a stronger, more loyal customer base. Our customer retention and loyalty services are designed to grow your brand and boost long-term success.`,
      img: "/services/hroperationshero.jpg",
    },
  ];

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
          className="absolute inset-0 object-right-top w-full h-full object-cover"
          src={"/services/callCenterHero.jpg"}
          alt={"Talent Acquisition"}
        />
        <div className=" relative  z-[3] w-full h-full">
          <div className="container tracking-tighter h-full flex flex-col items-start justify-center py-16 relative z-10 text-dimondra-white">
            <p className="text-sm">
              Customer Service & Contact Center Management
            </p>
            <h2 className="text-3xl lg:text-5xl lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
              We Help You Take Better Care of Your Customers
            </h2>
            <p className=" talentPara max-w-3xl mt-2 text-slate-50">
              At Dimondra, we make it easy for businesses to give great customer
              service. Whether you need help answering customer questions,
              managing high call volumes, or running your entire support center,
              we&nbsp;ve got you covered. Our trained team, smart tools, and
              smooth processes ensure every customer interaction is polite,
              professional, and helpful. With our support, you can keep your
              customers happy and focus more on growing your business.
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
      <div className="container serviceTrigger mx-auto px-4 py-14">
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
      <FAQ data={callCenterFAQs} desc={""} />
      <HomeForm />
      <CTA
        title={"Ready to improve your customer service experience?"}
        desc={
          "Let Dimondra handle your customer service and contact center operations so you can focus on growing your business. With professional agents, smart technology, and flexible solutions, we help you deliver excellent support at every touchpoint."
        }
        button={"Contact us today "}
      />
    </>
  );
};

export default Page;
