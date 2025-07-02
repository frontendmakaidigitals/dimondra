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
import { LineChart, Map, Building2, FileBadge, Megaphone } from "lucide-react";
import AreaOfExpertise from "../(sections)/AreaOfExpertise";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
const industrySectors = [
  {
    title: "Technology & Software",
    description:
      "We help SaaS companies, IT service providers, and tech startups scale into new markets with robust go-to-market plans, compliance support, and partner networks.",
    imgUrl: "/services/Technology.jpg",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Our team works with hospitals, clinics, pharma companies, and biotech firms to navigate complex regulatory frameworks and deliver high-impact market strategies.",
    imgUrl: "/services/healthcare.jpg",
  },
  {
    title: "Retail & Consumer Goods",
    description:
      "Whether you're launching a D2C brand or scaling a retail chain, we help align your business with local consumer behaviors and optimize your supply chain.",
    imgUrl: "/services/retail.jpg",
  },
  {
    title: "Professional Services",
    description:
      "From legal firms to consultancies and agencies, we support knowledge-based businesses in building scalable structures and accessing new client markets.",
    imgUrl: "/services/talenthero.jpg",
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "We support manufacturers and supply chain operators with location analysis, licensing compliance, and strategic expansion into high-demand regions.",
    imgUrl: "/services/manufacturing.jpg",
  },
  {
    title: "Financial Services",
    description:
      "Our consulting services help banks, fintech startups, and financial institutions navigate regulatory environments and launch with confidence across the GCC.",
    imgUrl: "/services/financial-services.jpg",
  },
  {
    title: "Education & Training",
    description:
      "We assist educational institutions, e-learning companies, and training providers in expanding their reach while ensuring content and delivery are locally relevant.",
    imgUrl: "/services/education.jpg",
  },
  {
    title: "Energy & Sustainability",
    description:
      "For companies working in renewable energy, environmental tech, or infrastructure, we offer guidance on local policy, strategic partnerships, and project setup.",
    imgUrl: "/services/telelcommunication.jpg",
  },
];

const businessFAQs = [
  {
    question: "What makes Dimondra’s business consulting different?",
    answer:
      "We combine strategic analysis with local expertise in GCC markets, offering actionable advice with a practical path forward.",
  },
  {
    question: "Can you help with both legal setup and market strategy?",
    answer:
      "Yes, we provide end-to-end support, from legal structuring to branding and go-to-market execution.",
  },
  {
    question: "Do you only work with large companies?",
    answer:
      "Not at all. We support startups, SMEs, and multinational firms alike.",
  },
  {
    question: "How long does a market entry project usually take?",
    answer:
      "Timelines vary depending on your goals, industry, and jurisdiction, but we’ll define clear milestones and keep things moving.",
  },
  {
    question: "Do you assist with post-entry support?",
    answer:
      "Yes, we provide ongoing support, including compliance, talent advisory, and partner relationship management.",
  },
];

