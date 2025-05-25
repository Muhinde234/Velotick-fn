import car from "../../assets/car.png";
import Input from "../ui/input";
import Container from "../ui/container";
import Button from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/api_hooks/useAuth";
import { useForm } from "react-hook-form";
import SEO from "../ui/seo";
import { useUser } from "../../context/userContext";

const LoginPage = () => {
  const { mutate, isPending } = useLogin();
  const { login } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        const { user, token } = response;
        login(user, token); // Call the login function from context
        
        // Redirect based on role
        switch(user.roles[0]) {
          case 'admin':
            navigate("/dashboard/home");
            break;
          case 'manager':
            navigate("/dashboard/schedules");
            break;
          case 'client':
            navigate("/dashboard/booking");
            break;
          default:
            navigate("/dashboard");
        }
      },
      onError: (error) => {
        // Handle API errors
        const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
        setError("server", {
          type: "manual",
          message: errorMessage,
        });
      },
    });
  };

  return (
    <Container className="h-screen flex flex-col justify-center items-center mt-12">
      <SEO title="Login page" description="Login page" content="Login page" />
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
          <h2 className="text-2xl font-extrabold">User Login</h2>
          <p className="text-neutral-90">Fill in your details to login</p>
        </div>
        <div className="border-t border-gray-200 my-4"></div>

        {errors.server && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {errors.server.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <Link
              to="/forgot-password"
              className="hover:underline text-blue-600"
            >
              Forgot password?
            </Link>
            <span>
              Need an account?{" "}
              <Link to="/register" className="underline text-blue-600">
                Register
              </Link>
            </span>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="w-full bg-[#2356CF] text-white p-2 rounded-lg mt-2 hover:bg-[#1a4bb5] transition-colors cursor-pointer"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;