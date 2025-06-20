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
          label: "HR Outsourcing",
          submenu: [
            {
              label: "Talent Acquisition",
              link: "/Services/Hr-Outsourcing/Talent-Acquisition",
            },
            {
              label: "HR Operations",
              link: "/Services/Hr-Outsourcing/Hr-Operations",
            },
            {
              label: "Virtual Admin Support",
              link: "/Services/Hr-Outsourcing/Virtual-Admin-Support",
            },
            {
              label: "PRO & Government Services",
              link: "/Services/Hr-Outsourcing/PRO-Services",
            },
          ],
        },
        {
          label: "Business Services",
          submenu: [
            {
              label: "Call Center Support",
              link: "/Services/Business-Service/Call-Center",
            },
            {
              label: "Facility Management",
              link: "/Services/Business-Service/Facility-Management",
            },
            {
              label: "IT Support",
              link: "/Services/Business-Service/It-Support",
            },
            {
              label: "Digital Services",
              link: "/Services/Business-Service/Digital-Marketing",
            },
          ],
        },
        {
          label: "Career & Training",
          submenu: [
            {
              label: "HR Certifications",
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
      label: "Contact",
      href: "/Contact",
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
