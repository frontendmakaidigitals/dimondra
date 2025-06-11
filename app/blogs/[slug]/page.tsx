import { User } from "lucide-react";
import React from "react";
import Blogs from "@/app/(homepage)/Blogs";
const Page = () => {
  return (
    <div>
      {" "}
      <div className="bg-teal-800">
        <div className="h-[90dvh] container w-full relative">
          <img
            src={
              "https://images.unsplash.com/photo-1723296050269-ef50cb0ad178?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"blogImage"}
            className="w-full h-[650px] object-cover absolute top-1/3  left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <div className="mt-[250px] container ">
        <div className="flex items-center justify-between ">
          <ul className="flex justify-start items-center gap-4">
            <li className="p-2 text-xs bg-dimondra-black text-slate-50 rounded-lg">
              Machine learning
            </li>
          </ul>
          <p>11 June 2024</p>
        </div>

        <div className="mt-8">
          <h1 className="text-6xl tracking-tighter font-[500]">
            This is a Heading for Blog Detail Page
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            illum ratione deleniti voluptatum cum consequuntur consectetur nobis
            voluptatibus, quam dolorum reiciendis aspernatur aut sed nostrum
            praesentium eius sequi dolore laboriosam?
          </p>
          <div className="mt-12 flex items-center gap-3">
            <div className="w-fit p-2 rounded-full bg-slate-200">
              <User />
            </div>
            <p>Author Name</p>
          </div>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Page;
