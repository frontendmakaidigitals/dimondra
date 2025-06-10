import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans, grandHotel } from "@/config/fonts";
import Header from "./Header/Header";
import Backtotop from "./app_chunks/Backtotop";
import Footer from "./Footer/Footer";

import FloatingSocialMediaIcons from "./app_chunks/FloatingSocialMediaIcons";
import { IsLoadedProvider } from "./context/isLoaded";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
          grandHotel.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <IsLoadedProvider>
            <Header />
            <FloatingSocialMediaIcons />

            <Backtotop />
            {children}
            <Footer />
          </IsLoadedProvider>
        </Providers>
      </body>
    </html>
  );
}
