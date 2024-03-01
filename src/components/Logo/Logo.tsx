import Link from "next/link";
import { Work_Sans } from "next/font/google";

import LogoSVG from "../SVGIcons/LogoSVG";

const workSansLogoName = Work_Sans({ weight: "700", subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-3">
      <LogoSVG />
      <span className={`${workSansLogoName.className} text-dark text-xl`}>
        Чіп Чендж
      </span>
    </Link>
  );
}
