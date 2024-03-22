interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

export default function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={`font-medium text-primary text-xl ${
        className ? className : ""
      }`}
      {...props}
    />
  );
}
