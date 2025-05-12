import { useState } from "react";
import car from "../../assets/car.png";
import Input from "../ui/input";
import Container from "../ui/container";
import Select from "../ui/select";
import Button from "../ui/button";
import { Link } from "react-router";
import { registerSchema } from "../../utils/formSchemas";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(form);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      console.log("Validation errors:", errors);
      return;
    }

    console.log("Registration data is valid:", result.data);
  };

  const countries = ["Rwanda", "Kenya", "Uganda", "Tanzania", "Burundi"];

  return (
    <Container className="h-screen flex flex-col justify-center items-center mt-12">
      <div className="min-w-[540px] border border-gray-300 rounded-lg p-6">
        <div className="flex justify-center items-center gap-[16px]">
          <img className="w-[48px] h-[48px]" src={car} alt="logo" />
          <Link to="/LandingPage">
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <Input
                label="First name"
                id="firstname"
                placeholder="e.g dosta"
                value={form.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Last name"
                id="lastname"
                placeholder="e.g Muhinde"
                value={form.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="igirimpuhwedosta@gmail"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Phone number"
            id="phone"
            placeholder="+250791154300"
            value={form.phone}
            onChange={handleChange}
          />

          <Select
            label="country of origin"
            id="country"
            options={countries}
            value={form.country}
            onChange={handleChange}
          />

          <Input
            label="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />

          <Input
            label="Confirm password"
            id="confirmPassword"
            type="password"
            placeholder="Re-enter the password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <div className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/LoginPage"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Login
            </Link>
          </div>
          <div className="text-center">
            <Button
              type="submit"
              className="border border-[#2356CF] p-2  text-[#2356CF] rounded-lg mt-2"
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
