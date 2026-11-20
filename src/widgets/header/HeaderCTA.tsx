"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function HeaderCTA() {
  return (
    <div className="hidden sm:flex items-center gap-2">
      <Button variant="ghost" size="lg" asChild>
        <Link href="/login">Login</Link>
      </Button>

      <Button size="lg" asChild>
        <Link href="/register">Sign Up</Link>
      </Button>
    </div>
  );
}
