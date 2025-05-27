import Button from "../ui/button.jsx";
import Select from "../ui/select.jsx";
import Input from "../ui/input.jsx";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {useCreateSchedule, useUpdateSchedule} from "../../hooks/api_hooks/useSchedules.js";

export default function ScheduleForm({routes, buses, onClose, mode = "add", initialData = null}) {
    const {mutate: addSchedule, isPending: isAdding} = useCreateSchedule();
    const {mutate: updateSchedule, isPending: isUpdating} = useUpdateSchedule();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: {
            bus_id: initialData?.bus_id || "",
            route_id: initialData?.route_id || "",
            departure_time: initialData?.departure_time || "",
            arrival_time: initialData?.arrival_time || "",
        },
    });

    const onSubmit = (data) => {
        const formData = {
            bus_id: data.bus_id,
            route_id: data.route_id,
            departure_time: data.departure_time,
            arrival_time: data.arrival_time,
        };

        if (mode === "edit" && !initialData?.id) {
            toast.error("Missing schedule ID for update");
            return;
        }

        const mutation = mode === "edit" ? updateSchedule : addSchedule;

        mutation(
            mode === "edit" ? {id: initialData.id, scheduleData: formData} : formData,
            {
                onSuccess: (response) => {
                    toast.success(`Successfully ${mode === "edit" ? "updated" : "added"} schedule`);
                    reset();
                    onClose();
                },
                onError: (err) => {
                    toast.error(`An error occurred: ${err.message}`);
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Select
                    label="Bus"
                    id="bus_id"
                    className="w-[508px]"
                    {...register("bus_id", {required: "Bus is required"})}
                    options={buses}
                    valueKey="id"
                    labelKey="plate_number"
                    placeholder="Select a bus"
                />
                {errors.bus_id && (
                    <p className="text-red-500 text-sm mt-1">{errors.bus_id.message}</p>
                )}
            </div>

            <div>
                <Select
                    label="Route"
                    id="route_id"
                    className="w-[508px]"
                    {...register("route_id", {required: "Route is required"})}
                    options={routes}
                    valueKey="id"
                    labelKey={(route) => `${route.origin} - ${route.destination}`}
                    placeholder="Select a route"
                />
                {errors.route_id && (
                    <p className="text-red-500 text-sm mt-1">{errors.route_id.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Departure Time</label>
                <Input
                    type="datetime-local"
                    {...register("departure_time", {required: "Departure time is required"})}
                />
                {errors.departure_time && (
                    <p className="text-red-500 text-sm mt-1">{errors.departure_time.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Time</label>
                <Input
                    type="datetime-local"
                    {...register("arrival_time", {required: "Arrival time is required"})}
                />
                {errors.arrival_time && (
                    <p className="text-red-500 text-sm mt-1">{errors.arrival_time.message}</p>
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
                        ? mode === "edit" ? "Updating..." : "Adding..."
                        : mode === "edit" ? "Update Schedule" : "Add Schedule"}
                </Button>
            </div>
        </form>
    );
}