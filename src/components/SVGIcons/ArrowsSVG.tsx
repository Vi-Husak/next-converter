import { SVGProps } from "react";
const ArrowsSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#707C87"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m19 24 5-5-5-5M24 19H2M7 2 2 7l5 5M2 7h22"
    />
  </svg>
);
export default ArrowsSVG;
