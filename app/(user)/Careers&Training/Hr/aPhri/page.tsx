"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../(sideBar)/sideBar";
import HomeForm from "../../../(homepage)/HomeForm";
import { motion, useScroll, useTransform } from "motion/react";
import RightSide from "../(sideBar)/RightSide";
import BgLayer from "../../../app_chunks/BgLayer";
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
        <div className="container grid place-items-start grid-cols-[1.3fr_.7fr] gap-8">
          <div>
            <h1 className="text-4xl font-dmSans max-w-3xl text-dimondra-black font-[600]">
              aPHRi (Associate Professional in Human Resources – International)
            </h1>
            <img src={"/PHRI.png"} className="" />
            <ul className="space-y-7">
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  Is this Certification Right for Me?
                </h2>
                <p className="font-rubik">
                  {" "}
                  If you're just starting out in human resources, the &nbsp;
                  <strong>
                    Associate Professional in Human Resources – International™
                    (aPHRi™)
                  </strong>{" "}
                  is a great way to kick off your career with global
                  recognition. It&apos;s ideal for recent graduates, junior HR
                  staff, and those switching into HR who want a strong
                  foundation in international HR principles and practices. This
                  certification builds your confidence while helping you stand
                  out in a competitive job market.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  Am I Eligible?
                </h2>
                <p className="font-rubik">
                  To apply for the aPHRi™, you must have at least a high school
                  diploma or the global equivalent. No prior HR experience is
                  required, making this an excellent entry-level certification.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-[500] font-rubik">
                  What Is the Exam Format & Length?
                </h2>
                <ul className="list-disc ml-4">
                  <li>
                    Exam Length: 100 scored multiple-choice questions + 25
                    pretest questions.
                  </li>
                  <li>Duration: 2 hours and 15 minutes.</li>
                  <li>
                    Delivery: Computer-based test at Pearson VUE centers or
                    online.
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  How Much Does the aPHRi™ Cost?
                </h2>
                <p>
                  <strong>Total Cost:</strong> USD $400 &nbsp;
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
                  The aPHRi™ exam is available year-round, based on test center
                  or online availability.
                </p>
              </li>
            </ul>
          </div>
          <RightSide />
        </div>
      </section>
      <HomeForm />
    </main>
  );
};

export default Page;
