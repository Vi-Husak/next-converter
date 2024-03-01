import Logo from "@/components/Logo/Logo";

import NavigationActiveRoute from "./NavigationActiveRoute";
import ProfileLink from "./ProfileLink";

export default function Header() {
  return (
    <header className="bg-greyBg px-25 py-8 flex items-center gap-20">
      <Logo />
      <NavigationActiveRoute />
      <ProfileLink />
    </header>
  );
}
