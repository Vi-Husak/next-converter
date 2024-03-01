import navItems from "@/utils/navItems";
import NavLink from "@/components/NavLink/NavLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-y-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink navLink={item} extraClasses="font-medium" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
