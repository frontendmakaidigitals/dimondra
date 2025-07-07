"use client";
import React from "react";
import { motion } from "motion/react";
interface data {
  title: string;
  description: string;
  icon: React.ElementType;
}
const Service = ({
  data,
  desc,
  title = "Our service",
}: {
  data: data[];
  desc?: string;
  title?: string;
}) => {
  return (
    <section className="py-20 bg-[#D9E2C9]">
      {" "}
      <div className="container ">
        <h1 className="text-4xl lg:text-5xl font-[600] text-[#012F13] tracking-tight max-w-3xl mx-auto text-center">
          {title}
        </h1>
        {desc ? (
          <p className="text-center mx-auto mt-5 max-w-2xl text-[#012F13]">
            {desc}
          </p>
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {data.map(({ title, description, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              className=" backdrop-blur-lg bg-[#C2D8AD] group hover:text-[#D9E2C9] hover:bg-[#012F13] rounded-2xl p-6 shadow-xl border-green-700/5 border-2  hover:shadow-2xl transition-all"
            >
              <div className="rounded-full bg-dimondra-100 text-dimondra-800  mb-6">
                <Icon className="w-14 h-14 stroke-[#012F13] group-hover:stroke-[#D9E2C9]" />
              </div>
              <h2 className="text-3xl font-quicksand font-semibold group-hover:text-[#D9E2C9] text-[#012F13]">
                {title}
              </h2>
              <p className="text-[#012F13]/80 group-hover:text-[#D9E2C9] font-dmSans mt-3">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
