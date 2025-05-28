import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/features/footer";

const Guestlayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Guestlayout;
