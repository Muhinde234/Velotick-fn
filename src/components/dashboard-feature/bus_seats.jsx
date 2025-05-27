import {useGetSchedule} from "../../hooks/api_hooks/useSchedules.js";

export default function BusSeats({id}) {
    const {data: scheduleData, isLoading, error} = useGetSchedule(id);
    const schedule = scheduleData?.data;

    if (isLoading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error loading schedule</div>;

    const columns = {
        A: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('A')),
        B: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('B')),
        C: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('C')),
        D: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('D')),
        E: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('E')),
    };

    return (
        <div className="p-5">

            <div className="flex gap-2.5 mb-5 text-sm">
                <div className="flex items-center gap-1 rounded-md">
                    <span className="w-5 h-5 bg-warning-100 rounded-sm"></span>
                    <span>Reserved</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-5 h-5 bg-white border border-gray-300 rounded-sm"></span>
                    <span>Available</span>
                </div>
            </div>

            <div className="flex justify-center items-end gap-[15px]">
                {Object.keys(columns).map((col) => (
                    <div key={col} className="flex flex-col gap-[5px]">
                        {columns[col].map((seat) => (
                            <div
                                key={seat.seat_id}
                                className={`w-10 h-10 border border-gray-300 flex items-center justify-center text-xs rounded-md ${
                                    seat.is_booked ? 'bg-warning-100' : 'bg-white'
                                }`}
                                title={seat.seat_number}
                            >
                                {seat.seat_number}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}