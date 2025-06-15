"use client";
import { ArrowUpRight, Circle } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen w-full ">
      <h1 className="text-2xl mb-3 font-[500]">
        <Circle className="inline-block size-[12px] fill-black align-middle" />{" "}
        Your Stats
      </h1>
      <div className="grid grid-cols-4  gap-7">
        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Blogs</h2>
          <p className="text-7xl mt-4">10</p>
          <button className="flex items-center mt-6 gap-3 rounded-2xl bg-teal-800 hover:bg-teal-700  text-dimondra-white px-4  py-2">
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </button>
        </div>
        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Videos</h2>
          <p className="text-7xl mt-4">10</p>
          <button className="flex items-center mt-6 gap-3 rounded-2xl bg-teal-800 hover:bg-teal-700  text-dimondra-white px-4  py-2">
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
