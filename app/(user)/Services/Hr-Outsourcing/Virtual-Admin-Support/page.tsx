"use client";
import React from "react";
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
import {
  CalendarDays,
  Mail,
  ListChecks,
  Plane,
  Receipt,
  FileText,
  Search,
  Clock,
  Share2,
  ShoppingCart,
  Folder,
  Headphones,
  Users,
  Settings,
  Wallet,
  ShieldCheck,
  Rocket,
  Handshake,
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
  const virtualAssistantServices = [
    {
      title: "Calendar & Scheduling Management",
      desc: "We organize your calendar, set reminders, and schedule meetings. Your day stays structured and stress-free.",
      icon: CalendarDays,
    },
    {
      title: "Email Management",
      desc: "We sort, prioritize, and respond to emails on your behalf. No important message goes unnoticed.",
      icon: Mail,
    },
    {
      title: "Task Coordination",
      desc: "We help plan and manage your daily tasks. This keeps your work moving smoothly and on time.",
      icon: ListChecks,
    },
    {
      title: "Travel Planning & Bookings",
      desc: "We arrange flights, hotels, and transport. Your trips are planned down to the last detail.",
      icon: Plane,
    },
    {
      title: "Expense Tracking",
      desc: "We monitor expenses, receipts, and reimbursements. Your finances stay clear and organized.",
      icon: Receipt,
    },
    {
      title: "Document Preparation & Filing",
      desc: "We draft, edit, and file reports or presentations. Your documents are always ready when needed.",
      icon: FileText,
    },
    {
      title: "Online Research",
      desc: "We gather key information for your projects or personal tasks. You get answers fast and reliably.",
      icon: Search,
    },
    {
      title: "Appointment Scheduling & Reminders",
      desc: "We book and manage your appointments. You’ll never miss an important meeting.",
      icon: Clock,
    },
    {
      title: "Social Media Assistance",
      desc: "We help schedule posts for your social accounts. Your online presence stays active and consistent.",
      icon: Share2,
    },
    {
      title: "Personal Shopping Support",
      desc: "We research and order items online. From gifts to groceries, we handle it for you.",
      icon: ShoppingCart,
    },
    {
      title: "File Organization",
      desc: "We arrange your digital files and folders. Everything stays neat and easy to find.",
      icon: Folder,
    },
    {
      title: "Simple Customer Support & Reminders",
      desc: "We help with basic customer queries and send reminders. Your clients and tasks stay on track.",
      icon: Headphones,
    },
  ];

  const industriesServed = [
    {
      title: "Small & Medium Businesses",
      description:
        "We support SMBs by handling daily admin tasks, helping them focus on growth and customer satisfaction without getting bogged down in routine work.",
      imgUrl: "/services/business.jpg",
    },
    {
      title: "Startups & Entrepreneurs",
      description:
        "Our virtual assistants provide flexible support to startups, enabling founders to save time and scale efficiently while managing critical operations.",
      imgUrl: "/services/startup.jpg",
    },
    {
      title: "Real Estate",
      description:
        "From scheduling property viewings to managing client communications, we assist real estate professionals in staying organized and responsive.",
      imgUrl: "/services/realestate.jpg",
    },
    {
      title: "Professional Services",
      description:
        "Lawyers, consultants, and accountants benefit from our reliable admin support, freeing them to focus on delivering expert services.",
      imgUrl: "/services/professional.jpg",
    },
    {
      title: "E-commerce & Retail",
      description:
        "We help online and retail businesses manage order processing, customer inquiries, and inventory tracking smoothly and efficiently.",
      imgUrl: "/services/ecommerce.jpg",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Our assistants support healthcare providers and wellness professionals with appointment scheduling, patient communications, and administrative tasks.",
      imgUrl: "/services/healthcare.jpg",
    },
  ];

  const onboardingSteps = [
    {
      title: "Sign-Up & Consultation",
      description:
        "Fill out a simple sign-up form and schedule a meeting. We’ll discuss your needs and define the tasks you want support with.",
      imgUrl: "/services/consultation2.jpg",
    },
    {
      title: "Choose Your Virtual Assistant",
      description:
        "Select the right assistant from our pool of experienced professionals. We’ll help match you with someone who fits your business.",
      imgUrl: "/services/virtualAssistant.jpg",
    },
    {
      title: "Get Started Quickly",
      description:
        "Begin working with your Virtual Assistant within 24 hours to 1 week. We make onboarding smooth and simple.",
      imgUrl: "/services/clock.jpg",
    },
    {
      title: "Access Your Client Portal",
      description:
        "Use our secure portal to manage tasks and communicate easily. Stay updated and in control at all times.",
      imgUrl: "/services/clientPortal.png",
    },
  ];

  const serviceBenefits = [
    {
      title: "Skilled Professionals",
      icon: Users,
    },
    {
      title: "Flexible Plans",
      icon: Settings,
    },
    {
      title: "Cost Effective",
      icon: Wallet,
    },
    {
      title: "Secure Systems",
      icon: ShieldCheck,
    },
    {
      title: "Quick Onboarding",
      icon: Rocket,
    },
    {
      title: "Personalized Support",
      icon: Handshake,
    },
  ];
  const faqs = [
    {
      question: "What tasks can a Virtual Assistant handle?",
      answer:
        "Our virtual assistants can manage scheduling, emails, travel planning, data entry, research, social media support, and much more—basically, any administrative task you need help with.",
    },
    {
      question: "How do I communicate with my Virtual Assistant?",
      answer:
        "We provide a secure client portal and support communication via email, chat, or video calls—whichever method works best for you.",
    },
    {
      question: "How quickly can I start working with a Virtual Assistant?",
      answer:
        "Once you complete the onboarding process, you can start working with your Virtual Assistant within 24 hours to one week, depending on your preferences.",
    },
    {
      question: "Is my business information secure?",
      answer:
        "Absolutely. We prioritize confidentiality and use secure systems to protect all your data and communications.",
    },
    {
      question: "Can I adjust the level of support as my needs change?",
      answer:
        "Yes, our services are flexible. You can scale up or down your virtual assistant support at any time to match your business requirements.",
    },
    {
      question: "What if I’m not satisfied with my assigned Virtual Assistant?",
      answer:
        "We offer a satisfaction guarantee. If your assigned VA doesn’t meet your expectations, we’ll work with you to find a better fit.",
    },
  ];
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
        <BgLayer color={"bg-black/50 z-[5] "} />
        <img
          className="absolute inset-0 object-left-top w-full h-full object-cover"
          src={"/services/virtualAdminHero.jpg"}
          alt={"Talent Acquisition"}
        />
        <div className="container  tracking-tighter h-full flex flex-col items-start justify-end py-16 relative z-10 text-dimondra-white">
          <p>Virtual Admin Support Services in Dubai</p>
          <h2 className="text-4xl lg:text-5xl font-dmSans tracking-tight leading-[3rem] lg:leading-[3.5rem] max-w-2xl talentHead font-[600]">
            Get expert virtual admin support whenever you need it.
          </h2>
          <p className=" talentPara max-w-3xl mt-2 text-slate-100">
            Dimondra helps you save time, stay organized, and focus on growing
            your business. Our dedicated virtual admin professionals are ready
            to manage your day-to-day tasks, so you can focus on what matters
            most.
          </p>
          <button
            className="px-5 py-2 rounded-lg border border-dimondra-white transition-colors duration-200
         hover:border-dimondra-tealDark hover:bg-dimondra-tealDark mt-5"
          >
            Hire a Virtual Assistant Today
          </button>
        </div>
      </motion.div>
      <Services
        heading={"Services We Offer"}
        subHeading={""}
        data={virtualAssistantServices}
      />
      <Process
        data={onboardingSteps}
        heading={"Our Work Process"}
        subHeading={""}
      />
      <IndustriesSection
        data={industriesServed}
        heading={"Industries we serve"}
      />
      <Choose
        title={"Why Choose Dimondra for Virtual Admin Support"}
        desc={
          "Finding the right virtual admin support partner is key to freeing up your time and improving your business efficiency. At Dimondra, we combine a team of highly skilled professionals with flexible and cost-effective solutions tailored specifically to your needs. Our virtual assistants are experienced, reliable, and trained to handle a wide range of administrative tasks with accuracy and discretion. \nWe prioritize security and confidentiality, ensuring your business information is always protected. With fast onboarding and personalized service, we make it easy for you to get started and scale support as your business grows. Let us take care of your day-to-day operations so you can focus on what truly matters: growing your business and achieving your goals."
        }
        data={serviceBenefits}
      />
      <FAQ
        data={faqs}
        desc="At Dimondra, we understand you may have questions about how our talent solutions can benefit your business. We've compiled some of the most common inquiries to provide clarity on our services, process, and the value we bring to your recruitment efforts in the UAE."
      />
      <HomeForm />
      <CTA
        title={"Ready to Simplify Your Workday?"}
        desc={
          "Let Dimondra’s expert Virtual Assistants handle your administrative tasks so you can focus on what matters most: growing your business."
        }
        button="Contact us now"
      />
    </>
  );
};

export default Page;
