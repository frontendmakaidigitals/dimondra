// This is the layout for the contact page
export const metadata = {
  title: " Business Management Consulting & Solutions | Dimondra",
  description:
    "Strengthen your business operations with Dimondra’s Business Management services, strategic planning, process optimization, and advisory.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
