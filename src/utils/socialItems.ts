import { SVGProps } from "react";
import FacebookSVG from "@/components/SVGIcons/FacebookSVG";
import InstagramSVG from "@/components/SVGIcons/InstagramSVG";
import TwitterSVG from "@/components/SVGIcons/TwitterSVG";
import YoutubeSVG from "@/components/SVGIcons/YoutubeSVG";

export interface SocialItem {
  href: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  alt: string;
}

const socialItems: SocialItem[] = [
  { href: "https://www.facebook.com/", Icon: FacebookSVG, alt: "Facebook" },
  { href: "https://www.instagram.com/", Icon: InstagramSVG, alt: "Instagram" },
  { href: "https://twitter.com/", Icon: TwitterSVG, alt: "Twitter" },
  { href: "https://www.youtube.com/", Icon: YoutubeSVG, alt: "Youtube" },
];

export default socialItems;
