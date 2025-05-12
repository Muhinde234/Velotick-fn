

const Select = ({ label, id, options, value, onChange }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-md bg-white  focus:ring-2 "
      >
        <option value="">Select the country</option>
        {options.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;