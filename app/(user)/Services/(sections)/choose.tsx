"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PopForm from "../../app_chunks/PopFrom";
import type { LucideIcon } from "lucide-react";

interface chooseProps {
  title: string;
  icon: LucideIcon;
}

const Choose = ({
  title,
  desc,
  data,
}: {
  title: string;
  desc: string;
  data: chooseProps[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-24 bg-dimondra-black overflow-hidden">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="container relative z-10 flex flex-col lg:flex-row items-start gap-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-dmSans font-bold tracking-tight text-dimondra-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-dimondra-white font-quicksand text-lg">
            {desc}
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 inline-block px-6 py-3 bg-dimondra-teal text-dimondra-black font-semibold rounded-xl shadow hover:scale-[1.03] transition-transform"
          >
            Get a Quote
          </button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl"
        >
          {data.map(({ title, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-dimondra-white/5 backdrop-blur-md border border-dimondra-white/10 shadow hover:shadow-lg "
            >
              <div className="p-2 rounded-full bg-dimondra-teal text-dimondra-black shadow-md">
                <Icon size={24} />
              </div>
              <p className="text-base text-dimondra-white leading-snug whitespace-normal break-words font-medium">
                {title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optional Background Effect */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-dimondra-teal/10 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default Choose;
