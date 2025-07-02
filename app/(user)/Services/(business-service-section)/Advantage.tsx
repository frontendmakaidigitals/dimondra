"use client";
import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import PopForm from "../../app_chunks/PopFrom";
interface props {
  title: string;
  description: string;
  data: string[];
  img1: string;
  img2: string;
}
const Advantage = ({ data, title, description, img1, img2 }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-20 lg:my-56 container grid  grid-cols-1 gap-14 lg:grid-cols-2 ">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:order-2 order-1 ">
        <h1 className="text-4xl lg:text-5xl font-dmSans font-[600]">{title}</h1>
        <div>
          <p className="mt-4">{description}</p>

          <ul className="mt-8">
            {data.map((_, idx) => (
              <li key={idx} className={`mt-4 `}>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-md p-1">
                    <Check className="stroke-white size-4" />
                  </div>
                  <p>{_}</p>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 border-2 pl-4 rounded-lg border-black  flex items-center gap-2"
          >
            Learn more{" "}
            <span className="bg-black p-2">
              <ArrowRight className="stroke-white" />
            </span>
          </button>
        </div>
      </div>

      <div className=" relative w-full h-[550px] ">
        <div className="bg-slate-100 overflow-hidden w-full lg:w-[70%] h-[210px] lg:h-[240px] absolute top-0 left-0 rounded-2xl">
          <img src={img1} alt={""} className="w-full h-full object-cover" />
        </div>
        <div className="bg-slate-200 w-[90%] lg:w-[400px] overflow-hidden border-4 border-[#eef7ff] right-0 h-[380px] lg:h-[550px] absolute top-40  rounded-2xl">
          <img src={img2} alt={""} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
