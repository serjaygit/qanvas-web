import {
  CloudCheck,
  LayoutDashboard,
  type LucideIcon,
  UserRoundGroup,
  UsersRound,
} from "lucide-react";

export type TSidebarLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SIDEBAR_DATA: TSidebarLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: CloudCheck,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: UsersRound,
  },
  {
    label: "Team",
    href: "/team",
    icon: UserRoundGroup,
  },
] as const;
