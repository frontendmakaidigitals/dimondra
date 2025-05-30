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
const Header = () => {
  const navMenu = siteConfig.navItems;
  const path = usePathname();
  return (
    <header className="py-3 bg-white z-50 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        <nav className="flex items-center space-x-6">
          {navMenu.map((item, idx) => (
            <div key={idx} className="relative">
              {item.href ? (
                <Link
                  href={item.href}
                  className={` ${path === item.href ? "bg-slate-100 hover:bg-slate-200" : "hover:bg-slate-100"} rounded-lg px-4 py-[.8rem]`}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={` ${path === item.href ? "bg-slate-100" : "hover:bg-slate-100"} rounded-lg px-4 py-[.8rem]`}
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
    </header>
  );
};

export default Header;
