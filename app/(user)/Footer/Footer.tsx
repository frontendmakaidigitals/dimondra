"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Logo from "../app_chunks/Logo";
import { useEffect, useState } from "react";

const Footer = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Set initial width (in case SSR or hydration mismatch)
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="text-dimondra-white overflow-hidden bg-gradient-to-tr to-gray-500 from-dimondra-black  relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={"/topography.svg"}
          alt={""}
          className="w-full h-full object-cover opacity-[.025]"
        />
      </div>
      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[.5fr_1.5fr] gap-16 place-items-start justify-items-end">
          <div>
            <Logo className="w-52 " />
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              maxime odio laboriosam expedita cumque pariatur at, placeat sed
              debitis harum voluptates!
            </p>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4 ">
                <Link
                  href="/"
                  className=" rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-7 w-7 " />
                </Link>
                <Link
                  href="/"
                  className=" rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-7  w-7 " />
                </Link>
                <Link
                  href="/"
                  className="rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin fill={""} className="h-7 w-7  " />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-start gap-20">
            <div>
              <h4 className="text-lg font-semibold mb-4">Most Visits</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/Services/Hr-Outsourcing/Hr-Operations"
                    className="hover:underline"
                  >
                    HR Operations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services/Business-Service/It-Support"
                    className="hover:underline"
                  >
                    IT Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services/Business-Service/Facility-Management"
                    className="hover:underline"
                  >
                    Facility Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services/Careers&Training/Career-advisory"
                    className="hover:underline"
                  >
                    Career Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services/Business-Service/Digital-Marketing"
                    className="hover:underline"
                  >
                    Digital Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blogs" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/About" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Our Office</h4>
              <div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-1 " />
                    <p className="max-w-[250px]">
                      Office: 123 Sheikh Zayed Rd, Dubai, UAE
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 ">
                    <Phone className="w-4 h-4" />
                    <span>0562787553</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4" />
                    <span>Connect@dimondra.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 py-3 relative z-10 bg-dimondra-tealDark text-slate-50 text-sm text-center">
        &copy; {new Date().getFullYear()} Dimondra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
