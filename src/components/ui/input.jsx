const Input = ({
  label,
  type = "text",
  id,
  placeholder,
  onChange,
  options = [],
  required = false,
  showRequiredIndicator = false, 
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
        {label}

        {(required || showRequiredIndicator) && (
          <span className="text-red-500 ml-1">*</span>
        )}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        {...options}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-600
        placeholder:text-sm"
      />
    </div>
  );
};

export default Input;
