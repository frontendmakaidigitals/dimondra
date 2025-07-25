// This is the layout for the contact page
export const metadata = {
  title: " Call Center & Customer Support Solutions | Dimondra",
  description:
    " Enhance customer service with Dimondra’s Call Center Support, offering professional inbound, outbound, and multilingual solutions across the UAE.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
