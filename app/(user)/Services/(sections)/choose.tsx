"use client";
import React, { useState } from "react";
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
    <div className="py-20 bg-gray-300">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col lg:flex-row items-start gap-16 container">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-[600] tracking-tight font-dmSans ">
            {title}
          </h1>
          <p className="mt-4 font-quicksand font-[500]">{desc}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2 bg-white mt-8 rounded-lg"
          >
            Get a Quote
          </button>
        </div>
        <div className=" grid grid-cols-1 gap-10">
          {data.map(({ title, icon: Icon }, idx) => (
            <div key={idx} className="flex items-center  gap-4">
              <div className="p-2 bg-slate-50  rounded-lg">
                <Icon />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
