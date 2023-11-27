import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Favourite from "../Pages/Favourite/Favourite";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/Phone/Phone";

const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element: <Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch('/Phones.json')
            },
            {
                path:"/favourite",
                element:<Favourite></Favourite>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/phones/:id",
                element:<Phone></Phone>,
                loader:()=>fetch("/Phones.json")
            }
        ]
    }
])


export default myCreateRoute;