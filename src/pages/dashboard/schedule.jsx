import {useState} from "react";
import Button from "../../components/ui/button";
import SEO from "../../components/ui/seo";
import Topsection from "../../components/ui/topsection";
import {useDeleteSchedule, useGetSchedules} from "../../hooks/api_hooks/useSchedules";
import {useBuses} from "../../hooks/api_hooks/useBuses";
import {useGetRoutes} from "../../hooks/api_hooks/useRoutes";
import {Pencil, Trash2} from "lucide-react";
import Dialog from "../../components/ui/dialog.jsx";
import ScheduleForm from "../../components/forms/schedule_form.jsx";
import toast from "react-hot-toast";
import DeleteDialog from "../../components/delete_dialog.jsx";
import BusSeats from "../../components/dashboard-feature/bus_seats.jsx";
import Loader from "../../components/ui/loader.jsx";

const Scheduledashboard = () => {
    const tableHeads = ["Bus Plate Number", "Route", "Departure Time", "Arrival Time", "Remaining Seats", "Actions"];

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    const {data, isLoading, isError, error} = useGetSchedules();
    const {data: buses, isLoading: isBusesLoading, isError: isBusesError, error: busesError} = useBuses();
    const {data: routesData, isLoading: isRoutesLoading, isError: isRoutesError, error: routesError} = useGetRoutes();
    const {mutate, isPending} = useDeleteSchedule();

    const routes = routesData?.data || [];
    const schedules = data?.data || [];

    const handleDialogClose = () => {
        setDialogOpen(false);
        setEditData(null);
    }

    const openEdit = (schedule) => {
        setEditData(schedule);
        setDialogOpen(true);
    }

    const openDeleteDialog = (id) => {
        setDeleteId(id);
    };

    const handleDelete = () => {
        mutate(deleteId, {
            onSuccess: () => {
                toast.success(`Schedule deleted successfully`);
                setDeleteId(null);
            },
            onError: (error) => {
                toast.error(`Error deleting schedule ${error}`);
            }
        })
    };

    if (isLoading || isBusesLoading || isRoutesLoading) return <Loader />;

    if (isError && isBusesError && isRoutesError) {
        return <div className="px-6 min-h-screen">Error: {error + busesError + routesError}</div>;
    }

    return (
        <>
            {
                dialogOpen && (
                    <Dialog handleClose={handleDialogClose}>
                        <Dialog.Title>Add Schedule</Dialog.Title>
                        <ScheduleForm
                            routes={routes}
                            buses={buses}
                            onClose={handleDialogClose}
                            mode={editData ? "edit" : "add"}
                            initialData={editData}
                        />
                    </Dialog>
                )
            }

            {
                deleteId && (
                    <DeleteDialog
                        onDelete={handleDelete}
                        isPending={isPending}
                        onCancel={() => setDeleteId(null)}
                    />
                )
            }

            {
                selectedSchedule && (
                    <Dialog handleClose={() => setSelectedSchedule(null)}>
                        <BusSeats id={selectedSchedule} />
                    </Dialog>
                )
            }

            <div className="px-6">
                <SEO
                    title="Schedules Management dashboard"
                    description="Schedules Management dashboard"
                    content="Schedules Management dashboard"
                />
                <div>
                    <Topsection/>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Schedules</h1>
                    <div className="flex gap-2">
                        <Button
                            onClick={() => setDialogOpen(true)}
                            className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                        >
                            Add <span className="ml-1 text-xl leading-none">＋</span>
                        </Button>
                        <Button
                            className="border px-4 py-2 rounded-full text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
                            Monthly
                        </Button>
                    </div>
                </div>

                {/*<div className="flex gap-4 mt-6">*/}
                {/*    <Button*/}
                {/*        className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">*/}
                {/*        All*/}
                {/*    </Button>*/}
                {/*    <Button*/}
                {/*        className="flex items-center px-4 py-2 text-primary-90 border border-blue-600 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">*/}
                {/*        On Time*/}
                {/*    </Button>*/}
                {/*    <Button*/}
                {/*        className="flex items-center px-4 py-2 text-primary-90 border border-blue-600 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">*/}
                {/*        Delayed*/}
                {/*    </Button>*/}
                {/*    <Button*/}
                {/*        className="flex items-center px-4 py-2 text-primary-90 border border-blue-600 hover:bg-primary-90 rounded-full text-sm font-medium transition-colors whitespace-nowrap">*/}
                {/*        Cancelled*/}
                {/*    </Button>*/}
                {/*</div>*/}

                <div className="mt-8 overflow-x-auto border border-gray-200 rounded-lg">
                    {schedules.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No schedules available. Please add a new schedule.
                        </div>
                    ) : (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                {
                                    tableHeads.map((tableHead, idx) => (
                                        <th key={idx}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {tableHead}
                                        </th>
                                    ))
                                }
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {schedules.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td onClick={() => setSelectedSchedule(item.id)} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer">
                                        {item.bus || "N/A"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.origin + " to " + item.destination || "N/A"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(item.departure_time).toLocaleString() || "N/A"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(item.arrival_time).toLocaleString() || "N/A"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.available_seats || "N/A"}
                                    </td>
                    {/*                <td className="px-6 py-4 whitespace-nowrap">*/}
                    {/*<span*/}
                    {/*    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full */}
                    {/*    ${*/}
                    {/*        item.status === "On Time"*/}
                    {/*            ? "bg-green-100 text-green-800"*/}
                    {/*            : item.status === "Delayed"*/}
                    {/*                ? "bg-yellow-100 text-yellow-800"*/}
                    {/*                : item.status === "Cancelled"*/}
                    {/*                    ? "bg-red-100 text-red-800"*/}
                    {/*                    : "bg-gray-100 text-gray-800"*/}
                    {/*    }`}*/}
                    {/*>*/}
                    {/*  {item.status || "N/A"}*/}
                    {/*</span>*/}
                    {/*                </td>*/}
                                    <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => openEdit({
                                                    id: item.id,
                                                    bus_id: item.bus,
                                                    route_id: item.origin + " - " + item.destination,
                                                    departure_time: new Date(item.departure_time).toLocaleString(),
                                                    arrival_time: new Date(item.arrival_time).toLocaleString()
                                                })}
                                                className="p-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors">
                                                <Pencil size={16}/>
                                            </button>
                                            <button
                                                className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
                                                onClick={() => openDeleteDialog(item.id)}
                                            >
                                                <Trash2 size={16}/>
                                            </button>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default Scheduledashboard;
