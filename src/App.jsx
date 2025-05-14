import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Guestlayout from './layouts/Guestlayout'
import NotFound from './pages/NotFound'
import Home from './pages/home'
import LoginPage from './components/forms/login'
import RegisterPage from './components/forms/register'
import Sidebar from './components/features/sidebar'
import Schedule from './pages/schedule'
import Dashboardlayout from './layouts/dashboardlayout'


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
        }
       
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
