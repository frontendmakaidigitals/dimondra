"use client";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "@/config/site";
import { ChevronDown, Circle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScrollPosition } from "../hooks/useScrollVal";
import { motion } from "motion/react";
import useWindowSize from "../hooks/useWindowSize";
import MobileMenu from "./MobileMenu";
import { useIsLoaded } from "../context/isLoaded";
const Header = () => {
  const navMenu = siteConfig.navItems;
  const path = usePathname();
  const { scrollVal } = useScrollPosition();
  const windowSize = useWindowSize();
  const { isLoadingComplete } = useIsLoaded();
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
  return (
    <motion.header
      className={`py-3 navMenu mx-auto z-50 fixed origin-center h-fit inset-0`}
      animate={{
        boxShadow: scrollVal < 100 ? "0" : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        width: windowSize.width > 400 && scrollVal > 100 ? "1300px" : "100%",
        borderRadius: scrollVal < 100 ? " 0" : "0.6rem",
        top: windowSize.width > 400 && scrollVal > 100 ? " 10px" : "0px",
        backdropFilter:
          scrollVal < 100
            ? " saturate(180%) blur(10px)"
            : " saturate(180%) blur(10px)",
        background:
          scrollVal < 100 ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, .8)",
      }}
      transition={{ ease: [0.175, 0.885, 0.32, 1.1], duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div
          animate={{ y: !isLoadingComplete ? -200 : 0 }}
          transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.1], delay:.2 }}
        >
          <Logo className="w-36 realtive z-10" />
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center space-x-6"
          variants={parentVariants}
          initial="hidden"
          animate={isLoadingComplete ? "show" : "hidden"}
        >
          {navMenu.map((item, idx) => (
            <motion.div key={idx} variants={childVariants} className="relative">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`text-sm ${
                    path === item.href
                      ? "bg-dimondra-black text-dimondra-white"
                      : "hover:bg-slate-100"
                  } rounded-lg px-4 py-[.7rem]`}
                >
                  {item.label}
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`${
                        path === item.href
                          ? "bg-dimondra-black text-dimondra-white"
                          : "hover:bg-slate-100"
                      } rounded-lg text-sm px-4 py-[.7rem]`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="size-[20px] ml-2 inline-block" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-56 rounded-xl">
                    <DropdownMenuGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                      {item.services?.map((subItem, index) => (
                        <div key={index} className="space-y-4">
                          <span className="font-[600] text-base">
                            {subItem.label}
                          </span>
                          <div className="space-y-5 text-sm text-muted-foreground">
                            {subItem.submenu.map((item, idx) => (
                              <p
                                key={idx}
                                className="flex items-start gap-2 max-w-48"
                              >
                                <span className="mt-[6px]">
                                  <Circle className="size-[10px] fill-dimondra-black" />
                                </span>
                                {item.label}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="block lg:hidden">
          <MobileMenu menu={navMenu} />
        </div>
        <motion.button
          animate={{ y: !isLoadingComplete ? -200 : 0 }}
          transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.1],  delay:.2 }}
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
