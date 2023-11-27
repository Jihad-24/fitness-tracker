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
import ManageMember from "../Pages/Dashboard/ManageMember/ManageMember";
import GiveAdvice from "../Pages/Dashboard/ManageMember/GiveAdvice";
import AddNewForum from "../Pages/Dashboard/AddNewForum/AddNewForum";
import AddNewClass from "../Pages/Dashboard/AddNewClass/AddNewClass";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import TrainerHome from "../Pages/Dashboard/TrainerHome/TrainerHome";
import ActivityLog from "../Pages/Dashboard/ActivityLog/ActivityLog";
import UpdateProfile from "../Pages/UserProfile/UpdateProfile";
import RecommendedClass from "../Pages/Dashboard/RecommendedClass/RecommendedClass";



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
                path:'trainerbooked/:id',
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
           
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // normal users route
            {
                path:'userHome',
                element:<UserHome></UserHome>,
            },
            {
                path:'activityLog',
                element:<ActivityLog></ActivityLog>,
            },
            {
                path:'userProfile',
                element:<UserProfile></UserProfile>,
            },
            {
                path:'userProfile/:id',
                element:<UpdateProfile></UpdateProfile>,
            },
            {
                path:'recommended',
                element:<RecommendedClass></RecommendedClass>,
            },
        
            // trainer user route
            {
                path:'trainerHome',
                element:<TrainerHome></TrainerHome>,
            },
            {
                path:'manageSlots',
                element:<ManageSlots></ManageSlots>,
            },
            {
                path:'manageMember',
                element:<ManageMember></ManageMember>,
            },
            {
                path:'manageMember/:id',
                element:<GiveAdvice></GiveAdvice>,
            },
            {
                path:'addNewForum',
                element:<AddNewForum></AddNewForum>,
            },
            {
                path:'addNewClass',
                element:<AddNewClass></AddNewClass>,
            },

            // admin routes
            {
                path:'adminHome',
                element:<Subscribers></Subscribers>,
            },
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