export type TFooterLink = {
  label: string;
  href: string;
};

export type TFooterGroup = {
  label: string;
  items: TFooterLink[];
};

export const FOOTER_DATA: TFooterGroup[] = [
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

export const FOOTER_LEGAL: TFooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];
