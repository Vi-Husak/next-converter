interface SubTitleProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function SubTitle({
  children,
  className,
  ...props
}: SubTitleProps) {
  return (
    <h2 className={`font-bold text-4xl text-dark ${className}`} {...props}>
      {children}
    </h2>
  );
}
