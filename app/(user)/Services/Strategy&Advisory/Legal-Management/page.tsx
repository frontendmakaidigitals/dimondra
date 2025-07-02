"use client";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import React from "react";
import HomeForm from "@/app/(user)/(homepage)/HomeForm";
import Industry from "../../(business-service-section)/Industry";
import CTA from "../../(business-service-section)/CTA";
import FAQ from "@/app/(user)/app_chunks/FAQ";
import Service from "../(sections)/service";
import "@/styles/globals.css";
import About from "../(sections)/About";
import {
  FileText,
  Building2,
  BadgeCheck,
  Languages,
  ShieldCheck,
} from "lucide-react";
import AreaOfExpertise from "../(sections)/AreaOfExpertise";
const industrySectors = [
  {
    title: "Technology & Startups",
    description:
      "Navigate IP protection, data privacy, and contract structuring with confidence in fast-paced innovation environments.",
    imgUrl: "/images/legal-industries/technology-startups.jpg",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Ensure legal compliance in commercial agreements, consumer rights, digital operations, and cross-border trade.",
    imgUrl: "/images/legal-industries/retail-ecommerce.jpg",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Support for regulatory approvals, licensing, clinical compliance, and patient data protection.",
    imgUrl: "/images/legal-industries/healthcare-life-sciences.jpg",
  },
  {
    title: "Financial Services & Fintech",
    description:
      "Legal guidance on licensing, anti-money laundering (AML), risk management, and regulatory reporting.",
    imgUrl: "/images/legal-industries/financial-services.jpg",
  },
  {
    title: "Manufacturing & Logistics",
    description:
      "Protect supply chain contracts, labor practices, and trade compliance across local and international markets.",
    imgUrl: "/images/legal-industries/manufacturing-logistics.jpg",
  },
  {
    title: "Education & Nonprofits",
    description:
      "Ensure transparency, board governance, and regulatory adherence in purpose-driven organizations.",
    imgUrl: "/images/legal-industries/education-nonprofits.jpg",
  },
  {
    title: "Professional Services",
    description:
      "Clear agreements, ethical compliance, and intellectual property protection for consultants, agencies, and advisory firms.",
    imgUrl: "/images/legal-industries/professional-services.jpg",
  },
  {
    title: "Real Estate & Construction",
    description:
      "Legal oversight for transactions, development contracts, zoning regulations, and dispute resolution.",
    imgUrl: "/images/legal-industries/real-estate-construction.jpg",
  },
];

const legalFAQs = [
  {
    question:
      "Do I still need legal support if I already have a lawyer or in-house counsel?",
    answer:
      "Yes. Our services are designed to complement your legal team by managing routine legal operations, documentation, compliance, and vendor coordination, allowing your legal counsel to focus on high-level matters.",
  },
  {
    question: "Can you assist with legal requirements outside the UAE?",
    answer:
      "Absolutely. We work with trusted international legal partners to handle cross-border trademark registration, compliance, and legal documentation.",
  },
  {
    question: "How do you stay updated on regulatory changes?",
    answer:
      "Our team actively monitors UAE legal updates and global compliance trends. We also liaise directly with authorities to ensure the most accurate and current information.",
  },
  {
    question: "What if my business only needs help with one legal task?",
    answer:
      "No problem. Our services are modular—you can engage us for a single document, a one-off advisory need, or ongoing legal management support.",
  },
  {
    question: "How quickly can you deliver legal documents or services?",
    answer:
      "Timelines vary by service, but we offer quick turnarounds for urgent matters. Translation, contract review, and compliance support can often be delivered within 24–72 hours.",
  },
];

