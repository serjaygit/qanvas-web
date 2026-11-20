"use client";

import { SkeletonAvatar } from "@/components/shared/skeletons/SkeletonAvatar";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

import Link from "next/link";

export default function HeaderCTA() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <SkeletonAvatar />;
  }

  return (
    <div className="hidden sm:flex items-center gap-2">
      {!session ? (
        <>
          <Button variant="ghost" size="lg" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </>
      ) : (
        <Button size="lg" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      )}
    </div>
  );
}
