import { X } from "lucide-react";
import Input from "./input";
import Button from "./button";

const Routemodel = () => {
  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Add Route</h1>
          <X className="text-gray-500 cursor-pointer" />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">From</p>
            <Input placeholder="Start location, e.g Kigali" />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">To</p>
            <Input placeholder="End location, e.g Uganda" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Travel time</p>
              <Input placeholder="Travel time, e.g 9h 30min" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Distance</p>
              <Input placeholder="Path distance, e.g 120 km" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="outline" className="px-4 py-2">
            Cancel
          </Button>
          <Button className="px-4 py-2 bg-primary-90 hover:bg-primary-100">
            Add route
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Routemodel;