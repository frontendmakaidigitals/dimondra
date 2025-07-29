"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PopForm from "../../app_chunks/PopFrom";

const Choose = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-dimondra-black">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Desktop background image */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 h-full z-0">
        <img
          src={img}
          alt="Why Choose Us"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile image block */}
      <div className="lg:hidden w-full h-[300px] sm:h-[400px]">
        <img
          src={img}
          alt="Why Choose Us"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-16 lg:py-24 px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-dmSans font-bold tracking-tight text-dimondra-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-dimondra-white font-quicksand text-lg">
            {desc}
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 inline-block px-6 text-sm py-3 bg-teal-700 text-white font-semibold rounded-xl shadow hover:scale-[1.03] transition-transform"
          >
            Get a Quote
          </button>
        </motion.div>

        {/* Spacer for layout on desktop */}
        <div className="w-full lg:w-1/2 hidden lg:block" />
      </div>
    </section>
  );
};

export default Choose;
