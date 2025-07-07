// This is the layout for the contact page
export const metadata = {
  title: "Our Team | Insight Vision – Your Marketing Partner",
  description:
    "Discover Insight Vision, a marketing agency dedicated to driving business growth through innovative strategies, data-driven insights, and impactful digital solutions.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
