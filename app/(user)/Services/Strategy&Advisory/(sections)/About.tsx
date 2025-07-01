import React from "react";

interface AboutProps {
  title: string;
  desc: string;
  img: string;
}
const About: React.FC<AboutProps> = ({ title, desc, img }) => {
  return (
    <section className="my-24 place-items-center grid grid-cols-1 lg:grid-cols-2 gap-5 container">
      <div className="">
        <h1 className="text-4xl font-dmSans font-[600]">{title}</h1>
        <p className="mt-3">{desc}</p>
      </div>

      <img src={img} alt={""} className="h-[400px]" />
    </section>
  );
};

export default About;
