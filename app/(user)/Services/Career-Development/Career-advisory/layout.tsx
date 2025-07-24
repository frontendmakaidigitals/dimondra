// This is the layout for the contact page
export const metadata = {
  title: " Career Advisory & Professional Development | Dimondra",
  description:
    " Get expert Career Advisory services with Dimondra—personalized guidance, CV support, and interview coaching to help you reach your goals.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
