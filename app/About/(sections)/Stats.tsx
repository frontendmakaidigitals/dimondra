import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "20+",
      label: "Years of Experience",
    },
    {
      value: "15+",
      label: "Countries of Operation",
    },
    {
      value: "28",
      label: "Languages Supported",
    },
    {
      value: "100+",
      label: "Businesses Served",
    },
    {
      value: "99%",
      label: "Client Retention Rate",
    },
  ];
  return (
    <div className="py-16">
      <h1 className="text-5xl text-center font-[600] text-dimondra-black container mb-10">
        By the Numbers in Dimondra
      </h1>
      <div className="container grid grid-cols-5 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-200 rounded-lg p-3">
            <h2 className="text-5xl text-center font-[600] text-dimondra-black">
              {stat.value}
            </h2>
            <p className="text-dimondra-dark mt-1 text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
