import Container from "@/components/shared/Container";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="relative">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[30px_30px] text-foreground/15 mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
      />

      <Container className="min-h-screen flex items-center justify-center">
        {children}
      </Container>
    </main>
  );
}
