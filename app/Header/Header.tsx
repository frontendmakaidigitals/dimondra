"use client";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "@/config/site";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "../hooks/useScrollVal";
import { motion, AnimatePresence } from "motion/react";
import MobileMenu from "./MobileMenu";
import { useIsLoaded } from "../context/isLoaded";
import { useState, useEffect } from "react";
import clsx from "clsx";
const Header = () => {
  const navMenu = siteConfig.navItems;
  const path = usePathname();
  const { scrollVal } = useScrollPosition();
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const { pageContext } = useIsLoaded();
  pageContext.loadingAnimation;
  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: -200, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] },
    },
  };
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
  return (
    <motion.header
      className={`py-3 navMenu mx-auto h-fit z-50 fixed origin-center  inset-0`}
      animate={{
        background:
          scrollVal < 100 ? "rgba(255, 255, 255)" : "rgba(255, 255, 255)",
      }}
      transition={{ ease: [0.175, 0.885, 0.32, 1.1], duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div
          animate={{ y: !pageContext.loadingAnimation ? -200 : 0 }}
          transition={{
            duration: 0.4,
            ease: [0.175, 0.885, 0.32, 1.1],
            delay: 0.2,
          }}
        >
          <Logo className="w-36 realtive z-10" />
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center space-x-6"
          variants={parentVariants}
          initial="hidden"
          animate={pageContext.loadingAnimation ? "show" : "hidden"}
        >
          {navMenu.map((item, idx) => (
            <motion.div
              key={idx}
              variants={childVariants}
              className="relative text-sm"
            >
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
                        style={{ height: `calc(100vh - 72)px` }}
                        className={clsx(
                          ` fixed h-screen  top-[50px] left-0 z-[999999999] w-screen pt-5`
                        )}
                      >
                        <div className="backdrop-filter h-full backdrop-blur-lg bg-white/30 ">
                          <div onMouseLeave={() => setIsMenuShowing(false)}>
                            {" "}
                            <motion.div
                              initial={{ height: "0" }}
                              animate={{ height: "auto" }}
                              exit={{ height: "0" }}
                              transition={{
                                duration: 0.3,
                                ease: [0, 0, 0.19, 1],
                              }}
                              className={` w-full flex bg-white justify-center items-center`}
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
                                        className="text-xl font-[500]"
                                      >
                                        {service.label}
                                      </motion.h4>
                                      <ul className="mt-4">
                                        {service.submenu.map((child, index) => (
                                          <motion.li
                                            initial={{ y: -5, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -5, opacity: 0 }}
                                            transition={{
                                              duration: 0.2,
                                              ease: [0, 0, 0.19, 1],
                                              delay: 0.05 + index * 0.04,
                                            }}
                                            key={index}
                                            className="mb-4"
                                          >
                                            {child.label}
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
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
        <motion.button
          animate={{ y: !pageContext.loadingAnimation ? -200 : 0 }}
          transition={{
            duration: 0.4,
            ease: [0.175, 0.885, 0.32, 1.1],
            delay: 0.2,
          }}
          className="hidden group text-[.9rem] relative lg:inline-flex h-11 items-center justify-center overflow-hidden rounded-md border-2  border-dimondra-teal  font-medium"
        >
          <div className="inline-flex h-11 translate-y-0 items-center justify-center px-5  bg-gradient-to-r   text-dimondra-black transition duration-500 group-hover:-translate-y-[150%]">
            Get a Quote
          </div>
          <div className="absolute inline-flex h-11 w-full translate-y-[100%] items-center justify-center text-dimondra-white transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-dimondra-teal  transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="z-10">Get a Quote</span>
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
