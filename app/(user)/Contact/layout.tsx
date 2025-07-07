// This is the layout for the contact page
export const metadata = {
  title: "Contact Dimondra | Get in Touch for Business Solutions",
  description:
    "Reach out to Dimondra for HR, staffing, and business services. Our team is ready to help you find the right solutions for your organization in the UAE.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
