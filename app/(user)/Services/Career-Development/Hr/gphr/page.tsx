"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../(sideBar)/sideBar";
import HomeForm from "../../../../(homepage)/HomeForm";
import { motion, useScroll, useTransform } from "motion/react";
import BgLayer from "../../../../app_chunks/BgLayer";
import RightSide from "../(sideBar)/RightSide";
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
            Master Global HR Strategy with the GPHR Certification
          </h1>
          <p className="text-slate-50 mt-3 max-w-2xl">
            The GPHR is a prestigious certification designed for HR
            professionals who manage international human resources operations.
            Offered by HRCI®, it validates your ability to develop and
            implement global HR strategies, manage cross-border talent mobility,
            and navigate international legal and cultural complexities. Ideal
            for seasoned professionals overseeing global workforces, this
            credential sets you apart as a true expert in global HR leadership.
          </p>

          <div className="flex justify-start">
            <button className="text-slate-50 rounded-md mt-5 bg-dimondra-tealDark px-5 py-2">
              Get certified today
            </button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid place-items-start grid-cols-1 lg:grid-cols-[.4fr_1.3fr_.7fr] gap-8">
          <SideBar />
          <div>
            <h1 className="text-4xl font-dmSans max-w-3xl text-dimondra-black font-[600]">
              GPHR (Global Professional in Human Resources)
            </h1>
            <img src={"/gphr.webp"} alt={""} className="py-12" />
            <ul className="space-y-7">
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  Is this Certification Right for Me?
                </h2>
                <p className="font-rubik">
                  Showcase your global HR leadership with the{" "}
                  <strong>
                    Global Professional in Human Resources® (GPHR®)
                  </strong>{" "}
                  certification. Designed for HR professionals managing
                  cross-border strategies and international teams, the GPHR®
                  validates your ability to handle global workforce planning,
                  international labor law compliance, and multinational HR
                  practices. Whether you&apos;re overseeing global HR operations
                  or supporting international expansion, this credential proves
                  your expertise in managing HR at a worldwide level.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  Am I Eligible?
                </h2>
                <p className="font-rubik">
                  To be eligible for the GPHR®, you must meet one of the
                  following criteria based on your education and global HR
                  experience:
                </p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>
                    2 years of global professional-level HR experience with a
                    Master’s degree or higher
                  </li>
                  <li>
                    3 years of experience (including 2 years in global HR) with
                    a Bachelor’s degree
                  </li>
                  <li>
                    4 years of experience (including 2 years in global HR) with
                    less than a Bachelor’s degree
                  </li>
                </ul>
                <p className="text-sm font-quicksand">
                  Note: Global HR experience means direct, cross-border HR
                  responsibilities across two or more countries or regions.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  What Is the Exam Format & Length?
                </h2>
                <ul className="list-disc ml-4 space-y-1">
                  <li>
                    <strong>Exam Length:</strong> 100 score questions (mostly
                    multiple-choice) + (including 25 pretest questions)
                  </li>
                  <li>
                    <strong>Duration:</strong> 2 hours adn 15 minutes (plus 30
                    minutes administration time){" "}
                  </li>
                  <li>
                    <strong>Delivery:</strong> Online or at certified global
                    test centers
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  How Much Does the GPHR™ Cost?
                </h2>
                <p>
                  <strong>Total Cost:</strong> USD Exam Fee*: $400 + Application
                  Fee: $100
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
                <h2 className="text-xl font-rubik font-[600]">
                  When Can I Take the Exam?
                </h2>
                <p>
                  {" "}
                  The GPHR® exam is available year-round, depending on the
                  availability of testing centers or online exam appointments.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  How Do You Remain Certified?
                </h2>
                <p>
                  The GPHR® exam is available year-round, depending on the
                  availability of testing centers or online exam appointments.
                </p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>
                    Earn 60 recertification credits within the three-year
                    period, or
                  </li>
                  <li>
                    Retake and pass the exam before your certification expires
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <RightSide
            Price={
              <>
                <span className="line-through  text-red-500 border-red-400">
                  $500
                </span>
                &nbsp; &nbsp;
                <span className="text-slate-950">$400</span>
              </>
            }
          />
        </div>
      </section>
      <HomeForm />
    </main>
  );
};

export default Page;
