// This is the layout for the contact page
export const metadata = {
  title: "Legal Management & Compliance Services | Dimondra",
  description:
    "Ensure legal compliance and risk management with Dimondra’s expert Legal Management services tailored for businesses in the UAE.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
