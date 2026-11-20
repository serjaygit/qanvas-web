import Link from "next/link";

interface Props {
  item: {
    label: string;
    href: string;
  };
}

export default function NavItem({ item }: Props) {
  return (
    <Link
      href={item.href}
      className="text-sm text-muted-foreground font-medium tracking-wide hover:text-foreground transition-colors"
    >
      {item.label}
    </Link>
  );
}
