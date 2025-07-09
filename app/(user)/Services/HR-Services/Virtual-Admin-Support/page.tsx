"use client";
import React, { useState } from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import { useAuth } from "@/app/context/AuthContext";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import Process from "../../(sections)/process";
import Services from "../../(sections)/services";
import CTA from "@/app/(user)/app_chunks/CTA";
import FAQ from "@/app/(user)/app_chunks/FAQ";
import Choose from "../../(sections)/choose";
import { motion } from "motion/react";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
import { loadStripe } from "@stripe/stripe-js";

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
  Check,
  ArrowUpRight,
} from "lucide-react";
import clsx from "clsx";
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
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
  const [isOpen, setIsOpen] = useState(false);
  const packages = [
    {
      name: "Full Time",
      price: "899",
      buttonText: "Start with Free",
      features: [
        "160 Hours per month",
        "Dedicated Assistant",
        "Free replacement",
        "Email and Chat Support",
        "Phone Call Support",
        "Customer Success Manager",
        "Rigorous quality control and supervision",
        "Your timezone – Any hours you want",
      ],

      orgPrice: "1999",
    },
    {
      name: "Part Time",
      price: "499",
      buttonText: "Upgrade to Pro",
      features: [
        "80 Hours per month",
        "Dedicated Assistant",
        "Free replacement",
        "Email and Chat Support",
        "Phone Call Support",
        "Customer Success Manager",
        "Rigorous quality control and supervision",
        "Your timezone – Any hours you want",
      ],
      orgPrice: "599",
    },
    {
      name: "40 hours",
      price: "299",
      buttonText: "Contact Sales",
      features: [
        "40 Hours per month",
        "Free replacement",
        "Email and Chat Support",
        "Phone Call Support",
        "Customer Success Manager",
        "Rigorous quality control and supervision",
        "Your timezone – Any hours you want",
      ],
    },
    {
      name: "20 hours",
      price: "199",
      buttonText: "Contact Sales",
      features: [
        "40 Hours per month",
        "Free replacement",
        "Email and Chat Support",
        "Phone Call Support",
        "Customer Success Manager",
        "Rigorous quality control and supervision",
        "Your timezone – Any hours you want",
      ],
    },
  ];

  const { user, loading, googleSignIn, logOut, userCollection } = useAuth();

  if (loading) return <div>Loading...</div>;
  const handleCheckout = async (price: string | number, name: string) => {
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        name: name,
        price: price,
      }),
    });

    if (!response.ok) {
      // Get raw text of error response for debugging
      const errorText = await response.text();
      console.error("API error:", errorText);
      alert(`Error: ${errorText}`);
      return; // stop further execution
    }

    const { id } = await response.json();

    if (!stripe) {
      alert("Stripe failed to load.");
      return;
    }

    const { error } = await stripe.redirectToCheckout({ sessionId: id });

    if (error) alert(error.message);
  };

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

      <Choose
        title={"Why Choose Dimondra for Virtual Admin Support"}
        desc={
          "Finding the right virtual admin support partner is key to freeing up your time and improving your business efficiency. At Dimondra, we combine a team of highly skilled professionals with flexible and cost-effective solutions tailored specifically to your needs. Our virtual assistants are experienced, reliable, and trained to handle a wide range of administrative tasks with accuracy and discretion. We prioritize security and confidentiality, ensuring your business information is always protected. With fast onboarding and personalized service, we make it easy for you to get started and scale support as your business grows. Let us take care of your day-to-day operations so you can focus on what truly matters: growing your business and achieving your goals."
        }
        data={serviceBenefits}
      />
      <section className="py-12 relative">
        <div className="absolute top-1/2 left-1/5 bg-dimondra-teal/20 blur-3xl size-[300px] rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/5 bg-dimondra-tealDark/20 blur-3xl size-[300px] rounded-full" />
        <h1 className="max-w-4xl relative z-10 mb-9 mx-auto text-center font-[600] text-6xl font-sans text-dimondra-black">
          Transparent Pricing
        </h1>
        <div className="grid relative z-10 container grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {packages.map((item, idx) => (
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.165, 0.84, 0.44, 1],
                delay: 0.15 * idx,
              }}
              viewport={{ once: true }}
              key={idx}
              className={`rounded-xl overflow-hidden p-4 relative  backdrop-filter backdrop-blur-lg border border-slate-700 ${item.price.toLowerCase() === "custom" ? "bg-dimondra-tealDark text-slate-50" : "bg-white/40 text-black"}`}
            >
              <div className="w-[800px] h-[70px] bg-white/50 blur-3xl rotate-[-20deg] top-12 absolute left-1/2 -translate-x-1/2" />
              <div className="w-[800px] h-[100px] bg-white/50 blur-3xl rotate-[-20deg] bottom-10 absolute left-1/2 -translate-x-1/2" />
              <div className="flex justify-between items-center relative z-10">
                <h2 className="font-dmSans font-[600] text-lg">{item.name}</h2>
                {item.name.toLowerCase() === "full time" && (
                  <p
                    className="text-xs px-4 py-[.4rem] border rounded-full text-slate-100 font-rubik font-[500] bg-gradient-to-bl
                    from-[#84cc16]
                    via-[#16a34a]
                    to-[#0f766e]"
                  >
                    Best Value
                  </p>
                )}
                {item.name.toLowerCase() === "part time" && (
                  <p
                    className="text-xs px-4 py-[.4rem] border rounded-full text-slate-100 font-rubik font-[500] bg-gradient-to-b
                    from-[#06b6d4]
                    via-[#2563eb]
                    to-[#6366f1]"
                  >
                    Most Popular
                  </p>
                )}
              </div>
              <h2
                className={`text-5xl relative z-10 font-quicksand flex items-start gap-[2px] font-[500] mt-5`}
              >
                {item.orgPrice && (
                  <>
                    <span className="text-lg text-red-500 line-through">
                      ${item.orgPrice}
                    </span>{" "}
                    &nbsp;
                  </>
                )}
                <span className="text-xl mt-[2px] font-[400]">$</span>
                {item.price}
                <span className="text-xl mt-[6px] font-[400]">/month</span>
              </h2>

              <motion.button
                onClick={() => handleCheckout(item.price, item.name)}
                initial={{
                  scale: 1,
                  backgroundColor: "transparent",
                  color: "#000000",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00929b",
                  color: "#ffffff",
                }}
                transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
                style={{
                  boxShadow: "inset 0 -4px 20px rgba(226, 232, 240, 0.4)",
                }}
                className={clsx(
                  `w-full relative z-10 bg-dimondra-white font-rubik mt-6 border py-[.6rem] flex items-center justify-center gap-2 rounded-xl border-slate-700/30`
                )}
              >
                Get Started Today
                <ArrowUpRight />
              </motion.button>
              <hr className="border-slate-800/30 my-6" />
              <p className="mb-4 relative z-10 font-rubik font-[400]">
                Starter plan includes:
              </p>
              <ul className="space-y-3">
                {item.features.map((arr, id) => (
                  <li
                    key={id}
                    className="flex font-quicksand font-[500] relative z-10 items-start gap-2"
                  >
                    <div
                      className={clsx(`mt-[2px] rounded-full p-1 bg-green-400`)}
                    >
                      <Check className={clsx(`size-[12px] stroke-green-100`)} />
                    </div>{" "}
                    {arr}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
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
