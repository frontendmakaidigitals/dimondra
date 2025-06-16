import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Plus } from "lucide-react";
const FAQ = () => {
  const defaultContent =
    '    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";';
  const faqs = [
    {
      question: "What is Outsourced HR Advisory?",
      answer:
        "Giving organisations guidance, assistance, and services on a variety of HR-related issues is known as HR consulting. This may involve activities including creating HR policies and practices, hiring and keeping personnel, monitoring professional growth and performance, and resolving employee relations concerns.",
    },
    {
      question: "What is Outsourced HR Services?",
      answer:
        "Outsourced (HR) human resource outsourcing, is an arrangement in which a third-party (Alpha Pro Partners) supports and administers the HR function on behalf of another business. This allows entrepreneurs to focus on more attention on growth-related objectives.",
    },
    {
      question: "How do I identify a good human resources consulting firm?",
      answer:
        "It's crucial to take communication into account when selecting an HR consulting firm. Look for a company that responds quickly and is easy to get a hold of. You also need to choose a partner who understands your situation and requirements. This may be essential if you plan to collaborate with them for an extended period of time.",
    },
    {
      question: "How do we engage with our clients?",
      answer:
        "We often collaborate with clients on projects, offering help and direction on certain HR objectives or problems. We can collaborate with clients face-to-face, remotely, or both. Meetings and updates are the norm for client communication with HR consultants, who may also use a range of technologies and resources to cooperate and share information.",
    },
    {
      question: "How can we guarantee privacy?",
      answer:
        "We are in charge of protecting the privacy of our clients' information. We should only disclose client information to authorized persons and have robust data protection protocols in place, which include secure client information storage and transmission. To make sure that everyone is aware of and in agreement with the requirements of secrecy, we also have specific privacy arrangements in place with clients.",
    },
    {
      question: "How are our services priced?",
      answer:
        "There are many different ways we can be paid for our HR services, like hourly rates, fixed costs for particular projects, bundles, or retainer agreements. The nature of the task and our client's requirements will determine the precise cost schedule. To avoid any unpleasant surprises, we are open and honest about our cost schedule with all of our clients.",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="grid container grid-cols-[.7fr_1.3fr] gap-8">
        <div>
          <span>Support</span>
          <h2 className="text-3xl font-[600] mb-2 mt-2">FAQs</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            soluta? Numquam sint labore alias natus esse, deleniti reiciendis
            sed, animi fugiat vitae ipsa ducimus, quos tempora saepe magnam
            consequatur autem.
          </p>
        </div>
        <div>
          <Accordion variant="splitted" className="">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                aria-label={faq.question}
                title={faq.question}
                indicator={<Plus />}
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
