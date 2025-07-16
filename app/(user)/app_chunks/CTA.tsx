import { ArrowRight } from "lucide-react";
import React from "react";

const CTA = ({
  title,
  desc,
  button,
}: {
  title: String;
  desc: String;
  button: string;
}) => {
  return (
    <div className=" relative max-w-6xl mx-auto gap-9 mb-20 mt-10 flex flex-col-reverse  overflow-hidden lg:flex-row-reverse items-center  justify-between border border-slate-200 rounded-2xl">
      <img
        src={
          "https://img.freepik.com/free-vector/blurred-turquoise-background-design_1107-187.webp?semt=ais_hybrid&w=740"
        }
        alt={"cta"}
        className="w-full h-full object-cover absolute inset-0 opacity-[.5]"
      />
      <div className="relative z-10 p-6 lg:p-0">
        {" "}
        <div className=" w-full flex justify-center lg:justify-start"></div>
        <h2 className="mt-4 text-3xl font-[600] text-center lg:text-start">
          {title}
        </h2>
        <p className="mt-3 text-center lg:text-start">{desc}</p>
        <div className="w-full flex justify-center lg:justify-start">
          <button className="flex text-sm items-center gap-2 bg-teal-700 text-slate-50 px-4 rounded-md mt-4 py-2">
            {button} <ArrowRight className="size-[18px]" />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[300px] relative z-10">
        <img src={"/CTA.webp"} alt={""} className={""} />
      </div>
    </div>
  );
};
1;
export default CTA;
