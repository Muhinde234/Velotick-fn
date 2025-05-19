import Button from "../../components/ui/button";
import Topsection from "../../components/ui/topsection";




const Scheduledashboard = () => {
  return (
    <div className="p-6 bg-white ml-0 md:ml-64 min-h-screen">
      <div>
        <Topsection />
      </div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Schedules</h1>
        <div className="flex gap-2">
          <Button className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
            Add <span className="ml-1 text-xl leading-none">＋</span>
          </Button>
          < Button   className="border px-4 py-2 rounded-full text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
            Monthly
          </Button>

        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <Button className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-90  rounded-full text-sm font-medium transition-colors whitespace-nowrap">
            All
        </Button>
        <Button className="flex items-center px-4 py-2 text-primary-90 border border-blue-600  hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
            On Time
        </Button>  <Button className="flex items-center px-4 py-2 text-primary-90 border border-blue-600  hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
        Delayed
        </Button>  <Button className="flex items-center px-4 py-2 text-primary-90 border border-blue-600  hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
            Cancelled
        </Button>

      </div>
    </div>
  );
};

export default Scheduledashboard;
