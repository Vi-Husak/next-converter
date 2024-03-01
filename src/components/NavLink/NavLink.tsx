import Link from "next/link";
import { NavItem } from "@/utils/navItems";

interface NavItemProps {
  navLink: NavItem;
  extraClasses?: string;
  isActive?: boolean;
}

export default function NavLink({
  navLink: { href, label },
  extraClasses,
  isActive = false,
}: NavItemProps) {
  const classes = `${
    isActive ? "text-accent" : "text-primary"
  } hover:text-accent transition text-base ${extraClasses ? extraClasses : ""}`;

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
