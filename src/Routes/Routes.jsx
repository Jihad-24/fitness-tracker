import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Gallery from "../Pages/Gallery/Gallery";
import Dashboard from "../Layout/Dashboard";
import Trainer from "../Pages/Trainer/Trainer";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Forums from "../Pages/Forums/Forums";
import Classes from "../Pages/Classes/Classes";
import HomePage from "../Pages/HomePage/HomePage";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import BecomeTrainer from "../Pages/Trainer/BecomeTrainer";
import TrainerBook from "../Pages/Trainer/TrainerBook";
import ClassDetails from "../Pages/Classes/ClassDetails";
import Subscribers from "../Pages/Dashboard/Subscribers/Subscribers";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import AppliedTrainer from "../Pages/Dashboard/AppliedTrainer/AppliedTrainer";
import Balance from "../Pages/Dashboard/Balance/Balance";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import ManageSlots from "../Pages/Dashboard/ManageSlots/ManageSlots";



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
                element:<PrivateRoute><TrainerBook></TrainerBook></PrivateRoute>,
            },
            {
                path:'trainer/:id',
                element:<PrivateRoute><TrainerDetails></TrainerDetails></PrivateRoute>,
            },
            {
                path:'becomeTrainer',
                element:<PrivateRoute><BecomeTrainer></BecomeTrainer></PrivateRoute>,
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
            {
                path:'manageSlots',
                element:<ManageSlots></ManageSlots>
            },

            // admin routes
            {
                path:'allSubscribers',
                element:<Subscribers></Subscribers>,
            },
            {
                path:'allTrainers',
                element:<AllTrainers></AllTrainers>,
            },
            {
                path:'appliedTrainer',
                element:<AppliedTrainer></AppliedTrainer>,
            },
            {
                path:'balance',
                element:<Balance></Balance>,
            },
            {
                path:'payment',
                element:<Payment></Payment>,
            },
            
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