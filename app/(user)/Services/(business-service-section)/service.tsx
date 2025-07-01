import React from "react";
interface data {
  title: string;
  description: string;
  icon: React.ElementType;
}
const Service = ({
  data,
  desc,
  title = "Our service",
}: {
  data: data[];
  desc?: string;
  title?: string;
}) => {
  return (
    <div className="container my-20">
      <h1 className="text-4xl lg:text-5xl font-[600] text-dimondra-black tracking-tight max-w-3xl mx-auto text-center">
        {title}
      </h1>
      {desc ? (
        <p className="text-center mx-auto mt-5 max-w-2xl">{desc}</p>
      ) : null}
      <div className="grid  grid-cols-1 lg:gap-0 mt-16 lg:grid-cols-2">
        {data.map(({ title, description, icon: Icon }, idx) => (
          <div
            className={`py-11 lg:py-0 ${idx % 2 === 0 ? "lg:border-r-2 lg:border-b-0 pr-8" : "lg:border-0 pl-8"} ${idx === data.length - 1 ? "" : " border-b border-teal-900/50"}`}
            key={idx}
          >
            <div className="flex items-start gap-5">
              <div className=" bg-green-100 rounded-lg p-2">
                <Icon className="size-[32px] stroke-dimondra-teal" />
              </div>
              <h2 className="mt-2 text-2xl font-[600]">{title}</h2>
            </div>
            <p className="mt-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
