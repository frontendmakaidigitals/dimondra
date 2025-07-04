import { Home, Play, Book, MessageSquareQuote } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "./Logo";

// Menu items.
const items = [
  {
    title: "Visit Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Blogs",
    url: "dashboard/Blogs",
    icon: Book,
  },

  {
    title: "Queries",
    url: "dashboard/Queries",
    icon: MessageSquareQuote,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarTrigger />
      <SidebarContent className="py-5">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent className=" mt-20">
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-teal-800 hover:text-slate-50 py-5 transition-colors duration-250"
                  >
                    <Link href={`/${item.url}`}>
                      <item.icon className="!w-5 !h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
