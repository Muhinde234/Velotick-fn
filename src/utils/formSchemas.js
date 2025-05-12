import { z } from "zod";

export const registerSchema = z
  .object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
    country: z.string().min(1, "Country is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
