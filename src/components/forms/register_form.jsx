import Input from "../ui/input.jsx";
import Button from "../ui/button.jsx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {useRegister} from "../../hooks/api_hooks/useAuth.js";

export default function RegisterForm() {
    const { mutate: registerUser, isPending: isRegistering } = useRegister();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_confirmation: "",
            phone_number: "",
            nationality: "",
        },
    });


    const password = watch("password");

    const onSubmit = (data) => {
        if (data.password !== data.password_confirmation) {
            toast.error("Passwords do not match");
            return;
        }

        const formData = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            phone_number: data.phone_number,
            nationality: data.nationality,
        };

        registerUser(formData, {
            onSuccess: (response) => {
                toast.success("Successfully registered user");
                reset();
            },
            onError: (err) => {
                toast.error(`An error occurred: ${err.message}`);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input
                        type="text"
                        {...register("firstname", { required: "First name is required" })}
                        placeholder="First name"
                    />
                    {errors.firstname && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input
                        type="text"
                        {...register("lastname", { required: "Last name is required" })}
                        placeholder="Last name"
                    />
                    {errors.lastname && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                        },
                    })}
                    placeholder="Email address"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <Input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be at least 8 characters" },
                            pattern: {
                                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/,
                                message: "Password must include uppercase, lowercase, number, and special character",
                            },
                        })}
                        placeholder="Password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <Input
                        type="password"
                        {...register("password_confirmation", {
                            required: "Password confirmation is required",
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                        placeholder="Confirm password"
                    />
                    {errors.password_confirmation && (
                        <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input
                    type="tel"
                    {...register("phone_number", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^\+?\d{10,15}$/,
                            message: "Invalid phone number",
                        },
                    })}
                    placeholder="Phone number"
                />
                {errors.phone_number && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                <Input
                    type="text"
                    {...register("nationality", { required: "Nationality is required" })}
                    placeholder="Nationality"
                />
                {errors.nationality && (
                    <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>
                )}
            </div>

            <div className="flex justify-end space-x-4 pt-4">
                <Button
                    type="submit"
                    disabled={isSubmitting || isRegistering}
                    className="bg-primary-100 py-2 px-4 rounded-md text-white hover:bg-primary-200"
                >
                    {isSubmitting || isRegistering ? "Registering..." : "Register"}
                </Button>
            </div>
        </form>
    );
}