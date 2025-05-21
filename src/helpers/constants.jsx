import {
  BusFront,
  ChartLine,
  Clock,
  HelpCircle,
  House,
  LogOut,
  Settings,
  Ticket,
  Users,
} from "lucide-react";

export const links = [
  { path: "/", label: "Home" },
  // { path: "/schedule", label: "Schedules" },
  { path: "/about", label: "About Us" },
  { path: "/route", label: "Routes" },
  { path: "/terms", label: "Terms & Conditions" },
];

export const navItems = [
  { path: "/dashboard/home", icon: House, label: "Dashboard" },
  { path: "/dashboard/booking", icon: Ticket, label: "Booking" },
  { path: "/dashboard/schedules", icon: Clock, label: "Schedule" },
  { path: "/dashboard/buses", icon: BusFront, label: "Bus Management" },
  { path: "/dashboard/routes", icon: BusFront, label: "Route Management" },
  { path: "/dashboard/users", icon: Users, label: "User Management" },
  { path: "/dashboard/report", icon: ChartLine, label: "Report" },
];

export const bottomNavItems = [
  { path: "/settings", icon: Settings, label: "Settings" },
  { path: "/support", icon: HelpCircle, label: "Help & Support" },
  { path: "/logout", icon: LogOut, label: "Logout" },
];
