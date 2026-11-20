import Container from "@/components/shared/Container";
import LoginForm from "@/features/auth/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Container className="flex min-h-screen max-w-md flex-col justify-center gap-6 py-12">
      <div className="space-y-2">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          Welcome Back
        </span>
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign in to Qanvas
        </h1>
        <p className="text-sm text-muted-foreground">
          Continue to your team and client workspaces.
        </p>
      </div>

      <LoginForm />

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Create account
        </Link>
      </p>
    </Container>
  );
}
