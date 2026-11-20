import Logo from "@/components/shared/Logo";
import { UserActions } from "@/features/user/components/UserActions";
import { TUser } from "@/features/user/types/user.types";
import DashboardMobileHeader from "./DashboardMobileHeader";

interface Props {
  user: TUser;
}

export default function DashboardHeader({ user }: Props) {
  return (
    <header className="border-b">
      <div className="px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <DashboardMobileHeader />
          <Logo />
        </div>
        <div className="">
          <UserActions user={user} />
        </div>
      </div>
    </header>
  );
}
