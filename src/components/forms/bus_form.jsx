import Input from "../ui/input.jsx";
import Button from "../ui/button.jsx";
import { useForm } from "react-hook-form";
import { useCreateBus, useUpdateBus } from "../../hooks/api_hooks/useBuses.js";
import toast from "react-hot-toast";

export default function BusForm({ onClose, mode = "add", initialData = null }) {
    const { mutate: addBus, isPending: isAdding } = useCreateBus();
    const { mutate: updateBus, isPending: isUpdating } = useUpdateBus();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            plate_number: initialData?.plate_number || "",
            status: initialData?.status || "available",
        },
    });

    const onSubmit = (data) => {
        const formData = {
            plate_number: data.plate_number,
            status: data.status,
        };

        const mutation = mode === "edit" ? updateBus : addBus;

        mutation(
            mode === "edit" ? { id: initialData.id, bus: formData } : formData,
            {
                onSuccess: (response) => {
                    toast.success(
                        `Successfully ${mode === "edit" ? "updated" : "added"} bus ${
                            response.plate_number
                        }`
                    );
                    reset();
                    onClose();
                },
                onError: (err) => {
                    if (err.response?.data?.errors?.plate_number) {
                        toast.error("Plate number must be unique");
                    } else {
                        toast.error(`An error occurred: ${err}`);
                    }
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[508px]">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Plate Number
                </label>
                <Input
                    type="text"
                    {...register("plate_number", {
                        required: "Plate number is required",
                        maxLength: {
                            value: 255,
                            message: "Plate number cannot exceed 255 characters",
                        },
                    })}
                    placeholder="Enter plate number (e.g., RAB123X)"
                />
                {errors.plate_number && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.plate_number.message}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                </label>
                <select
                    {...register("status", {
                        required: "Status is required",
                    })}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-100"
                >
                    <option value="available">Available</option>
                    <option value="in_maintenance">In Maintenance</option>
                    <option value="active">Active</option>
                </select>
                {errors.status && (
                    <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
                )}
            </div>

            <div className="flex justify-end space-x-4 pt-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                        reset();
                        onClose();
                    }}
                    className="border border-gray-300 py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100"
                    disabled={isSubmitting || isAdding || isUpdating}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    disabled={isSubmitting || isAdding || isUpdating}
                    className="bg-primary-100 py-2 px-4 rounded-md text-white hover:bg-primary-200"
                >
                    {isSubmitting || isAdding || isUpdating
                        ? mode === "edit"
                            ? "Updating..."
                            : "Adding..."
                        : mode === "edit"
                            ? "Update Bus"
                            : "Add Bus"}
                </Button>
            </div>
        </form>
    );
}