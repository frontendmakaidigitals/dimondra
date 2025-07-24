import { Metadata, Viewport } from "next";
import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import PageLoader from "./app_chunks/PageLoader";
import Header from "../(user)/Header/Header";
import Backtotop from "../(user)/app_chunks/Backtotop";
import Footer from "../(user)/Footer/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import FloatingSocialMediaIcons from "../(user)/app_chunks/FloatingSocialMediaIcons";
import FloatingWhatsappIcon from "./app_chunks/FloatingWhatsappIcon";
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
    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
      <AuthContextProvider>
        <Header />
        <FloatingSocialMediaIcons />
        <PageLoader />
        <FloatingWhatsappIcon />
        <Backtotop />
        {children}
        <Footer />
      </AuthContextProvider>
    </Providers>
  );
}
