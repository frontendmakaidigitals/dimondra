import React from "react";

const About = () => {
  return (
    <section className="my-24 place-items-center grid grid-cols-1 lg:grid-cols-2 gap-5 container">
      <div className="">
        <h1 className="text-4xl font-dmSans font-[600]">
          Develop an Organizational Roadmap for Lasting Success
        </h1>
        <p className="mt-3">
          At Dimondra, we help organizations grow with purpose. Our approach
          combines strategic insight, continuous development, and people-focused
          planning to unlock long-term success. By aligning leadership, teams,
          and operational goals, we guide you in creating a clear roadmap for
          positive outcomes. Our focus on collaboration, adaptability, and a
          culture of continuous learning ensures your organization is not only
          prepared for change but positioned to thrive through it.
        </p>
      </div>

      <img
        src={
          "https://images.unsplash.com/photo-1741687290557-052d0e9c37bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={""}
        className="h-[400px]"
      />
    </section>
  );
};

export default About;
