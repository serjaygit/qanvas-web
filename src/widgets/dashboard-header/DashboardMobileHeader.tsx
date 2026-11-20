import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";

export default function DashboardMobileHeader() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b">
          <SheetTitle>
            <Logo iconOnly />
          </SheetTitle>
        </SheetHeader>
        <div className=" flex flex-col h-screen">
          <div className="flex-1 px-4">
            <Sidebar />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
