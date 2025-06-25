"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Check, Circle, Plus } from "lucide-react";
import CTA from "../../Services/(business-service-section)/CTA";
import { Divider } from "@heroui/react";
const indiaOverview = [
  { key: "Currency", value: "Indian Rupee (INR)" },
  { key: "Capital", value: "New Delhi" },
  { key: "Official Language", value: "Hindi and English" },
  { key: "Time Zone", value: "GMT +5:30" },
  { key: "Working Hours", value: "48 hours per week" },
  { key: "Public Holidays (2025)", value: "17 days" },
  { key: "Payroll Frequency", value: "Monthly" },
  { key: "Minimum Monthly Salary", value: "Between ₹12,000 and ₹21,000" },
  { key: "Date Format", value: "dd/mm/yyyy" },
];

const Page: React.FC = () => {
  return (
    <>
      <section className="relative bg-dimondra-black">
        <div className="container place-items-center pt-28 pb-20 gap-10 text-slate-50 grid grid-cols-1 lg:grid-cols-2 relative z-10">
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-[600] font-dmSans tracking-tight">
              Hiring in India
            </h1>
            <p className="mt-5 font-quicksand font-[600]">
              Hiring internationally can be complex, but it doesn&apos;t have to
              be. Dimondra makes it easy to compliantly source, engage, manage,
              and pay workers in India — without the need to set up a local
              entity. <br /> <br /> Our solutions ensure full compliance with
              local employment laws, tax regulations, and worker classification,
              so you can grow your team in India with confidence.
            </p>
            <button className="bg-dimondra-tealDark text-slate-50 px-4 py-2 mt-6 rounded-md">
              Speak to our team
            </button>
          </div>
          <img
            src={
              "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className="w-full rounded-lg h-[380px] shadow-orange-50/20 shadow-[0px_0px_15px_1px]"
          />
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          <h1 className="text-center font-[600] text-4xl lg:text-5xl font-dmSans tracking-tight">
            Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {indiaOverview.map((item, idx) => (
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
          <h1 className="max-w-3xl mx-auto text-4xl lg:text-5xl font-dmSans font-[600] text-dimondra-black text-center">
            Everything you need to know to hire compliantly in India
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Recent Developments in India
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                We understand the challenges of keeping up with India&apos;s
                evolving labour laws and compliance requirements. At Dimondra,
                we actively track regulatory changes so you can stay focused on
                growing your workforce, without compliance concerns.
              </p>
              <h3>
                Here are the key legislative updates impacting employment in
                India:
              </h3>
              <div className="mt-5">
                <Accordion variant="bordered" className="">
                  <AccordionItem
                    key={"ques1"}
                    aria-label={"ques1"}
                    title={
                      "The Contract Labour (Regulation and Abolition) Amendment Act (2024)"
                    }
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    This amendment enhances protections for contract labourers,
                    including temporary agency workers. Key changes include:
                    <ul className="mt-2">
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>{" "}
                        Stronger wage protection
                      </li>
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>{" "}
                        Improved working conditions
                      </li>
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>
                        Faster and more effective dispute resolution
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem
                    key={"ques2"}
                    aria-label={"ques2"}
                    title={"The Temporary Workers Welfare Act (2024)"}
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    This amendment enhances protections for contract labourers,
                    including temporary agency workers. Key changes include:
                    <ul className="mt-2">
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>
                        Stronger wage protection
                      </li>
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>
                        Improved working conditions
                      </li>
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>
                        Faster and more effective dispute resolution
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem
                    key={"ques3"}
                    aria-label={"ques3"}
                    title={"The Temporary Workers Welfare Act (2024)"}
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    <div>
                      A new law focused on temporary and agency workers. It
                      mandates:
                      <ul className="mt-2">
                        <li className="flex  items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>
                          Compulsory health insurance
                        </li>
                        <li className="flex  items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>
                          Access to social security benefits
                        </li>
                        <li className="flex  items-start gap-2">
                          <span>
                            <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                          </span>
                          Guaranteed minimum wages
                        </li>
                      </ul>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key={"ques4"}
                    aria-label={"ques4"}
                    title={"The Employment Protection and Security Act (2024)"}
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    <div>
                      This act strengthens job security across all worker
                      categories, especially temporary hires. It introduces:
                      <ul className="mt-2">
                        <li className="flex  items-start gap-2">
                          Stricter layoff regulations
                        </li>
                        <li className="flex  items-start gap-2">
                          Mandatory severance packages
                        </li>
                        <li className="flex  items-start gap-2">
                          Legal remedies for wrongful termination
                        </li>
                      </ul>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key={"ques5"}
                    aria-label={"ques5"}
                    title={
                      "The Foreign Employment (Regulation and Support) Act (2024)"
                    }
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    This legislation governs the employment of Indian nationals
                    abroad and foreign nationals in India. It provides:
                    <ul className="mt-2">
                      <li className="flex  items-start gap-2">
                        Clearer visa processing
                      </li>
                      <li className="flex  items-start gap-2">
                        Worker protections through bilateral agreements
                      </li>
                      <li className="flex  items-start gap-2">
                        Structured support for cross-border employment
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem
                    key={"ques6"}
                    aria-label={"ques6"}
                    title={
                      "The Foreign Employment (Regulation and Support) Act (2024)"
                    }
                    indicator={<Plus />}
                    className=" text-black  [&_.accordion-item]:text-black"
                  >
                    Designed to align India&apos;s labour laws with global best
                    practices, this act enforces:
                    <ul className="mt-2">
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>
                        Compliance with ILO guidelines
                      </li>
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>
                        Equal pay for equal work
                      </li>
                      <li className="flex  items-start gap-2">
                        <span>
                          <Circle className="fill-dimondra-black size-[12px] mt-[5px]" />
                        </span>
                        Non-discrimination and fair treatment for all workers,
                        including temporary and agency staff
                      </li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[330px] lg:h-[550px] order-1 lg:order-2 object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2">
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
                Kingdom. Whether you&apos;re hiring one employee or building an
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
              className="w-full h-[330px] lg:h-[400px] order-1 object-cover place-items-start"
            />
          </div>

          <Divider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employment Contracts in India
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Hiring in India requires clear, compliant, and legally
                enforceable employment contracts. At Dimondra, we help you
                create contracts that align with Indian labour laws and protect
                your business.
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                We cover key areas such as:
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Contract terms and conditions
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Fixed-term contracts and extensions
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Remote work regulations
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>{" "}
                  Working hours and overtime rules
                </li>
              </ul>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1664463760781-f159dfe3af30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[330px] lg:h-[400px] object-cover order-1 lg:order-2 place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Payroll & Benefits in India
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Employee compensation in India comes with specific rules and
                cultural expectations. To stay compliant and keep your workforce
                motivated, you need to understand minimum wages, statutory
                benefits, and customary pay practices.
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
                  Minimum wage requirement
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Mandatory statutory benefits like Provident Fund and Employee
                  State Insurance
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Common allowances and bonuses expected by employees
                </li>
              </ul>
              <p>
                At Dimondra, we help you navigate payroll processing and
                benefits administration, so you can focus on growing your
                business with confidence.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Connect with us
              </button>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1676151863834-b9b162faa8ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[330px] lg:h-[400px] order-1 object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Leave and Time Off in India
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Understanding your employees&apos; leave entitlements is
                essential to ensure compliance and avoid legal risks. In India,
                several types of paid time off are protected by law and custom.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                We cover key areas such as:
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Statutory leave benefits
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Maternity, paternity, and parental leave
                </li>
                <li className="flex  items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Public holidays
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Paid holidays and other leave types
                </li>
              </ul>
              <p>
                At Dimondra, we help you manage leave policies effectively and
                compliantly.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Talk to our team
              </button>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1499290731724-12e120cfaef3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
              className="w-full h-[330px] lg:h-[400px] order-1 lg:order-2 object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Employee Protections in India
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Employees in India benefit from important legal protections that
                employers must understand and respect. Staying informed helps
                you build a fair and compliant workplace.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                We cover key areas such as:
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Whistleblower protections
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Data privacy regulations
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Equal treatment for temporary and agency workers
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Anti-discrimination laws
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Pay equity legislation
                </li>
              </ul>
              <p>
                At Dimondra, we guide you through India&apos;s employee
                protection laws to reduce risk and promote a positive work
                environment.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src={
                "https://blog.ipleaders.in/wp-content/uploads/2021/11/employee-rights-c979f0f79b1343e7ad58442bd7e17c60.jpg"
              }
              alt={""}
              className="w-full h-[330px] lg:h-[400px] order-1 object-cover place-items-start"
            />
          </div>
          <Divider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 place-items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                End of Employment in India
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                When an employee leaves your organisation, managing the
                offboarding process carefully is crucial to protect your
                business from legal risks.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                We cover important topics including:
              </h2>
              <ul className="mt-2">
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Notice periods
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Termination rules and procedures
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Post-termination restraints (such as non-compete clauses)
                </li>
                <li className="flex  items-start gap-2">
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Transfers of undertakings
                </li>
              </ul>
              <p>
                At Dimondra, we help you navigate India’s offboarding
                requirements smoothly and compliantly.
              </p>
              <button className="bg-dimondra-tealDark text-slate-50 rounded-md px-4 py-2 mt-5">
                Speak to our team
              </button>
            </div>
            <img
              src={
                "https://cdn.prod.website-files.com/62d84b3d3ba446b2ec041a19/62d84b3d3ba4466e5d044016_1.jpg"
              }
              alt={""}
              className="w-full h-[330px] lg:h-[400px] order-1 lg:order-2 object-cover place-items-start"
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
