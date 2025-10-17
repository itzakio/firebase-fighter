import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/signin",
                element: <SignIn/>
            },
        ]
    }
])

export default router