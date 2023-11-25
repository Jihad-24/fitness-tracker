import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Gallery from "../Pages/Gallery/Gallery";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Trainer from "../Pages/Trainer/Trainer";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Forums from "../Pages/Forums/Forums";
import Classes from "../Pages/Classes/Classes";
import HomePage from "../Pages/HomePage/HomePage";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import BecomeTrainer from "../Pages/Trainer/BecomeTrainer";
import TrainerBook from "../Pages/Trainer/TrainerBook";
import ClassDetails from "../Pages/Classes/ClassDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>,
            },
            {
                path:'gallery',
                element:<Gallery></Gallery>,
            },
            {
                path:'trainer',
                element:<Trainer></Trainer>,
            },
            {
                path:'trainerbooked',
                element:<TrainerBook></TrainerBook>,
            },
            {
                path:'trainer/:id',
                element:<TrainerDetails></TrainerDetails>,
            },
            {
                path:'becomeTrainer',
                element:<BecomeTrainer></BecomeTrainer>,
            },
            {
                path:'classes',
                element:<Classes></Classes>,
            },
            {
                path:'classes/:id',
                element:<ClassDetails></ClassDetails>,
            },
            {
                path:'forums',
                element:<Forums></Forums>,
            },
            {
                path:'userProfile',
                element:<UserProfile></UserProfile>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // normal users route
        
            // trainer user route

            // admin routes
            
        ]
    },
    {
        path:'/login',
        element:<Login></Login>,
    },
    {
        path:'/register',
        element:<Register></Register>,
    },
]);

export default router;