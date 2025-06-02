import { User } from "lucide-react";
import React from "react";
import ImageAnimationLayer from "../app_chunks/ImageAnimationLayer";
const About = () => {
  return (
    <div className="bg-teal-400/10 pt-[55rem] lg:pt-52 pb-12">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="h-[350px] lg:h-[650px] relative overflow-hidden">
          <ImageAnimationLayer />
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1593677193813-e99785037dfa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={`About us images`}
          />
        </div>
        <div>
          <span className="text-sm font-semibold">01. About us</span>
          <h2 className="text-5xl font-semibold mt-3">
            Helping Your Business Grow. Helping Your People Thrive
          </h2>
          <p className="mt-5">
            At Dimondra, we&nbsp;re more than an outsourcing company, we’re your
            business partner. We provide support across HR, recruitment, admin,
            IT, legal, marketing, and government relations, helping you grow
            efficiently and compliantly. Whether you&nbsp;re expanding, entering a
            new market, or simplifying your operations, Dimondra is your
            one-stop support hub. We blend global experience with local know-how
            to reduce your workload and let your team focus on what matters
            most. From startups to large enterprises, from admin support to
            advisory, we are here to help you run better, hire smarter, and
            achieve more. Dimondra: Empowering Businesses. Enabling People.
          </p>
          <div className="mt-8">
            <div className="flex items-start gap-4">
              {/* Left: Icon */}
              <div className="text-blue-600 mt-1">
                <User className="w-6 h-6" />
                {/* Replace with your actual icon */}
              </div>

              {/* Right: Heading + Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Global Capability, Local Focus
                </h3>
                <p className="text-sm text-gray-600">
                  Serving clients across the UAE, GCC, and beyond with
                  region-specific insights
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-start gap-4">
              {/* Left: Icon */}
              <div className="text-blue-600 mt-1">
                <User className="w-6 h-6" />
                {/* Replace with your actual icon */}
              </div>

              {/* Right: Heading + Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Experienced Specialists
                </h3>
                <p className="text-sm text-gray-600">
                  A team of trusted experts bringing deep industry knowledge and
                  hands-on experience
                </p>
              </div>
            </div>
          </div>
          <button className="px-5 py-2 bg-dimondra-tealDark text-dimondra-white rounded-xl mt-7">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