const serviceObj = [
  {
    title: "Feasibility & Market Analysis",
    desc: "Launching a business or entering a new market requires insight, not guesswork. Our feasibility and market analysis services provide a complete picture of the risks, opportunities, and viability of your expansion plans. We assess demand, competition, regulation, cost, and profitability so you can move forward with clarity and confidence.",
    img: "/services/retail.jpg",
    arr: [
      {
        title: "Market Demand & Opportunity Assessment",
        desc: "We evaluate customer needs, preferences, and trends in your target market to determine real demand and potential for your product or service.",
      },
      {
        title: "Competitive Landscape Analysis",
        desc: "Gain insight into your direct and indirect competitors, market saturation levels, and potential gaps that your business can fill.",
      },
      {
        title: "Regulatory & Legal Considerations",
        desc: "We highlight the relevant regulatory environment and business laws to ensure your market entry aligns with local requirements.",
      },
      {
        title: "Cost & Financial Projections",
        desc: "From startup to ongoing operations, we provide financial modeling to assess ROI and break-even points, helping you plan smart investments.",
      },
      {
        title: "Risk Identification & Mitigation Planning",
        desc: "We proactively identify risks that could derail your plans and help you build strategic responses to reduce uncertainty.",
      },
    ],
  },
  {
    title: "New Market Entry Advisory (UAE, KSA, GCC)",
    desc: "Expanding into the UAE, Saudi Arabia, or GCC markets involves navigating unique cultural, legal, and operational environments. Our advisory services equip you with the insights and tools needed to make informed decisions, reduce risks, and build a foundation for long-term success.",
    img: "/services/map.jpeg",
    arr: [
      {
        title: "Local Market Landscape Analysis",
        desc: "We provide deep insight into regional market trends, customer behavior, and economic indicators to help you determine the best fit for your products or services.",
      },
      {
        title: "Cultural & Consumer Behavior Guidance",
        desc: "Understand regional cultural nuances and customer expectations to ensure your strategy resonates with local audiences.",
      },
      {
        title: "Business Environment & Regulatory Navigation",
        desc: "We guide you through the specific business practices, legal requirements, and governmental structures of each country to avoid delays and ensure compliance.",
      },
      {
        title: "Strategic Location & Entity Type Advisory",
        desc: "Based on your goals, we help you choose the optimal location and business structure (mainland, free zone, offshore) for smooth operations and market access.",
      },
    ],
  },
  {
    title: "Business Setup Strategy & Structuring Guidance",
    desc: "Setting up a business is more than paperwork’s about building a structure that supports long-term success. At Dimondra, we guide you through each strategic and legal decision to make sure your business is positioned for sustainable growth from day one.",
    img: "/services/consultation.jpg",
    arr: [
      {
        title: "Company Formation Strategy",
        desc: "We help you choose the best formation route, whether mainland, free zone, or offshore—based on your business model, goals, and expansion plans.",
      },
      {
        title: "Ownership & Entity Structuring",
        desc: "Our team assists in defining the optimal ownership structure that complies with local laws and aligns with your risk, tax, and investment objectives.",
      },
      {
        title: "Jurisdiction & Location Selection",
        desc: "We evaluate key jurisdiction factors such as cost, infrastructure, access to customers, and legal framework to guide your location decision.",
      },
      {
        title: "Corporate Governance Advisory",
        desc: "Dimondra offers expertise in developing governance models, board composition, and policy structures that promote transparency and accountability.",
      },
    ],
  },
  {
    title: "Regulatory & Licensing Requirements Consulting",
    desc: "Every market has its own legal frameworks and licensing procedures, especially in highly regulated environments like the UAE, Saudi Arabia, and the GCC. Dimondra helps you stay on top of every requirement with end-to-end regulatory support and expert guidance.",
    img: "/services/govt.jpg",
    arr: [
      {
        title: "Trade License Selection & Guidance",
        desc: "We help you determine the correct trade license for your business activity and jurisdiction, ensuring you meet all eligibility and documentation requirements.",
      },
      {
        title: "Permit & Approval Coordination",
        desc: "Our consultants coordinate with relevant authorities to acquire necessary permits, zoning clearances, environmental approvals, and more.",
      },
      {
        title: "Regulatory Compliance Reviews",
        desc: "We conduct thorough reviews to ensure your operations comply with current regulations, reducing risk and avoiding penalties.",
      },
      {
        title: "Industry-Specific Licensing Support",
        desc: "From healthcare and education to fintech and manufacturing, we provide tailored licensing guidance aligned to your industry’s specific requirements.",
      },
      {
        title: "Ongoing Compliance Monitoring",
        desc: "We offer continuous regulatory support to keep your business compliant as laws and guidelines evolve, so you’re never caught off guard.",
      },
    ],
  },
  {
    title: "Go-to-Market Planning & Localization Strategy",
    desc: "Dimondra builds customized go-to-market plans that combine strategic positioning with cultural relevance to ensure your message, offer, and delivery resonate with local customers.",
    img: "/services/facilityhero.jpg",
    arr: [
      {
        title: "Go-to-Market Strategy Design",
        desc: "We develop a tailored entry roadmap that covers launch timing, marketing strategy, pricing, distribution channels, and key performance indicators.",
      },
      {
        title: "Customer Segmentation & Targeting",
        desc: "Identify and understand the ideal customer groups within the new market to focus efforts on high-potential segments.",
      },
      {
        title: "Sales & Distribution Planning",
        desc: "We help establish efficient distribution and sales models tailored to your product, region, and available infrastructure.",
      },
      {
        title: "Localization of Messaging & Branding",
        desc: "Adapt your brand messaging, visuals, and tone of voice to resonate with the cultural and language preferences of your new audience.",
      },
      {
        title: "Product Adaptation Strategy",
        desc: "Where needed, we support modifications to packaging, product features, and positioning to meet local compliance or appeal to local tastes.",
      },
      {
        title: "Launch Execution Support",
        desc: "Dimondra can support the coordination of product launches, including campaign timelines, vendor involvement, promotional efforts, and in-market feedback loops.",
      },
    ],
  },
];

