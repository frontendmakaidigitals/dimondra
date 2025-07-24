// This is the layout for the contact page
export const metadata = {
  title: "HR & Business Services in Egypt | Dimondra",
  description:
    " Discover Dimondra’s HR, staffing, and business support services in Egypt, empowering organizations with customized solutions to enhance performance and efficiency.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
