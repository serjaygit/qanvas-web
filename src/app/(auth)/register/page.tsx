import Container from "@/components/shared/Container";
import RegisterForm from "@/features/auth/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Container className="flex min-h-screen max-w-md flex-col justify-center gap-6 py-12">
      <div className="space-y-2">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          Start free
        </span>
        <h1 className="text-2xl font-semibold tracking-tight">
          Create your Qanvas account
        </h1>
        <p className="text-sm text-muted-foreground">
          No credit card required. Set up your first workspace in a few minutes.
        </p>
      </div>

      <RegisterForm />

      <div className="space-y-4">
        <p className="text-center text-xs text-muted-foreground">
          By creating an account, you agree to the{" "}
          <Link href="/terms" className="text-primary">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary">
            Privacy Policy
          </Link>
          .
        </p>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </Container>
  );
}
