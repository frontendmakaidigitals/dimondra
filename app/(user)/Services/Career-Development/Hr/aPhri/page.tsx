"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../(sideBar)/sideBar";
import HomeForm from "../../../../(homepage)/HomeForm";
import { motion, useScroll, useTransform } from "motion/react";
import RightSide from "../(sideBar)/RightSide";
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
          src="/certificaiton.webp"
          alt=""
          className="w-full h-full object-cover object-top absolute inset-0 z-0"
        />

        <BgLayer color={"bg-slate-900/50"} />

        {/* Foreground Text Content */}
        <div className="relative flex flex-col justify-end py-20 h-full z-10 container">
          <h1 className="text-5xl font-dmSans font-[600] text-slate-50 max-w-3xl">
            Kickstart Your Global HR Career with the aPHRi Certification
          </h1>
          <p className="text-slate-50 mt-3 max-w-2xl">
            The aPHRi is an internationally recognized certification designed
            for individuals beginning their career in human resources. Offered
            by HRCI®, it validates foundational HR knowledge and demonstrates
            your commitment to the profession, even without prior work
            experience. Ideal for early-career professionals, recent graduates,
            or those transitioning into HR roles globally.
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
              aPHRi (Associate Professional in Human Resources – International)
            </h1>
            <img src={"/aphri.png"} alt={""} className="py-12" />
            <ul className="space-y-7">
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  Is this Certification Right for Me?
                </h2>
                <p className="font-rubik">
                  {" "}
                  If you&apos;re just starting out in human resources, the
                  &nbsp;
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
                <h2 className="text-xl font-rubik font-[600]">
                  Am I Eligible?
                </h2>
                <p className="font-rubik">
                  To apply for the aPHRi™, you must have at least a high school
                  diploma or the global equivalent. No prior HR experience is
                  required, making this an excellent entry-level certification.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  What Is the Exam Format & Length?
                </h2>
                <ul className="list-disc ml-4">
                  <li>
                    <strong>Exam Length:</strong> 65 scored questions + 25
                    pretest questions
                  </li>
                  <li>
                    <strong>Duration:</strong> 1 hours and 45 minutes (plus 30
                    minutes administration time)
                  </li>
                  <li>
                    <strong>Delivery:</strong> Computer-based test at Pearson
                    VUE centers or online.
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[600]">
                  How Much Does the aPHRi™ Cost?
                </h2>
                <p>
                  <strong>Total Cost:</strong> USD Exam Fee*: $300 + Application
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
                  The aPHRi™ exam is available year-round, based on test center
                  or online availability.
                </p>
              </li>
            </ul>
          </div>
          <RightSide
            Price={
              <>
                <span className="line-through  text-red-500 border-red-400">
                  $400
                </span>
                &nbsp; &nbsp;
                <span className="text-slate-950">$300</span>
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
