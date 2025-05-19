import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import car from "../../assets/car.png";
import Input from "../ui/input";
import Container from "../ui/container";
import Select from "../ui/select";
import Button from "../ui/button";
import { useRegister } from "../../hooks/api_hooks/useAuth";







//API 
const RegisterPage = () => {
  const {mutate} = useRegister()
  const countries = ["Rwanda", "Kenya", "Uganda", "Tanzania", "Burundi"];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  

  const onSubmit = (data) => {
    mutate(data)
   
  };



  return (
    <Container className="h-screen flex flex-col justify-center items-center mt-12">
      <div className="min-w-[540px] border border-gray-300 rounded-lg p-6">
        <div className="flex justify-center items-center gap-[16px]">
          <img className="w-[48px] h-[48px]" src={car} alt="logo" />
          <Link to="/">
            <h1 className="w-[144px] h-12 text-[2rem] font-extrabold">
              VeloTick
            </h1>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-[6px] mt-6">
          <h2 className="text-2xl font-extrabold">User Registration</h2>
          <p className="text-neutral-90">Fill in your details to register</p>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <Input
                label="First name"
                id="firstname"
                placeholder="e.g John"
                required
                {...register("firstname", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
              />
              {errors.firstname && (
                <p className="text-sm text-red-500">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <Input
                label="Last name"
                id="lastname"
                placeholder="e.g Doe"
                required
                {...register("lastname", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
              />
              {errors.lastname && (
                <p className="text-sm text-red-500">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="example@email.com"
            required
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <Input
            label="Phone number"
            id="phone"
            placeholder="+250791154300"
            required
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?[0-9]{9,15}$/,
                message: "Enter a valid phone number (e.g., +250791154300)",
              },
            })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}

          <Select
            label="Country of origin"
            id="country"
            options={countries}
            required
            {...register("country", {
              required: "Country is required",
            })}
          />
          {errors.country && (
            <p className="text-sm text-red-500">{errors.country.message}</p>
          )}

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}

          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

          <div className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Login
            </Link>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="w-full bg-[#2356CF] text-white p-2 rounded-lg mt-2 hover:bg-[#1a4bb5] transition-colors cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
