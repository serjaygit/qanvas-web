import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import Navbar from "./Navbar";

import SiteHeaderActions from "./SiteHeaderActions";
import SiteMobileHeader from "./SiteMobileHeader";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-accent bg-background/70 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden sm:block">
            <Navbar />
          </nav>
          <SiteHeaderActions />
          <SiteMobileHeader />
        </div>
      </Container>
    </header>
  );
}
