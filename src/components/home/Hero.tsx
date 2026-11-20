import Link from "next/link";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import { ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center py-16">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[30px_30px] text-foreground/15 mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
      />

      <Container>
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <div className="border p-1.5 rounded-full w-fit text-xs font-medium font-mono bg-card mb-4">
            <span className="text-primary bg-primary/15 py-0.5 px-2 rounded-full">
              Client Portal
            </span>{" "}
            <span className="text-muted-foreground">
              Your clients see progress the moment it happens
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Project management, your clients{" "}
            <span className="bg-linear-to-r from-foreground via-chart-1 to-chart-2 bg-clip-text text-transparent">
              can actually see
            </span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Qanvas is a kanban workspace with a built-in client portal.
            Freelancers, agencies, teams — anyone who works with clients can
            invite them to watch progress live, comment, suggest changes and
            approve work. No more &ldquo;just checking in&rdquo; emails.
          </p>
          <div className="flex items-center gap-2">
            <Button className="py-5 px-6" asChild>
              <Link href="/login">
                Start for free <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="outline" className="py-5 px-6" asChild>
              <Link href="/login">
                See Client Portal <Play />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
