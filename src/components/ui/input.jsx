import React from "react";

const Input = React.forwardRef(({
  label,
  id,
  required = false,
  showRequiredIndicator = false,
  options = null,
  className = "",
  ...rest
}, ref) => {
  const indicator = (required || showRequiredIndicator) ? (
    <span className="text-red-500 ml-1">*</span>
  ) : null;

  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
        {label}
        {indicator}
      </label>

      {Array.isArray(options) && options.length > 0 ? (
        <select
          id={id}
          ref={ref}
          required={required}
          className={[
            "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-600 placeholder:text-sm",
            className
          ].join(" ")}
          {...rest}
        >
          {options.map(({ value, label: optLabel }, idx) => (
            <option key={idx} value={value}>
              {optLabel}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          ref={ref}
          required={required}
          className={[
            "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-600 placeholder:text-sm",
            className
          ].join(" ")}
          {...rest}
        />
      )}
    </div>
  );
});

export default Input;
