"use client";
import React, { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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
    <section className="relative py-28 overflow-hidden dark:bg-teal-900">
      <div className="container relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl text-center font-dmSans font-semibold text-dimondra-black dark:text-white"
        >
          {title}
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-slate-700 dark:text-slate-300 max-w-3xl mx-auto text-center text-base"
        >
          {desc}
        </motion.p>

        {/* Carousel */}
        <div className="mt-14 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {data.map(({ title, desc, icon: Icon }, idx) => (
                <CarouselItem
                  key={idx}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className={cn(
                      `relative z-10 bg-teal-700 border hover:bg-teal-800/90 transition-colors duration-300
                       backdrop-blur-lg rounded-2xl border-white/10 p-6 shadow-lg group h-full flex flex-col justify-between`
                    )}
                  >
                    <div className="bg-white w-fit p-3 rounded-xl shadow-md">
                      <Icon className="w-10 h-10 text-dimondra-black" />
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AreaOfExpertise;
