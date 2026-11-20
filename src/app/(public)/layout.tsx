import Footer from "@/widgets/footer/Footer";
import SiteHeader from "@/widgets/site-header/SiteHeader";

interface Props {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
