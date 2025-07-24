// This is the layout for the contact page
export const metadata = {
  title: " HR & Business Solutions in India | Dimondra",
  description:
    "Dimondra provides tailored HR, staffing, business management, and digital solutions for companies in India, helping businesses grow with expert support and innovation.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
