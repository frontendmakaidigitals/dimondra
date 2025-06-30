import React from "react";

const service = () => {
  return (
    <section className="pb-14 bg-dimondra-grayDark">
      <div className="grid container place-items-center grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          {" "}
          <h1 className="text-5xl font-[500] font-dmSans">
            Education and Training
          </h1>
          <p className=" mx-auto mt-2 ">
            At Dimondra, we deliver impactful learning experiences that empower
            teams and leaders. Our customized eLearning programs, paired with
            instructor-led sessions, offer cost-effective, high-quality
            training. We tailor content to fit your needs, ensuring engagement,
            knowledge retention, and measurable outcomes.
          </p>
        </div>
        <img
          src={
            "https://images.unsplash.com/photo-1748267887992-ed8eb8de4e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={""}
          className="h-[400px]"
          style={{
            objectFit: "cover",
            maskImage: "url('/strategyMask.svg')",
            maskRepeat: "url('/strategyMask.svg')",
            maskSize: "cover",
          }}
        />
      </div>
      <div className="flex justify-center  w-full max-w-4xl container">
        <div className="mt-20 grid gap-8  grid-cols-1 lg:grid-cols-3 ">
          {leadershipDevelopmentPrograms.map((item, idx) => (
            <div key={idx} className="bg-slate-200 p-4 rounded-md">
              <h2 className="text-2xl font-[500] font-dmSans">{item.title}</h2>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default service;
