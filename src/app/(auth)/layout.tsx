export const instant = false;

import Logo from "@/components/shared/Logo";
import { requireGuest } from "@/lib/session";

interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  await requireGuest();

  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr_2fr]">
      <aside className="hidden border-r border-sidebar-accent bg-sidebar p-8 lg:flex flex-col gap-16">
        <Logo />
        <div className="flex-1 max-w-md">
          <span className="text-primary uppercase text-xs tracking-wider font-medium mb-4 block">
            Built for client work
          </span>
          <h1 className="text-5xl font-semibold leading-tight mb-4">
            Run the work. Share the progress. Earn the trust.
          </h1>
          <p className="text-muted-foreground">
            Qanvas gives your team a powerful project system and every client a
            clear, beautiful portal.
          </p>
        </div>
      </aside>

      <main>{children}</main>
    </div>
  );
}
