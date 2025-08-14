"use client";
import React, { useState } from "react";
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
      link: "mailto:Connect@dimondra.com",
    },
    {
      icon: "/icon/instagram.svg",
      color: "#E4405F",
      name: "instagram",
      link: "https://www.instagram.com/dimondraco/",
    },
  ];

  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <div className="fixed top-1/2 z-[40] flex flex-col -translate-y-1/2 right-0 lg:left-0 lg:right-auto">
      {socialIcons.map(({ icon, color, name, link }, idx) => {
        const isHovered = hoverId === idx;
        return (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoverId(idx)}
            onMouseLeave={() => setHoverId(null)}
            className="no-underline"
          >
            <motion.div
              animate={{
                width: isHovered ? "auto" : "40px",
                padding: isHovered ? ".5rem" : ".5rem",
              }}
              style={{ backgroundColor: color }}
              className={`overflow-hidden flex items-center rounded-l-md lg:rounded-r-md lg:rounded-l-none cursor-pointer shadow`}
            >
              <img
                src={icon}
                alt={`icon-${name}`}
                className="w-6 h-6 shrink-0"
              />
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.span
                    key="label"
                    initial={{ opacity: 0, x: -10, marginLeft: "0px" }}
                    animate={{ opacity: 1, x: 0, marginLeft: "10px" }}
                    exit={{ opacity: 0, x: -10, marginLeft: "0px" }}
                    transition={{ duration: 0.3 }}
                    className={`text-sm font-medium whitespace-nowrap ${
                      name === "email" ? "text-blue-900" : "text-white"
                    }`}
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocialMediaIcons;
