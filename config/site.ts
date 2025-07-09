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
  name: "Dimondra",
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
          label: "HR Services",
          submenu: [
            {
              label: "Staffing Solution",
              link: "/Services/HR-Services/Staffing-Solution",
            },
            {
              label: "HR Operations",
              link: "/Services/HR-Services/Hr-Operations",
            },
            {
              label: "Virtual Admin Support",
              link: "/Services/HR-Services/Virtual-Admin-Support",
            },
            {
              label: "PRO & Government Services",
              link: "/Services/HR-Services/PRO-Services",
            },
          ],
        },
        {
          label: "Organization Consulting",
          submenu: [
            {
              label: " Organizational Planning",
              link: "/Services/Organization-Consulting/Organisational-planning",
            },
            {
              label: "Talent Management",
              link: "/Services/Organization-Consulting/Talent-Management",
            },
            {
              label: "Business Management",
              link: "/Services/Organization-Consulting/Business-Management",
            },
            {
              label: "Legal Management",
              link: "/Services/Organization-Consulting/Legal-Management",
            },
          ],
        },
        {
          label: "Career Development",
          submenu: [
            {
              label: "HR Certifications (aPHRi, PHRi...)",
              link: "/Services/Career-Development/Hr",
            },
            {
              label: "Career Advisory ",
              link: "/Services/Career-Development/Career-advisory",
            },
          ],
        },
        {
          label: "Business Services",
          submenu: [
            {
              label: "Call Center Support",
              link: "/Services/Business-Services/Call-Center",
            },
            {
              label: "Facility Management",
              link: "/Services/Business-Services/Facility-Management",
            },
            {
              label: "IT Support",
              link: "/Services/Business-Services/It-Support",
            },
            {
              label: "Digital Services",
              link: "/Services/Business-Services/Digital-Marketing",
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
