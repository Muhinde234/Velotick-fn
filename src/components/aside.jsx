import icon from "../assets/icon.png";
import avatar from "../assets/avatar.png";
import Button from "./ui/button";

const Aside = () => {
  return (
    <div>
      <div className="w-[500px] bg-white shadow-sm rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-1">RAC 458 C</h3>
          <div className="flex  justify-between">
            <div className="flex gap-3">
              <div>
                <img src={avatar} alt="profile" />
              </div>

              <div>
                <p className="font-medium">name</p>
                <p className="text-gray-600">+250078154300</p>
              </div>
            </div>

            <div className="">
              <button className="bg-[#0C7E6E]  px-3 py-1 rounded-full">
                active
              </button>
            </div>
          </div>

          <div className="flex gap-4 text-sm mt-8">
            <div className="border border-gray-400 rounded p-3 flex-1">
              <div className="flex justify-center items-center gap-3 ">
                <div>
                  <img
                    src={icon}
                    alt="Total seats icon"
                    className="w-6 h-6 mb-2"
                  />
                </div>
                <div className="">
                  <p className="text-gray-600">Total seats</p>
                  <p className="font-bold text-lg text-primary-90">50</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-400 rounded p-3 flex-1">
              <div className="flex justify-center items-center gap-3 ">
                <div>
                  <img
                    src={icon}
                    alt="Available seats icon"
                    className="w-6 h-6 mb-2"
                  />
                </div>
                <div className="">
                  <p className="text-gray-600">Available seats</p>
                  <p className="font-bold text-lg text-green-600">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="font-bold mb-1">Kigali - Uganda</p>
        <div className="flex gap-2">
            <p className="text-sm text-gray-600">Departure: 10:00 am</p>
        <p className="text-sm text-gray-600">Arrival: 12:00 am</p>

        </div>
        
      </div>

      <div className="w-full h-60 flex items-center justify-center border border-gray-300 rounded-lg mb-6">
        <p className="text-gray-500">MAP COMING SOON</p>
      </div>

      <div className="mb-6 space-y-2">
        <p className="font-medium">Price: 2,000 Frw/Seat</p>
        <p className="font-medium">Selected seats: 4</p>
        <p className=" text-lg">Total price: 8,000 Frw</p>
        <Button
        className="text-primary-90 border border-primary-80 p-2 rounded-sm">
            continue to booking

        </Button>
      </div>

     
    </div>
  );
};

export default Aside;
