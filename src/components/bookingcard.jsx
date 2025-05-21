const BookingCard = ({ title, value, change }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {change && (
          <div className="flex items-center text-green-500 text-sm font-medium">
            <span>{change}</span>
            <span className="ml-1">●</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
