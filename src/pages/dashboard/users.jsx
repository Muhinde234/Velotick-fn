import Topsection from "../../components/ui/topsection";
import StatCard from "../../components/startcard";
import Button from "../../components/ui/button";
import SEO from "../../components/ui/seo";
import {Pencil, Trash2} from "lucide-react";
import {useDeleteUser, useRoleStats, useUsers} from "../../hooks/api_hooks/useUsers.js";
import avatar from "../../assets/avatar.png"
import {useState} from "react";
import Dialog from "../../components/ui/dialog.jsx";
import UserForm from "../../components/forms/user_form.jsx";
import {useRoles} from "../../hooks/api_hooks/useRoles.js";
import DeleteDialog from "../../components/delete_dialog.jsx";
import toast from "react-hot-toast";

const Users = () => {
    const tableHeads = ["Full Names", "Email", "Nationality", "Roles", "Actions"];
    const {data: usersData, isPending: usersPending, isError: usersHasError, error: usersError} = useUsers();
    const users = usersData?.data;
    const {data: roles, isPending: rolesPending, isError: rolesHasError, error: rolesError} = useRoles();
    const {mutate, isPending} = useDeleteUser();
    const {data: stats, isLoading:isStatsLoading, isError: isStatsError, error: statsError} = useRoleStats();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    const handleDialogClose = () => {
        setDialogOpen(false);
        setEditData(null);
    }

    const openEdit = (user) => {
        setEditData(user); // set the current row for editing
        setDialogOpen(true);
    }

    const openDeleteDialog = (id) => {
        setDeleteId(id);
    };

    const handleDelete = () => {
        mutate(deleteId, {
            onSuccess: () => {
                toast.success(`User deleted successfully`);
                setDeleteId(null);
            },
            onError: (error) => {
                toast.error(`Error deleting user ${error}`);
            }
        })
    }


    if (usersPending || rolesPending || isStatsLoading) return <div className="p-6">Loading...</div>;
    if (usersHasError || rolesHasError || isStatsError) return <div className="p-6">Error: {usersError + rolesError + statsError}</div>;

    return (
        <>
            {
                dialogOpen && (
                    <Dialog handleClose={handleDialogClose}>
                        <Dialog.Title>Add User</Dialog.Title>
                        <UserForm
                            roles={roles}
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

            <div className="px-6">
                <SEO
                    title="User Management dashboard"
                    description="User Management dashboard"
                    content="User Management dashboard"
                />
                <div>
                    <Topsection/>
                </div>

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
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Users</h1>
                    <Button
                        onClick={() => setDialogOpen(true)}
                        className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                    >
                        Add User <span className="ml-1 text-xl leading-none">＋</span>
                    </Button>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    {users.length > 0 ? (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                {
                                    tableHeads.map((tableHead, index) => (
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            key={index}>{tableHead}</th>
                                    ))
                                }
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {users
                                .map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center gap-2">
                                            <img src={avatar} alt="profile pic" height={40} width={40}/>
                                            <div className="flex flex-col">
                                            <span
                                                className="text-md font-bold">{user.firstname + " " + user.lastname}</span>
                                                <span className="text-sm">{user.phone_number}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.nationality}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.roles.map((role, idx) => (
                                            <span key={idx} className="capitalize">{role.name}</span>
                                        ))}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => openEdit(user)}
                                                    className="p-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors">
                                                    <Pencil size={16}/>
                                                </button>
                                                <button
                                                    onClick={() => openDeleteDialog(user.id)}
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
                    ) : (
                        <div className="p-6 text-center text-gray-500">
                            No users found. Add a new user to get started.
                        </div>
                    )}
                </div>

            </div>
        </>
    );
};

export default Users;
