"use client";
import React from "react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
  image: string; // Image URL or path
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
  return (
    <section className="py-24 bg-dimondra-dark relative overflow-hidden">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-[600] text-dimondra-white tracking-tight text-center max-w-3xl mx-auto">
          {title}
        </h2>
        {desc && (
          <p className="text-center mx-auto mt-4 max-w-2xl text-dimondra-white/80 text-lg">
            {desc}
          </p>
        )}

        <div className="mt-20 space-y-24">
          {data.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                  !isEven ? "" : ""
                }`}
              >
                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`w-full  h-[400px] lg:h-[500px] rounded-3xl overflow-hidden ${idx % 2 === 0 ? "order-1 lg:order-2" : ""} shadow-xl`}
                >
                  <img
                    src={item.image}
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
                  <h3 className="text-3xl font-quicksand font-bold text-dimondra-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-dimondra-white/80 text-lg font-dmSans">
                    {item.description}
                  </p>
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
