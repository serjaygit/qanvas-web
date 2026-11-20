export const instant = false;

import Container from "@/components/shared/Container";
import { requireAuth } from "@/lib/session";
import DashboardHeader from "@/widgets/dashboard-header/DashboardHeader";
import Sidebar from "@/widgets/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: Props) {
  const { user } = await requireAuth();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <DashboardHeader user={user} />

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-60 shrink-0 border-r md:block bg-sidebar p-4">
          <Sidebar />
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden py-4">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
}
