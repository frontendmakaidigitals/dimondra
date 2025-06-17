import { ArrowRight } from "lucide-react";
import React from "react";

const CTA = ({ title, desc }: { title: String; desc: String }) => {
  return (
    <div className=" relative max-w-6xl mx-auto gap-9 mb-20 mt-10 flex overflow-hidden flex-row-reverse items-center  justify-between border border-slate-200 rounded-2xl">
      <img
        src={
          "https://img.freepik.com/free-vector/blurred-turquoise-background-design_1107-187.jpg?semt=ais_hybrid&w=740"
        }
        alt={"cta"}
        className="w-full h-full object-cover absolute inset-0 opacity-[.5]"
      />
      <div className="relative z-10">
        {" "}
        <p className="bg-white  w-fit  px-4 text-sm">Tags a big</p>
        <h2 className="mt-4 text-3xl font-[600]">{title}</h2>
        <p className="mt-3">{desc}</p>
        <button className="flex text-sm items-center gap-2 bg-teal-700 text-slate-50 px-4 rounded-md mt-4 py-2">
          Get started now <ArrowRight className="size-[18px]" />
        </button>
      </div>
      <div className="w-[300px] relative z-10">
        <img src={"/CTA.png"} alt={""} className={""} />
      </div>
    </div>
  );
};
1
export default CTA;
