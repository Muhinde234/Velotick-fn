import { useState } from "react";
import car from "../../assets/car.png";
import Input from "../ui/input";
import Container from "../ui/container";
import Button from "../ui/button";
import { Link } from "react-router-dom";
import { loginSchema } from "./validation/loginvalidation";


const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
   
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(form);
    
    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: formattedErrors.email?.[0] || "",
        password: formattedErrors.password?.[0] || ""
      });
      return;
    }

    setErrors({});
    console.log("Login data is valid:", result.data);
    // Proceed with login API call
  };

  return (
    <Container className="h-screen flex flex-col justify-center items-center mt-12">
      <div className="min-w-[540px] border border-gray-300 rounded-lg p-6">
        <div className="flex justify-center items-center gap-[16px]">
          <img className="w-[48px] h-[48px]" src={car} alt="logo" />
          <Link to="/">
            <h1 className="w-[144px] h-12 text-[2rem] font-extrabold">VeloTick</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-[6px] mt-6">
          <h2 className="text-2xl font-extrabold">User Login</h2>
          <p className="text-neutral-90">Fill in your details to login</p>
        </div>
        <div className="border-t border-gray-200 my-4"></div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <Link to="/" className="hover:underline text-blue-600">
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
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;