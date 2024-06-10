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
import Profile from "../Pages/Dashboard/Public/Profile";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import PrivateRoute from "./PrivateRoute";

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
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        // common
        {
          index:true,
          element:<Statistics></Statistics>
        },
        {
          path:'profile',
          element:<Profile></Profile>
        },
        // teacher 
        {
          path:'add-class',
          element:<PrivateRoute><AddClass></AddClass></PrivateRoute>
        },
        {
          path:'my-classes',
          element:<PrivateRoute><MyClass></MyClass></PrivateRoute>
        },
        {
          path:'update/:id',
          element:<PrivateRoute><UpdateClass></UpdateClass></PrivateRoute>
        },
       
        // admin
        {
          path:'all-users',
          element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        }

      ]
    }
  ]);