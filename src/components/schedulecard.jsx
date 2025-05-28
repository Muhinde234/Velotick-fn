import {TicketIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";

const ScheduleCard = ({
                          id,
                          bus,
                          origin,
                          destination,
                          price,
                          available_seats,
                          departure_time,
                          arrival_time,
                      }) => {

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/schedule/${id}`)} className="bg-white shadow rounded-xl p-4 w-full max-w-xs cursor-pointer ">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white p-1 rounded-sm">
                        <TicketIcon size={32} className=""/>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-900">{bus}</p>
                        <p className="text-sm text-gray-500 mt-1">{new Date(departure_time).toISOString().split('T')[0]}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{price}</p>
                    <p className="text-xs bg-[#0C7E6E] rounded-full py-1 px-2 mt-1 font-semibold">
                        {available_seats} seats left
                    </p>
                </div>
            </div>

            <div className="border-t-2  border-dashed  pt-2 text-sm text-gray-700 grid grid-cols-2 gap-y-1">
                <div>
                    <p>{origin}</p>
                    <p className="text-xs text-gray-500">
                        {new Date(departure_time).toTimeString().slice(0, 5)}
                    </p>
                </div>
                <div className="text-right">
                    <p>{destination}</p>
                    <p className="text-xs text-gray-500">
                        {new Date(arrival_time).toTimeString().slice(0, 5)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;
