"use client";
import {
  Check,
  Book,
  LibraryBig,
  Brain,
  Train,
  DollarSign,
} from "lucide-react";
import React from "react";

const RightSide = ({ Price }: { Price?: React.ReactNode }) => {
  return (
    <aside className="bg-teal-800 w-full lg:sticky left-0 top-20  border-r rounded-md border-gray-200 p-6 space-y-6">
      <nav className="text-dimondra-white text-sm ">
        <h1 className="text-xl font-dmSans font-[700] tracking-tight">
          HRCI Certification Preparation Course Package
        </h1>
        <p className="font-quicksand font-[500] mt-1 text-sm">
          (PHRi | SPHRi | aPHRi | GPHR)
        </p>
        <p className="font-[600] font-quicksand pb-4 mt-1">
          Prepare to earn your globally recognized HRCI certification with our
          comprehensive, instructor-led training designed to set you up for
          success.
        </p>

        <hr className="border-[.04px] border-teal-50" />

        <div className="py-4">
          <h2 className="text-lg font-dmSans font-[600] mb-1">
            Course Highlights:
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              32 Hours of Virtual Live Classes via Zoom
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              Weekend Sessions for maximum flexibility
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              Interactive Learning Environment with HR experts
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Check className="size-[16px] mt-[2px]" />
              </div>
              Led by a Certified HRCI Instructor with real-world HR expertise
            </li>
          </ul>
        </div>
        <hr className="border-[.04px] border-teal-50" />
        <div className="pt-4">
          <h2 className="text-lg mb-1">Package Includes:</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div>
                <Book className="size-[16px] mt-[2px]" />
              </div>
              Comprehensive Study Materials aligned with the latest HRCI exam
              content
            </li>
            <li className="flex items-start gap-2">
              <div>
                <LibraryBig className="size-[16px] mt-[2px]" />
              </div>
              Access to 500+ Practice Questions in our Exam Bank (Unlimited
              Access)
            </li>
            <li className="flex items-start gap-2">
              <div>
                <Brain className="size-[16px] mt-[2px]" />
              </div>
              Case-Based Discussions & Practice Scenarios
            </li>

            {Price ? (
              <li className="flex items-center gap-2">
                <p className="flex justify-between items-center w-full bg-slate-100 px-3 py-2 rounded">
                  <span className="whitespace-nowrap flex items-center gap-2 text-slate-950">
                    <DollarSign className="size-[16px] " /> Package Price
                  </span>
                  <span className="flex items-center justify-end border-l border-slate-500 pl-4">
                    {Price}
                  </span>
                </p>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default RightSide;
