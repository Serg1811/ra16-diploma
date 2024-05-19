"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const listOfLinks = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Каталог",
    href: "/catalog",
  },
  {
    name: "О магазине",
    href: "/about",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="navbar-nav mr-auto" style={{ marginRight: "auto" }}>
      {listOfLinks.map((link) => (
        <li className="nav-item" key={link.href}>
          <Link
            className={pathname === link.href ? "nav-link active" : "nav-link"}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
