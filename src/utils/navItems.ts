export interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/services", label: "Послуги" },
  { href: "/converter", label: "Конвертер валют" },
  { href: "/about", label: "Контакти" },
  { href: "/contactus", label: "Задати питання" },
];

export default navItems;
