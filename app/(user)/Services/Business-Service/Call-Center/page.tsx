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
  Headphones,
  HandCoins,
  CalendarClock,
  RotateCcw,
  Target,
  Gift,
  Settings,
  PackageCheck,
  AlertCircle,
  DollarSign,
  Building2,
  MessageCircle,
  Users,
  Globe,
  ShieldCheck,
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

  const services = [
    {
      title: "24/7 Customer Support / Helpdesk",
      description:
        "We offer round-the-clock customer service to handle questions, complaints, and requests whenever your customers need help. Our friendly and well-trained agents make sure every caller feels heard, valued, and supported, helping you build strong, lasting relationships.",
      icon: Headphones,
    },
    {
      title: "Sales Support – Before & After Purchase",
      description:
        "From helping potential buyers understand your products to following up after a sale, our team provides full support throughout the customer journey. We help boost conversions, answer questions, and create trust that leads to repeat business.",
      icon: HandCoins,
    },
    {
      title: "Appointment Scheduling",
      description:
        "Our agents can manage your bookings and follow-ups, making sure appointments are set smoothly and on time. With professional handling, your team stays organized and your customers stay informed.",
      icon: CalendarClock,
    },
    {
      title: "Refund & Claims Handling",
      description:
        "We make returns and claims easier for both you and your customers. Our support team handles each case carefully and efficiently, ensuring quick resolutions and protecting your brand’s reputation.",
      icon: RotateCcw,
    },
    {
      title: "Loyalty Program Management",
      description:
        "Keep your customers coming back with engaging loyalty programs. We help you create and manage reward systems that make your audience feel appreciated and connected to your brand.",
      icon: Gift,
    },
    {
      title: "Technical Support",
      description:
        "Got a product issue? Our skilled agents are ready to solve technical problems, whether it's software or hardware, ensuring your customers get the help they need without long wait times or confusion.",
      icon: Settings,
    },
    {
      title: "Lead Generation",
      description:
        "Let us help you find and qualify the right prospects. Our lead generation services feed your sales team with high-potential leads so they can focus on closing deals and growing your business.",
      icon: Target,
    },
    {
      title: "Order Processing & Fulfillment",
      description:
        "We take care of the behind-the-scenes work, from order tracking to delivery coordination, so your customers enjoy a smooth and reliable shopping experience.",
      icon: PackageCheck,
    },
    {
      title: "Customer Complaints & Escalations",
      description:
        "Every complaint is a chance to improve. Our support team handles concerns with care and professionalism, resolving issues quickly and turning unhappy customers into loyal ones.",
      icon: AlertCircle,
    },
    {
      title: "Debt Collection Support",
      description:
        "Recovering payments doesn’t have to damage relationships. Our team handles collections respectfully and effectively, helping you improve your cash flow while maintaining a positive image.",
      icon: DollarSign,
    },
  ];

  const industryServices = [
    {
      title: "Banking, Financial Services & Insurance",
      description:
        "We help financial institutions deliver secure, reliable, and fast customer support. Whether it’s banking services, loans, or insurance queries, our trained teams ensure smooth communication, improved efficiency, and greater customer trust.",
      imgUrl: "/services/financial-services.jpg",
    },
    {
      title: "Retail & Ecommerce",
      description:
        "From helping shoppers find the right product to handling returns, we offer full-service customer support that keeps buyers satisfied. Our solutions help online and retail businesses boost sales, build loyalty, and deliver a better shopping experience.",
      imgUrl: "/services/ecommerce.jpg",
    },
    {
      title: "Telecommunications",
      description:
        "We manage service requests, troubleshoot issues, and support billing or subscription queries—so telecom companies can stay connected with their customers and reduce churn with ease.",
      imgUrl: "/services/telelcommunication.jpg",
    },
    {
      title: "Travel, Tourism & Hospitality",
      description:
        "Dimondra’s support services help your guests and travelers with bookings, changes, and questions, delivering smooth, friendly, and stress-free experiences. Whether it’s hotels, airlines, or travel agencies, we make sure your customers feel taken care of.",
      imgUrl: "/services/travel-tourism.jpg",
    },
    {
      title: "Healthcare",
      description:
        "We support healthcare providers with reliable patient services, like appointment scheduling, claims processing, and inquiry handling. Our services improve communication, reduce wait times, and help deliver better care experiences.",
      imgUrl: "/services/healthcare.jpg",
    },
    {
      title: "Technology & Software",
      description:
        "Tech companies rely on us to manage customer service, tech support, and lead generation. Our flexible and scalable support allows high-growth businesses to stay focused on innovation while we handle user engagement.",
      imgUrl: "/services/Technology.jpg",
    },
    {
      title: "Utilities & Energy Providers",
      description:
        "From billing questions to service changes, we help utility companies deliver consistent and professional customer support. Our goal is to ensure smooth service operations and satisfied end-users.",
      imgUrl: "/services/utilities.jpg",
    },
    {
      title: "Home Improvement & Services",
      description:
        "We support brands in the home improvement space by handling inquiries, orders, and post-sale service. Whether your customers are homeowners or contractors, we ensure they get the help they need quickly and professionally.",
      imgUrl: "/services/home.jpg",
    },
  ];
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

  const advantage = [
    "Omnichannel Customer Support",
    "Operational Flexibility",
    "AI-Powered Efficiency",
    "Insight-Driven Strategy",
    "Multilingual Capapbilities",
    "Scalable Service Models",
    "Trusted Data Protection",
    "Business Continuity",
  ];
  const features = [
    {
      title: "Cost Efficiency",
      description:
        "Lower your operational costs by up to 50% without compromising service quality. Our outsourcing model allows you to scale your support team affordably while maintaining excellent performance and customer care.",
      icon: DollarSign,
    },
    {
      title: "Business-Friendly Environment",
      description:
        "Work with a partner backed by a strong operational infrastructure and a business-first mindset. At Dimondra, we invest in systems, technology, and practices that help our clients grow smoothly and sustainably.",
      icon: Building2,
    },
    {
      title: "Excellent Communication Skills",
      description:
        "Our support teams are fluent in English and trained in customer-first communication, making it easy to serve global audiences and provide a seamless experience across languages and time zones.",
      icon: MessageCircle,
    },
    {
      title: "Experienced & Skilled Teams",
      description:
        "We bring you access to well-trained professionals with a strong background in customer service, sales, and technical support. Our team adapts quickly to your business needs and consistently delivers top-tier service.",
      icon: Users,
    },
    {
      title: "Cultural Understanding",
      description:
        "We hire teams with strong cultural awareness and alignment to Western markets. This results in more natural interactions, improved customer satisfaction, and fewer communication barriers.",
      icon: Globe,
    },
    {
      title: "Data Security & Compliance",
      description:
        "Your business and customer data are safe with us. Dimondra complies with global standards such as ISO, PCI, SOC II, and HIPAA, ensuring complete security and privacy at every step.",
      icon: ShieldCheck,
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
          className="absolute inset-0 object-right-top w-full h-full object-cover"
          src={"/services/callCenterHero.jpg"}
          alt={"Talent Acquisition"}
        />
        <div className=" relative  z-[3] w-full h-full">
          <div className="container tracking-tighter h-full flex flex-col items-start justify-center py-16 relative z-10 text-dimondra-white">
            <p className="text-sm">HR Outsourcing Services in Dubai</p>
            <h2 className="text-3xl lg:text-5xl lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
              Enhance Customer Experience with World-Class Call Center Support
            </h2>
            <p className=" talentPara max-w-3xl mt-2 text-slate-50">
              Delivering exceptional customer interactions starts with the right
              support partner. At Dimondra, we provide scalable, cost-effective
              call center solutions that help businesses streamline operations
              and exceed customer expectations. From technical support to sales
              assistance and inbound service queries, our expert teams are
              trained to deliver consistent, high-quality service around the
              clock.
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
        data={services}
        desc={
          "At Dimondra, our call center support solutions are designed to help your business run smoother, grow faster, and keep customers happy. Here`s how we can support you:"
        }
      />
      <Industry data={industryServices} />
      <Choose
        data={features}
        title={"Why Outsource Your Call Center to Dimondra?"}
        desc={
          "Outsourcing your customer support to Dimondra gives you access to cost-effective, scalable, and high-quality solutions, so you can focus on growing your business while we handle the conversations that matter."
        }
      />
      <Advantage
        img1="/services/callCenter1.jpg"
        img2="/services/callCenter2.jpg"
        data={advantage}
        title={"Dimondra – Your Trusted Call Center Outsourcing Partner"}
        description={
          "Dimondra is your trusted partner for reliable and future-ready call center outsourcing. Our solutions are designed to help businesses connect better with their customers, operate with greater flexibility, and scale effortlessly. From handling support across multiple channels to integrating smart AI tools and offering multilingual capabilities, we ensure every interaction adds value. Our services are built on a foundation of secure data practices, business continuity planning, and actionable insights, giving you full confidence in our ability to deliver, adapt, and grow with your business."
        }
      />
      <FAQ data={callCenterFAQs} desc={""} />
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
