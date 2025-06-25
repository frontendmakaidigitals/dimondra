"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Check, Circle, Plus } from "lucide-react";
import CTA from "../../Services/(business-service-section)/CTA";
import { Divider } from "@heroui/react";
const uaeOverview = [
  { key: "Currency", value: "UAE Dirham (AED)" },
  { key: "Capital", value: "Abu Dhabi" },
  { key: "Official Language", value: "Arabic" },
  { key: "Time Zone", value: "GMT +4" },
  {
    key: "Working Hours",
    value:
      "Max 48 hours/week (reduced to 36 hours during Ramadan for Muslim employees)",
  },
  {
    key: "Public Holidays",
    value:
      "Around 13–15 days (based on the Islamic calendar, varies each year)",
  },
  { key: "Payroll Frequency", value: "Monthly" },
  {
    key: "Minimum Monthly Salary",
    value:
      "No official minimum (benchmarks vary by skill level and nationality)",
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
              Hire & Manage Talent in the UAE
            </h1>
            <p className="mt-5 font-quicksand font-[600]">
              Expanding into the UAE? With Dimondra, you can compliantly hire,
              manage, and pay your workforce without setting up a local entity.
              We handle contracts, payroll, and compliance, so you can focus on
              scaling your business across the Emirates and beyond.
            </p>
            <button className="bg-dimondra-tealDark text-slate-50 px-4 py-2 mt-6 rounded-md">
              Ready to hire in the UAE?
            </button>
          </div>
          <img
            src={
              "https://images.unsplash.com/photo-1640239699318-13d6d5230cc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className="w-full rounded-lg h-[380px] shadow-orange-50/20 shadow-[0px_0px_15px_1px]"
          />
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          <h1 className="text-center font-[600] text-5xl font-dmSans tracking-tight">
            United Arab Emirates at a Glance
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {uaeOverview.map((item, idx) => (
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
            Everything You Need to Know to Hire Compliantly in UAE
          </h1>

          <div className="grid grid-cols-2 gap-10 py-14">
            <div>
              <h2 className="font-rubik font-[500] text-3xl text-dimondra-black">
                Recent Developments in the United Arab Emirates
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Staying compliant in a fast-evolving regulatory environment is
                essential for successful hiring. At Dimondra, we actively track
                changes in UAE labor laws so you can focus on your business.
                Here are some of the key employment updates shaping 2025:
              </p>

              <div className="mt-5">
                <Accordion variant="bordered">
                  <AccordionItem
                    key="uae1"
                    aria-label="uae1"
                    title="Stricter Emiratization Targets"
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    Private-sector companies with 20 or more employees in
                    specific sectors are now required to ensure that 5% of their
                    workforce are Emirati nationals by the end of 2025. Failure
                    to meet these targets could result in fines and limitations
                    on new work permits.
                  </AccordionItem>

                  <AccordionItem
                    key="uae2"
                    aria-label="uae2"
                    title="New Guidelines for Remote Work"
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    The Ministry of Human Resources and Emiratisation (MoHRE)
                    has released new regulations that require employers to
                    formalize remote work arrangements. Contracts must now
                    define hours, roles, and pay structures for remote
                    employees.
                  </AccordionItem>

                  <AccordionItem
                    key="uae3"
                    aria-label="uae3"
                    title="Voluntary Pension Scheme for Expats"
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    A new optional pension plan has been introduced for
                    expatriate employees, offering a structured savings
                    alternative to the traditional end-of-service gratuity. This
                    initiative supports long-term financial planning for foreign
                    workers.
                  </AccordionItem>

                  <AccordionItem
                    key="uae4"
                    aria-label="uae4"
                    title="Tighter Wage Protection Enforcement"
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    The UAE has intensified oversight of its Wage Protection
                    System (WPS) to ensure salaries are paid on time.
                    Non-compliant companies risk license suspensions and
                    penalties, underlining the country&apos;s continued focus on
                    labor rights.
                  </AccordionItem>

                  <AccordionItem
                    key="uae5"
                    aria-label="uae5"
                    title="Expanded Mandatory Health Insurance"
                    indicator={<Plus />}
                    className="text-black [&_.accordion-item]:text-black"
                  >
                    Health insurance is now mandatory for all employees across
                    the UAE, including those in free zones. Employers must
                    provide plans that meet new minimum coverage standards set
                    by the government.
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
                Employer of Record in the United Arab Emirates
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Building your team in the UAE doesn&apos;t have to involve
                setting up a local entity. That route can be costly, complex,
                and slow your business down. <br /> <br /> With Dimondra as your
                Employer of Record (EoR), you can quickly and compliantly hire
                talent in the UAE, without the need for a local company. We
                handle contracts, payroll, and compliance, so you can focus on
                scaling with confidence.
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                Want to hire in the UAE without setting up a legal entity?
              </h2>
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
                Employment Contracts in the United Arab Emirates
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                To hire in the UAE, your employment contracts must meet specific
                legal standards — from contract duration to working hour limits
                and remote work terms. Ensuring full compliance protects both
                your business and your employees.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                At Dimondra, we help you structure clear, compliant contracts
                that align with local laws and best practices, covering:
              </h2>
              <ul className="mt-2">
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Defining roles, responsibilities, and contract terms
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Managing fixed-term contracts and renewals
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Complying with remote work regulations
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Outlining working hours, rest days, and overtime rules
                </li>
              </ul>

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
                Payroll & Benefits in the United Arab Emirates
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Compensating employees in the UAE requires more than just legal
                compliance — it demands an understanding of both local laws and
                workplace expectations. From payroll timelines and
                end-of-service benefits to health coverage and bonus norms,
                knowing what&apos;s expected can make all the difference in
                attracting and retaining top talent. <br /> <br /> At Dimondra,
                we help you manage payroll accurately and deliver competitive
                benefits that meet both legal obligations and employee
                expectations.
                <br />
              </p>

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
                Leave and Time Off in the United Arab Emirates
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Providing the right time off is essential to meeting legal
                requirements and supporting employee wellbeing. In the UAE,
                employers must offer statutory annual leave, maternity and
                parental leave, and observe public holidays, all in line with
                labor law.
                <br /> <br /> Dimondra ensures you understand and apply these
                entitlements correctly, so your business stays compliant and
                your team stays supported.
              </p>

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
                Employee Protections in the United Arab Emirates
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Employers in the UAE are expected to uphold a growing set of
                legal protections for their workforce. Understanding these rules
                isn&apos;t optional — it&apos;s essential to staying compliant
                and building a responsible, inclusive workplace.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                At Dimondra, we help you stay aligned with local employment
                laws, including:
              </h2>
              <ul className="mt-2">
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Safeguards for whistleblowers
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Employee data protection regulations
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Fair treatment for agency and temporary workers
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Anti-discrimination standards in hiring and at work
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Pay equity and fair compensation practices
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
                End of Employment in the United Arab Emirates
              </h2>
              <p className="font-quicksand font-[600] mt-3">
                Ending an employment relationship in the UAE requires careful
                attention to local laws and procedures. From notice periods to
                final payments, getting it wrong can expose your business to
                legal and financial risks. <br /> <br /> At Dimondra, we help
                you manage offboarding the right way — fairly, compliantly, and
                with minimal disruption.
                <br /> <br />
              </p>
              <h2 className="text-lg font-quicksand font-[600]">
                Here&apos;s what we help you navigate:
              </h2>
              <ul className="mt-2">
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Termination procedures and valid grounds
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Required notice periods and final settlements
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Non-compete clauses and post-exit restrictions
                </li>
                <li className="flex items-start gap-2">
                  {" "}
                  <span className="">
                    <Check className="size-[18px] stroke-green-600 mt-1" />
                  </span>
                  Legal steps in business transfers and restructuring
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
          title="Let’s Work Together to Simplify the Complex World of Work"
          desc="Hiring and managing talent globally shouldn’t slow you down. With Dimondra’s Employer of Record (EoR) solution, you can easily source, engage, manage, and pay workers anywhere, without setting up local entities or worrying about compliance."
          button={"Speak to our team"}
        />
      </section>
    </>
  );
};

export default Page;
