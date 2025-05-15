import { Outlet } from "react-router-dom"
import Sidebar from "../components/features/sidebar"


const Dashboardlayout = () => {
  return (
    <div>
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Dashboardlayout