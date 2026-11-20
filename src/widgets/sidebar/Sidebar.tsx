"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDEBAR_DATA } from "@/config/sidebar.data";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-y-1">
        {SIDEBAR_DATA.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                  "text-muted-foreground hover:bg-accent hover:text-foreground",
                  isActive && "bg-accent font-medium text-foreground",
                )}
              >
                <Icon className="size-4.5" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
