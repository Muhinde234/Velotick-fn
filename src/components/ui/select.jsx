const Select = ({
                    label,
                    id,
                    options = [],
                    valueKey = "id",
                    labelKey = "label",
                    placeholder = "Select an option",
                    className = "",
                    children,
                    ...rest
                }) => {
    const getLabel = (item) => {
        return typeof labelKey === "function" ? labelKey(item) : item[labelKey];
    };

    return (
        <div>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <select
                id={id}
                className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                {...rest}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((item, idx) => (
                    <option key={idx} value={item[valueKey]}>
                        {getLabel(item)}
                    </option>
                ))}
            </select>

            {children && <div className="mt-1 text-sm text-gray-500">{children}</div>}
        </div>
    );
};

export default Select;
