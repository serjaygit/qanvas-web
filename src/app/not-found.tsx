import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[30px_30px] text-foreground/15 mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
        />

        <h1 className="select-none text-9xl md:text-[10rem] lg:text-[12rem] tracking-wider text-secondary font-extrabold font-mono">
          404
        </h1>
        <p className="text-muted-foreground max-w-md text-center mb-6">
          Looks like this page doesn&apos;t exist or may have been moved.
          Don&apos;t worry, let&apos;s get you back on track.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/">
            <ArrowUpRight className="size-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </Container>
  );
}
