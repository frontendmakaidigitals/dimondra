"use client";
import React from "react";
import { motion } from "motion/react";
const FloatingSocialMediaIcons = () => {
  const socialIcons = [
    { link: "", icon: "icon/facebook.svg", color: "#1877F2" },
    { link: "", icon: "icon/instagram.svg", color: "#E4405F" },
    { link: "", icon: "icon/linkedin.svg", color: "#0A66C2" },
  ];
  return (
    <div className="fixed top-1/2 z-[9] grid grid-cols-1 grid-rows-3 -translate-y-1/3 left-0 ">
      {socialIcons.map(({ icon, link, color }, idx) => (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.1,
            delay: 5.5 + idx * 0.13,
            ease: [0.86, 0, 0.07, 1],
          }}
          key={idx}
          style={{ backgroundColor: color }}
          className="p-2"
        >
          <img src={icon} alt="icon-Social-media" className="w-7" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSocialMediaIcons;
