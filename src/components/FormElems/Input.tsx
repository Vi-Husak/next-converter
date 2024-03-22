import React from "react";

interface LabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

const Label = React.forwardRef<HTMLInputElement, LabelProps>(function Label(
  props,
  ref
) {
  return (
    <input
      ref={ref}
      className="border border-middlegrey rounded py-4 px-1 text-center text-primary font-medium leading-none text-xl w-56"
      {...props}
    />
  );
});

export default Label;
