import React from "react";

const Input = React.forwardRef(
  (
    {
      label,
      id,
      required = false,
      showRequiredIndicator = false,
      className = "",
      ...rest
    },
    ref
  ) => {
    const indicator =
      required || showRequiredIndicator ? (
        <span className="text-red-500 ml-1">*</span>
      ) : null;

    return (
      <div>
        <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
          {label}
          {indicator}
        </label>
          <input
              id={id}
              ref={ref}
              required={required}
              className={[
                  "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm",
                  className,
              ].join(" ")}
              {...rest}
          />
      </div>
    );
  }
);

export default Input;
