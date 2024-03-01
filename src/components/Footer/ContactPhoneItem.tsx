import { SVGProps } from "react";

import Link from "next/link";

import SmallText from "./SmallText";

interface ContactPhoneItemProps {
  phoneNumber: string;
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
  textNode?: React.ReactNode;
}

export default function ContactPhoneItem({
  Icon,
  phoneNumber,
  textNode,
}: ContactPhoneItemProps) {
  return (
    <div className="flex gap-x-5 text-dark">
      {Icon && <Icon />}
      <div className="flex flex-col gap-y-1.5">
        <Link
          href={`tel:${phoneNumber.replace(/\s/g, "")}`}
          className="font-medium leading-none"
        >
          {phoneNumber}
        </Link>
        {textNode && <SmallText>{textNode}</SmallText>}
      </div>
    </div>
  );
}
