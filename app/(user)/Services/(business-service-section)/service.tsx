"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PopForm from "../../app_chunks/PopFrom";
interface ServiceItem {
  title: string;
  description: string;
  img: string; // Image URL or path
}

const Service = ({
  title = "Our Services",
  desc,
  data,
}: {
  title?: string;
  desc?: string;
  data: ServiceItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-24 relative overflow-hidden">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-[600] text-dimondra-black tracking-tight text-center max-w-3xl mx-auto">
          {title}
        </h2>
        {desc && (
          <p className="text-center mx-auto mt-4 max-w-2xl text-dimondra-black/80 text-lg">
            {desc}
          </p>
        )}

        <div className="mt-20 ">
          {data.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 py-20 gap-14 items-center ${
                  !isEven ? "" : ""
                } ${data.length - 1 === idx ? "" : "border-b border-slate-300"}`}
              >
                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`w-full  h-[320px] border border-slate-400/50 lg:h-[400px] rounded-3xl overflow-hidden ${idx % 2 === 0 ? "order-1 lg:order-2" : ""} shadow-lg`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Text Block */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`flex flex-col justify-center ${idx % 2 === 0 ? "order-2 lg:order-1" : ""}`}
                >
                  <h3 className="text-4xl font-rubik font-[500] text-dimondra-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-dimondra-black/80 text-lg font-dmSans">
                    {item.description}
                  </p>
                  <div className="w-full mt-4">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="group mt-3 relative cursor-pointer w-fit border border-slate-300 bg-teal-700 text-white rounded-full overflow-hidden text-center font-medium text-sm shadow-sm"
                    >
                      <span className="px-6 py-3 inline-block transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                        Learn more
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center bg-white text-black rounded-full group-hover:rounded-none translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        Learn more
                      </div>
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
