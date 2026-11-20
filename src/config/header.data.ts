export type THeaderLink = {
  label: string;
  href: string;
};

export const HEADER_DATA: THeaderLink[] = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Client Portal",
    href: "#client-portal",
  },
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
] as const;
