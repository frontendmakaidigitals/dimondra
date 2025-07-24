// This is the layout for the contact page
export const metadata = {
  title: "Organizational Planning & Development Services | Dimondra",
  description:
    "Shape your business success with Dimondra’s Organizational Planning, offering structure design, workforce planning, and strategic HR solutions.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
