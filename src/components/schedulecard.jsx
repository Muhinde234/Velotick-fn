import { TicketIcon } from "lucide-react";

const ScheduleCard = ({
  route,
  date,
  price,
  seatsLeft,
  departure,
  arrival,
  from,
  to,
}) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 w-full max-w-xs ">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1 rounded-sm">
            <TicketIcon size={32} className="" />
          </div>

          <div>
            <p className="font-semibold text-gray-900">{route}</p>
            <p className="text-sm text-gray-500 mt-1">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">{price}</p>
          <p className="text-xs bg-[#0C7E6E] rounded-full py-1 px-2 mt-1 font-semibold">
            {seatsLeft} seats left
          </p>
        </div>
      </div>

      <div className="border-t-2  border-dashed  pt-2 text-sm text-gray-700 grid grid-cols-2 gap-y-1">
        <div>
          <p>{from}</p>
          <p className="text-xs text-gray-500">{departure}</p>
        </div>
        <div className="text-right">
          <p>{to}</p>
          <p className="text-xs text-gray-500">{arrival}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
