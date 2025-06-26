"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const sideBar = () => {
  const path = usePathname();
  const links = [
    { title: "Overview", link: "/Careers&Training" },
    { title: "aPHRi™", link: "/Careers&Training/aPhri" },
    { title: "PHRi™", link: "/Careers&Training/phri" },
    { title: "SPHRi™", link: "/Careers&Training/sphri" },
    { title: "GPHR™", link: "/Careers&Training/gphr" },
    { title: "HRCI Preparation", link: "/Careers&Training/hrci" },
    { title: "FAQs", link: "/Careers&Training/FAQs" },
  ];
  return (
    <aside className="bg-white sticky left-0 top-20  border-r rounded-md border-gray-200 p-6 space-y-6">
      <nav className="text-gray-800 text-sm">
        <h2 className="font-bold text-dimondra-tealDark mb-2">
          About HRCI Certifications
        </h2>
        <ul className="space-y-1 mt-5 w-full">
          {links.map((link, idx) => (
            <React.Fragment key={idx}>
              <li>
                <Link href={link.link} className="!w-full !h-full">
                  <button
                    className={`p-2  text-start rounded-lg w-full ${path == link.link ? "bg-dimondra-tealDark text-slate-50" : " hover:bg-dimondra-teal/40"}`}
                  >
                    {link.title}
                  </button>
                </Link>
              </li>

              {link.title === "GPHRi™" && (
                <hr className="my-4 border-dimondra-tealDark" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default sideBar;
