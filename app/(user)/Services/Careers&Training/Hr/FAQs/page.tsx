"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../(sideBar)/sideBar";
import HomeForm from "../../../../(homepage)/HomeForm";
import { motion, useScroll, useTransform } from "motion/react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Plus } from "lucide-react";
import BgLayer from "../../../../app_chunks/BgLayer";
const Page = () => {
  const { scrollY } = useScroll();
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);

  const hrciEligibility = [
    {
      certification: "aPHRi™",
      fullTitle: "Associate Professional in Human Resources – International™",
      requirements: [
        "High school diploma or global equivalent",
        "No HR experience required (knowledge-based credential)",
      ],
    },
    {
      certification: "PHRi™",
      fullTitle: "Professional in Human Resources – International™",
      note: "Meet one of the following:",
      requirements: [
        "1 year of professional-level HR experience + Master’s degree",
        "2 years of professional-level HR experience + Bachelor’s degree",
        "4 years of professional-level HR experience + High school diploma",
      ],
    },
    {
      certification: "SPHRi™",
      fullTitle: "Senior Professional in Human Resources – International™",
      note: "Meet one of the following:",
      requirements: [
        "4 years of professional-level HR experience + Master’s degree",
        "5 years of professional-level HR experience + Bachelor’s degree",
        "7 years of professional-level HR experience + High school diploma",
        "Must also have knowledge of local employment laws",
      ],
    },
    {
      certification: "GPHR®",
      fullTitle: "Global Professional in Human Resources®",
      note: "Meet one of the following:",
      requirements: [
        "2 years of global HR experience* + Master’s degree",
        "3 years of HR experience (at least 2 in global HR) + Bachelor’s degree",
        "4 years of HR experience (at least 2 in global HR) + High school diploma",
        "Global HR experience = cross-border HR responsibilities in 2+ countries or regions",
      ],
    },
  ];

  return (
    <main>
      <section ref={sectionRef} className="relative h-[80vh] overflow-hidden">
        <motion.img
          style={{ y: yTransform }}
          src="https://images.unsplash.com/photo-1698047681452-08eba22d0c64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover object-top absolute inset-0 z-0"
        />

        <BgLayer />

        {/* Foreground Text Content */}
        <div className="relative flex flex-col justify-end py-20 h-full z-10 container">
          <h1 className="text-5xl font-dmSans font-[600] text-slate-50 max-w-3xl">
            Advance Your HR Career with Industry-Leading Certifications
          </h1>
          <p className="text-slate-50 mt-3 max-w-2xl">
            Gain the skills, credentials, and confidence to excel in
            today&apos;s dynamic HR landscape. Whether you&apos;re starting out
            or looking to move up, Dimondra offers comprehensive HR
            certification programs according to your goals.
          </p>
          <ul className="flex text-slate-50 mt-3 justify-start gap-2">
            <li>Flexible courses |</li>
            <li>Expert trainers |</li>
            <li>Globally recognized credential</li>
          </ul>
          <div className="flex justify-start">
            <button className="text-slate-50 rounded-md mt-5 bg-dimondra-tealDark px-5 py-2">
              Get certified today
            </button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid place-items-start grid-cols-[.4fr_1.6fr] gap-5 ">
          <SideBar />
          <div className=" w-full">
            <h1 className="text-4xl font-dmSans max-w-3xl text-dimondra-black font-[600]">
              FAQs
            </h1>
            <div className="mt-8 w-full">
              <Accordion variant="splitted" className="!w-full">
                <AccordionItem
                  aria-label={"ques1"}
                  title={"Am I Eligible for the HRCI Certifications?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <div className="overflow-x-auto mt-8">
                    <table className="min-w-full border border-gray-300 text-left ">
                      <thead className="bg-gray-100 text-gray-800 ">
                        <tr>
                          <th className="border px-4 py-3 font-semibold text-sm w-1/3">
                            Type of HRCI Certification
                          </th>
                          <th className="border px-4 py-3 font-semibold text-sm">
                            Eligibility Requirements
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {hrciEligibility.map((item, idx) => (
                          <tr key={idx}>
                            <td className="border px-4 py-3 align-top">
                              <p className="font-semibold">
                                {item.certification}
                              </p>
                              <p className="italic text-sm text-gray-600">
                                {item.fullTitle}
                              </p>
                            </td>
                            <td className="border px-4 py-3">
                              {item.note && (
                                <p className="mb-1 font-medium text-gray-800">
                                  {item.note}
                                </p>
                              )}
                              <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {item.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionItem>
                <AccordionItem
                  aria-label={"ques2"}
                  title={"Which HRCI certification is right for me?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <p className="font-rubik font-[500]">
                    It depends on your current HR experience and career goals:
                  </p>
                  <ul className="ml-4 list-disc mt-2 space-y-2">
                    <li>If you're just starting out, go for aPHRi™.</li>
                    <li>
                      If you have a few years of experience, PHRi™ is ideal.
                    </li>
                    <li>
                      If you are a senior HR professional, consider SPHRi™.
                    </li>
                    <li>
                      If you manage international HR functions, GPHR® is best
                      for you.
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem
                  aria-label={"ques3"}
                  title={" Can I take the exam online?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <p>
                    Yes, most HRCI exams can be taken either online (remote
                    proctoring) or at a certified testing center like Prometric
                    or Pearson VUE, depending on the certification.
                  </p>
                </AccordionItem>
                <AccordionItem
                  aria-label={"ques4"}
                  title={" Can I take the exam online?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <p>
                    Yes, most HRCI exams can be taken either online (remote
                    proctoring) or at a certified testing center like Prometric
                    or Pearson VUE, depending on the certification.
                  </p>
                </AccordionItem>
                <AccordionItem
                  aria-label={"ques5"}
                  title={"What happens if I don’t pass the exam?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <p>
                    You can retake the exam, but you’ll need to submit a new
                    application and pay the applicable fees. There is also a
                    waiting period before retesting.
                  </p>
                </AccordionItem>
                <AccordionItem
                  aria-label={"ques6"}
                  title={"How long is my certification valid?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <p>
                    All HRCI certifications are valid for three years. You can
                    recertify by earning the required number of credits or
                    retaking the exam.
                  </p>
                </AccordionItem>
                <AccordionItem
                  aria-label={"ques7"}
                  title={"Can I apply if I don’t have a degree?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <p>
                    Yes. Both aPHRi™ and even higher-level certifications like
                    PHRi™ and SPHRi™ accept applicants with a high school
                    diploma, provided they meet the experience requirements.
                  </p>
                </AccordionItem>
                <AccordionItem
                  aria-label={"ques7"}
                  title={"Do I need to take a training course before applying?"}
                  indicator={<Plus />}
                  className="bg-white font-rubik font-[500] text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black !w-full"
                >
                  <p>
                    While not mandatory, training programs, workshops, or
                    self-study can greatly help in preparing for the exam. Many
                    candidates choose to enroll in an approved HRCI prep course.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <HomeForm />
    </main>
  );
};

export default Page;
