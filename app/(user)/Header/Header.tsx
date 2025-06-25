"use client";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "@/config/site";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/app/hooks/useScrollVal";
import { motion, AnimatePresence } from "motion/react";
import MobileMenu from "./MobileMenu";

import { useState, useEffect } from "react";
import clsx from "clsx";
const Header = () => {
  const navMenu = siteConfig.navItems;
  const path = usePathname();
  const { scrollVal } = useScrollPosition();
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuShowing(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const [locationHovering, setLocationhovering] = useState(false);
  return (
    <motion.header
      className={`py-3 navMenu mx-auto h-fit z-50 fixed origin-center  inset-0`}
      transition={{ ease: [0, 0, 1, 1], duration: 0.3 }}
      animate={{
        backgroundColor:
          scrollVal > 200 || isHovering ? "#EEF7FF" : "rgba(0, 0, 0, 0)",
        color: scrollVal > 200 || isHovering ? "#000000" : "#ffffff",
        boxShadow:
          scrollVal > 200 || isHovering
            ? "0 4px 12px rgba(0, 0, 0, 0.1)"
            : "0 0 0 rgba(0,0,0,0)",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div>
          <Logo className="w-36 realtive z-10" />
        </motion.div>

        <motion.div className="hidden lg:flex items-center space-x-6">
          {navMenu.map((item, idx) => (
            <motion.div key={idx} className="relative text-sm">
              {item.href ? (
                <Link
                  href={item.href}
                  className={` ${
                    path === item.href
                      ? "bg-dimondra-black text-dimondra-white"
                      : "hover:bg-slate-100"
                  } rounded-lg px-3 py-[.6rem]`}
                >
                  {item.label}
                </Link>
              ) : item.label === "Locations" ? (
                <motion.div
                  onMouseEnter={() => setLocationhovering(true)}
                  onMouseLeave={() => setLocationhovering(false)}
                >
                  <button className="rounded-lg px-3 py-[.6rem] hover:bg-slate-100">
                    {item.label}{" "}
                    <span className="inline-block ml-1 align-middle">
                      {<ChevronDown className="size-[18px]" />}
                    </span>
                  </button>

                  <AnimatePresence mode="wait">
                    {locationHovering ? (
                      <motion.div
                        className={clsx(
                          ` fixed h-screen  top-[50px] left-0 z-[999999999] w-screen pt-5`
                        )}
                      >
                        <motion.div
                          animate={{
                            backdropFilter: locationHovering
                              ? "blur(.9rem) "
                              : "blur(0rem)",
                            background: locationHovering
                              ? "rgba(255, 255, 255, .4) "
                              : "rgba(255, 255, 255) ",
                          }}
                          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
                          className="backdrop-filter h-full "
                        >
                          <div
                            onMouseLeave={() => {
                              setLocationhovering(false);
                              setIsHovering(false);
                            }}
                          >
                            {" "}
                            <motion.div
                              initial={{ height: "0" }}
                              animate={{ height: "auto" }}
                              exit={{ height: "0" }}
                              transition={{
                                duration: 0.3,
                                ease: [0, 0, 0.19, 1],
                              }}
                              className={` w-full flex bg-[#EEF7FF] justify-center items-center`}
                            >
                              <div
                                onMouseLeave={() => setLocationhovering(true)}
                                className="w-full overflow-hidden  text-nowrap container h-full"
                              >
                                <div className="py-10 grid md:grid-cols-2 w-full lg:grid-cols-4 gap-8">
                                  {item.locations?.map((location, id) => (
                                    <Link
                                      href={location.link}
                                      className=" w-full group"
                                      key={id}
                                    >
                                      <motion.div className=" w-full ">
                                        <div className="w-full">
                                          <div className="w-full h-[350px] overflow-hidden transition-transform duration-250 group-hover:scale-[1.07]">
                                            <img
                                              className="h-full w-full object-cover"
                                              src={location.img}
                                              alt={""}
                                            />
                                          </div>
                                          <motion.h4
                                            initial={{ y: -4, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -4, opacity: 0 }}
                                            transition={{
                                              duration: 0.15,
                                              ease: [0, 0, 0.19, 1],
                                            }}
                                            className="text-xl font-[500] px-3 text-dimondra-black mt-3"
                                          >
                                            {location.label}
                                          </motion.h4>
                                        </div>
                                      </motion.div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  onMouseEnter={() => setIsMenuShowing(true)}
                  onMouseLeave={() => setIsMenuShowing(false)}
                >
                  <button className="rounded-lg px-3 py-[.6rem] hover:bg-slate-100">
                    {item.label}{" "}
                    <span className="inline-block ml-1 align-middle">
                      {<ChevronDown className="size-[18px]" />}
                    </span>
                  </button>

                  <AnimatePresence mode="wait">
                    {isMenuShowing ? (
                      <motion.div
                        className={clsx(
                          ` fixed h-screen  top-[50px] left-0 z-[999999999] w-screen pt-5`
                        )}
                      >
                        <motion.div
                          animate={{
                            backdropFilter: isMenuShowing
                              ? "blur(.9rem) "
                              : "blur(0rem)",
                            background: isMenuShowing
                              ? "rgba(255, 255, 255, .4) "
                              : "rgba(255, 255, 255) ",
                          }}
                          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
                          className="backdrop-filter h-full "
                        >
                          <div
                            onMouseLeave={() => {
                              setIsMenuShowing(false);
                              setIsHovering(false);
                            }}
                          >
                            {" "}
                            <motion.div
                              initial={{ height: "0" }}
                              animate={{ height: "auto" }}
                              exit={{ height: "0" }}
                              transition={{
                                duration: 0.3,
                                ease: [0, 0, 0.19, 1],
                              }}
                              className={` w-full flex bg-[#EEF7FF] justify-center items-center`}
                            >
                              <div
                                onMouseLeave={() => setIsMenuShowing(true)}
                                className="w-fit overflow-hidden text-nowrap h-full"
                              >
                                <div className="py-10 flex items-start gap-10">
                                  {" "}
                                  {item.services?.map((service, id) => (
                                    <motion.div key={id}>
                                      <motion.h4
                                        initial={{ y: -4, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -4, opacity: 0 }}
                                        transition={{
                                          duration: 0.15,
                                          ease: [0, 0, 0.19, 1],
                                        }}
                                        className="text-xl font-[500] px-3"
                                      >
                                        {service.label}
                                      </motion.h4>
                                      <ul className="mt-4">
                                        {service.submenu.map((child, index) => (
                                          <Link key={index} href={child.link}>
                                            <motion.li
                                              initial={{
                                                y: -5,
                                                opacity: 0,
                                              }}
                                              animate={{ y: 0, opacity: 1 }}
                                              exit={{ y: -5, opacity: 0 }}
                                              transition={{
                                                duration: 0.2,
                                                ease: [0, 0, 0.19, 1],
                                                delay: 0.05 + index * 0.04,
                                              }}
                                              className="mb-2 hover:bg-slate-300 rounded-lg p-3"
                                            >
                                              {" "}
                                              {child.label}
                                            </motion.li>
                                          </Link>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="block lg:hidden">
          <MobileMenu menu={navMenu} />
        </div>

        <motion.button className="relative hidden lg:inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#5eead4_0%,#0f766e_50%,#5eead4_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#EEF7FF] hover:bg-dimondra-teal hover:text-dimondra-white transition-all duration-250 px-8 py-1 text-sm font-medium text-black backdrop-blur-3xl">
            Get a Quote
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
