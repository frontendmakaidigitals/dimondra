"use client";
import { User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

export interface serviceType {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const Services = ({
  data,
  heading,
  subHeading,
}: {
  data: serviceType[];
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="my-24">
      <div className="container">
        <div className="py-5">
          <h2 className="text-4xl text-center font-[600]">{heading}</h2>
          <p className="mt-3 text-center">{subHeading}</p>
        </div>
        <div className="grid mt-5 grid-cols-1 lg:grid-cols-3 gap-5">
          {data.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ y: -200 }}
              animate={{ y: 0, transition: { duration: 0.8 } }}
              whileHover={{
                rotate: (Math.random() - 0.5) * 10,
                transition: { duration: 0.3, ease: "backOut" },
                scale: 1.05,
              }}
              className="p-5 group hover:bg-dimondra-teal border border-slate-300 rounded-lg"
            >
              <div className=" rounded-lg p-2 w-fit bg-teal-100">
                <Icon className="size-[42px] stroke-dimondra-teal" />
              </div>

              <p className="text-2xl text-dimondra-black group-hover:text-dimondra-white mt-8 font-[600]">
                {title}
              </p>
              <p className="mt-2 group-hover:text-dimondra-white">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
