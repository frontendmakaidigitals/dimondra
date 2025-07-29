"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingSocialMediaIcons = () => {
  const socialIcons = [
    {
      icon: "/icon/facebook.svg",
      color: "#1877F2",
      name: "facebook",
      link: "https://www.facebook.com/share/19RRBYggDZ/?mibextid=wwXIfr",
    },
    {
      icon: "/icon/linkedin.svg",
      color: "#0A66C2",
      name: "linkedin",
      link: "https://www.linkedin.com/company/dimondra/",
    },
    {
      icon: "/icon/email.svg",
      color: "#ffffff",
      name: "email",
      link: "mailto:Connect@dimondra.com", // Email link fixed
    },
  ];

  const [hoverId, setHoverId] = useState<null | number>(null);
  const refs = useRef<HTMLDivElement[]>([]);

  return (
    <div className="fixed top-1/2 z-[40] grid grid-cols-1 -translate-y-1/2 right-0 lg:left-0 lg:right-auto">
      {socialIcons.map(({ icon, color, name, link }, idx) => (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <motion.div
            onMouseEnter={() => setHoverId(idx)}
            onMouseLeave={() => setHoverId(null)}
            initial={{ x: -100 }}
            animate={{
              x: 0,
              transition: {
                duration: 1.1,
                delay: 0.5 + idx * 0.13,
                ease: [0.86, 0, 0.07, 1],
              },
            }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            style={{ backgroundColor: color }}
            className="px-2 py-2 flex items-center w-fit gap-2 rounded-l-md lg:rounded-r-md cursor-pointer"
            ref={(el) => {
              if (el) refs.current[idx] = el;
            }}
          >
            <img src={icon} alt={`icon-${name}`} className="w-6 shrink-0" />
            <AnimatePresence mode="wait">
              {hoverId === idx && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
                  className={`text-sm font-medium ${
                    name === "email" ? "text-blue-900" : "text-white"
                  }`}
                >
                  {name}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialMediaIcons;
