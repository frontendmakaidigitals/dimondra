import { Circle, Sparkle, Star } from "lucide-react";
import React from "react";
import ImageAnimationLayer from "../app_chunks/ImageAnimationLayer";

const HRCertification = () => {
  const hrCertifications = [
    { code: "aPHRi", description: "For aspiring HR professionals" },
    { code: "PHRi", description: "For mid-level HR practitioners" },
    { code: "SPHRi", description: "For senior HR leaders" },
    { code: "GPHR", description: "For global HR management" },
  ];

  return (
    <div className="my-32">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div>
          <h2 className="text-5xl lg:text-6xl font-[500] text-dimondra-black">
            HR Certifications That Elevate Careers
          </h2>
          <p className="mt-6">
            Advance your professional journey with international HR
            certifications delivered by industry experts. Whether you&nbsp;re
            just starting or leveling up, we guide you every step of the way —
            from training to exam success.
          </p>
          <div className="mt-8">
            <ul className="">
              <p className="text-lg mb-3 font-[500]">Programs we offer:</p>
              {hrCertifications.map((item, idx) => (
                <li
                  key={idx}
                  className="mt-2 bg-teal-50 flex items-start gap-2 w-fit px-3 py-1 rounded-lg"
                >
                  <div>
                    <Circle
                      fill="bg-red-300"
                      className="size-[12px] mt-[7px]"
                    />
                  </div>
                  <p className="font-[600]">
                    {item.code}: &nbsp;
                    <span className="font-[400]">{item.description}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <button className="px-5 py-2 cursor-pointer border hover:text-dimondra-white border-dimondra-gray hover:bg-dimondra-teal transition-all duration-200 mt-10 rounded-xl">
            Start Your Certification
          </button>
        </div>
        <div className="h-[350px] lg:h-[600px] relative">
          <ImageAnimationLayer />
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Hr photot"
          />
        </div>
      </div>
    </div>
  );
};

export default HRCertification;
