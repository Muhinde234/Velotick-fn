import Input from "../ui/input.jsx";
import Button from "../ui/button.jsx";
import {useForm} from "react-hook-form";
import {useAddRoute, useUpdateRoute} from "../../hooks/api_hooks/useRoutes.js";
import toast from "react-hot-toast";

export default function RouteForm({onClose, mode = "add", initialData = null}) {
    const {mutate: addRoute, isPending: isAdding} = useAddRoute();
    const {mutate: updateRoute, isPending: isUpdating} = useUpdateRoute();


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: {
            origin: initialData?.origin || "",
            destination: initialData?.destination || "",
            price: initialData?.price || "",
            distance_km: initialData?.distance_km || "",
            travel_time_hours: initialData?.travel_time
                ? parseInt(initialData.travel_time.split(":")[0])
                : "",
            travel_time_minutes: initialData?.travel_time
                ? parseInt(initialData.travel_time.split(":")[1])
                : "",
        },
    });

    const onSubmit = (data) => {
        const hours = String(data.travel_time_hours).padStart(2, "0");
        const minutes = String(data.travel_time_minutes).padStart(2, "0");
        const travel_time = `${hours}:${minutes}:00`;

        const formData = {
            origin: data.origin,
            destination: data.destination,
            price: data.price,
            distance_km: data.distance_km,
            travel_time,
        };

        const mutation = mode === "edit" ? updateRoute : addRoute;

        mutation(
            mode === "edit" ? {id: initialData.id, routeData: formData} : formData,
            {
                onSuccess: (response) => {
                    toast.success(`Successfully ${mode === "edit" ? "updated" : "added"} route ${response.route_code}`)
                    reset();
                    onClose();
                },
                onError: (err) => {
                    toast.error(`An error occurred: ${err}`);
                },
            }
        );

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <Input
                    type="text"
                    {...register("origin", {required: "Origin is required"})}
                    placeholder="Starting location"
                />
                {errors.origin && (
                    <p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <Input
                    type="text"
                    {...register("destination", {required: "Destination is required"})}
                    placeholder="Destination"
                />
                {errors.destination && (
                    <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (RWF)</label>
                    <Input
                        type="number"
                        {...register("price", {
                            required: "Price is required",
                            min: {value: 0, message: "Price must be positive"},
                            valueAsNumber: true,
                        })}
                        placeholder="0.00"
                        step="0.01"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Distance (km)</label>
                    <Input
                        type="number"
                        {...register("distance_km", {
                            required: "Distance is required",
                            min: {value: 0, message: "Distance must be positive"},
                            valueAsNumber: true,
                        })}
                        placeholder="Distance in km"
                        step="0.1"
                    />
                    {errors.distance_km && (
                        <p className="text-red-500 text-sm mt-1">{errors.distance_km.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travel Time</label>
                <div className="flex space-x-2">
                    <div>
                        <Input
                            type="number"
                            {...register("travel_time_hours", {
                                required: "Hours are required",
                                min: {value: 0, message: "Hours cannot be negative"},
                                max: {value: 23, message: "Hours cannot exceed 23"},
                                valueAsNumber: true,
                            })}
                            placeholder="Hours"
                            min="0"
                            max="23"
                            className="w-20"
                        />
                        {errors.travel_time_hours && (
                            <p className="text-red-500 text-sm mt-1">{errors.travel_time_hours.message}</p>
                        )}
                    </div>
                    <span className="self-center">:</span>
                    <div>
                        <Input
                            type="number"
                            {...register("travel_time_minutes", {
                                required: "Minutes are required",
                                min: {value: 0, message: "Minutes cannot be negative"},
                                max: {value: 59, message: "Minutes cannot exceed 59"},
                                valueAsNumber: true,
                            })}
                            placeholder="Minutes"
                            min="0"
                            max="59"
                            className="w-20"
                        />
                        {errors.travel_time_minutes && (
                            <p className="text-red-500 text-sm mt-1">{errors.travel_time_minutes.message}</p>
                        )}
                    </div>
                </div>
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
                        : mode === "edit" ? "Update Route" : "Add Route"}
                </Button>
            </div>
        </form>
    );
}