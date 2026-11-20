export type FooterLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  label: string;
  items: FooterLink[];
};

export const FOOTER_DATA: FooterGroup[] = [
  {
    label: "Product",
    items: [
      { label: "Features", href: "/#features" },
      { label: "Client Portal", href: "/#client-portal" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "For agencies", href: "/solutions/agencies" },
      { label: "For freelancers", href: "/solutions/freelancers" },
      { label: "For consultants", href: "/solutions/consultants" },
      { label: "For studios", href: "/solutions/studios" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];
