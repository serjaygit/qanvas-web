import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import Navbar from "./Navbar";
import HeaderCTA from "./HeaderCTA";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-accent bg-background/70 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <Navbar />
          <HeaderCTA />
          <MobileHeader />
        </div>
      </Container>
    </header>
  );
}
