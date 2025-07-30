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
import Process from "../../(sections)/process";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import {
  Briefcase,
  Scale,
  Users,
  Rocket,
  Sparkles,
  Trophy,
  BarChart3,
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

  const digitalMarketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your visibility on search engines and attract high-intent organic traffic with proven SEO tactics.",
      img: "/services/seo.webp",
    },
    {
      title: "Search Engine Marketing (SEM / PPC)",
      description:
        "Generate instant traffic and leads with paid search campaigns, including Google Ads and display advertising.",
      img: "/services/sem.webp",
    },
    {
      title: "Social Media Marketing (SMM)",
      description:
        "Build brand awareness, community engagement, and lead generation across platforms like Instagram, Facebook, LinkedIn, and X.",
      img: "/services/social-media.webp",
    },
    {
      title: "Mobile App Marketing (ASO)",
      description:
        "Boost your app’s performance with App Store Optimization strategies that drive more installs and better rankings.",
      img: "/services/app-marketing.webp",
    },
    {
      title: "Guest Posting",
      description:
        "Strengthen your SEO with high-authority backlinks through our premium guest post services.",
      img: "/services/gues-post.jpg",
    },
    {
      title: "Content Marketing",
      description:
        "Craft engaging and SEO-rich content that builds brand authority and nurtures potential customers.",
      img: "/services/content-marketing.webp",
    },
    {
      title: "Email Marketing",
      description:
        "Deliver personalized email campaigns that drive conversions, retention, and long-term customer relationships.",
      img: "/services/email.webp",
    },
    {
      title: "Influencer Marketing",
      description:
        "Partner with trusted influencers to amplify your message and build authentic connections with your target audience.",
      img: "/services/influencer.webp",
    },
    {
      title: "Online Reputation Management (ORM)",
      description:
        "Protect and enhance your brand’s online presence with strategic reputation and review management.",
      img: "/services/review-managment.webp",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Turn more website visitors into paying customers with data-driven UX improvements and A/B testing.",
      img: "/services/optimisation.webp",
    },
    {
      title: "Web Analytics & Reporting",
      description:
        "Track, measure, and optimize your marketing performance with actionable insights and custom reports.",
      img: "/services/web-analytics.webp",
    },
    {
      title: "Marketing Automation",
      description:
        "Streamline your campaigns with automation tools that save time and maximize impact across channels.",
      img: "/services/marketing.webp",
    },
  ];

  const marketingProcessSteps = [
    {
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business, audience, and goals to build a custom digital marketing strategy that fits.",
      imgUrl: "/services/assesment.webp",
    },
    {
      title: "Agile Execution",
      description:
        "Our team rapidly launches and iterates campaigns, ensuring quality and speed without sacrificing results.",
      imgUrl: "/services/business-development.webp",
    },
    {
      title: "Transparent Reporting",
      description:
        "Stay informed with clear performance reports, real-time tracking, and regular check-ins.",
      imgUrl: "/services/virtualAssistant.webp",
    },
    {
      title: "Performance Optimization",
      description:
        "We continuously analyze and optimize for better engagement, traffic, and ROI, all aligned with your KPIs.",
      imgUrl: "/services/performance.webp",
    },
  ];

  const digitalMarketingFAQs = [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We provide SEO, PPC, social media marketing, content marketing, email campaigns, influencer marketing, and more.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Timelines vary by service, but SEO typically shows results within 3–6 months, while paid ads and social media can deliver faster impact.",
    },
    {
      question: "Do you customize strategies for different industries?",
      answer:
        "Yes, all our marketing plans are tailored to your industry, audience, and business goals.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We track key metrics like traffic, leads, conversions, and ROI, and provide regular, transparent reports.",
    },
    {
      question: "Can you manage my social media accounts?",
      answer:
        "Absolutely, we offer full social media management, including content creation, posting, and engagement.",
    },
    {
      question: "Do you offer local SEO services?",
      answer:
        "Yes, we specialize in local SEO to help businesses attract nearby customers effectively.",
    },
    {
      question: "Is there a minimum contract period?",
      answer:
        "We offer flexible plans to suit your needs, including monthly and long-term contracts.",
    },
    {
      question: "How do you handle communication and reporting?",
      answer:
        "You’ll receive regular updates, performance reports, and have direct access to your dedicated account manager.",
    },
  ];

  const marketingBenefits = [
    {
      title: "Cost-Effective & Scalable",
      description:
        "Get agency-level expertise at a fraction of the cost, with flexible plans that grow with your business.",
      icon: Scale,
    },
    {
      title: "Access to Specialists",
      description:
        "Work with experienced SEO experts, content strategists, ad managers, designers, and analysts, all under one roof.",
      icon: Users,
    },
    {
      title: "Faster Time-to-Market",
      description:
        "Our agile approach ensures campaigns launch quickly, keeping you ahead of the competition.",
      icon: Rocket,
    },
    {
      title: "Focus on Core Business",
      description:
        "While we manage your digital presence, you can focus on running and expanding your business.",
      icon: Briefcase,
    },
    {
      title: "Latest Tools & Trends",
      description:
        "Stay updated with the latest marketing technologies, platforms, and strategies, without lifting a finger.",
      icon: Sparkles,
    },
    {
      title: "Proven Track Record",
      description:
        "We’ve helped businesses across industries grow their traffic, leads, and revenue through tested digital methods.",
      icon: Trophy,
    },
   
  ];

  const marketingHighlights = [
    "Expert digital marketing team",
    "Customized strategies for your business",
    "Transparent reporting and communication",
    "Proven results across industries",
    "Data-driven and ROI-focused",
    "Full-service marketing solutions",
    "Flexible and scalable plans",
    "Latest tools and industry trends",
    "Dedicated account management",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.div className="w-full h-[90vh] relative">
        <BgLayer
          color={
            "bg-slate-900/70 lg:bg-gradient-to-l from-transparent from-[0%] to-teal-950 to-[60%] z-[2] "
          }
        />
        <img
          className="absolute inset-0 object-bottom w-full h-full object-cover"
          src={"/services/digitalMarketing.webp"}
          alt={"Talent Acquisition"}
        />
        <div className=" relative  z-[3] w-full h-full">
          <div className="container tracking-tighter h-full flex flex-col items-start justify-center py-16 relative z-10 text-dimondra-white">
            <h2 className="text-3xl lg:text-5xl lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
              Digital Marketing Services That Drive Real Results
            </h2>
            <p className=" talentPara max-w-3xl mt-2 text-slate-50">
              At Dimondra, we help you attract the right audience, increase
              engagement, and turn traffic into revenue. From SEO and social
              media to paid ads and content marketing, our data-driven
              strategies are designed to grow your brand and boost ROI. Whether
              you&nbsp;re launching, scaling, or dominating your market, our
              digital experts are here to make it happen.
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
        data={digitalMarketingServices}
        desc={""}
        title={
          "Build Trust & Credibility with Smart Digital Marketing Strategies"
        }
      />

      <Process
        data={marketingProcessSteps}
        heading="How We Work"
        subHeading="We combine data, creativity, and performance to deliver real digital growth. Our 4-step approach keeps your goals at the center of everything we do.
"
      />
      <Choose
        data={marketingBenefits}
        title={"Why Outsource Digital Marketing Services to Dimondra?"}
        desc={
          "Outsourcing your digital marketing to Dimondra means gaining a strategic partner dedicated to driving growth, boosting visibility, and delivering measurable results, without the overhead of building an in-house team."
        }
      />
      <Advantage
        data={marketingHighlights}
        title={"Dimondra – Your Trusted Digital Marketing Partner"}
        description={
          "Dimondra delivers comprehensive, results-driven digital marketing solutions tailored to your business goals. From building brand awareness to driving conversions, our expert team uses data-backed strategies to help you connect with your audience, increase traffic, and grow revenue. Focus on your business while we amplify your digital presence."
        }
        img1="/services/digitalMarketing1.webp"
        img2="/services/digitalMarketing2.webp"
      />
      <FAQ data={digitalMarketingFAQs} desc={""} />
      <HomeForm />
      <CTA
        title={"Ready to Boost Your Brand Online?"}
        desc={
          "Whether you're looking to grow your followers, generate more leads, or build a strong online presence, Dimondra is here to help. Our digital marketing experts craft strategies that deliver real results. Let’s turn clicks into customers and content into conversions."
        }
        button={"Speak to a Marketing Expert"}
      />
    </>
  );
};

export default Page;
