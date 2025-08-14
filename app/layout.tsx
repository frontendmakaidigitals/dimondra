import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { fontSans, grandHotel, rubik, dmSans, quicksand } from "@/config/fonts";
import { ToastProvider } from "@heroui/toast";

export const metadata: Metadata = {
  title: "Dimondra | HR, Business, and Digital Solutions in UAE",
  description:
    "Dimondra offers end-to-end HR, business management, digital services, and staffing solutions to help organizations in the UAE grow efficiently and sustainably.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
          grandHotel.variable,
          rubik.variable,
          dmSans.variable,
          quicksand.variable
        )}
      >
        <ToastProvider placement="top-right" />
        {children}
      </body>
    </html>
  );
}
