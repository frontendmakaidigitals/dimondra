import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { description } from "../../(homepage)/PieChart";
interface props {
  title: string;
  description: string;
  data: string[];
}
const Advantage = ({ data, title, description }: props) => {
  return (
    <div className="my-56 container grid  grid-cols-1 gap-14 lg:grid-cols-2 ">
      <div className="lg:order-2 order-1 mt-[500px] lg:mt-[0px]">
        <h1 className="text-5xl  font-[600]">{title}</h1>
        <div>
          <p className="mt-4">{description}</p>

          <ul className="mt-8">
            {data.map((_, idx) => (
              <li key={idx} className="mt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-300 rounded-md p-1">
                    <Check className="stroke-white size-4" />
                  </div>
                  <p>{_}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-8 border-2 pl-4 rounded-lg border-black  flex items-center gap-2">
            Learn more{" "}
            <span className="bg-black p-2">
              <ArrowRight className="stroke-white" />
            </span>
          </button>
        </div>
      </div>

      <div className=" relative w-full ">
        <div className="bg-slate-100 overflow-hidden w-full lg:w-[70%] h-[210px] lg:h-[240px] absolute top-0 left-0 rounded-2xl">
          <img
            src={
              "https://images.unsplash.com/photo-1638727295415-286409421143?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-slate-200 w-[90%] lg:w-[400px] overflow-hidden border-4 border-[#eef7ff] right-0 h-[350px] lg:h-[550px] absolute top-52  rounded-2xl">
          <img
            src={
              "https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
