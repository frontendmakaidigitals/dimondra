"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../(sideBar)/sideBar";
import HomeForm from "../../../(homepage)/HomeForm";
import { motion, useScroll, useTransform } from "motion/react";
import BgLayer from "../../../app_chunks/BgLayer";
import CTA from "../../../Services/(business-service-section)/CTA";
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
        <div className="container grid place-items-start grid-cols-[.4fr_1.6fr] gap-5">
          <SideBar />
          <div>
            <h1 className="text-4xl font-dmSans max-w-3xl text-dimondra-black font-[600]">
              HRCI® Certification
            </h1>

            <ul className="space-y-7">
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  Why an HRCI Certification
                </h2>
                <p className="font-rubik">
                  Earning a certification from{" "}
                  <strong>HR Certification Institute® (HRCI®)</strong>{" "}
                  isn&apos;t just a career move — it&apos;s a statement of your
                  expertise, credibility, and dedication to the HR profession.
                  Whether you're looking to advance your current role or explore
                  international opportunities, an HRCI credential sets you apart
                  in a competitive global workforce.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-xl font-rubik font-[500]">
                  What Makes HRCI® Certification Stand Out?
                </h2>

                <ul className="list-disc ml-4 space-y-1">
                  <li>
                    Globally Accredited & Recognized All core HRCI
                    certifications meet the National Commission for Certifying
                    Agencies (NCCA) standards. The PHRi™ and SPHRi™ are the
                    first and only HR certifications to be accredited under
                    ISO/IEC 17024 by the International Accreditation Service
                    (IAS).
                  </li>
                  <li>
                    Proof of Professional Competence HRCI certifications
                    validate your technical and strategic HR skills, showcasing
                    your ability to deliver results, reduce risk, and support
                    organizational goals.
                  </li>
                  <li>
                    Join a Global Network Be part of a prestigious community of
                    nearly 140,000 certified professionals across 100+
                    countries, all dedicated to shaping the future of HR.
                  </li>
                  <li>
                    Built on 40+ Years of Trust Since 1976, HRCI has been the
                    world's most established and respected HR certification
                    body.
                  </li>
                  <li>
                    Recognized by Employers Worldwide Certified HR professionals
                    are seen by organizations as more motivated, knowledgeable,
                    and committed, often leading to greater trust and leadership
                    opportunities.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CTA
        title="Start Your Certification Journey Today"
        desc="Take the next step in your HR career with a globally respected HRCI® credential. Whether you're entering the field or stepping into a strategic leadership role, our internationally recognized certifications will help you gain confidence, earn credibility, and make a lasting impact."
        button="Get Certified"
      />
      <HomeForm />
    </main>
  );
};

export default Page;