const AOE = [
  {
    title: "Feasibility & Market Analysis",
    desc: "Evaluate business potential, minimize risks, and validate your idea with detailed feasibility and investment assessments.",
    icon: LineChart,
  },
  {
    title: "New Market Entry Strategy",
    desc: "Navigate cultural, legal, and business landscapes to ensure a smooth and successful entry into the UAE, Saudi Arabia, and GCC markets.",
    icon: Map,
  },
  {
    title: "Business Setup & Structuring",
    desc: "Get expert guidance on forming the right legal entity, structuring ownership, and launching operations with clarity and compliance.",
    icon: Building2,
  },
  {
    title: "Licensing & Regulatory Compliance",
    desc: "Understand and fulfill all licensing and legal requirements to avoid costly delays and operate confidently within local frameworks.",
    icon: FileBadge,
  },
  {
    title: "Go-to-Market & Localization",
    desc: "Customize your product and brand approach to resonate with local audiences and drive adoption from day one.",
    icon: Megaphone,
  },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="relative overflow-hidden h-[85vh]">
        <div className="w-full h-full object-cover absolute inset-0">
          <img
            src={"/bg-2.jpg"}
            className="w-full h-full  object-cover"
            alt={""}
          />
        </div>
        <BgLayer color="bg-gradient-to-t from-slate-800/40 via-transparent to-slate-800/60" />
        <div className="relative z-10 flex h-full flex-col justify-end container items-start py-16">
          <h1 className="text-4xl lg:text-6xl font-dmSans font-[600] max-w-4xl">
            Business Consulting That Powers Confident Expansion
          </h1>

          <p className="max-w-4xl font-quicksand font-[600] mt-3">
            At Dimondra, we help businesses unlock new opportunities through
            strategic consulting to market entry and expansion across the UAE,
            Saudi Arabia, and the GCC region. Whether you&apos;re a startup or a
            global brand, we provide data-driven insights, regulatory guidance,
            and structured planning to reduce risk, ensure compliance, and
            accelerate growth.
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
        title={"Our Business Consulting Approach"}
        desc={
          "Dimondra empowers you to move into new markets with clarity and confidence. We provide expert support through feasibility studies, setup planning, licensing, go-to-market strategy, and local partnerships. With our guidance, you’ll enter new regions ready to succeed, backed by facts, not guesswork."
        }
        img={"/services/consultation2.jpg"}
      />
      <AreaOfExpertise
        title="Areas of Expertise"
        desc="Business expansion is not one-size-fits-all. Our services are flexible and adapted to your goals, whether you need complete market entry support or targeted help in specific areas."
        data={AOE}
      />
      <Service data={serviceObj} />
      <section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center container gap-10">
          <div>
            <h2 className="text-5xl font-dmSans font-[500]">
              Our Business Consulting Mission
            </h2>
            <p className="mt-3">
              At Dimondra, we believe business expansion should be strategic,
              efficient, and grounded in local insight. Our mission is to
              empower companies to confidently navigate complex markets by
              offering tailored, end-to-end consulting that minimizes risk and
              maximizes growth potential. We don&apos;t just advise, we become
              partners in your success, helping you make data-driven decisions,
              build compliant and scalable structures, and foster local
              relationships that last. With Dimondra, your business doesn&apos;t
              just enter new markets, it thrives in them
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-6">
            {[
              {
                text: "Risk Management",
                gradient:
                  "bg-gradient-to-b from-[#818cf8] via-[#6366f1] to-[#2563eb]",
              },
              {
                text: "Client Relations",
                gradient:
                  "bg-gradient-to-bl from-[#65a30d] via-[#16a34a] to-[#15803d]",
              },
              {
                text: "Innovation",
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

      <FAQ desc="" data={businessFAQs} />
      <HomeForm />
      <CTA
        title={"Let’s Turn Opportunities Into Outcomes"}
        desc={
          "Partner with Dimondra to enter new markets with clarity, structure, and confidence.  Whether it’s your first market expansion or one of many, we help you grow smarter, faster, and with fewer obstacles."
        }
        button="Talk to a Business Consultant"
      />
    </main>
  );
};

export default Page;
