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
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";

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
          element:<PrivateRoute><Statistics></Statistics></PrivateRoute>
        },
        {
          path:'profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        // teacher 
        {
          path:'add-class',
          element:<PrivateRoute>
            <TeacherRoute><AddClass></AddClass></TeacherRoute>
          </PrivateRoute>
        },
        {
          path:'my-classes',
          element:<PrivateRoute><TeacherRoute><MyClass></MyClass></TeacherRoute></PrivateRoute>
        },
        {
          path:'update/:id',
          element:<PrivateRoute><TeacherRoute><UpdateClass></UpdateClass></TeacherRoute></PrivateRoute>
        },
       
        // admin
        {
          path:'all-users',
          element:<PrivateRoute>
            <AdminRoute><AllUsers></AllUsers></AdminRoute>
          </PrivateRoute>
        }

      ]
    }
  ]);