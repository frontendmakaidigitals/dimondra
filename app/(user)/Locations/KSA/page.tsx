"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Check, Circle, Plus } from "lucide-react";
import CTA from "../../Services/(business-service-section)/CTA";
import { Divider } from "@heroui/react";
const saudiOverview = [
  { key: "Currency", value: "Saudi Riyal (SAR)" },
  { key: "Capital", value: "Riyadh" },
  { key: "Official Language", value: "Arabic" },
  { key: "Time Zone", value: "GMT +3" },
  {
    key: "Working Hours",
    value: "48 hours/week (max), reduced to 36 during Ramadan (for Muslims)",
  },
  {
    key: "Public Holidays",
    value: "Approx. 10–15 days (based on the Islamic calendar)",
  },
  { key: "Payroll Frequency", value: "Bi-monthly" },
  {
    key: "Minimum Monthly Salary",
    value: "4,000 SAR (for Saudi nationals under government programs)",
  },
  { key: "Date Format", value: "dd/mm/yyyy" },
];
const Page: React.FC = () => {
  return (
    <>
      <section className="relative bg-dimondra-black">
        <div className="container place-items-center pt-28 pb-20 gap-10 text-slate-50 grid grid-cols-1 lg:grid-cols-2 relative z-10">
          <div className="">
            <h1 className="text-5xl font-[600] font-dmSans tracking-tight">
              Hiring in Saudi Arabia
            </h1>
            <p className="mt-5 font-quicksand font-[600]">
              Hiring internationally can be complex, but with Dimondra, it
              doesn&nbsp;t have to be. We simplify the process of sourcing,
              engaging, managing, and paying workers in Saudi Arabia with full
              compliance and efficiency. <br /> <br /> Whether you&nbsp;re
              hiring a single remote employee or building a full team, our
              end-to-end workforce solutions help you expand confidently across
              Saudi Arabia and the GCC.
            </p>
            <button className="bg-dimondra-tealDark text-slate-50 px-4 py-2 mt-6 rounded-md">
              Get in touch
            </button>
          </div>
          <img
            src={
              "https://images.unsplash.com/photo-1551041777-575d3855ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className="w-full rounded-lg h-[380px] shadow-orange-50/20 shadow-[0px_0px_15px_1px]"
          />
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          <h1 className="text-center font-[600] text-5xl font-dmSans tracking-tight">
            Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {saudiOverview.map((item, idx) => (
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
                Recent Changes to Employment Law in Saudi Arabia (2025)
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Saudi Arabia has introduced a series of major updates to its
                labor regulations, aimed at creating a more modern, transparent,
                and employee-friendly workforce environment. These changes, in
                alignment with Vision 2030, took effect from February 19, 2025,
                and bring several new rules that impact employers and employees
                alike.
              </p>

              <div className="mt-5">
                <Accordion variant="bordered" className="">
                  <AccordionItem
                    key={"ques1"}
                    aria-label={"ques1"}
                    title={
                      "Mandatory Written Fixed-Term Contracts for Foreign Employees"
                    }
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    Employers are now required to issue written, fixed-term
                    contracts for all non-Saudi nationals. If no specific
                    duration is mentioned, the contract will automatically be
                    considered valid for one year from the employee&nbsp;s start
                    date. If employment continues beyond that period, the
                    contract renews for the same duration by default.
                  </AccordionItem>
                  <AccordionItem
                    key={"ques2"}
                    aria-label={"ques2"}
                    title={"New Resignation Protocols"}
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    Employees working under fixed-term agreements can resign by
                    submitting a written notice. If the employer does not
                    respond within 30 days, the resignation is deemed accepted.
                    Employers who need to postpone acceptance for business
                    reasons may extend the process by up to 60 days, but only
                    with written justification provided before the initial
                    30-day deadline.
                  </AccordionItem>
                  <AccordionItem
                    key={"ques3"}
                    aria-label={"ques3"}
                    title={"Updated Termination Notice Periods"}
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    <div>
                      <h2 className="font-rubik font-[600]">
                        The required notice period for ending employment has
                        been updated:
                      </h2>
                      <ul className="mt-2">
                        <li className="flex  items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>{" "}
                          Employees must give at least 30 days&nbsp; notice
                          before resigning from indefinite contracts.
                        </li>
                        <li className="flex  items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>{" "}
                          Employers are now required to give 60 days&nbsp;
                          notice before terminating such contracts, allowing
                          more time for transition planning on both sides.
                        </li>
                      </ul>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key={"ques4"}
                    aria-label={"ques4"}
                    title={"Expanded Leave Entitlements"}
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    <div>
                      <h2 className="font-rubik font-[600]">
                        Employers should take note of the following enhancements
                        to employee leave policies: updated:
                      </h2>
                      <ul className="mt-2">
                        <li className="flex items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>{" "}
                          Maternity Leave has been extended to 12 weeks at full
                          pay, with a minimum of six weeks to be taken after
                          childbirth. Leave can begin up to four weeks before
                          the expected delivery date.
                        </li>
                        <li className="flex  items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>{" "}
                          Paternity Leave has been officially introduced,
                          granting fathers three days of paid leave within the
                          first week of their child&nbsp;s birth.
                        </li>
                        <li className="flex  items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>{" "}
                          Bereavement Leave now includes three days of paid
                          leave in the event of a sibling&nbsp;s passing.
                        </li>
                      </ul>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key={"ques5"}
                    aria-label={"ques5"}
                    title={"Flexible Overtime Compensation"}
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    A new provision allows employers to offer vacation days
                    instead of monetary pay for overtime work. This is permitted
                    only if the employee agrees to the arrangement in advance,
                    giving both parties more flexibility in managing work-life
                    balance.
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[500px] object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employer of Record (EOR) Services in Saudi Arabia
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Expanding your workforce into Saudi Arabia can be a complex
                process, often requiring you to set up a local entity, navigate
                legal frameworks, and handle ongoing administrative
                responsibilities. With Dimondra as your Employer of Record (EOR)
                partner, you can bypass these challenges. We take care of
                compliance, contracts, payroll, and statutory obligations so you
                can focus entirely on growing your operations and building your
                team, without the stress of setting up a legal presence in the
                Kingdom. Whether you&nbsp;re hiring one employee or building an
                entire team, Dimondra enables fast, compliant, and seamless
                onboarding in Saudi Arabia.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Talk to our team
              </button>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[400px] object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-1 lg:order-2">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employment Contracts in Saudi Arabia{" "}
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                To hire talent in Saudi Arabia, it&nbsp;s essential that your
                employment contracts follow local labor laws and meet legal
                standards. At Dimondra, we ensure every agreement you issue is
                compliant, clearly structured, and fully enforceable under Saudi
                regulations. <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                Our experts will guide you through all key aspects, including:
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Defining clear contract terms
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Managing fixed-term agreements and renewals
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Establishing lawful working hours and overtime policies
                </li>
              </ul>
              <p className="font-quicksand font-[600] mt-3">
                With Dimondra, your contracts are more than paperwork, they’re a
                foundation for secure, professional working relationships.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Talk to our team
              </button>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1664463760781-f159dfe3af30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[400px] order-1 lg:order-2 object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Payroll & Benefits in Saudi Arabia
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Managing payroll in Saudi Arabia involves more than just timely
                salary payments; it requires full compliance with local labor
                laws and cultural expectations. At Dimondra, we ensure your
                payroll is accurate, compliant, and aligned with legal
                standards.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                We&nbsp;ll help you navigate
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Payroll frequency and salary structuring
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Mandatory benefits like end-of-service gratuity and health
                  insurance
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Allowances and employee expectations are unique to the Saudi
                  market
                </li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1676151863834-b9b162faa8ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
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
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Annual leave: Minimum 21 days, increasing with service
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Sick leave: Paid based on duration and medical documentation
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Maternity & paternity leave: Recently expanded under new laws
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
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
                "https://images.unsplash.com/photo-1499290731724-12e120cfaef3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[400px] order-1 lg:order-2 object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-1 lg:order-2">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employee Protections in Saudi Arabia
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Saudi labor laws provide a strong framework to safeguard
                employees&nbsp; rights. At Dimondra, we ensure your employment
                practices respect these protections while supporting your
                business goals.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                Key areas include:
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Non-discrimination in hiring, pay, and promotion
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Data privacy and confidentiality of employee information
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Fair treatment for temporary and permanent staff
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Whistleblower protections and workplace safety regulations
                </li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Talk to our team
              </button>
            </div>
            <img
              src={
                "https://blog.ipleaders.in/wp-content/uploads/2021/11/employee-rights-c979f0f79b1343e7ad58442bd7e17c60.jpg"
              }
              alt={""}
              className="w-full h-[400px]  object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-1 lg:order-2">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                End of Employment in Saudi Arabia
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Every working relationship comes to an end, and it&nbsp;s important
                to know what to expect when that time comes. Check out our guide
                to learn what employers need to know before ending an employment
                relationship in Saudi Arabia.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                We&nbsp;ll talk about
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Notice periods
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Rules about termination
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Fair treatment for temporary and permanent staff
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Transfers of undertaking
                </li>
                <li className="flex  items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Contract terms
                </li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src={
                "https://cdn.prod.website-files.com/62d84b3d3ba446b2ec041a19/62d84b3d3ba4466e5d044016_1.jpg"
              }
              alt={""}
              className="w-full h-[400px] order-1 lg:order-2 object-cover place-items-start"
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
