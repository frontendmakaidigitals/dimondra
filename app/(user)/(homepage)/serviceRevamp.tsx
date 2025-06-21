"use client";
import React from "react";
import {
  Briefcase,
  ClipboardList,
  Server,
  GraduationCap,
  BarChart3,
  LifeBuoy,
} from "lucide-react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
const ServiceRevamp = () => {
  const services = [
    {
      title: "HR Outsourcing",
      description:
        "Streamline HR. Enhance People. Scale Smarter — with outsourcing solutions that cover everything from policy and process optimization to daily HR operations, all delivered with a global mindset and local expertise. End-to-end HR support for contracts, payroll, and employee management",
      row: "row-span-1",
      icon: Briefcase,
      pos: "left",
      img: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Remote Workforce",
      description:
        "Companies no longer need to be limited by geography when finding the perfect candidate. Across the globe organizations are now using a remote and hybrid workforce for both permanent employees and contract professionals. In doing this, they're discovering the hiring process is faster and allows them to attract a much larger talent pool",
      row: "row-span-1",
      icon: ClipboardList,
      pos: "left",
      img: "https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Executive Search",
      description:
        "Recruit Right. Move Fast. Grow Strong — with executive search, RPO, and recruitment solutions designed to deliver the right talent quickly and precisely",
      row: "row-span-1",
      icon: LifeBuoy,
      pos: "right",
      img: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "RPO",
      description:
        "RPO services in can be a game changer for businesses. By teaming up with an RPO Service provider, you can access specialized recruitment expertise for scalable talent acquisition and a better candidate experience. We act as an extension of your team, blending dedicated professionals, top notch tech, proven methods, and data insights. This helps us anticipate future talent needs and streamline every step of hiring, from sourcing to onboarding. Our goal is to align your workforce with your goals, ensuring you have the right talent to drive success.",
      row: "row-span-1",
      icon: Server,
      pos: "right",
      img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Government Relations ",
      description:
        "We provide comprehensive support to ensure your business stays compliant with local regulations. Our government relations team handles all essential documentation, licensing, and coordination with local authorities—saving you time and ensuring accuracy every step of the way. Whether you're establishing, growing, or maintaining your business, our team is here to support you with efficient, reliable, and compliant government liaison services. ",
      row: "row-span-1",
      icon: GraduationCap,
      pos: "left",
      img: "https://images.unsplash.com/photo-1640200330428-9fe2ab926de1?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Business Support ",
      description:
        "Call centers, operational services, and business processing built for efficiency. Dimondra provides end-to-end business support solutions designed to keep your operations running smoothly. Our services include inbound and outbound call center management, customer support outsourcing, and business process outsourcing (BPO) across key functions such as admin, finance, and client handling. We act as an operational backbone that delivers reliability, responsiveness, and results — helping your teams focus on what matters most.",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "IT & Digital Services ",
      description:
        "IT & Digital Services Technology and digital marketing tailored for your business growth. At Dimondra, we combine IT expertise with creative digital strategy to help your business run smarter and grow faster. From setting up secure, scalable infrastructure to managing your digital presence, we deliver solutions that align with your goals and adapt to your needs.  Our IT team ensures seamless support across network setup, cloud services, cybersecurity, and day-to-day troubleshooting — while our digital specialists build impactful marketing campaigns through SEO, social media, paid ads, and analytics. Whether you're launching, expanding, or optimizing, we provide the digital foundation and visibility you need to succeed in today’s connected world.",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Strategy & Advisory",
      description:
        "Smart planning and expert guidance to scale and strengthen your business. At Dimondra, our Strategy & Advisory services are built to support you at every step of your  business  lifecycle —  whether  you're  entering  a  new  market,  restructuring  your organization,   or   planning   for   sustainable   growth.   We   work   closely   with   you   to understand  your  vision,  assess  your  challenges,  and  design  solutions  that  are  both practical and strategic. With a global mindset and deep regional expertise, we help businesses navigate market entry requirements, align their operating models, and build organizational structures that are  agile,  scalable,  and  future-ready.  Our  advisory  support  extends  from  optimizingprocesses and workforce planning to enabling long-term business resilience. Whether you're a startup setting up your first office or an established firm looking to expand or evolve, we provide the insight, structure, and guidance you need to move forward with clarity and confidence",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Workplace & Facilities Outsourcing Services ",
      description:
        "Our Workplace & Facilities Outsourcing Services offer end-to-end solutions to manage and support your office environment through experienced, outsourced staff. We help businesses maintain a professional, efficient, and welcoming workplace by handlingdaily operations and essential facility services, allowing you to focus on your core activities. From front desk to technical maintenance, our trained personnel ensure smooth execution, cost efficiency, and high service standards tailored to your business needs.We provide flexible outsourcing models to scale with your requirements—whether for a single service or a fully managed workplace solution. Explore Our Services ",
      row: "row-span-1",
      icon: BarChart3,
      pos: "right",
      img: "https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useSplitText({
    selector: ".serviceText",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".serviceTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });

  return (
    <div className="my-20">
      <div className="container serviceTrigger mx-auto px-4">
        <p className="text-center text-sm text-gray-500">Our Services</p>
        <h1 className="text-5xl serviceText leading-[3.6rem] lg:leading-[5.3rem] mt-1 text-center font-[600] text-dimondra-black">
          Empowering Your Business Vision
        </h1>
        <div className="grid grid-cols-1 gap-12 mt-12">
          {services.map((service, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-6 rounded-3xl shadow-sm 
                  ${
                    isOdd
                      ? "lg:flex-row-reverse lg:bg-gradient-to-l from-dimondra-teal/10"
                      : "lg:bg-gradient-to-r from-dimondra-teal/10"
                  }`}
              >
                {/* Image */}
                <div
                  className={`overflow-hidden rounded-2xl shadow-md ${
                    isOdd ? "order-2 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col gap-4 ${
                    isOdd ? "order-2 lg:pr-8" : "order-1 lg:pl-8"
                  }`}
                >
                  <h2 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-slate-700">{service.description}</p>

                  <div className="group mt-6 relative cursor-pointer w-fit border border-slate-300 bg-white rounded-full overflow-hidden text-black text-center font-medium shadow-sm">
                    <span className="px-6 py-2 inline-block transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                      Learn more
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center bg-dimondra-teal text-white rounded-full group-hover:rounded-none translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Learn more
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceRevamp;
