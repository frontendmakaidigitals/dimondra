"use client";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "@/config/site";
import { ChevronDown, Users } from "lucide-react";
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
const Header = () => {
  const navMenu = siteConfig.navItems;
  const path = usePathname();
  const { scrollVal } = useScrollPosition();
  return (
    <motion.header
      className={`hidden lg:block py-3 mx-auto  z-50 fixed origin-center h-fit  inset-0`}
      animate={{
        boxShadow: scrollVal < 100 ? "0" : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        width: scrollVal > 100 ? "1300px" : "100%",
        borderRadius: scrollVal < 100 ? " 0" : "0.6rem",
        top: scrollVal < 100 ? " 0" : "10px",
        backdropFilter: scrollVal < 100 ? "blur(0)" : "blur(.6rem)",
        background:
          scrollVal < 100 ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, .8)",
      }}
      transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        <nav className="flex items-center space-x-6">
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
                      <DropdownMenuGroup>
                        {item.services &&
                          item.services.map((subItem, index) => (
                            <DropdownMenuSub key={index}>
                              <DropdownMenuSubTrigger
                                className={`py-4 px-3 rounded-lg`}
                              >
                                <span className="inline-block mr-3">
                                  <Users className="!size-[22px] text-slate-700" />
                                </span>
                                {subItem.label}
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal>
                                <DropdownMenuSubContent className="rounded-lg ">
                                  {subItem.submenu.map((subSubItems, id) => (
                                    <DropdownMenuItem
                                      className="py-4 px-3 rounded-xl"
                                      key={id}
                                    >
                                      {subSubItems.label}
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                            </DropdownMenuSub>
                          ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
