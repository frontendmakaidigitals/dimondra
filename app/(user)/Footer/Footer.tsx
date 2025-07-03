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

const Footer = () => {
  return (
    <footer className="text-dimondra-white bg-teal-950 py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-16">
          <div>
            <Logo className="w-52 " />
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4 ">
                <Link
                  href="/"
                  className="bg-teal-500/20 p-2 rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-7 w-7 fill-teal-800  hover:text-amber-400" />
                </Link>
                <Link
                  href="/"
                  className="bg-teal-500/20 p-2 rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-7 stroke-teal-100 fill-teal-800 w-7 hover:text-amber-400" />
                </Link>
                <Link
                  href="/"
                  className="bg-teal-500/20 fill-teal-800 p-2 rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin
                    fill={""}
                    className="h-7 w-7  hover:text-amber-400"
                  />
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
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
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
                    <span>+971 55 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4" />
                    <span>dubai@company.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-4 text-sm text-center text-dimondra-grayDark">
          &copy; {new Date().getFullYear()} Dimondra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
