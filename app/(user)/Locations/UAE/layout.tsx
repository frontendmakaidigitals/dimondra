// This is the layout for the contact page
export const metadata = {
  title: "HR & Business Solutions in UAE | Dimondra",
  description:
    " Dimondra offers comprehensive HR, staffing, and business management services across the UAE, helping businesses thrive with expert people and process solutions.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
