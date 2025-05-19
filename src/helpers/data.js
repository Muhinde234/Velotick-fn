import {
  
  ShieldCheckIcon,
  TicketIcon 
} from "lucide-react";




const features = [
    {
      icon: TicketIcon,
      title: "Fast & Easy Booking",
      description: "Reserve your seat in seconds with our intuitive platform",
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Payments",
      description: "Pay with confidence using reliable and safe payment options",
    },
    {
      icon: TicketIcon,
      title: "Real-Time Availability",
      description: "Get instant updates on bus schedules and seat availability",
    },
  ];

  const bookings = [
  {
    passenger: "Muhinde Dosta",
    phone: "+250791154300",
    route: "Kigali to Kampala",
    date: "05 March 2025",
    time: "14:30",
    seats: "A1, B1",
  },
  {
    passenger: "Murenzi Frank",
    phone: "+250791154300",
    route: "Kigali to Nairobi",
    date: "18 June 2025",
    time: "09:15",
    seats: "B10",
  },
  {
    passenger: "Kayitsinga Hertillan",
    phone: "+250791154300",
    route: "Kigali to Bujumbura",
    date: "27 August 2025",
    time: "16:45",
    seats: "C1",
  },

];
const dashboardStats = [
  {
    title: "Total Earnings",
    value: "120,000 Rwf",
    change: null
  },
  {
    title: "Today's Bookings",
    value: "3,653",
    change: "5%"
  },
  {
    title: "Successful Departures",
    value: "140/220",
    change: "5%"
  }
];
  const status = [
    { title: "Total Earnings", value: "120,000 Rwf", percentage: "7%", trend: "up" },
    { title: "Today's Bookings", value: "3,653", percentage: "5%", trend: "up" },
    { title: "Successful Departures", value: "140/220", percentage: "5%", trend: "up" }
  ];


  export {features,bookings,dashboardStats,status }