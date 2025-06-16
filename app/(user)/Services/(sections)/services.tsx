"use client";
import { User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
const Services = () => {
  return (
    <div className="my-24">
      <div className="container grid grid-cols-3 gap-5">
        <div className="py-5">
          <h2 className="text-4xl font-[600]">Our Services</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            illum adipisci fuga id rem sequi quidem, laudantium esse.
          </p>
        </div>
        {Array.from({ length: 5 }).map((_, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              rotate: (Math.random() - 0.5) * 10,
              transition: { duration: 0.3, ease: "backOut" },
              scale: 1.05,
            }}
            className="p-5 hover:bg-[#c1dad1] bg-[#d6eae3] rounded-lg"
          >
            <div className="flex items-center  justify-start gap-4">
              <div className=" rounded-full ">
                <User className="size-[28px]" />
              </div>
              <p className="text-xl font-[500]">Google Ads</p>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis vero molestias sint error suscipit, atque impedit dicta
              totam quis recusandae, ratione sapiente soluta pariatur excepturi
              necessitatibus?
            </p>
            <button className="px-3 py-2 text-white bg-dimondra-tealDark mt-3 text-sm rounded-md">
              Get a quote
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
