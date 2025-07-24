// This is the layout for the contact page
export const metadata = {
  title: "Digital Marketing & Transformation Services | Dimondra",
  description:
    "Accelerate your online growth with Dimondra’s Digital Services, SEO, social media, web design, and digital transformation solutions.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
