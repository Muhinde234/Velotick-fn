import ScheduleCard from "./schedulecard";

const schedules = Array(20).fill({
  route: "RAC 205 C",
  price: "12,000 Rwf",
  date: "23rd 10 2025",
  seatsLeft: 20,
  from: "Kigali",
  to: "Uganda",
  departure: "09:45",
  arrival: "20:00",
});

const RecentSchedules = () => {
  return (
    <div className=" bg-gray-50 py-10 px-4 sm:px-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Recent Schedules
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {schedules.map((item, index) => (
          <ScheduleCard key={index} {...item} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition cursor-pointer ">
          View all schedules
        </button>
      </div>
    </div>
  );
};

export default RecentSchedules;
