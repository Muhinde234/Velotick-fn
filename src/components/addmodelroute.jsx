import { useState } from "react";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import { addRoute } from "../api/routes/routes_api";
import { X } from "lucide-react";

const AddRouteModal = ({ isOpen, onClose, onRouteAdded }) => {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    price: "",
    travelTime: "",
    distance: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate form data
      if (!formData.from || !formData.destination) {
        throw new Error("From and Destination are required");
      }

      // Convert numeric fields to numbers
      const routeData = {
        ...formData,
        price: Number(formData.price),
        distance: Number(formData.distance)
      };

      const newRoute = await addRoute(routeData);
      onRouteAdded(newRoute); // Notify parent component
      onClose(); // Close modal
      resetForm();
    } catch (err) {
      setError(err.message || "Failed to add route");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      from: "",
      destination: "",
      price: "",
      travelTime: "",
      distance: ""
    });
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-opacity-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Route</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <Input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
              placeholder="Starting location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <Input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              placeholder="Destination"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Distance (km)</label>
              <Input
                type="number"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                required
                placeholder="Distance in km"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Travel Time</label>
            <select
              name="travelTime"
              value={formData.travelTime}
              onChange={handleChange}
              required
            >
              <option value="">Select travel time</option>
              <option value="30 mins">30 minutes</option>
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="3 hours">3 hours</option>
              <option value="4+ hours">4+ hours</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="border border-gray-300 py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary-100 py-2 px-4 rounded-md text-white hover:bg-primary-200"
            >
              {loading ? "Adding..." : "Add Route"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRouteModal;