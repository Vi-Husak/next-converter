import { SVGProps } from "react";
const ArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#C1C2CA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.427 11 4.355-5-4.355-5M15.782 6H1.844"
    />
  </svg>
);
export default ArrowSVG;
