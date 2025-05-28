import {useMyTickets} from "../hooks/api_hooks/useTickets.js";

export default function MyTickets() {
    const { data: ticketsData, isLoading, error } = useMyTickets();
    const tickets = ticketsData?.data || [];

    if (isLoading)
        return <div className="text-center mt-32">Loading...</div>;
    if (error)
        return <div className="text-center text-red-500 mt-32">Error loading tickets</div>;

    const formatDate = (datetimeStr) => {
        const dateObj = new Date(datetimeStr);
        return dateObj.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const formatTime = (datetimeStr) => {
        const dateObj = new Date(datetimeStr);
        return dateObj.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="mt-32 mb-12 container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-6">My Tickets</h1>

            {tickets.length === 0 && (
                <div className="text-center text-gray-500">No tickets found.</div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tickets.map((ticket) => (
                    <div
                        key={ticket.id}
                        className="border rounded-lg p-4 shadow-md flex flex-col items-center"
                    >
                        <div className="mb-4 w-full text-center">
                            <h2 className="text-lg font-bold mb-1">
                                {ticket.origin} → {ticket.destination}
                            </h2>
                            <p className="text-sm text-gray-600">Distance: {ticket.distance} km</p>
                            <p className="text-sm text-gray-600">
                                Price:{' '}
                                {parseFloat(ticket.price).toLocaleString(undefined, {
                                    style: 'currency',
                                    currency: 'USD',
                                })}
                            </p>
                            <p className="text-sm text-gray-600">Seat: {ticket.seat_number}</p>
                            <p className="text-sm text-gray-600">Travel time: {ticket.travel_time}</p>

                            <div className="mt-2">
                                <strong className="block">Departure:</strong>
                                <span className="text-sm">{formatDate(ticket.departure_time)}</span>{' '}
                                <span className="text-sm">{formatTime(ticket.departure_time)}</span>
                            </div>

                            <div className="mt-2">
                                <strong className="block">Arrival:</strong>
                                <span className="text-sm">{formatDate(ticket.arrival_time)}</span>{' '}
                                <span className="text-sm">{formatTime(ticket.arrival_time)}</span>
                            </div>
                        </div>

                        <img
                            src={ticket.qr_code_url}
                            alt={`QR code for ticket ${ticket.id}`}
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

