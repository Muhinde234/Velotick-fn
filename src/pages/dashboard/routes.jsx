import Button from "../../components/ui/button";
import SEO from "../../components/ui/seo";
import Topsection from "../../components/ui/topsection";
import {Pencil, Trash2} from "lucide-react";
import {useDeleteRoute, useGetRoutes} from "../../hooks/api_hooks/useRoutes.js";
import {useState} from "react";
import Dialog from "../../components/ui/dialog.jsx";
import RouteForm from "../../components/forms/route_form.jsx";
import DeleteDialog from "../../components/delete_dialog.jsx";
import toast from "react-hot-toast";

const Routes = () => {
    const tableHeads = ["From", "Destination", "Price", "Travel Time", "Distance", "Actions"];

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    const {data: routesData, isLoading: routesLoading, isError: routesError} = useGetRoutes();
    const routes = routesData?.data || [];
    const {mutate, isPending} = useDeleteRoute();

    const handleDialogClose = () => {
        setDialogOpen(false);
        setEditData(null);
    }

    const openEdit = (route) => {
        setEditData(route); // set the current row for editing
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

    if (routesLoading) return <Loader />;
    if (routesError) return <div className="px-6">Error: {routesError}</div>;

    return (
        <>
            {
                dialogOpen && (
                    <Dialog handleClose={handleDialogClose}>
                        <Dialog.Title>Add Route</Dialog.Title>
                        <RouteForm
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

            <div className="px-6 bg-white">
                <SEO
                    title="Routes Management dashboard"
                    description="Routes Management dashboard"
                    content="Routes Management dashboard"
                />

                <div>
                    <Topsection/>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Routes</h1>
                    <Button
                        className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                        onClick={() => setDialogOpen(true)}
                    >
                        Add Route <span className="ml-1 text-xl leading-none">＋</span>
                    </Button>
                </div>

                <div className="mb-4">
                    <p className="text-gray-400">Showing {routes?.length || 0} routes</p>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    {routes.length > 0 ? (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                {
                                    tableHeads.map((tableHead, index) => (
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={index}>{tableHead}</th>
                                    ))
                                }
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {routes
                                .map((route) => (
                                    <tr key={route.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.origin ?? "N/A"}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.destination ?? "N/A"}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">RWF {route?.price  ?? "N/A"}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.travel_time ?? "N/A"}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{route?.distance_km ? `${route.distance_km} km` : "N/A"}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex space-x-2">
                                                <button onClick={() => openEdit(route)} className="p-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors">
                                                    <Pencil size={16}/>
                                                </button>
                                                <button
                                                    className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
                                                    onClick={() => openDeleteDialog(route.id)}
                                                >
                                                    <Trash2 size={16}/>
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
            </div>
        </>
    );
};

export default Routes;
