// This is the layout for the contact page
export const metadata = {
  title: "Virtual Administrative Support Services | Dimondra",
  description:
    " Get reliable Virtual Admin Support from Dimondra, professional, efficient, and cost-effective assistance tailored to your business needs.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
