import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Guestlayout from './layouts/Guestlayout'
import NotFound from './pages/NotFound'
import Home from './pages/home'
import LoginPage from './components/forms/login'
import RegisterPage from './components/forms/register'
import Schedule from './pages/schedules'
import Dashboardlayout from './layouts/dashboardlayout'
import Bookings from './pages/dashboard/booking'
import Scheduledashboard from './pages/dashboard/schedule'
import Routes from './pages/dashboard/routes'
import Dashboard from './pages/dashboard/dashboard'


function App() {
  
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Guestlayout/>,
      errorElement:<NotFound/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:'schedule',
          element:<Schedule/>
        },
       
      ]
  
    },
    {
      path:"login",
      element:<LoginPage/>
    },
    {
      path:"register",
      element:<RegisterPage/>
    },

    {
      path:"dashboard",
      element:<Dashboardlayout/>,
      children:[
        {
          path:"booking",
          element:<Bookings/>
        },
         {
          path:'schedules',
          element:<Scheduledashboard/>
        },
        {
          path:"routes",
          element:<Routes/>
        },
        {
          path:"dashboards",
          element:<Dashboard/>
        }
       
       
      ]
    }
    
    
  ])


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
