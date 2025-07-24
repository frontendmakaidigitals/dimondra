// This is the layout for the contact page
export const metadata = {
  title: "HR & Business Services in Saudi Arabia | Dimondra",
  description:
    "Dimondra delivers expert HR, staffing, and business consulting services in Saudi Arabia, supporting organizations with solutions designed for sustainable growth.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
