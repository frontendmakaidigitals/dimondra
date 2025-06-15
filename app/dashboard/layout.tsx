import { AuthContextProvider } from "../context/AuthContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../(user)/app_chunks/app-sidebar";
import { ReactNode } from "react";
import Head from "./head";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthContextProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <Head />
          <main className="container mt-7">{children}</main>
        </div>
      </SidebarProvider>
    </AuthContextProvider>
  );
}
