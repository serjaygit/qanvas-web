import AuthGuard from "@/providers/AuthGuard";

interface Props {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: Props) {
  return (
    <AuthGuard>
      <main className="min-h-screen">{children}</main>
    </AuthGuard>
  );
}
