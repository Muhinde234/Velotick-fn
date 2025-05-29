import {Pencil, Trash2} from "lucide-react";
import StatCard from "../../components/startcard";
import Button from "../../components/ui/button";
import Topsection from "../../components/ui/topsection";
import avatar from "../../assets/avatar.png";
import SEO from "../../components/ui/seo";
import {useBuses, useBuseStats, useDeleteBus} from "../../hooks/api_hooks/useBuses.js";
import {useState} from "react";
import Dialog from "../../components/ui/dialog.jsx";
import BusForm from "../../components/forms/bus_form.jsx";
import toast from "react-hot-toast";
import DeleteDialog from "../../components/delete_dialog.jsx";
import Loader from "../../components/ui/loader.jsx";

const Bus = () => {
    const tableHeads = ["Bus number", "Status", "Route", "Driver", "Action"];
    const {data: buses, isLoading: isBusesLoading, isError: busesError} = useBuses();
    const {data: stats, isLoading, error: statsError} = useBuseStats();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const {mutate, isPending} = useDeleteBus();

    const handleDialogClose = () => {
        setDialogOpen(false);
        setEditData(null);
    }

    const openEdit = (bus) => {
        setEditData(bus); // set the current row for editing
        setDialogOpen(true);
    }

    const openDeleteDialog = (id) => {
        setDeleteId(id);
    };

    const handleDelete = () => {
        mutate(deleteId, {
            onSuccess: () => {
                toast.success(`Route deleted successfully`);
                setDeleteId(null);
            },
            onError: (error) => {
                toast.error(`Error deleting route ${error}`);
            }
        })
    };

    if (isBusesLoading || isLoading) return <Loader />;
    if (statsError) return <div className="p-6">Error: {statsError}</div>;

    return (
        <>
            {
                dialogOpen && (
                    <Dialog handleClose={handleDialogClose}>
                        <Dialog.Title>Add Route</Dialog.Title>
                        <BusForm
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
            <div className="px-6 ">
                <SEO
                    title="Bus Management dashboard"
                    description="Bus Management dashboard"
                    content="Bus Management dashboard"
                />
                <div>
                    <Topsection/>
                </div>

                {
                    stats.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No stats available. Please refresh.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    title={stat.title}
                                    value={stat.value}
                                    description={stat.description}
                                    color={stat.color}
                                />
                            ))}
                        </div>
                    )
                }

                {
                    buses.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No schedules available. Please add a new schedule.
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-6 p-3  rounded-sm ">
                            <div className="flex-1 bg-white rounded-2xl p-6 shadow-md">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold">Bus List</h2>
                                        <p className="text-sm text-gray-500">Showing {buses.length} buses</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <Button onClick={() => setDialogOpen(true)}
                                                className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                                            Add <span className="ml-1 text-xl leading-none">＋</span>
                                        </Button>
                                        <select className="rounded-full text-xl border px-4  py-2 text-sm">
                                            <option>Active</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="overflow-x-auto rounded-lg border border-gray-200 mt-6">
                                    <table className="min-w-full divide-y divide-gray-200 text-sm table-auto">
                                        <thead className="bg-gray-100">
                                        <tr>
                                            {
                                                tableHeads.map((head, index) => (
                                                    <th key={index}
                                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                                                        {head}
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {buses.map((bus, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50">
                                                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                                                    {bus.plate_number}
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                                                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
                                                    {bus.status}
                                                  </span>
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                                                    {bus.route}
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap sm:px-6 flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full overflow-hidden">
                                                        <img src={avatar} alt="profile"/>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {bus.driver?.name || "N/A"}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {bus.driver?.phone || "N/A"}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                                                    <div className="flex gap-2">
                                                        <button onClick={() => openEdit(bus)}
                                                                className="p-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors">
                                                            <Pencil size={16}/>
                                                        </button>
                                                        <button
                                                            onClick={() => openDeleteDialog(bus.id)}
                                                            className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
                                                        >
                                                            <Trash2 size={16}/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/*<div className="w-full lg:w-[450px] bg-white rounded-2xl shadow-md p-4">*/}
                            {/*  <BusAside />*/}
                            {/*</div>*/}
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Bus;
