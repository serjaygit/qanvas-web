import Image from "next/image";
import Link from "next/link";

interface Props {
  iconOnly?: boolean;
}

export default function Logo({ iconOnly = false }: Props) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Qanvas" width={24} height={24} priority />
      {!iconOnly && (
        <span className="text-xl font-semibold font-mono tracking-tight text-foreground">
          Qanvas
        </span>
      )}
    </Link>
  );
}
