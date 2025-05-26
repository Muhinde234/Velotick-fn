import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";
import Guestlayout from "./layouts/Guestlayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/home";
import LoginPage from "./components/forms/login";
import RegisterPage from "./components/forms/register";
import Dashboardlayout from "./layouts/dashboardlayout";
import Bookings from "./pages/dashboard/booking";
import Scheduledashboard from "./pages/dashboard/schedule";
import Routes from "./pages/dashboard/routes";
import Dashboard from "./pages/dashboard/dashboard";
import ChangePassword from "./components/forms/changepassword";
import { UserProvider } from "./context/userContext";
import Bus from "./pages/dashboard/bus";
import Users from "./pages/dashboard/users";
import Report from "./pages/dashboard/report";
import About from "./pages/about";
import Route from "./pages/route";
import Terms from "./pages/terms";
import Conditions from "./pages/conditions";
import Unauthorized from "./pages/unauthorized";
import { useUser } from "./context/userContext";

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, token, isLoading } = useUser(); 

 
  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner
  }


  if (!token) {
    return <Navigate to="/login" replace />;
  }


  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

const createDashboardRoutes = (role) => {
  const baseRoutes = [
    {
      path: "booking",
      element: <Bookings />,
    },
    {
      path: "schedules",
      element: <Scheduledashboard />,
    },
    {
      path: "home",
      element: <Dashboard />,
    }
  ];

  if (role === 'admin') {
    return [
      ...baseRoutes,
      {
        path: "routes",
        element: <Routes />,
      },
      {
        path: "buses",
        element: <Bus />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "report",
        element: <Report />,
      }
    ];
  }

  if (role === 'manager') {
    return [
      ...baseRoutes,
      {
        path: "routes",
        element: <Routes />,
      },
      {
        path: "report",
        element: <Report />,
      }
    ];
  }

  return baseRoutes;
};

// Main App Component
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Guestlayout />,
      errorElement: <NotFound />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "route", element: <Route /> },
        { path: "terms", element: <Terms /> },
     
      ],
    },
       { path: "conditions", element: <Conditions /> },
        { path: "unauthorized", element: <Unauthorized /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <Dashboardlayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute allowedRoles={['admin', 'manager', 'user']}>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        ...createDashboardRoutes('admin'), 
      ],
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
