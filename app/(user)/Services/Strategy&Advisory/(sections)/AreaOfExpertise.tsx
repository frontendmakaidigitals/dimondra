import React from "react";

const AreaOfExpertise = ({
  title,
  desc,
  data,
}: {
  title: string;
  desc: string;
  data: { icon: React.ReactElement; title: string; desc: string }[];
}) => {
  return (
    <section className=" py-28 bg-dimondra-black">
      <div className="container">
        <h1 className="text-5xl text-center text-dimondra-white font-dmSans font-[500]">
          {title}
        </h1>
        <p className="mt-3 text-slate-50 max-w-4xl text-center mx-auto text-sm">
          {desc}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2  mt-12 border-[.5px] border-slate-800/30 rounded-xl">
          {data.map(({ title, desc, icon: Icon }, idx) => (
            <div
              key={idx}
              className={`border-[.5px] bg-dimondra-grayDark border-slate-800/30  p-7 ${idx === 0 && "rounded-tl-xl"} ${idx === 1 && "rounded-tr-xl"} ${idx === 2 && "rounded-bl-xl"} ${idx === 3 && "rounded-br-xl"} `}
            >
              <div className="bg-teal-600 w-fit p-3  rounded-xl">
                <Icon className="size-[55px] stroke-slate-200" />
              </div>
              <div className="space-y-2 mt-6">
                <h3 className="text-2xl text-dimondra-black font-[600] font-dmSans">
                  {title}
                </h3>
                <p className="font-quicksand text-dimondra-black/90 font-[500]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfExpertise;
