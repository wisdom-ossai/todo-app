import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, containerClassName, type = "text", ...props }, ref) => {
    return (
      <div className={`col-3 input-effect ${containerClassName}`}>
        <input
          ref={ref}
          className={`effect-20 ${className}`}
          type={type}
          {...props}
        />
        {label && <label>{label}</label>}
        <span className="focus-border">
          <i></i>
        </span>
      </div>
    );
  }
);

export default Input;
