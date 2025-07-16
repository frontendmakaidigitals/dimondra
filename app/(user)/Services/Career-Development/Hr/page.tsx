"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BgLayer from "../../../app_chunks/BgLayer";
import { motion, useScroll, useTransform } from "motion/react";
import SideBar from "./(sideBar)/sideBar";
import HomeForm from "../../../(homepage)/HomeForm";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
const Page = () => {
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const certifications = [
    {
      title: "aPHRi",
      link: "/Services/Career-Development/Hr/aPhri",
      fullForm: "Associate Professional in Human Resources - International™",
      description:
        "Perfect for newcomers to the HR profession, this is the first global certification specifically created for early-career HR professionals.",
    },
    {
      title: "PHRi",
      link: "/Services/Career-Development/Hr/phri",
      fullForm: "Professional in Human Resources - International™",
      description:
        "This certification affirms your grasp of core HR technical and operational practices, designed independently of any specific country’s laws or policies.",
    },
    {
      title: "SPHRi",
      link: "/Services/Career-Development/Hr/sphri",
      fullForm: "Senior Professional in Human Resources - International™",
      description:
        "Aimed at seasoned professionals, this certification showcases your strategic and policy-level HR competencies, applicable across global markets.",
    },
    {
      title: "GPHR",
      link: "/Services/Career-Development/Hr/gphr",
      fullForm: "Global Professional in Human Resources®",
      description:
        "This advanced credential verifies your expertise in global HR operations, including cross-border HR strategy, mobility, and compliance.",
    },
  ];

  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <main>
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <section ref={sectionRef} className="relative h-[80vh] overflow-hidden">
        <motion.img
          style={{ y: yTransform }}
          src="/overview.webp"
          alt=""
          className="w-full h-full object-cover object-top absolute inset-0 z-0"
        />
        <BgLayer color="bg-slate-900/70" />
        {/* Foreground Text Content */}
        <div className="relative flex flex-col justify-end py-20 h-full z-10 container">
          <h1 className="text-3xl lg:text-5xl font-dmSans font-[600] text-slate-50 max-w-3xl">
            Advance Your HR Career with Industry-Leading Certifications
          </h1>
          <p className="text-slate-50 mt-3 max-w-2xl">
            Gain the skills, credentials, and confidence to excel in
            today&apos;s dynamic HR landscape. Whether you&apos;re starting out
            or looking to move up, Dimondra offers comprehensive HR
            certification programs according to your goals.
          </p>
          <ul className="flex ml-4 lg:ml-0 flex-col list-disc lg:list-none lg:flex-row text-slate-50 mt-3 justify-start gap-2">
            <li>
              Flexible courses
              <span className="hidden lg:inline-block">|</span>{" "}
            </li>
            <li>
              Expert trainers
              <span className="hidden lg:inline-block">|</span>{" "}
            </li>
            <li>Globally recognized credential</li>
          </ul>
          <div className="flex justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="text-slate-50 rounded-md mt-5 bg-dimondra-tealDark px-5 py-2"
            >
              Get certified today
            </button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid place-items-start grid-cols-1 lg:grid-cols-[.4fr_1.6fr] gap-5">
          <SideBar />
          <div>
            <h1 className="text-4xl font-dmSans text-dimondra-black font-[600]">
              Overview
            </h1>
            <p className="font-quicksand font-500] mt-4">
              If earning certifications like ACCA or CPA is the pathway to
              becoming a global expert in Finance and Auditing, then HRCI
              credentials are your passport to becoming a world-class HR
              professional!
              <br /> <br /> Recognized as the most trusted HR certification
              authority globally,{" "}
              <strong>HRCI (HR Certification Institute)</strong> has been
              leading the industry for over four decades. With a portfolio of
              well-established certifications, including four internationally
              respected credentials, HRCI equips professionals at every stage of
              their HR career with qualifications that truly stand out.
              <br />
              <br /> In partnership with <strong>VHRS</strong>, HRCI&apos;s
              exclusive representative in Vietnam, we offer the following four
              international certifications tailored to different levels of HR
              experience:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-12">
              {certifications.map((certification, idx) => (
                <div key={idx} className="">
                  <div>
                    <div className="relative w-48 h-48 rounded-full bg-teal-500 bg-gradient-to-br from-teal-500 to-teal-700 shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center group">
                      {/* Inner ring with dots */}
                      <div className="absolute inset-4 rounded-full border-[3px] border-dotted border-slate-400 opacity-80 animate-spin-slow group-hover:animate-none" />

                      {/* Frosted overlay */}
                      <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm pointer-events-none" />

                      {/* Central text */}
                      <span className="z-10 text-white text-[1.75rem] md:text-3xl font-bold tracking-wider drop-shadow-md text-center">
                        {certification.title}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-[500] font-dmSans mt-5">
                      {certification.title} ({certification.fullForm})
                    </h2>
                    <p className="mt-3">{certification.description}</p>
                  </div>
                  <button
                    onClick={() => router.push(certification.link)}
                    className="mt-4 px-4 py-[.4rem] rounded-md bg-dimondra-black text-dimondra-white"
                  >
                    Learn more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HomeForm />
    </main>
  );
};

export default Page;
