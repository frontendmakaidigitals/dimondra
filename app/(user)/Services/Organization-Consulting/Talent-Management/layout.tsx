// This is the layout for the contact page
export const metadata = {
  title: " Talent Management & Succession Planning | Dimondra",
  description:
    "Unlock the full potential of your workforce with Dimondra’s Talent Management solutions, covering succession planning, career growth, and retention.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
