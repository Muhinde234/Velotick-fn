import { Pencil, Trash2 } from "lucide-react";
import { bookings } from "../../helpers/data";
import Button from "../../components/ui/button";
import Topsection from "../../components/ui/topsection";
import { useState } from "react";
import Warningmodel from "../../components/ui/warningmodel";

export default function Bookings() {
  const [showWarning, setShowWarning] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  const handleDeleteClick = (bookingId) => {
    setBookingToDelete(bookingId);
    setShowWarning(true);
  };

  const handleConfirmDelete = () => {
    //  make an API call to delete the booking
    console.log("Deleting booking:", bookingToDelete);
    setShowWarning(false);
    setBookingToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowWarning(false);
    setBookingToDelete(null);
  };

  return (
    <div className="p-6 bg-white ml-0 md:ml-64 min-h-screen">
      {showWarning && (
        <Warningmodel 
          onCancel={handleCancelDelete} 
          onConfirm={handleConfirmDelete} 
        />
      )}
     
      <div>
        <Topsection/>
      </div>
 
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">All Bookings list</h1>
          <p className="text-sm text-gray-500">Showing 10 of 50 bookings</p>
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
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Passenger</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Route</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Time</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Seats</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((b, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                  <div className="font-medium text-gray-900">{b.passenger}</div>
                  <div className="text-gray-500 text-xs">{b.phone}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">{b.route}</td>
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">{b.date}</td>
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">{b.time}</td>
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">{b.seats}</td>
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                  <div className="flex gap-2">
                    <button className="p-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors">
                      <Pencil size={16} />
                    </button>
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
  );
}