"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerNavList = [
  {
    name: "О магазине",
    href: "/about",
  },
  {
    name: "Каталог",
    href: "/catalog",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

export default function FooterNav() {
  const pathname = usePathname();

  return (
    <>
      <section>
        <h5>Информация</h5>
        <ul className="nav flex-column">
          {footerNavList.map((link) => (
            <li className="nav-item" key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href ? "nav-link active" : "nav-link"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
