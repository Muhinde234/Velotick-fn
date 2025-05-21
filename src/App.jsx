import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Guestlayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "route",
          element: <Route />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "conditions",
      element: <Conditions />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "changepassword",
      element: <ChangePassword />,
    },

    {
      path: "dashboard",
      element: <Dashboardlayout />,
      children: [
        {
          path: "booking",
          element: <Bookings />,
        },
        {
          path: "schedules",
          element: <Scheduledashboard />,
        },
        {
          path: "routes",
          element: <Routes />,
        },
        {
          path: "home",
          element: <Dashboard />,
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
        },
      ],
    },
  ]);

  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
