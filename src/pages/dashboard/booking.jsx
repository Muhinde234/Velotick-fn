import { Bell, Pencil, Trash2 } from "lucide-react";
import { bookings } from "../../helpers/data";
import SearchBar from "../../components/ui/searchbar";
import avatar from "../../assets/avatar.png";

export default function Bookings() {
  return (
    <div className="p-6 bg-white ">
      <div className="flex justify-center items-center mb-4">
        <h1>Good Morning !</h1>
        <SearchBar />
        <div className="bg-gray-300 rounded-full p-2">
          <Bell />
        </div>
        <div className="flex items-center w-full max-w-md bg-gray-200 rounded-full ">
          <div className="  rounded-full p-2 flex items-center justify-center">
            <img src={avatar}  className="w-10 h-10"/>
          </div>

          <input
            type="text"
            placeholder=" name"
            className="ml-3 py-2 px-2 text-sm w-full focus:outline-none
      placeholder:text-gray-500"
          />
        </div>
        
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">All Bookings list</h1>
          <p className="text-sm text-gray-500">Showing 10 of 50 bookings</p>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium">
            Add <span className="ml-1 text-xl leading-none">＋</span>
          </button>
          <button className="border px-3 py-1.5 rounded-full text-sm font-medium border-gray-300 text-gray-700">
            Monthly
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 font-semibold text-gray-700">
                Passenger
              </th>
              <th className="px-4 py-2 font-semibold text-gray-700">Route</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Date</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Time</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Seats</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {bookings.map((b, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{b.passenger}</div>
                  <div className="text-gray-500 text-xs">{b.phone}</div>
                </td>
                <td className="px-4 py-3">{b.route}</td>
                <td className="px-4 py-3">{b.date}</td>
                <td className="px-4 py-3">{b.time}</td>
                <td className="px-4 py-3">{b.seats}</td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200">
                      <Pencil size={16} />
                    </button>
                    <button className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200">
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
