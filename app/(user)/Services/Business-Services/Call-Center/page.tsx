"use client";
import React, { useState } from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import { motion } from "motion/react";
import Service from "../../(business-service-section)/service";
import CTA from "../../(business-service-section)/CTA";
import Advantage from "../../(business-service-section)/Advantage";
import Choose from "../../(business-service-section)/Choose";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import {
  DollarSign,
  Building2,
  MessageCircle,
  Users,
  Globe,
  ShieldCheck,
} from "lucide-react";
import FAQ from "@/app/(user)/app_chunks/FAQ";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const services = [
    {
      title: "Inbound Call Center Services",
      description: `Dimondra provides reliable inbound call center solutions that elevate your customer service and drive meaningful engagement. Our skilled agents ensure every call is handled with care, turning inquiries into loyalty and building trust at every touchpoint.`,
      img: "/services/inbound.jpg",
    },
    {
      title: "Outbound Call Center Solutions",
      description: `Our Outbound Call Center Services are designed to connect your business with the right audience, boosting customer acquisition, accelerating revenue, and enhancing loyalty. Whether you're a startup or a growing enterprise, our team helps you reach prospects and existing customers through targeted, high-impact calling strategies.`,
      img: "/services/outbound.jpg",
    },
    {
      title: "AI-Powered Call Centers",

      description: `As one of the leading BPO companies in the region, Dimondra combines human expertise with cutting-edge AI tools like MindVoice and MindSpeech. These advanced technologies help harmonize accents, predict customer needs in real-time, and deliver an exceptional customer experience, every time.`,
      img: "/services/ai-support.jpg",
    },
    {
      title: "24/7 Customer Support / Helpdesk",
      description: `We offer round-the-clock customer service to handle questions, complaints, and requests whenever your customers need help. Our friendly and well-trained agents make sure every caller feels heard, valued, and supported, helping you build strong, lasting relationships.`,

      img: "/services/helpdesk.jpg",
    },
    {
      title: "Sales Support – Before & After Purchase",
      description: `From helping potential buyers understand your products to following up after a sale, our team provides full support throughout the customer journey. We help boost conversions, answer questions, and create trust that leads to repeat business.`,
      img: "/services/sales-support.jpg",
    },
    {
      title: "Appointment Scheduling",
      description: `Our agents can manage your bookings and follow-ups, making sure appointments are set smoothly and on time. With professional handling, your team stays organized and your customers stay informed.`,
      img: "/services/appointments.jpg",
    },
    {
      title: "Refund & Claims Handling",
      description: `We make returns and claims easier for both you and your customers. Our support team handles each case carefully and efficiently, ensuring quick resolutions and protecting your brand’s reputation.`,
      img: "/services/refunds.jpg",
    },
    {
      title: "Loyalty Program Management",
      description: `Keep your customers coming back with engaging loyalty programs. We help you create and manage reward systems that make your audience feel appreciated and connected to your brand.`,
      img: "/services/loyalty.jpg",
    },
    {
      title: "Technical Support",
      description: `Got a product issue? Our skilled agents are ready to solve technical problems, whether it's software or hardware, ensuring your customers get the help they need without long wait times or confusion.`,
      img: "/services/tech-support.jpg",
    },
    {
      title: "Lead Generation",
      description: `Let us help you find and qualify the right prospects. Our lead generation services feed your sales team with high-potential leads so they can focus on closing deals and growing your business.`,
      img: "/services/leads.jpg",
    },
    {
      title: "Order Processing & Fulfillment",
      description: `We take care of the behind-the-scenes work, from order tracking to delivery coordination, so your customers enjoy a smooth and reliable shopping experience.`,
      img: "/services/order.jpg",
    },
    {
      title: "Customer Complaints & Escalations",
      description: `Every complaint is a chance to improve. Our support team handles concerns with care and professionalism, resolving issues quickly and turning unhappy customers into loyal ones.`,
      img: "/services/escalations.jpg",
    },
    {
      title: "Debt Collection Support",
      description: `Recovering payments doesn’t have to damage relationships. Our team handles collections respectfully and effectively, helping you improve your cash flow while maintaining a positive image.`,
      img: "/services/debt-collection.jpg",
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

  return (
    <>
      {/* Pop-up Form */}
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Hero Section */}
      <motion.div className="w-full h-[90vh] relative">
        <BgLayer color="bg-slate-900/60 lg:bg-gradient-to-l from-transparent from-[0%] to-teal-950 to-[60%] z-[2]" />
        <img
          className="absolute inset-0 object-right-top w-full h-full object-cover"
          src="/services/callCenterHero.jpg"
          alt="Talent Acquisition"
        />
        <div className="relative z-[3] w-full h-full">
          <div className="container tracking-tighter h-full flex flex-col items-start justify-end py-16 text-dimondra-white">
            <p className="text-sm">HR Outsourcing Services in Dubai</p>
            <p className="text-sm">
              Customer Service & Contact Center Management
            </p>
            <h2 className="text-3xl lg:text-5xl lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
              Enhance Customer Experience with World-Class Call Center Support
            </h2>
            <p className="talentPara max-w-3xl mt-2 text-slate-50">
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
              className="px-5 py-2 rounded-lg border border-dimondra-white transition-colors duration-200 hover:border-dimondra-tealDark hover:bg-dimondra-tealDark mt-5"
            >
              Discover Our Services
            </button>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <Service
        data={services}
        desc="At Dimondra, our call center support solutions are designed to help your business run smoother, grow faster, and keep customers happy. Here's how we can support you:"
      />

      <Choose
        data={features}
        title="Why Outsource Your Call Center to Dimondra?"
        desc="Outsourcing your customer support to Dimondra gives you access to cost-effective, scalable, and high-quality solutions..."
      />

      <Advantage
        img1="/services/callCenter1.jpg"
        img2="/services/callCenter2.jpg"
        data={advantage}
        title="Dimondra – Your Trusted Call Center Outsourcing Partner"
        description="Dimondra is your trusted partner for reliable and future-ready call center outsourcing..."
      />

      <FAQ data={callCenterFAQs} desc="" />

      <HomeForm />

      <CTA
        title="Ready to improve your customer service experience?"
        desc="Let Dimondra handle your customer service and contact center operations..."
        button="Contact us today"
      />
    </>
  );
};

export default Page;
