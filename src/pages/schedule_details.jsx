import { useParams } from "react-router-dom";
import { useGetSchedule } from "../hooks/api_hooks/useSchedules.js";
import Button from "../components/ui/button.jsx";
import { useState } from "react";
import {useBuyTicket} from "../hooks/api_hooks/useTickets.js";
import toast from "react-hot-toast";

export default function ScheduleDetails() {
    const { id } = useParams();
    const { data: scheduleData, isLoading, error } = useGetSchedule(id);
    const schedule = scheduleData?.data;
    const [selectedSeat, setSelectedSeat] = useState(null);

    const {mutate: purchaseTicket, isPending} = useBuyTicket();

    if (isLoading) return <div className="text-center mt-32">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-32">Error loading schedule: You must be Logged in</div>;

    const columns = {
        A: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('A')),
        B: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('B')),
        C: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('C')),
        D: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('D')),
        E: schedule.availabilities.filter((seat) => seat.seat_number.startsWith('E')),
    };

    const handleSeatClick = (seat) => {
        if (!seat.is_booked) {
            setSelectedSeat(seat.seat_id);
        }
    };


    const handleBuyTicketClick = () => {
        purchaseTicket({ seat_id: selectedSeat, schedule_id: id }, {
            onSuccess: () => {
                toast.success(`Ticket Booked successfully`);
                setSelectedSeat(null);
            },
            onError: (error) => {
                toast.error(`Error booking seat ${error}`);
            }
        })
    }

    return (
        <div className="mt-32 container mx-auto flex items-center justify-between gap-32 px-12">
            <div className="p-5 max-w-[350px] border border-gray-200 rounded-md">
                <div className="flex gap-2.5 mb-5 text-sm">
                    <div className="flex items-center gap-1 rounded-md">
                        <span className="w-5 h-5 bg-yellow-400 rounded-sm"></span>
                        <span>Selected</span>
                    </div>
                    <div className="flex items-center gap-1 rounded-md">
                        <span className="w-5 h-5 bg-gray-400 rounded-sm"></span>
                        <span>Booked</span>
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
                                    className={`w-12 h-12 border border-gray-300 flex items-center justify-center text-xs rounded-md cursor-pointer
                                        ${seat.is_booked ? 'bg-gray-400 cursor-not-allowed' :
                                        selectedSeat === seat.seat_id ? 'bg-yellow-400' : 'bg-white'}`}
                                    title={seat.seat_number}
                                    onClick={() => handleSeatClick(seat)}
                                >
                                    {seat.seat_number}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="w-[500px] bg-white shadow-sm rounded-xl p-6">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-1">{schedule.bus}</h3>
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <div>
                                    {/*<img src={avatar} alt="profile" />*/}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 text-sm mt-8">
                            <div className="border border-gray-400 rounded p-3 flex-1">
                                <div className="flex justify-center items-center gap-3">
                                    <div>
                                        {/*<img src={icon} alt="Total seats icon" className="w-6 h-6 mb-2" />*/}
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Total seats</p>
                                        <p className="font-bold text-lg text-primary-90">{schedule.total_seats}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 rounded p-3 flex-1">
                                <div className="flex justify-center items-center gap-3">
                                    <div>
                                        {/*<img src={icon} alt="Available seats icon" className="w-6 h-6 mb-2" />*/}
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Available seats</p>
                                        <p className="font-bold text-lg text-green-600">{schedule.available_seats}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="font-bold mb-1">{schedule.origin} - {schedule.destination}</p>
                    <div className="flex gap-2">
                        <p className="text-sm text-gray-600">Departure: 10:00 am</p>
                        <p className="text-sm text-gray-600">Arrival: 12:00 am</p>
                    </div>
                </div>

                <div className="w-full h-60 flex items-center justify-center border border-gray-300 rounded-lg mb-6">
                    <p className="text-gray-500">MAP COMING SOON</p>
                </div>

                <div className="mb-6 space-y-2">
                    <p className="font-medium">Price: {schedule.price} Frw/Seat</p>
                    {
                        selectedSeat && (
                            <Button onClick={handleBuyTicketClick} className="text-primary-90 capitalize border border-primary-80 p-2 rounded-sm cursor-pointer">
                                {
                                    isPending ? "Booking ticket ..." : "continue to booking"
                                }
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}