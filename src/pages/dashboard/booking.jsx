import {Trash2} from "lucide-react";
import Button from "../../components/ui/button";
import Topsection from "../../components/ui/topsection";
import {useState} from "react";
import SEO from "../../components/ui/seo";
import avatar from "../../assets/avatar.png";
import {useTickets} from "../../hooks/api_hooks/useTickets.js";
import Dialog from "../../components/ui/dialog.jsx";
import Loader from "../../components/ui/loader.jsx";

export default function Bookings() {
  const tableHeads = ["Passenger", "Route", "Date", "Time", "Seat", "Actions"];
  const {data: ticketsData, error: ticketsError, isLoading: ticketsLoading} = useTickets();
  const tickets = ticketsData?.data;

  const [selectedImage, setSelectedImage] = useState(null);

  const [showWarning, setShowWarning] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  const handleDeleteClick = (bookingId) => {
    setBookingToDelete(bookingId);
    setShowWarning(true);
  };

  if (ticketsLoading) return <Loader />;
  if (ticketsError) return <div className="px-6">Error: {ticketsError}</div>;

  return (
    <>
      {
        selectedImage && (
              <Dialog handleClose={() => setSelectedImage(null)}>
                <div className="min-w-[300px] min-h-[300px] text-center">
                  <img src={selectedImage} alt="Ticket QR Code" />
                  <p className="mt-2">Ticket QR Code</p>
                </div>
              </Dialog>
          )
      }
      <div className="px-6 bg-white">
        <SEO title="bookings" description="bookings" content="bookings" />

        <div>
          <Topsection />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">All Bookings list</h1>
            <p className="text-sm text-gray-500">Showing {tickets.length} bookings</p>
          </div>

          <div className="flex items-center gap-3">
            <Button className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
              Add <span className="ml-1 text-xl leading-none">＋</span>
            </Button>
            <Button className="border px-4 py-2 rounded-full text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
              Monthly
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
            <tr>
              {
                tableHeads.map((head, idx) => (
                    <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">{head}</th>
                ))
              }
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap sm:px-6 flex items-center gap-2 text-sm">
                    <img src={avatar} alt="profile pic" height={40} width={40}/>
                    <div>
                      <div className="font-medium text-gray-900">{ticket.holder_firstname + " "+ticket.holder_lastname}</div>
                      <div className="text-gray-500 text-xs">{ticket.holder_phonenumber}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap sm:px-6 text-sm">
                    {ticket.origin + " to "+ticket.destination}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap sm:px-6 text-sm">
                    {new Date(ticket.departure_time).toISOString().split('T')[0]}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap sm:px-6 text-sm">
                    {new Date(ticket.departure_time).toTimeString().slice(0, 5)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap sm:px-6 cursor-pointer text-sm">
                    <span onClick={() => setSelectedImage(ticket.qr_code_url)}>
                      {ticket.seat_number}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                    <div className="flex gap-2">
                      <button
                          className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
                          onClick={() => handleDeleteClick(idx)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
