import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../ui/input";
import Button from "../ui/button";
import { z } from "zod";

const passwordSchema = z.object({
  password: z.string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string()
    .min(1, { message: "Please confirm your password" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const ChangePassword = () => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
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
    const result = passwordSchema.safeParse(form);
    
    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;
      setErrors({
        password: formattedErrors.password?.[0] || "",
        confirmPassword: formattedErrors.confirmPassword?.[0] || ""
      });
      return;
    }

    setErrors({});
    console.log("Password change data is valid:", result.data);
    // Proceed with password change API call
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      <div className="min-w-[540px] border border-gray-300 rounded-lg p-6">
        <h1 className="text-2xl text-center mb-8">Change Password</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              label="New Password"
              id="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={errors.password}
              required
            />
            <Input
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              error={errors.confirmPassword}
              required
            />
          </div>
          
          <div className="mt-8 text-center">
            <Button
              type="submit"
              className="w-full bg-[#2356CF] text-white p-2 rounded-lg hover:bg-[#1a4bb5] transition-colors"
            >
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;