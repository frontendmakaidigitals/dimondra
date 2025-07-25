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
            Lead with Confidence – Earn the SPHRi Certification
          </h1>
          <p className="text-slate-50 mt-3 max-w-2xl">
            The SPHRi is an advanced-level certification for senior HR
            professionals who drive global strategy and leadership. Offered by
            HRCI®, it demonstrates your expertise in policy development,
            organizational planning, and HR business strategy across
            international markets. This credential is ideal for experienced HR
            leaders aiming to solidify their influence at the executive level
            and navigate complex global HR challenges.
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
              SPHRi (Senior Professional in Human Resources – International)
            </h1>
            <img alt={""} src={"/sphri.png"} className="py-12" />
            <ul className="space-y-7">
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  Is this Certification Right for Me?
                </h2>
                <p className="font-rubik">
                  Lead with confidence and elevate your impact with the{" "}
                  <strong>
                    Senior Professional in Human Resources – International™
                    (SPHRi™)
                  </strong>
                  certification. Tailored for senior-level HR professionals, the
                  SPHRi™ highlights your ability to think strategically and
                  lead international HR functions. It focuses on areas such as
                  global talent management, organizational development, and
                  workforce planning, proving that you have the expertise to
                  align HR strategy with business goals in complex, global
                  environments.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  Am I Eligible?
                </h2>
                <p className="font-rubik">
                  To be eligible for the SPHRi™, you must meet one of the
                  following criteria based on your education and professional HR
                  experience:
                </p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>
                    4 years of experience with a Master&apos;s degree or higher
                  </li>
                  <li>5 years of experience with a Bachelor&apos;s degree</li>
                  <li>
                    7 years of experience with less than a Bachelor&apos;s
                    degree
                  </li>
                </ul>
                <p className="text-sm font-quicksand">
                  Note: Knowledge of local employment laws is also required.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  What Is the Exam Format & Length?
                </h2>
                <ul className="list-disc ml-4 space-y-1">
                  <li>
                    <strong>Exam Length:</strong> 115 scored questions
                    (multiple-choice questions) + 25 pretest questions
                  </li>
                  <li>
                    <strong>Duration:</strong> 2 hours and 45 minutes (plus 30
                    minutes administration time)
                  </li>
                  <li>
                    <strong>Delivery:</strong> Online or at approved test
                    centers globally
                  </li>
                  <li>
                    <strong>Language:</strong> English (with Spanish translation
                    aid available)
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  How Much Does the SPHRi™ Cost?
                </h2>
                <p>
                  <strong>Total Cost:</strong> USD <strong>Total Cost:</strong>{" "}
                  USD Exam Fee*: $400 + Application Fee: $100
                  <span className="inline-block text-sm font-quicksand">
                    (This includes both the application and exam fees.)
                  </span>
                  
                </p>
                <p className="text-sm font-quicksand">
                  **Note: Once your exam application is approved, fees are
                  non-refundable regardless of changes to your testing plans.
                </p>
                <p className="text-sm font-quicksand">
                  HRCI provides reduced exam fees ($200–$300 USD) for candidates
                  in eligible countries as per the World Bank income
                  classification.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  When Can You Take the Exam?
                </h2>
                <p>
                  {" "}
                  The SPHRi™ is available year-round, subject to availability
                  at Prometric test centers or online scheduling options.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  How Do You Remain Certified?
                </h2>
                <p>
                  {" "}
                  Your SPHRi™ credential is valid for three years. To maintain
                  it, you must:
                </p>
                Earn 45 HR and 15 Business recertification credits over a
                three-year period
              </li>
            </ul>
          </div>
          <RightSide
            price={400}
            name={"sphri"}
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
