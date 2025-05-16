import { useState } from "react";
import car from "../../assets/car.png";
import Input from "../ui/input";
import Container from "../ui/container";
import Select from "../ui/select";
import Button from "../ui/button";
import { Link } from "react-router-dom";
import { registerSchema } from "./validation/registervalidation";

const RegisterPage = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const countries = ["Rwanda", "Kenya", "Uganda", "Tanzania", "Burundi"];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = registerSchema.safeParse(form);
    
    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;
      setErrors({
        firstname: formattedErrors.firstname?.[0] || "",
        lastname: formattedErrors.lastname?.[0] || "",
        email: formattedErrors.email?.[0] || "",
        phone: formattedErrors.phone?.[0] || "",
        country: formattedErrors.country?.[0] || "",
        password: formattedErrors.password?.[0] || "",
        confirmPassword: formattedErrors.confirmPassword?.[0] || "",
      });
      return;
    }

    setErrors({});
    console.log("Registration data is valid:", result.data);
    // Proceed with registration API call
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
          <h2 className="text-2xl font-extrabold">User Registration</h2>
          <p className="text-neutral-90">Fill in your details to register</p>
        </div>
        <div className="border-t border-gray-200 my-4"></div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <Input
                label="First name"
                id="firstname"
                placeholder="e.g John"
                value={form.firstname}
                onChange={handleChange}
                error={errors.firstname}
                required
              />
            </div>
            <div className="flex-1">
              <Input
                label="Last name"
                id="lastname"
                placeholder="e.g Doe"
                value={form.lastname}
                onChange={handleChange}
                error={errors.lastname}
                required
              />
            </div>
          </div>

          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <Input
            label="Phone number"
            id="phone"
            placeholder="+250791154300"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          <Select
            label="Country of origin"
            id="country"
            options={countries}
            value={form.country}
            onChange={handleChange}
            error={errors.country}
            required
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          <Input
            label="Confirm password"
            id="confirmPassword"
            type="password"
            placeholder="Re-enter the password"
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            required
          />

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
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;