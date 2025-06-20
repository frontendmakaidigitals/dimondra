import React from "react";
import { Type } from "lucide-react";
interface data {
  title: string;
  description: string;
  icon: typeof Type;
}
const Service = ({ data, desc }: { data: data[]; desc?: string }) => {
  return (
    <div className="container my-20">
      <h1 className="text-5xl font-[600] text-dimondra-black tracking-tight text-center">
        Our Services
      </h1>
      <p className="text-center mx-auto mt-2 max-w-2xl">{desc}</p>
      <div className="grid  grid-cols-1 gap-14 mt-10 lg:grid-cols-2">
        {data.map(({ title, description, icon: Icon }, idx) => (
          <div className="" key={idx}>
            <div className="flex items-start gap-5">
              <div className=" bg-slate-200 rounded-lg p-2">
                <Icon className="size-[40px] stroke-dimondra-teal" />
              </div>
              <h2 className="mt-3 text-2xl font-[600]">{title}</h2>
            </div>
            <p className="mt-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
