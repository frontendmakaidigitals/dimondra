"use client";
import React, { useState } from "react";
import { Clock, Users, Star } from "lucide-react";
import CTA from "../../(business-service-section)/CTA";
import FAQ from "../../../app_chunks/FAQ";
import PopForm from "@/app/(user)/app_chunks/PopFrom";
const Page = () => {
  const careerCoachingFAQs = [
    {
      question: "What is career coaching, and who can benefit from it?",
      answer:
        "Career coaching is a personalized process designed to help individuals clarify their professional goals, overcome obstacles, and plan for career growth. Whether you’re starting out, switching careers, or seeking advancement, career coaching can provide valuable guidance.",
    },
    {
      question: "How do virtual coaching sessions work?",
      answer:
        "Our virtual coaching sessions use secure video platforms, allowing you to connect with your coach from anywhere. Sessions are interactive and tailored to your specific needs, ensuring a seamless and effective experience.",
    },
    {
      question: "How long does the career coaching program last?",
      answer:
        "Program length varies depending on individual needs. Typically, clients engage in 4 to 8 sessions over a few months, with flexibility to extend based on goals and progress.",
    },
    {
      question: "What kind of outcomes can I expect from career coaching?",
      answer:
        "You can expect greater clarity on your career direction, enhanced job search strategies, improved interview skills, stronger personal branding, and actionable career advancement plans.",
    },
    {
      question: "Can career coaching help with work-life balance?",
      answer:
        "Absolutely. Our coaches focus on holistic success, helping you manage career ambitions while maintaining wellbeing and avoiding burnout.",
    },
    {
      question: "Is career coaching confidential?",
      answer:
        "Yes, all coaching sessions are strictly confidential, creating a safe space for open and honest conversations.",
    },
    {
      question: "How do I get started with Dimondra’s career coaching?",
      answer:
        "Simply reach out via our contact form or schedule a consultation. We’ll discuss your goals and match you with the right coach to support your journey.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="pt-32 pb-28 relative">
        <div className="absolute inset-0 w-full h-[120px] bg-gradient-to-b from-slate-400 bg-[#edf6fd]" />

        <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6 ">
          <div>
            <h1 className="text-4xl lg:text-5xl font-dmSans font-[600] tracking-tight">
              Personalised Career Advisory in Dubai for Long-Term Success
            </h1>
            <p className="mt-2 font-quicksand font-[500]">
              Discover Clarity. Build Confidence. Grow Your Career with
              Dimondra&apos;s Expert Career Coaches
            </p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-2">
                <Clock className="" />
                Available anytime - at your convenience
              </li>
              <li className="flex items-start gap-2">
                <Users className="fill-gray-700 stroke-gray-500" />
                Virtual or in-person consultation
              </li>
              <li className="flex items-start gap-2">
                <Star className="fill-yellow-300 stroke-yellow-500" />
                Rated 4.9/5 by professional across the region
              </li>
            </ul>
            <button
              onClick={() => setIsOpen(true)}
              className="px-5 py-[.45rem] bg-dimondra-tealDark mt-6 text-slate-50 rounded-md"
            >
              Register now
            </button>
          </div>
          <div>
            <img
              src="/services/business-development.webp"
              alt=""
              className="rounded-lg"
              style={{
                WebkitMaskImage: "url('/mask.webp')",
                maskImage: "url('/mask.webp')",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mb-[300px]">
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl font-[500] font-dmSans tracking-tight">
            Guiding You to Success with Career Coaching in Dubai
          </h2>
          <p className="mt-4 font-quicksand font-[600] ">
            At Dimondra, our career advisory services are more than just
            guidance; they are a strategic framework designed to help you
            thrive. Our coaching programmes, including career transition and
            outplacement support, empower individuals to make confident,
            informed decisions in their professional lives.
            <br /> <br />
            As Dubai grows into a global talent magnet, we ensure you stay
            competitive with tailor-made coaching. With decades of expertise,
            our consultants provide hands-on support for career planning,
            interview preparation, personal branding, and more.
            <br /> <br />
            Our experienced coaches bring decades of insight to help you
            navigate this dynamic market. From fast-tracking job searches to
            breaking through mid-career challenges, we tailor every session to
            your individual goals.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 rounded-md py-[.4rem] bg-dimondra-tealDark text-slate-50 mt-6"
          >
            Start your career
          </button>
        </div>
        <div className="order-2 lg:order-1 h-[320px] lg:h-[520px] overflow-hidden rounded-lg">
          <img
            src={"/services/consultation.webp"}
            alt={""}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className=" mb-24  relative  bg-[#004D40]">
        <div className="absolute  top-0 left-0 w-full z-20 overflow-hidden leading-none rotate-180 -translate-y-full">
          <img
            src={"/smooth-top-wave.svg"}
            alt={""}
            className="w-full h-auto inset-0"
          />
        </div>

        <div className="absolute top-full left-0 w-full z-20 overflow-hidden leading-none rotate-[0deg] ">
          <img
            src={"/smooth-top-wave.svg"}
            alt={""}
            className="w-full h-auto inset-0"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  pt-[150px]  gap-12 container relative z-20 text-slate-50">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-[500] font-dmSans tracking-tight">
              Unlock the Power of Career Coaching
            </h2>
            <p className="mt-5 text-lg font-rubik  font-[400] text-teal-50">
              What is career coaching, and why does it matter?
            </p>
            <p className="mt-4 font-quicksand font-[600] ">
              Career coaching is a transformative journey that helps individuals
              tap into their potential, gain clarity on their direction, and
              build a roadmap for professional success. It&apos;s more than just
              advice—it&apos;s a structured approach to identifying strengths,
              setting achievable goals, and addressing areas for development.
              <br /> <br />
              At Dimondra, we take this process a step further. Our coaching is
              not just supportive, it&apos;s strategic. Every session is
              tailored to your specific ambitions, challenges, and
              opportunities, empowering you to move forward with purpose and
              confidence.
              <br /> <br />
              At Dimondra, we refine this process to match your goals and the
              evolving job market, creating a strategy that’s both personal and
              results-driven.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 rounded-md py-[.4rem] bg-dimondra-white text-dimondra-black mt-6"
            >
              Start your career
            </button>
          </div>
          <div className="order-1 lg:order-2 h-[320px] lg:h-[520px] overflow-hidden rounded-lg">
            <img
              src={"/services/consultation2.webp"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[140px] place-items-center gap-12 container text-slate-50">
          {" "}
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-[500] font-dmSans tracking-tight">
              The Role of Our Expert Career Coaches
            </h2>
            <p className="text-teal-50 mt-4">
              Led by Experts. Powered by Experience.
            </p>
            <p className="mt-4 font-quicksand font-[600] ">
              At Dimondra, our career coaches bring a wealth of experience and a
              deep understanding of real-world career challenges. With years of
              hands-on coaching expertise, our team delivers immersive,
              interactive, and highly practical sessions, including specialised
              support through outplacement and transition services.
              <br />
              Our approach goes beyond instruction; we create space for
              reflection, meaningful dialogue, and goal-driven action. Our
              coaches act as trusted mentors, helping you shift perspectives,
              sharpen self-awareness, and unlock your full potential.
              <br /> <br />
              Above all, they are deeply committed to your progress, providing
              personalised guidance and encouragement every step of the way as
              you shape a career that reflects your true ambition.
            </p>
            <h3 className="mt-4 font-rubik font-[500]">Our coaches inspire:</h3>
            <ul className="space-y-2 list-disc ml-4 mt-2">
              <li>Strategic thinking</li>
              <li>Resilience and adaptability</li>
              <li>Growth-focused action plans</li>
              <li>Professional confidence and self-awareness</li>
            </ul>
          </div>
          <div className=" h-[320px] lg:h-[680px] overflow-hidden rounded-lg">
            <img
              src={"/services/facilityhero.webp"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[140px] place-items-center gap-12 container text-slate-50">
          {" "}
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-[500] font-dmSans tracking-tight">
              Career Coaching That Turns Insight into Action
            </h2>

            <p className="mt-4 font-quicksand font-[600] ">
              At Dimondra, our career development programmes seamlessly combine
              theory with hands-on application, so you&apos;re not just learning
              concepts, you&apos;re building real-world skills from day one.
              <br />
              Through interactive simulations, role-plays, and collaborative
              exercises, participants gain practical tools to manage their
              careers with clarity and confidence. Every session is designed to
              help you immediately apply what you learn in both professional and
              personal contexts.
              <br /> <br />
              Whether you attend in-person or virtually, by the end of our
              coaching journey, you&apos;ll walk away with a powerful toolkit,
              ready to take control of your career and navigate every stage of
              your professional growth with purpose.
            </p>
          </div>
          <div className="order-1 lg:order-2 h-[320px] lg:h-[550px] overflow-hidden rounded-lg">
            <img
              src={"/services/processManangement.webp"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[140px] place-items-center gap-12 container text-slate-50">
          {" "}
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-[500] font-dmSans tracking-tight">
              Why Work With a Career Coach?
            </h2>

            <p className="mt-4 font-quicksand font-[600] ">
              Partnering with a Dimondra career coach gives you a competitive
              edge in today&apos;s fast-moving job market. Whether you&apos;re
              transitioning, aiming for a promotion, or seeking clarity, our
              coaching is designed to unlock your potential and drive meaningful
              progress. Our coaching can help you:
            </p>
            <ul className="mt-4 space-y-3 list-disc ml-4">
              <li>Define your goals and career direction</li>
              <li>Improve focus and overcome job search fatigue</li>
              <li>Advance into leadership roles</li>
              <li>Navigate transitions and professional challenges</li>
              <li>Improve decision-making and clarity</li>
              <li>Balance work and life priorities</li>
              <li>Position yourself as a top candidate</li>
              <li>Develop a long-term career roadmap</li>
            </ul>
          </div>
          <div className=" h-[320px] lg:h-[550px] overflow-hidden rounded-lg">
            <img
              src={"/services/why.webp"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 pb-[140px] lg:grid-cols-2 mt-[140px] place-items-center gap-12 container text-slate-50">
          <div className="order-2 lg:order-1 h-[320px] lg:h-[550px] rounded-lg">
            <img
              src={"/services/compliant.webp"}
              alt={""}
              className="w-full object-cover h-[320px] lg:h-[550px] rounded-lg"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-[500] font-dmSans tracking-tight">
              Proven Success. Global Impact.
            </h2>

            <p className="mt-4 font-quicksand font-[600] ">
              We take pride in our long-standing history and positive outcomes:
            </p>
            <ul className="mt-4 space-y-3 list-disc ml-4">
              <li>50+ years of combined coaching expertise</li>
              <li>10,000+ individuals successfully guided</li>
              <li>100+ organisations supported across industries</li>
            </ul>
            <p className="mt-5">
              Our impact goes beyond sessions; we help people transform their
              lives and careers with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8 py-14 container">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl font-[500] font-dmSans tracking-tight">
            Did You Know Most Careers Happen by Accident?
          </h1>
          <p className="font-quicksand font-[600] mt-5">
            It&apos;s surprising but true, many people&apos;s careers develop
            more by chance than by design. Often, we focus on what we&apos;re
            good at rather than discovering where our skills intersect with our
            passions and interests. The result? A career that might work, but
            doesn&apos;t truly fulfill.
            <br />
            <br />
            To build a rewarding and meaningful career, you need to move from an
            accidental path to an intentional one.
            <br />
            <br />
            That&apos;s where Dimondra&apos;s expert career coaching and
            outplacement services come in. We help you craft a clear, strategic
            plan that aligns your unique strengths with your professional goals,
            equipping you to take control of your career journey and shape the
            future you want.
          </p>
        </div>
        <img
          src={"/services/career.webp"}
          alt={""}
          className="h-[320px] lg:h-[500px] "
        />
      </section>

      <section className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8 py-14 container mt-8">
        <div className="h-[320px] order-2 lg:order-1 lg:h-[640px]">
          <img
            src={"/services/career-role.webp"}
            alt={""}
            className=" w-full h-full object-cover object-right"
          />
        </div>
        <div className="">
          <h1 className="text-4xl font-dmSans font-[500]">
            What Is the Role of a Career Coach?
          </h1>
          <p className="mt-4">
            Career coaches play a vital role in guiding you through your
            professional journey. Acting as mentors and trusted advisors, they
            support you in navigating challenges and making informed decisions
            to achieve your career ambitions.
            <br /> <br />
            At Dimondra, your career coach will help you explore and answer
            three key questions:
          </p>
          <div className="mt-5">
            <h2 className="font-rubik font-[500] text-lg">
              How well do I understand myself?
            </h2>
            <p className="font-quicksand font-[600] mt-2">
              Gain deeper insight into your strengths, areas for growth, values,
              and passions—crucial for aligning your career path with who you
              truly are.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-rubik font-[500] text-lg">
              How can I effectively market myself?
            </h2>
            <p className="mt-2">
              Learn how to present your skills and experience confidently to
              stand out in a competitive job market.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-rubik font-[500] text-lg">
              How do I continue growing and developing?
            </h2>
            <p className="mt-2">
              Build a sustainable plan for ongoing professional development to
              ensure your career stays on the path to success.
            </p>
          </div>
        </div>
      </section>

      <section className="container grid place-items-center grid-cols-1 mt-16 lg:grid-cols-2 gap-8 pb-24">
        <img
          src={"/services/advisory.webp"}
          alt={""}
          className="h-[320px] lg:h-[450px]  object-cover"
        />
        <div className="">
          <h1 className="text-3xl ">
            What Can You Expect From Our Advisory Services?
          </h1>
          <p className="font-quicksand text-lg font-[600] mt-4">
            Our advisory and coaching packages include:
          </p>
          <ul className="list-disc ml-4 mt-3 space-y-2">
            <li>CV and cover letter revamp</li>
            <li>LinkedIn profile optimization</li>
            <li>Job search and interview coaching</li>
            <li>Career change and role transition planning</li>
            <li>Personal branding and market presence</li>
            <li>Salary negotiation and first 100-day planning</li>
            <li>Executive career strategy</li>
            <li>Outplacement support for employees</li>
          </ul>
        </div>
      </section>

      <FAQ desc={""} data={careerCoachingFAQs} />
      <CTA
        title={"Kickstart Your Career Journey"}
        desc={
          "In addition to ongoing coaching, Dimondra offers a Career Kickstarter Series, a fast-track plan designed for recent grads, career returners, and early professionals. You’ll receive focused guidance, tools, and direction to land roles that match your potential."
        }
        button="Get started now"
      />
    </>
  );
};

export default Page;
