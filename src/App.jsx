import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
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
import {UserProvider, useUser} from "./context/userContext";
import Bus from "./pages/dashboard/bus";
import Users from "./pages/dashboard/users";
import About from "./pages/about";
import Route from "./pages/route";
import Terms from "./pages/terms";
import Conditions from "./pages/conditions";
import Unauthorized from "./pages/unauthorized";
import ScheduleDetails from "./pages/schedule_details.jsx";
import MyTickets from "./pages/my_tickets.jsx";


const ProtectedRoute = ({children, allowedRoles = []}) => {
    const {user, token, isLoading} = useUser();


    if (isLoading) {
        return <div>Loading...</div>;
    }


    if (!token) {
        return <Navigate to="/login" replace/>;
    }


    if (allowedRoles.length > 0 && !user.roles.some(role => allowedRoles.includes(role))) {
        return <Navigate to="/unauthorized" replace/>;
    }


    return children;
};


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Guestlayout/>,
            errorElement: <NotFound/>,
            children: [
                {path: "", element: <Home/>},
                {path: "about", element: <About/>},
                {path: "route", element: <Route/>},
                {path: "terms", element: <Terms/>},
                {
                    path: "schedule/:id",
                    element: <ScheduleDetails />
                },
                {path: "my-tickets", element: <MyTickets />}

            ],
        },
        {path: "conditions", element: <Conditions/>},
        {path: "unauthorized", element: <Unauthorized/>},
        {path: "login", element: <LoginPage/>},
        {path: "register", element: <RegisterPage/>},
        {
            path: "dashboard",
            element: (
                <ProtectedRoute allowedRoles={['admin', 'manager']}>
                    <Dashboardlayout/>
                </ProtectedRoute>
            ),
            children: [
                {
                    path: "",
                    element: <Dashboard/>,
                },
                {
                    path: "bookings",
                    element: (
                        <ProtectedRoute allowedRoles={['admin', 'manager']}>
                            <Bookings/>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "schedules",
                    element: (
                        <ProtectedRoute allowedRoles={['admin', 'manager']}>
                            <Scheduledashboard/>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "buses",
                    element: (
                        <ProtectedRoute allowedRoles={['admin', 'manager']}>
                            <Bus/>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "routes",
                    element: (
                        <ProtectedRoute allowedRoles={['admin', 'manager']}>
                            <Routes/>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "users",
                    element: (
                        <ProtectedRoute allowedRoles={['admin']}>
                            <Users/>
                        </ProtectedRoute>
                    ),
                },
            ],
        },
    ]);

    return (
        <UserProvider>
            <RouterProvider router={router}/>
        </UserProvider>
    );
}

export default App;
