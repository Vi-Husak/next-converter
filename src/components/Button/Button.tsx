import Link from "next/link";

interface ButtonProps {
  type: "link" | "submit" | "button" | "reset";
  href?: string;
  onClick?: () => void;
  color?: "dark" | "light";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  type,
  href,
  onClick,
  color = "dark",
  children,
  className = "",
}: ButtonProps) {
  const buttonClasses = `inline-block px-11 py-4 font-medium text-lg rounded ${
    color === "dark" ? "bg-blueBG text-light" : "bg-greyBg text-primary"
  } ${className}`;

  if (type === "link" && href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  if (type === "submit" || type === "button" || type === "reset") {
    return (
      <button type={type} onClick={onClick} className={buttonClasses}>
        {children}
      </button>
    );
  }

  return null;
}
