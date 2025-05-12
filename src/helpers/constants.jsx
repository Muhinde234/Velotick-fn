
import {
  BusFront,
  ChartLine,
  Clock,
  HelpCircle,
  House,
  Settings,
  Ticket,
  Users,
} from "lucide-react";

export const links =[
    {
        path:"/",
        label:"Home"
    },
    {
        path:"/schedules",
        label:"Schedules"
    },
    {
        path:"/routes",
        label:"Routes"

    },
    {
        path:"/terms",
        label:"Terms & Conditions"

    }
];

 const navItems = [
    { path: "/dashboard", icon: House, label: "Dashboard" },
    { path: "/booking", icon: Ticket, label: "Booking" },
    { path: "/schedule", icon: Clock, label: "Schedule" },
    { path: "/bus-management", icon: BusFront, label: "Bus Management" },
    { path: "/route-management", icon: BusFront, label: "Route Management" },
    { path: "/user-management", icon: Users, label: "User Management" },
    { path: "/report", icon: ChartLine, label: "Report" },
  ];

  const bottomNavItems = [
    { path: "/settings", icon: Settings, label: "Settings" },
    { path: "/support", icon: HelpCircle, label: "Help & Support" },
  ];


 export default {links,navItems,bottomNavItems}