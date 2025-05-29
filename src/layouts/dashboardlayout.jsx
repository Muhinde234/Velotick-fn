import { Outlet } from "react-router-dom";
import Sidebar from "../components/features/sidebar";
import GlobalLoader from "../components/ui/global_loader.jsx";

const Dashboardlayout = () => {
  return (
    <div>
      <Sidebar />
      <main className="p-6 bg-white ml-0 md:ml-64 max-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboardlayout;
