import {Link} from "react-router-dom";
import ScheduleCard from "./schedulecard";
import {useGetSchedules} from "../hooks/api_hooks/useSchedules.js";

const RecentSchedules = () => {
    const {data: schedulesData, isLoading, error} = useGetSchedules();
    const schedules = schedulesData?.data;


    if (isLoading ) {
        return <div className="px-6 min-h-screen">Loading...</div>;
    }

    if (error ) {
        return <div className="px-6 min-h-screen">Error: {error}</div>;
    }

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
                <Link to="/login">
                    <button
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition cursor-pointer ">
                        View all schedules
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RecentSchedules;
