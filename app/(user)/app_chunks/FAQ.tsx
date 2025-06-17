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
    <div className="bg-white py-20">
      <div className="grid container grid-cols-[.7fr_1.3fr] gap-8">
        <div>
          <span>Support</span>
          <h2 className="text-3xl font-[600] mb-2 mt-2">FAQs</h2>
          <p>{desc}</p>
        </div>
        <div>
          <Accordion variant="splitted" className="">
            {data.map((faq, idx) => (
              <AccordionItem
                key={idx}
                aria-label={faq.question}
                title={faq.question}
                indicator={<Plus />}
                className="bg-white text-black [&_.accordion-item]:bg-white [&_.accordion-item]:text-black"
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
