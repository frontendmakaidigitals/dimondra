// This is the layout for the contact page
export const metadata = {
  title: "Staffing Solutions & Workforce Outsourcing | Dimondra",
  description:
    "Access flexible, reliable Staffing Solutions with Dimondra, temporary, permanent, and project-based workforce outsourcing tailored to your business needs.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
