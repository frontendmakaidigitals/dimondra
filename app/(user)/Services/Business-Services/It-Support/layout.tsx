// This is the layout for the contact page
export const metadata = {
  title: "Managed IT Support & Solutions | Dimondra UAE",
  description:
    "Stay ahead with Dimondra’s IT Support services, providing expert technology solutions, cybersecurity, and 24/7 assistance for businesses in the UAE.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
