import { User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="bg-dimondra-teal/30 pt-40 pb-12">
      <div className="container grid grid-cols-2 gap-5 ">
        <div className="h-[600px]">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={
              "https://images.unsplash.com/photo-1593677193813-e99785037dfa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div>
          <span className="text-sm font-semibold">About us</span>
          <h2 className="text-5xl font-semibold mt-3">
            Helping Your Business Grow. Helping Your People Thrive
          </h2>
          <p className="mt-5">
            At Dimondra, we do more than just outsourcing. We provide smart,
            practical solutions that help your business run smoothly, your team
            work better, and your leaders focus on what matters most. <br />{" "}
            <br /> We understand what businesses need, and we combine our global
            experience with local know-how to help you grow in the right way.
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
