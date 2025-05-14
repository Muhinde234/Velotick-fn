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
  { path: "/schedule", label: "Schedules" },
  { path: "/routes", label: "Routes" },
  { path: "/terms", label: "Terms & Conditions" }
];

export const navItems = [
  { path: "/dashboard", icon: House, label: "Dashboard" },
  { path: "/booking", icon: Ticket, label: "Booking" },
  { path: "/schedule", icon: Clock, label: "Schedule" },
  { path: "/bus-management", icon: BusFront, label: "Bus Management" },
  { path: "/route-management", icon: BusFront, label: "Route Management" },
  { path: "/user-management", icon: Users, label: "User Management" },
  { path: "/report", icon: ChartLine, label: "Report" }
];

export const bottomNavItems = [
  { path: "/settings", icon: Settings, label: "Settings" },
  { path: "/support", icon: HelpCircle, label: "Help & Support" },
  { path: "/logout", icon: LogOut, label: "Logout" }
 
];
