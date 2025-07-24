// This is the layout for the contact page
export const metadata = {
  title: " HR Operations & Outsourcing Services | Dimondra",
  description:
    " Streamline your HR Operations with Dimondra’s expert services, covering payroll, compliance, and employee relations for seamless workforce management.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
