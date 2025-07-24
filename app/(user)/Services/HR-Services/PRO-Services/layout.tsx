// This is the layout for the contact page
export const metadata = {
  title: " PRO & Government Services in Dubai & UAE | Dimondra",
  description:
    " Simplify your visa, licensing, and government processes with Dimondra’s trusted PRO & Government Services for businesses in the UAE.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
