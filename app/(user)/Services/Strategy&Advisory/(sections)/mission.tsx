import React from "react";

const mission = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-2 place-items-center container gap-10">
        <div>
          <h2 className="text-5xl font-dmSans font-[500]">
            Our Organizational Development Mission
          </h2>
          <p className="mt-3">
            At Dimondra, our mission is to help organizations unlock their full
            potential through people-centric strategies and continuous
            improvement. We partner with clients to build resilient, adaptable,
            and high-performing teams by fostering collaboration, empowering
            leadership, and nurturing a culture of lifelong learning. Our goal
            is to drive sustainable success, one strategic step at a time.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              text: "Strategic Guidance",
              gradient:
                "bg-gradient-to-b from-[#818cf8] via-[#6366f1] to-[#2563eb]",
            },
            {
              text: "Continuos development",
              gradient:
                "bg-gradient-to-bl from-[#65a30d] via-[#16a34a] to-[#15803d]",
            },
            {
              text: "Relentless pursuit of excellence",
              gradient:
                "bg-gradient-to-tl from-[#c2410c] via-[#f97316] to-[#fdba74]",
            },
          ].map((text, idx) => (
            <li
              key={idx}
              className={`w-full aspect-square  rounded-full p-[2px] ${text.gradient} shadow-md`}
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
