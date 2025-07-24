// This is the layout for the contact page
export const metadata = {
  title: "Facility Management Services in UAE | Dimondra",
  description:
    "Ensure safe, efficient, and sustainable workspaces with Dimondra’s comprehensive Facility Management services tailored to your business needs.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
