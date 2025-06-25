"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Plus } from "lucide-react";
import CTA from "../../Services/(business-service-section)/CTA";
import { Divider } from "@heroui/react";
const egyptOverview = [
  { key: "Currency", value: "Egyptian Pound (EGP)" },
  { key: "Capital", value: "Cairo" },
  { key: "Official Language", value: "Arabic" },
  { key: "Time Zone", value: "GMT +2" },
  { key: "Working Hours", value: "40 hours per week" },
  { key: "Public Holidays", value: "14 Days (2025)" },
  { key: "Payroll Frequency", value: "Monthly" },
  { key: "Minimum Monthly Salary", value: "7,000 EGP" },
  { key: "Date Format", value: "dd/mm/yyyy" },
];

const Page: React.FC = () => {
  return (
    <>
      <section className="relative bg-dimondra-black">
        <div className="container place-items-center pt-28 pb-20 gap-10 text-slate-50 grid grid-cols-1 lg:grid-cols-2 relative z-10">
          <div className="">
            <h1 className="text-5xl font-[600] font-dmSans tracking-tight">
              Hire & Manage Talent in Egypt with Confidence
            </h1>
            <p className="mt-5 font-quicksand font-[600]">
              Hiring internationally can be complex, but with Dimondra,
              it&nbsp;s simple. We help you compliantly source, onboard, manage,
              and pay talent in Egypt with zero hassle. From contracts and
              compliance to local insights and payroll, we handle it all so your
              business can grow faster and smarter.
            </p>
            <button className="bg-dimondra-tealDark text-slate-50 px-4 py-2 mt-6 rounded-md">
              Contact Us
            </button>
          </div>
          <img
            src={
              "https://images.unsplash.com/photo-1732360489182-4ecc94d72b7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className="w-full rounded-lg h-[380px] shadow-orange-50/20 shadow-[0px_0px_15px_1px]"
          />
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          <h1 className="text-center font-[600] text-5xl font-dmSans tracking-tight">
            Egypt at a Glance
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {egyptOverview.map((item, idx) => (
              <div key={idx} className="border border-dimondra-black/20 p-7">
                <h3 className="text-slate-600 font-dmSans tracking-tight text-lg">
                  {item.key}
                </h3>
                <h1 className="mt-3 text-3xl text-dimondra-tealDark font-rubik ">
                  {item.value}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="my-20  container">
          <h1 className="max-w-3xl mx-auto text-5xl font-dmSans font-[600] text-dimondra-black text-center">
            Everything You Need to Know to Hire Compliantly in Saudi Arabia
          </h1>

          <div className="grid grid-cols-2 gap-10 py-14">
            <div>
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Recent Developments in Egypt (2025)
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Employment law is always evolving, and staying compliant means
                staying informed. At{" "}
                <span className="text-blue-600 font-semibold">Dimondra</span>,
                we continuously monitor legislative updates, so you don’t have
                to. Here are the most notable changes shaping Egypt’s employment
                landscape in 2025:
              </p>

              <div className="mt-5">
                <Accordion variant="bordered" className="">
                  <AccordionItem
                    key={"egypt1"}
                    aria-label={"egypt1"}
                    title={"Minimum Wage Increase"}
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    Effective 1 March 2025, the minimum wage for private sector
                    workers has been raised to <strong>EGP 7,000</strong>. The
                    National Council of Wages (NCW) also introduced a mandatory
                    annual raise of at least <strong>3%</strong> of the
                    employee’s social insurance wage, with a minimum of{" "}
                    <strong>EGP 250</strong> per month.
                  </AccordionItem>

                  <AccordionItem
                    key={"egypt2"}
                    aria-label={"egypt2"}
                    title={"Upcoming Public Sector Wage Hike"}
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    Beginning July 2025, the minimum wage for public sector
                    workers will also rise to <strong>EGP 7,000</strong>,
                    aligning both public and private sectors under Egypt’s
                    broader economic reform strategy.
                  </AccordionItem>

                  <AccordionItem
                    key={"egypt3"}
                    aria-label={"egypt3"}
                    title={"Extended Maternity Leave (Proposed)"}
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    A proposed amendment to the labor law aims to extend
                    maternity leave from <strong>90 to 120 days</strong> for
                    private sector employees. It also increases the allowed
                    number of paid maternity leaves during employment from two
                    to three, and removes prior service duration requirements.
                    The proposal is currently under parliamentary review.
                  </AccordionItem>

                  <AccordionItem
                    key={"egypt4"}
                    aria-label={"egypt4"}
                    title={"Severance Pay for Unjust Dismissal (Proposed)"}
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    Under the proposed changes, employees on indefinite
                    contracts may be entitled to{" "}
                    <strong>two months' salary per year of service</strong> if
                    dismissed without just cause. This aims to offer stronger
                    job protection and align with international standards.
                  </AccordionItem>

                  <AccordionItem
                    key={"egypt5"}
                    aria-label={"egypt5"}
                    title={
                      "Automatic Conversion of Fixed-Term Contracts (Proposed)"
                    }
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    Fixed-term contracts that extend beyond{" "}
                    <strong>four years</strong> will automatically convert to
                    indefinite-term contracts. This measure is designed to
                    enhance long-term job security for contract workers.
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <img
              src={
                "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[500px] object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employer of Record in Egypt
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Expanding your team in Egypt doesn’t have to mean opening a
                local entity, a process that’s often costly and time-consuming.
                Using an Employer of Record (EOR) lets you hire talent in Egypt
                quickly and compliantly, without the need to establish a legal
                presence. It’s a smart, efficient way to handle onboarding,
                payroll, contracts, and local compliance, all while reducing
                risk and saving resources.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1564849444446-f876dcef378e?q=80&w=2000"
              alt="EOR Egypt"
              className="w-full h-[400px] object-cover place-items-start"
            />
          </div>

          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div>
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employment Contracts in Egypt
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Employment contracts in Egypt must meet specific legal and
                cultural standards, and getting them right is essential to
                staying compliant and avoiding disputes. At Dimondra, we help
                you navigate everything from contract structure to local
                expectations. Whether you’re hiring on a fixed-term basis or
                offering remote roles, we ensure your agreements meet Egyptian
                labor laws.
              </p>
              <ul className="list-disc ml-5 mt-3 text-gray-700 font-quicksand font-[600]">
                <li>Setting clear and lawful contract terms</li>
                <li>Managing fixed-term contracts and renewals</li>
                <li>Understanding requirements for remote work arrangements</li>
                <li>
                  Defining working hours, overtime rules, and entitlements
                </li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Talk to our team
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2000"
              alt="Contracts Egypt"
              className="w-full h-[400px] object-cover place-items-start"
            />
          </div>

          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Payroll & Benefits in Egypt
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Managing employee compensation in Egypt means more than just
                meeting legal requirements—it's about understanding the full
                picture. From minimum wage and mandatory benefits to local
                customs around pay and bonuses, there’s a lot to consider to
                keep your workforce satisfied and your business compliant.
              </p>
              <p className="font-quicksand font-[600] mt-3">
                At Dimondra, we help you navigate both the regulations and the
                cultural expectations that shape payroll in Egypt, so you can
                pay your team accurately, fairly, and on time.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?q=80&w=2000"
              alt="Payroll Egypt"
              className="w-full h-[400px] object-cover place-items-start"
            />
          </div>

          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Leave & Time Off in Saudi Arabia
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Understanding employee leave entitlements is key to staying
                compliant and building a positive workplace culture. At
                Dimondra, we help you manage statutory and optional leave with
                ease.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                Key entitlements include:
              </h2>
              <ul>
                <li>Annual leave: Minimum 21 days, increasing with service</li>
                <li>
                  Sick leave: Paid based on duration and medical documentation
                </li>
                <li>
                  Maternity & paternity leave: Recently expanded under new laws
                </li>
                <li>
                  Public holidays: Based on the Islamic calendar, they vary each
                  year
                </li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Connect with us
              </button>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[400px] order-1 lg:order-2 object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div>
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Leave and Time Off in Egypt
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Understanding employee leave entitlements is key to staying
                compliant and building a supportive work environment. In Egypt,
                employers must provide paid annual leave, observe public
                holidays, and meet legal requirements for maternity and parental
                leave.
              </p>
              <p className="font-quicksand font-[600] mt-3">
                Dimondra helps you stay on top of local leave policies so your
                employees get the time off they’re entitled to and your business
                stays protected.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1611336529963-e407f66b7fa1?q=80&w=2000"
              alt="Leave Egypt"
              className="w-full h-[400px] object-cover place-items-start"
            />
          </div>

          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employee Protections in Egypt
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                When hiring in Egypt, it’s essential to understand the legal
                safeguards in place for workers. Failing to comply with these
                regulations can put your business at serious risk, but staying
                compliant helps you build trust and a stronger team.
              </p>
              <ul className="list-disc ml-5 mt-3 text-gray-700 font-quicksand font-[600]">
                <li>Whistleblower rights and protections</li>
                <li>Employee data handling and privacy</li>
                <li>Fair treatment of temporary and agency workers</li>
                <li>Anti-discrimination rules in hiring and the workplace</li>
                <li>Equal pay requirements across roles and genders</li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1605792657660-596af9009e7b?q=80&w=2000"
              alt="Protections Egypt"
              className="w-full h-[400px] object-cover place-items-start"
            />
          </div>

          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div>
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Ending Employment in Egypt
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Knowing how to properly end an employment relationship is just
                as important as starting one. In Egypt, there are specific rules
                you need to follow when it comes to terminations, notice
                periods, and employee rights after leaving.
              </p>
              <ul className="list-disc ml-5 mt-3 text-gray-700 font-quicksand font-[600]">
                <li>Required notice periods</li>
                <li>Lawful grounds and procedures for termination</li>
                <li>Restrictions after employment ends (non-competes, etc.)</li>
                <li>
                  Employee rights during business transfers or restructuring
                </li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2000"
              alt="Termination Egypt"
              className="w-full h-[400px] object-cover place-items-start"
            />
          </div>
        </div>
        <CTA
          title="Let’s Simplify the Complex World of Work"
          desc="Our solutions help you source, engage, manage, and pay workers anywhere in the world, without the hassle of compliance concerns."
          button={"Get in touch with our team"}
        />
      </section>
    </>
  );
};

export default Page;
