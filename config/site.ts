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
    }
  | {
      label: string;
      locations: {
        label: string;
        img: string;
        link: string;
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
              label: "HR Certifications (aPHRi, PHRi...)",
              link: "/Services/Careers&Training/Hr",
            },
            {
              label: "Career Advisory ",
              link: "/Services/Careers&Training/Career-advisory",
            },
          ],
        },
        {
          label: "Strategy & Advisory",
          submenu: [
            {
              label: " Organizational Planning",
              link: "/Services/Strategy&Advisory/Organisational-planning",
            },
            {
              label: "Talent Management",
              link: "/Services/Strategy&Advisory/Talent-Management",
            },
            {
              label: "Business Management",
              link: "/Services/Strategy&Advisory/Business-Management",
            },
            {
              label: "Legal Management",
              link: "/Services/Strategy&Advisory/Legal-Management",
            },
          ],
        },
      ],
    },
    {
      label: "Resources",
      href: "/blogs",
    },
    {
      label: "Locations",
      locations: [
        { label: " KSA", link: "/Locations/KSA", img: "/locations/ksa.jpg" },
        { label: "UAE", link: "/Locations/UAE", img: "/locations/uae.jpg" },
        {
          label: " India",
          link: "/Locations/India",
          img: "/locations/red-fort.jpg",
        },
        {
          label: " Egypt",
          link: "/Locations/Egypt",
          img: "/locations/egypt.jpg",
        },
      ],
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
