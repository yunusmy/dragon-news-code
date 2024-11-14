import { createBrowserRouter, NavLink } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";


const router = createBrowserRouter([

    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                psth:"/",
                element:<NavLink to={"/category/01"}></NavLink>
            },

            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader:({params})=>
                fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],

    },
    {
        path:'/news',
        element:<h1>News Layout</h1>
    },
    {
        path:'auth',
        element:<h2>Login</h2>,
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }

])

export default router;