import DashboardHeader from "@/widgets/dashboard-header/DashboardHeader";
import Sidebar from "@/widgets/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <div>
        <DashboardHeader />
        <main>{children}</main>
      </div>
    </>
  );
}
