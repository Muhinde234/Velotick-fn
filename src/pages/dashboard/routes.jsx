import { useState, useEffect } from "react";
import Button from "../../components/ui/button";
import SEO from "../../components/ui/seo";
import Topsection from "../../components/ui/topsection";
import { getAllRoutes, deleteRoute } from "../../api/routes/routes_api";
import { Edit, Trash2 } from "lucide-react";
import AddRouteModal from "../../components/addmodelroute";

const Routes = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const data = await getAllRoutes();
        console.log("Fetched routes:", data);
        setRoutes(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setRoutes([]);
      }
    };

    fetchRoutes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this route?")) {
      try {
        await deleteRoute(id);
        setRoutes(prevRoutes => prevRoutes.filter(route => route.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleRouteAdded = (newRoute) => {
    setRoutes(prev => [newRoute, ...prev]);
    setIsModalOpen(false);
  };

  if (loading) return <div className="p-6 ml-0 md:ml-64">Loading...</div>;
  if (error) return <div className="p-6 ml-0 md:ml-64">Error: {error}</div>;

  return (
    <div className="p-6 bg-white ml-0 md:ml-64 min-h-screen">
      <SEO
        title="Routes Management dashboard"
        description="Routes Management dashboard"
        content="Routes Management dashboard"
      />

      <div>
        <Topsection />
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Routes</h1>
        <Button
          className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
          onClick={() => setIsModalOpen(true)}
        >
          Add Route <span className="ml-1 text-xl leading-none">＋</span>
        </Button>
      </div>

      <div className="mb-4">
        <p className="text-gray-400">Showing {routes?.length || 0} routes</p>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        {Array.isArray(routes) && routes.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Travel Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {routes
                .filter(route => route && typeof route === "object")
                .map((route) => (
                  <tr key={route.id ?? Math.random()}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.from ?? "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.destination ?? "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${route?.price ?? "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.travelTime ?? "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.distance ? `${route.distance} km` : "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDelete(route.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-6 text-center text-gray-500">
            No routes found. Add a new route to get started.
          </div>
        )}
      </div>

      <AddRouteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRouteAdded={handleRouteAdded}
      />
    </div>
  );
};

export default Routes;
