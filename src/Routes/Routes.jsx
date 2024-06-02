import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";

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
      ]
    },
  ]);