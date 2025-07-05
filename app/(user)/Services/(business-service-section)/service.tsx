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
      <div className="grid  grid-cols-1 gap-0 lg:grid-cols-2">
        {data.map(({ title, description, icon: Icon }, idx) => (
          <div
            className={`py-11 grid grid-cols-1 lg:grid-cols-2 lg:py-0 lg:border-b-0 ${idx === data.length - 1 ? "" : " border-b border-teal-900/50"}`}
            key={idx}
          >
            <div className=" bg-green-100 rounded-lg p-2 w-fit">
              <Icon className="size-[32px] stroke-dimondra-teal" />
            </div>
            <h2 className="text-3xl font-dmSans font-[500]">{title}</h2>
            <p className="mt-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
