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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import TrainerRoute from "./TrainerRoute";
import AdminTrainerRoute from "./AdminTrainerRoute";



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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
                element:<TrainerRoute><TrainerHome></TrainerHome></TrainerRoute>,
            },
            {
                path:'manageSlots',
                element:<TrainerRoute><ManageSlots></ManageSlots></TrainerRoute>,
            },
            {
                path:'manageMember',
                element:<TrainerRoute><ManageMember></ManageMember></TrainerRoute>,
            },
            {
                path:'manageMember/:id',
                element:<TrainerRoute><GiveAdvice></GiveAdvice></TrainerRoute>,
            },
            {
                path:'addNewForum',
                element:<AdminTrainerRoute><AddNewForum></AddNewForum></AdminTrainerRoute>,
            },
            {
                path:'addNewClass',
                element:<TrainerRoute><AddNewClass></AddNewClass></TrainerRoute>,
            },

            // admin routes
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>,
            },
            {
                path:'allSubscribers',
                element:<AdminRoute><Subscribers></Subscribers></AdminRoute>,
            },
            {
                path:'allTrainers',
                element:<AdminRoute><AllTrainers></AllTrainers></AdminRoute>,
            },
            {
                path:'appliedTrainer',
                element:<AdminRoute><AppliedTrainer></AppliedTrainer></AdminRoute>,
            },
            {
                path:'balance',
                element:<AdminRoute><Balance></Balance></AdminRoute>,
            },
            {
                path:'payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
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
    {
        path:'*',
        element:<ErrorPage></ErrorPage>,
    },
]);

export default router;