"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Plus } from "lucide-react";

const FAQ = ({
  data,
  desc,
}: {
  desc: string;
  data: { question: string; answer: string }[];
}) => {
  return (
    <div className="bg-teal-800 py-20">
      {" "}
      {/* Dark teal background */}
      <div className="grid container grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-10">
        {/* Left Column */}
        <div>
          <span className="uppercase text-sm font-semibold text-teal-100 tracking-wide">
            Support
          </span>
          <h2 className="text-5xl lg:text-6xl font-dmSans tracking-tight font-bold text-white mt-2 mb-4">
            FAQs
          </h2>
          <p className="text-teal-100 leading-relaxed max-w-xl text-base">
            {desc}
          </p>
        </div>

        {/* Right Column */}
        <div>
          <Accordion variant="splitted">
            {data.map((faq, idx) => (
              <AccordionItem
                key={idx}
                aria-label={faq.question}
                title={faq.question}
                indicator={<Plus className="stroke-white" />}
                className="bg-teal-900 border border-teal-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                [&_.accordion-item-title]:text-slate-50 [&_.accordion-item-title]:font-medium"
                classNames={{ title: "text-white" }}
              >
                <p className="text-teal-100">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
