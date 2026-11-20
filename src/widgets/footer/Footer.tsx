import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { FOOTER_DATA, FOOTER_LEGAL } from "@/config/footer.data";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-8">
      <Container>
        <div className="bg-card p-8 sm:p-12 md:p-16 rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between border-b border-border pb-8 mb-8">
            <div className="space-y-2">
              <Logo />
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae qui unde in quaerat ratione. Obcaecati nam eveniet
                minus ipsam dolorem?
              </p>
            </div>
            <nav className="flex flex-col sm:flex-row items-start justify-between lg:justify-end w-full gap-8 md:gap-16 lg:gap-24 xl:gap-36">
              {FOOTER_DATA.map((list) => (
                <div key={list.label}>
                  <h3 className="font-medium font-mono text-foreground mb-2">
                    {list.label}
                  </h3>
                  <ul className="space-y-2">
                    {list.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 text-sm font-medium sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground tracking-wide">
              © 2027 Qanvas. All rights reserved.
            </p>
            <ul className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm text-muted-foreground transition-colors hover:text-foreground`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
