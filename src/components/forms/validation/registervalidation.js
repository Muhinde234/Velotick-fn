import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = z.object({
  firstname: z.string()
    .min(1, { message: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters" }),
  lastname: z.string()
    .min(1, { message: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string()
    .min(1, { message: "Phone number is required" })
    .min(10, { message: "Phone number must be at least 10 digits" }),
  country: z.string()
    .min(1, { message: "Country is required" }),
  password: z.string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(passwordRegex, { 
      message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character" 
    }),
  confirmPassword: z.string()
    .min(1, { message: "Please confirm your password" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export const validateRegisterForm = (formData) => {
  return registerSchema.safeParse(formData);
};