const serviceObj = [
  {
    title: "Legal Advisory, Governance, and Conflict Support",
    desc: "From coordinating with expert legal counsel to drafting internal policies and resolving disputes, this set of services ensures your organization is legally sound, well-governed, and ready to respond confidently to challenges.",
    img: "/images/services/legal-governance.jpg",
    arr: [
      {
        title: "Liaison with External Legal Firms",
        desc: "For specialized matters like litigation or international legal issues, we coordinate and liaise with external law firms on your behalf. We streamline communication and ensure your case is handled effectively.",
      },
      {
        title: "Preparation of Legal Memos",
        desc: "We draft customized legal memos, internal governance policies, and employee handbooks that reflect your business operations and legal responsibilities, strengthening internal controls and clarity.",
      },
      {
        title: "Dispute Resolution",
        desc: "We assist in drafting legal notices, responding to disputes, and managing resolution processes through mediation or litigation support. Our goal: resolve issues swiftly and with minimal business disruption.",
      },
    ],
  },
  {
    title: "Trademark and Intellectual Property Assistance",
    desc: "Your brand assets: names, logos, content, and innovations, are vital to your business success. At Dimondra, we offer end-to-end support for protecting your intellectual property in the UAE and internationally.",
    img: "/images/services/ip-trademark.jpg",
    arr: [
      {
        title: "Trademark Registration (UAE & International)",
        desc: "Secure legal ownership of your brand name, logo, or slogan in the UAE and abroad with expert support throughout the trademark filing and registration process.",
      },
      {
        title: "Copyrights, Patents & Design Protection",
        desc: "Protect original content, inventions, and designs through proper registration and documentation, ensuring your intellectual property is legally recognized and enforced.",
      },
      {
        title: "IP Portfolio Management",
        desc: "Organize, track, and maintain your IP assets with structured portfolio management, renewals, and compliance across jurisdictions.",
      },
      {
        title: "Licensing & IP Usage Agreements",
        desc: "Draft and review licensing agreements that let you monetize your intellectual property safely and securely, while maintaining ownership and legal rights.",
      },
    ],
  },
  {
    title: "Regulatory Compliance Advisory",
    desc: "In today’s rapidly evolving legal environment, staying compliant isn’t optional, it’s essential. Our Regulatory Compliance Advisory service helps you navigate UAE laws, industry regulations, and global standards with confidence.",
    img: "/images/services/regulatory-compliance.jpg",
    arr: [
      {
        title: "Compliance Gap Assessments",
        desc: "We review your business processes, policies, and documentation to identify areas of non-compliance and recommend corrective actions.",
      },
      {
        title: "UAE Labor & Commercial Law Advisory",
        desc: "Receive expert guidance on employment law, commercial regulations, and operational requirements specific to your industry and jurisdiction.",
      },
      {
        title: "Audit Readiness & Policy Development",
        desc: "Prepare for government or industry audits with robust compliance policies, internal controls, and clear documentation.",
      },
      {
        title: "Ongoing Regulatory Monitoring",
        desc: "Stay up to date with legal and regulatory changes in your sector through proactive alerts and advisory support tailored to your business.",
      },
    ],
  },
];
const AOE = [
  {
    title: "Drafting and Reviewing Contracts",
    desc: "We ensure your employment, vendor, and client agreements are fair, legally sound, and fully aligned with UAE regulations. From offer letters to complex service agreements, we draft and review documents to protect your rights and reduce risk.",
    icon: FileText,
  },
  {
    title: "Corporate Structuring & Entity Formation Support",
    desc: "Whether it's a mainland, free zone, or offshore setup, we guide you in choosing the best business structure based on your objectives, industry, and risk profile, ensuring full compliance and a smooth setup process.",
    icon: Building2,
  },
  {
    title: "Trademark and Intellectual Property Assistance",
    desc: "We help register and protect trademarks, designs, copyrights, and patents both in the UAE and internationally. Our services also include IP portfolio management and licensing support.",
    icon: BadgeCheck,
  },
  {
    title: "Legal Translation & Attestation (English/Arabic)",
    desc: "We provide certified legal translations and handle document attestation for contracts, certificates, and agreements. We ensure full compliance with the UAE authority requirements and timely submission.",
    icon: Languages,
  },
  {
    title: "Regulatory Compliance Advisory",
    desc: "From UAE labor law to data protection and sector-specific regulations, we review your practices, identify risks, and help implement policies that ensure full compliance, while preparing you for audits and updates.",
    icon: ShieldCheck,
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
            alt={""}
            className="w-full h-full  object-cover"
          />
        </div>
        <BgLayer color="bg-gradient-to-t from-slate-800/40 via-transparent to-slate-800/60" />
        <div className="relative z-10 flex h-full flex-col justify-end container items-start py-16">
          <h1 className="text-6xl font-dmSans font-[600] max-w-4xl">
            Legal Management That Protects and Empowers
          </h1>

          <p className="max-w-4xl font-quicksand font-[600] mt-3">
            At Dimondra, we provide end-to-end legal management solutions
            tailored to businesses operating in the UAE and beyond. Whether
            you're launching a startup, expanding across borders, or refining
            your internal policies, we ensure your operations stay legally
            compliant, protected, and resilient. With our support, you can
            confidently focus on growth while we manage the legal complexities
            behind the scenes.
          </p>
          <button className="px-5 py-[.4rem] bg-dimondra-black rounded-md mt-5 text-slate-50">
            Get started
          </button>
        </div>
      </section>
      <About
        title={"Our Legal Management Approach"}
        desc={
          "Our approach is proactive, people-focused, and fully aligned with regional and international standards. We simplify legal frameworks into actionable strategies to minimize risk, improve governance, and support long-term success. From contract drafting and IP protection to regulatory compliance and dispute resolution, we’re your trusted legal partner."
        }
        img={""}
      />
      <AreaOfExpertise
        title="Areas of Expertise"
        desc="Business expansion is not one-size-fits-all. Our services are flexible and adapted to your goals, whether you need complete market entry support or targeted help in specific areas."
        data={AOE}
      />
      <Service data={serviceObj} />
      <section className="py-24">
        <div className="grid grid-cols-2 place-items-center container gap-10">
          <div>
            <h2 className="text-5xl font-dmSans font-[500]">
              Our Legal Management Mission
            </h2>
            <p className="mt-3">
              At Dimondra, our mission is to make legal management a strategic
              asset, not just a safety net. We believe that every business
              deserves clear, proactive, and business-aligned legal support to
              operate with confidence and agility. Our approach is centered on
              simplifying legal complexities, reducing risk, and empowering our
              clients to make informed decisions. Whether yo&apos;re navigating
              setup, compliance, or growth, we’re here to ensure your legal
              foundation is strong, your operations are protected, and your
              business is ready for what’s next.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Compliance",
                gradient:
                  "bg-gradient-to-b from-[#818cf8] via-[#6366f1] to-[#2563eb]",
              },
              {
                text: "Guidelines",
                gradient:
                  "bg-gradient-to-bl from-[#65a30d] via-[#16a34a] to-[#15803d]",
              },
              {
                text: "LAW",
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
                    className={`text-center inline-block bg-clip-text text-transparent text-2xl font-dmSans font-[500] px-4 ${text.gradient}`}
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
        <Industry
          data={industrySectors}
          desc="Our Legal Management services are designed to meet the unique regulatory, operational, and compliance needs of diverse sectors. Whether you're launching, scaling, or restructuring, we offer tailored legal support that aligns with your industry landscape."
        />
      </div>

      <FAQ desc="" data={legalFAQs} />
      <HomeForm />
      <CTA
        title={"Let’s Build a Legally Secure Business"}
        desc={
          "With Dimondra, your legal processes are structured, strategic, and stress-free. Ready to protect your business and move forward with confidence? Let’s start the conversation."
        }
        button="Book a legal consultation"
      />
    </main>
  );
};

export default Page;
