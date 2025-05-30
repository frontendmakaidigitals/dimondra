import clsx from "clsx";
import React from "react";
import {
  Briefcase,
  Users,
  ClipboardList,
  MonitorSmartphone,
  GraduationCap,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const Service = () => {
  const services = [
    {
      title: "HR Outsourcing",
      description:
        "End-to-end HR support for contracts, payroll, and employee management.",
      col: "col-span-1",
      icon: Briefcase,
    },
    {
      title: "Talent Solutions",
      description:
        "Executive hiring and recruitment are designed to find the right fit, fast.",
      col: "col-span-2",
      icon: Users,
    },
    {
      title: "Business Support",
      description:
        "Admin, PRO, and licensing services to keep operations smooth.",
      col: "col-span-1",
      icon: ClipboardList,
    },
    {
      title: "IT & Digital Services",
      description:
        "Tech support and digital marketing tailored for your business growth.",
      col: "col-span-1",
      icon: MonitorSmartphone,
    },
    {
      title: "Career & Development",
      description:
        "Coaching, certifications, and tools to help talent grow and succeed.",
      col: "col-span-1",
      icon: GraduationCap,
    },
    {
      title: "Strategy & Advisory",
      description:
        "Smart planning and expert guidance to scale and strengthen your business.",
      col: "col-span-1",
      icon: BarChart3,
    },
    {
      title: "Legal & Compliance",
      description:
        "Reliable legal support to keep your business secure and compliant.",
      col: "col-span-1",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="my-16">
      <div className="container">
        <div>
          <p className="text-center text-sm">Diamondra</p>
          <h1 className="text-5xl mt-1 text-center  font-[600] text-dimondra-black">
            Inspiring You to Reach Your Goals
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-5 mt-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={clsx(
                  `p-6 flex flex-col items-start rounded-xl border border-teal-400/10 gap-5 w-full bg-teal-50`
                )}
              >
                <div className="">
                  <Icon className="size-[52px] text-dimondra-teal" />
                </div>

                <div className="mt-1">
                  <h2 className="text-2xl font-[600] max-w-sm">
                    {service.title}
                  </h2>
                  <p className="text-sm mt-2">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
