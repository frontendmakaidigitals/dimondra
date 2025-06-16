import React from "react";
import {
  Users,
  UserMinus,
  Database,
  Globe,
  Handshake,
  Building2,
} from "lucide-react";
const Choose = () => {
  const features = [
    {
      icon: Users,
      title: "Effective & Powerful Teams",
    },
    {
      icon: UserMinus,
      title: "Offer Free Employee Replacements",
    },
    {
      icon: Database,
      title: "Use of a Sizable Database",
    },
    {
      icon: Globe,
      title: "Use International Recruitment Services",
    },
    {
      icon: Handshake,
      title: "Trusted Partner",
    },
    {
      icon: Building2,
      title: "Diverse Workforces are Available.",
    },
  ];
  return (
    <div className="py-20 bg-lime-200">
      <div className="flex items-start gap-16 container">
        <div className="flex-1">
          <h1 className="text-5xl font-[600] tracking-tight">
            Why choose Dimondra for HR Service in Dubai,
          </h1>
          <p className="mt-4">
            Dimondra stands out as a trusted HR partner in Dubai, offering
            tailored solutions that streamline your workforce management. With a
            commitment to excellence, we provide expert recruitment, seamless
            onboarding, and end-to-end HR support to help your business thrive.
            Whether you&nbsp;re a startup or a growing enterprise, our personalized
            approach ensures you get the right talent and strategic guidance to
            drive long-term success.
          </p>
          <button className="px-5 py-2 bg-white mt-8 rounded-lg">
            Get a Quote
          </button>
        </div>
        <div className=" grid grid-cols-1 gap-10">
          {features.map(({ title, icon: Icon }, idx) => (
            <div key={idx} className="flex items-center  gap-4">
              <div className="p-2 bg-slate-50  rounded-lg">
                <Icon />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
