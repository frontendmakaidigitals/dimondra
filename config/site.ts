export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItem[];
  links: {
    github: string;
    twitter: string;
    docs: string;
    discord: string;
    sponsor: string;
  };
};

type NavItem =
  | {
      label: string;
      href: string;
    }
  | {
      label: string;
      services: {
        label: string;
        submenu: {
          label: string;
          link: string;
        }[];
      }[];
    };

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/About",
    },
    {
      label: "Services",
      services: [
        {
          label: "HR Outsourcing Services",
          submenu: [
            { label: "Talent Acquisition", link: "/" },
            { label: "HR Operations", link: "/" },
            { label: "Virtual Admin Support", link: "/" },
            { label: "PRO & Government Services- ", link: "/" },
          ],
        },
        {
          label: "Business Services",
          submenu: [
            { label: "Call Center Support", link: "/" },
            { label: "Facility Management", link: "/" },
            { label: "IT Support", link: "/" },
            { label: "Digital Services", link: "/" },
          ],
        },
        {
          label: "Career & Training",
          submenu: [
            {
              label: "HR Certifications (aPHRi, PHRi, SPHRi, GPHR)",
              link: "/",
            },
            { label: "Career Advisory ", link: "/" },
            { label: "Career Profile Development", link: "/" },
          ],
        },
        {
          label: "Strategy & Advisory",
          submenu: [
            { label: " Organizational Planning", link: "/" },
            { label: "Talent Management", link: "/" },
            { label: "Market Entry", link: "/" },
            { label: "Legal Management", link: "/" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      href: "/blog",
    },
    {
      label: "Contact us",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
