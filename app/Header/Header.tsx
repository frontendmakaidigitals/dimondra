"use client";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "@/config/site";
import { ChevronDown, Circle, Users } from "lucide-react";
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
const Header = () => {
  const navMenu = siteConfig.navItems;
  const path = usePathname();
  const { scrollVal } = useScrollPosition();
  const windowSize = useWindowSize();
  return (
    <motion.header
      className={`py-3 navMenu mx-auto z-50 fixed origin-center h-fit inset-0`}
      animate={{
        boxShadow: scrollVal < 100 ? "0" : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        width: windowSize.width > 400 && scrollVal > 100 ? "1300px" : "100%",
        borderRadius: scrollVal < 100 ? " 0" : "0.6rem",
        top: windowSize.width > 400 && scrollVal > 100 ? " 10px" : "0px",
        backdropFilter: scrollVal < 100 ? "blur(0)" : "blur(.6rem)",
        background:
          scrollVal < 100 ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, .8)",
      }}
      transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo className="w-36 realtive z-10" />

        <div className=" hidden lg:flex items-center space-x-6">
          {navMenu.map((item, idx) => (
            <div key={idx} className="relative">
              {item.href ? (
                <Link
                  href={item.href}
                  className={` ${path === item.href ? "bg-dimondra-black text-dimondra-white" : "hover:bg-slate-100"} rounded-lg px-4 py-[.7rem]`}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={` ${path === item.href ? "bg-dimondra-black text-dimondra-white" : "hover:bg-slate-100"} rounded-lg px-4 py-[.7rem]`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="size-[20px] ml-2 inline-block " />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-56 rounded-xl">
                      <DropdownMenuGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                        {item.services &&
                          item.services.map((subItem, index) => (
                            <div key={index} className="space-y-4">
                              <span className="font-[600] text-base">
                                {subItem.label}
                              </span>
                              <div className=" space-y-5 text-sm text-muted-foreground">
                                {subItem.submenu.map((item, idx) => (
                                  <p
                                    key={idx}
                                    className="flex items-start gap-2 max-w-48"
                                  >
                                    <span className="mt-[6px]">
                                      <Circle className="size-[10px] fill-dimondra-black " />{" "}
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
                </>
              )}
            </div>
          ))}
        </div>

        <div className="block lg:hidden">
          <MobileMenu menu={navMenu} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
