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

export default function MobileHeader() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden" asChild>
        <Button variant="outline" size="icon-lg">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo iconOnly />
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
