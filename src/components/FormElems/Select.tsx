import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  props,
  ref
) {
  return (
    <select
      ref={ref}
      className="border border-middlegrey rounded py-4 pl-4 pr-12 text-center text-primary font-medium text-xl leading-none bg-white"
      {...props}
    />
  );
});

export default Select;
