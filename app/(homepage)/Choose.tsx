import React from "react";
import {
  Layers,
  Users2,
  Settings2,
  Globe2,
  Headset,
  LineChart,
} from "lucide-react";
const highlights = [
  {
    title: "End-to-End Services",
    description: "Everything your business needs, under one roof.",
    icon: Layers,
  },
  {
    title: "Experienced Team",
    description: "Led by certified experts with the latest market insight.",
    icon: Users2,
  },
  {
    title: "Custom Solutions",
    description: "Expert support that fits your goals and industry.",
    icon: Settings2,
  },
  {
    title: "Global & Local Reach",
    description: "We blend international expertise with regional knowledge.",
    icon: Globe2,
  },
  {
    title: "Dedicated 24/7 Support",
    description: "We work as an extension of your team, not just a vendor.",
    icon: Headset,
  },
  {
    title: "Proven Results",
    description: "Track record of driving growth, efficiency, and impact.",
    icon: LineChart,
  },
];
const Choose = () => {
  return (
    <div className="my-28">
      <div className="container">
        <h1 className="text-5xl mt-1 text-center  font-[600] text-dimondra-black">
          Why Choose Dimondra
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-14 mt-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex bg-slate-50 relative pt-8 pb-6 px-5 items-start gap-5"
            >
              <span className="text-5xl font-[600] text-dimondra-teal absolute top-0 -translate-y-1/2">
                0{index + 1}
              </span>
              <div className="">
                <h4 className="text-2xl font-semibold">{item.title}</h4>
                <p className=" text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
