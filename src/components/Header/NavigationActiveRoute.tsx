"use client";

import { usePathname } from "next/navigation";

import navItems from "@/utils/navItems";
import NavLink from "@/components/NavLink/NavLink";

export default function NavigationActiveRoute() {
  const pathname = usePathname();

  return (
    <nav className="grow">
      <ul className="flex gap-x-9">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink navLink={item} isActive={pathname === item.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
