import { HEADER_DATA } from "@/config/header.data";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-4 lg:gap-8">
        {HEADER_DATA.map((item) => (
          <li key={item.label}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
