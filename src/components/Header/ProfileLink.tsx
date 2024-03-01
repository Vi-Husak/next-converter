import Link from "next/link";

import LoginSVG from "@/components/SVGIcons/LoginSVG";

export default function ProfileLink() {
  return (
    <Link href="/profile" className="flex items-center gap-x-3.5">
      <LoginSVG />
      <span className="text-dark text-base">Особистий кабінет</span>
    </Link>
  );
}
