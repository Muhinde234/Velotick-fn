import { useEffect, useState } from "react";
import Button from "../../components/ui/button";
import SEO from "../../components/ui/seo";
import Topsection from "../../components/ui/topsection";
import { getSchedule, deleteSchedule } from "../../api/schedules/schedules_api";
import AddScheduleModal from "../../components/addschedulemodel";

const Scheduledashboard = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const data = await getSchedule();
        console.log("Fetched Schedule", data);
        setSchedule(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setSchedule([]);
      }
    };
    fetchSchedule();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSchedule(id);
      // Refresh the schedule list after deletion
      const updatedSchedule = schedule.filter((item) => item.id !== id);
      setSchedule(updatedSchedule);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleScheduleAdded = (newSchedule) => {
    setSchedule([...schedule, newSchedule]);
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className="p-6 ml-0 md:ml-64 min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 ml-0 md:ml-64 min-h-screen">Error: {error}</div>;
  }

  return (
    <div className="p-6 bg-white ml-0 md:ml-64 min-h-screen">
      <SEO
        title="Schedules Management dashboard"
        description="Schedules Management dashboard"
        content="Schedules Management dashboard"
      />
      <div>
        <Topsection />
      </div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Schedules</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
          >
            Add <span className="ml-1 text-xl leading-none">＋</span>
          </Button>
          <Button className="border px-4 py-2 rounded-full text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
            Monthly
          </Button>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <Button className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
          All
        </Button>
        <Button className="flex items-center px-4 py-2 text-primary-90 border border-blue-600 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
          On Time
        </Button>
        <Button className="flex items-center px-4 py-2 text-primary-90 border border-blue-600 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
          Delayed
        </Button>
        <Button className="flex items-center px-4 py-2 text-primary-90 border border-blue-600 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
          Cancelled
        </Button>
      </div>

      {/* Schedule Table */}
      <div className="mt-8 overflow-x-auto">
        {schedule.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No schedules available. Please add a new schedule.
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bus Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Route
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Departure Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Arrival Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Driver
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {schedule.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.busNumber || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.route || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.departureTime).toLocaleString() || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.arrivalTime).toLocaleString() || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.driver || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          item.status === "On Time"
                            ? "bg-green-100 text-green-800"
                            : item.status === "Delayed"
                            ? "bg-yellow-100 text-yellow-800"
                            : item.status === "Cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {item.status || "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900 mr-4"
                    >
                      Delete
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Schedule Modal */}
      <AddScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScheduleAdded={handleScheduleAdded}
      />
    </div>
  );
};

export default Scheduledashboard;