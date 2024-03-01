import Link from "next/link";
import socialItems from "@/utils/socialItems";

export default function Socials() {
  return (
    <ul className="flex gap-x-4 items-center ">
      {socialItems.map(({ href, Icon, alt }) => (
        <li key={alt} className="text-dark hover:text-accent transition">
          <Link href={href}>
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
