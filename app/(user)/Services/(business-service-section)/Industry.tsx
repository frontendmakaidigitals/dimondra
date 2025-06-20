import React from "react";
import { Headphones } from "lucide-react";
interface dataType {
  title: string;
  description: string;
  imgUrl: string;
}
const Industry = ({ data }: { data: dataType[] }) => {
  return (
    <div className="container mt-20 mb-40">
      <h1 className="text-center text-5xl font-[600]">Industry we serve</h1>
      <div className="grid grid-cols-1 gap-52 lg:gap-x-5  mt-12 lg:grid-cols-4">
        {data.map(({ title, description, imgUrl }, idx) => (
          <div key={idx} className="w-full relative h-[300px] ">
            <img
              src={
                "https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="w-full h-full rounded-lg object-cover"
              alt={""}
            />
            <div className="absolute w-[95%] left-1/2 -translate-x-1/2 shadow-md rounded-lg  top-[45%] p-4 bg-white">
              <Headphones className="absolute stroke-white size-12 right-2 bg-dimondra-teal rounded-full p-2 -top-6" />
              <h3 className="text-xl font-[600]"> {title}</h3>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
