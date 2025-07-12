"use client";
import React, { ComponentType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Optional: if you're using a utility for classNames

type ExpertiseItem = {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

interface AreaOfExpertiseProps {
  title: string;
  desc: string;
  data: ExpertiseItem[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AreaOfExpertise: React.FC<AreaOfExpertiseProps> = ({
  title,
  desc,
  data,
}) => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Decorative Background Gradient Circles */}
      <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-gradient-to-tr from-teal-500/30 to-indigo-500/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-120px] right-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-emerald-500/30 to-emerald-500/20 blur-[100px] rounded-full z-0" />

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl text-center font-dmSans font-semibold text-white"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-slate-300 max-w-3xl mx-auto text-center text-base"
        >
          {desc}
        </motion.p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotateX: 1.5, rotateY: 1.5 }}
              className={cn(
                `relative z-10 bg-white/10 hover:bg-white/20 transition-colors duration-300
                 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-lg group`
              )}
            >
              <div className="bg-teal-600 w-fit p-3 rounded-xl shadow-md">
                <Icon className="w-10 h-10 stroke-white" />
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-dmSans font-semibold text-white">
                  {title}
                </h3>
                <p className="text-slate-300 font-quicksand font-medium leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfExpertise;
