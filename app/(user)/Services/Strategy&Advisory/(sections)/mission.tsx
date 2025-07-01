import React from "react";

const mission = ({
  title,
  desc,
  arr,
}: {
  title: string;
  desc: string;
  arr: { text: string }[];
}) => {
  const gradient =
    "bg-gradient-to-tl from-[#c2410c] via-[#f97316] to-[#fdba74]";
  return (
    <section className="py-24">
      <div className="grid grid-cols-2 place-items-center container gap-10">
        <div>
          <h2 className="text-5xl font-dmSans font-[500]">{title}</h2>
          <p className="mt-3">{desc}</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arr.map((text, idx) => (
            <li
              key={idx}
              className={`w-full aspect-square  rounded-full p-[2px] ${gradient} shadow-md`}
            >
              <div className="bg-blue-50 rounded-full w-full h-full flex justify-center items-center">
                {" "}
                <p
                  className={`text-center inline-block bg-clip-text text-transparent text-2xl font-dmSans font-[500] px-4 ${text.gradient}`}
                >
                  {text.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default mission;
