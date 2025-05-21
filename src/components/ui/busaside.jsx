import icon from "../../assets/icon.png";
import avatar from "../../assets/avatar.png";
import bus from "../../assets/bus.png";

const BusAside = () => {
  return (
    <div className="max-h-screen mx-auto bg-white rounded-xl  overflow-hidden">
      <div className=" overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          src={bus}
          alt="Bus RAC 458 C"
          className="rounded-t-2xl  w-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">RAC 458 C</h3>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt="Driver profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">Rukundo Prosper</p>
                <p className="text-gray-600 text-sm">+250791154300</p>
              </div>
            </div>

            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Active
            </span>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="border border-primary-60 rounded-lg p-4 flex-1">
            <div className="flex items-center gap-3">
              <img src={icon} alt="Total seats" className="w-6 h-6" />
              <div>
                <p className="text-gray-600 text-sm">Total seats</p>
                <p className="font-bold text-lg text-primary-100">50</p>
              </div>
            </div>
          </div>

          <div className="border border-primary-60 rounded-lg p-4 flex-1">
            <div className="flex items-center gap-3">
              <img src={icon} alt="Available seats" className="w-6 h-6" />
              <div>
                <p className="text-gray-600 text-sm">Available seats</p>
                <p className="font-bold text-lg text-green-600">5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-2">Kigali – Uganda</h4>
          <div className="flex gap-4 text-sm">
            <p className="text-gray-600">
              Departure: <span className="text-gray-800">10:00 am</span>
            </p>
            <p className="text-gray-600">
              Arrival: <span className="text-gray-800">12:00 pm</span>
            </p>
          </div>
        </div>

        <div className="h-60 bg-gray-50 rounded-lg flex items-center justify-center mb-6 border border-gray-300">
          <p className="text-gray-400">MAP COMING SOON</p>
        </div>
      </div>
    </div>
  );
};

export default BusAside;
