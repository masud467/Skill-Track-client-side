import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddClass from "../Pages/Dashboard/Teacher/AddClass";
import MyClass from "../Pages/Dashboard/Teacher/MyClass";
import Statistics from "../Pages/Dashboard/Public/Statistics";
import UpdateClass from "../Pages/Dashboard/Teacher/UpdateClass";
import Teaching from "../Pages/Teaching/Teaching";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/all-classes',
            element:<AllClasses></AllClasses>
        },
        {
          path:'/instructor',
          element:<Teaching></Teaching>
        }
      ]
      
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    },
    // dashboard routes
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        // teacher 
        {
          index:true,
          element:<Statistics></Statistics>
        },
        {
          path:'add-class',
          element:<AddClass></AddClass>
        },
        {
          path:'my-classes',
          element:<MyClass></MyClass>
        },
        {
          path:'update/:id',
          element:<UpdateClass></UpdateClass>
        }

      ]
    }
  ]);