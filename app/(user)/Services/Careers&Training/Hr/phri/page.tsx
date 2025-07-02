"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../(sideBar)/sideBar";
import HomeForm from "../../../../(homepage)/HomeForm";
import { motion, useScroll, useTransform } from "motion/react";
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
            Advance Your Global HR Expertise with the PHRi Certification
          </h1>
          <p className="text-slate-50 mt-3 max-w-2xl">
            The PHRi is a globally recognized credential for HR professionals
            with operational and tactical experience. Offered by HRCI®, it
            validates your ability to implement HR programs, interpret policy,
            and manage key HR functions across international contexts. Ideal for
            mid-level HR professionals looking to enhance their credibility and
            advance their careers in a global environment.
          </p>
          
          <div className="flex justify-start">
            <button className="text-slate-50 rounded-md mt-5 bg-dimondra-tealDark px-5 py-2">
              Get certified today
            </button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid place-items-start grid-cols-[.4fr_1.6fr] gap-5">
          <SideBar />
          <div>
            <h1 className="text-4xl font-dmSans max-w-3xl text-dimondra-black font-[600]">
              PHRi (Professional in Human Resources – International)
            </h1>
            <img src={"/PHRI.png"} alt={""} className="" />
            <ul className="space-y-7">
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  Is this Certification Right for Me?
                </h2>
                <p className="font-rubik">
                  Advance your HR career with global recognition through the
                  &nbsp;
                  <strong>
                    Professional in Human Resources – International™ (PHRi™)
                  </strong>{" "}
                  &nbsp; certification. Designed for current HR practitioners,
                  the PHRi focuses on practical, operational HR functions
                  including recruitment, employee relations, compensation, and
                  HR administration within an international framework. This
                  certification is ideal for professionals aiming to validate
                  their knowledge and move into mid- to senior-level HR roles
                  globally.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  Am I Eligible?
                </h2>
                <p className="font-rubik">
                  To be eligible for the PHRi™, you must meet one of the
                  following criteria based on your education and experience:
                </p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>
                    At least 1 year of professional-level HR experience with a
                    Master&apos;s degree or higher
                  </li>
                  <li>
                    At least 2 years of experience with a Bachelor&apos;s degree
                  </li>
                  <li>
                    At least 4 years of experience with less than a
                    Bachelor&apos;s degree.
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-[500] font-rubik">
                  What Is the Exam Format & Length?
                </h2>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Exam Length: 145 multiple-choice questions</li>
                  <li>Duration: 3 hours </li>
                  <li>
                    Delivery: Computer-based test available online or at
                    approved global test centers.
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  How Much Does the PHRi™ Cost?
                </h2>
                <p>
                  <strong>Total Cost:</strong> USD $495 &nbsp;
                  <span className="inline-block text-sm font-quicksand">
                    (This includes both the application and exam fees.)
                  </span>
                </p>
                <p className="text-sm font-quicksand">
                  **Note: Once your exam application is approved, fees are
                  non-refundable regardless of changes to your testing plans.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  When Can I Take the Exam?
                </h2>
                <p>
                  {" "}
                  PHRi™ testing is offered year-round, depending on the
                  availability of test centers or online testing slots.
                </p>
              </li>
              <li className="space-y-2">
                <p>
                  The PHRi™ credential is valid for{" "}
                  <strong>three years</strong>. To maintain it, you must either:
                </p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Earn 60 recertification credits over three years, or</li>
                  <li>
                    Retake and pass the exam before your certification expires.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <HomeForm />
    </main>
  );
};

export default Page;
