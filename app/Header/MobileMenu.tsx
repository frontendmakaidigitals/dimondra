"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link"; // For navigation
import { SiteConfig } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";
import { Menu as Ham } from "lucide-react";
import gsap from "gsap";
type NavItem = {
  label: string;
  href: string;
  services?: {
    label: string;
    submenu: { label: string; href: string }[];
  }[];
};
type MenuProps = {
  menu: SiteConfig["navItems"];
};

const MobileMenu = ({ menu }: MenuProps) => {
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    if (showMenu) {
      // When menu is open, set body overflow to hidden
      document.body.style.overflow = "hidden";
    } else {
      // When menu is closed, reset body overflow to default (auto)
      document.body.style.overflow = "auto";
    }

    // Cleanup: Reset overflow when the component is unmounted or when showMenu changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <>
      <motion.button
        onClick={() => setShowMenu(!showMenu)}
        className={`text-3xl absolute top-5 right-5 z-20 `}
      >
        {showMenu ? <X /> : <Ham />}
      </motion.button>

      <AnimatePresence mode="wait">
        {showMenu && (
          <Menu
            menu={menu.map((item: any) => ({
              ...item,
              services: item.services
                ? item.services.map((service: any) => ({
                    ...service,
                    submenu: service.submenu.map((sub: any) => ({
                      ...sub,
                      href: sub.href ?? sub.link, // Map 'link' to 'href'
                    })),
                  }))
                : undefined,
            }))}
            setShowMenu={setShowMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;

const Menu = ({ setShowMenu, menu }: { setShowMenu: any; menu: NavItem[] }) => {
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    const menuEl = document.getElementsByClassName("navMenu")[0]; // No dot
    if (menuEl) {
      setHeight(menuEl.clientHeight); // or menuEl.offsetHeight
    }
  }, []);

  const itemsRef = useRef<(HTMLAnchorElement | HTMLDivElement)[]>([]);

  React.useLayoutEffect(() => {
    if (itemsRef.current.length) {
      gsap.fromTo(
        itemsRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.7,
          ease: "power3.out",
        }
      );
    }
  }, []);
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.55, ease: [0.165, 0.84, 0.44, 1] }}
      style={{
        top: `${height}px`,
        height: `calc(100vh - ${height}px)`,
      }}
      className="fixed left-0 w-full py-10 overflow-scroll flex flex-col justify-start items-start shadow-lg h-screen bg-dimondra-white z-[2]"
    >
      <div className="container h-full justify-start flex flex-col p-5 w-full text-[#0c1700] space-y-4">
        {menu.map((menu: NavItem, index: number) =>
          !menu.services ? (
            <Link
              key={index}
              href={menu.href}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="text-lg font-semibold p-2 w-full text-left"
              onClick={() => {
                setTimeout(() => setShowMenu(false), 500);
              }}
            >
              {menu.label}
            </Link>
          ) : (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
            >
              <AccordionMenu menu={menu} setShowMenu={setShowMenu} />
            </div>
          )
        )}
      </div>
    </motion.div>
  );
};

const AccordionMenu = ({
  menu,
  setShowMenu,
}: {
  menu: any;
  setShowMenu: any;
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={menu.label} className="border-b border-0">
        <AccordionTrigger className="text-lg font-semibold p-2 w-full text-left">
          {menu.label}
        </AccordionTrigger>

        <AccordionContent>
          {menu.services.map(
            (
              item: {
                label: string;
                submenu: { label: string; href: string }[];
              },
              idx: number
            ) => (
              <Accordion type="single" key={idx} collapsible className="w-full">
                <AccordionItem value={menu.label} className="border-b border-0">
                  <AccordionTrigger className="text-md font-semibold p-2 w-full text-left">
                    {item.label}
                  </AccordionTrigger>

                  <AccordionContent>
                    {item.submenu.map(
                      (item: { label: string; href: string }, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setShowMenu(false)}
                          className="pl-4 py-2 text-sm font-medium cursor-pointer"
                        >
                          {item.label}
                        </button>
                      )
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
