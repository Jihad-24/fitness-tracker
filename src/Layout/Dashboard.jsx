import { FaBook, FaCalendar, FaCommentAlt, FaEnvelope, FaHome, FaList, FaShoppingBasket, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTrainer from "../hooks/useTrainer";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainer();
    return (
        <div className="flex max-w-screen-xl mx-auto">
            {/* dashboard side bar */}
            <div className="w-40 md:w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    {
                        isAdmin ? (<>
                            {/* Admin Routes */}
                            <li>
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/allSubscribers"}>
                                    <FaUtensils></FaUtensils>
                                    All Subscribers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/allTrainers"}>
                                    <FaList></FaList>
                                    All Trainers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/appliedTrainer"}>
                                    <FaBook></FaBook>
                                    Applied Trainer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/balance"}>
                                    <FaUsers />
                                    Balance
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/addNewForum"}>
                                    <FaBook></FaBook>
                                    Add new Forum
                                </NavLink>
                            </li>

                        </>) : isTrainer ? (
                            <>
                                {/* Trainer routes */}
                                <li>
                                    <NavLink to={"/dashboard/trainerHome"}>
                                        <FaHome></FaHome>
                                        Trainer Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageSlots"}>
                                        <FaBook></FaBook>
                                        Manage Slots
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageMember"}>
                                        <FaBook></FaBook>
                                        Manage member
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/addNewForum"}>
                                        <FaBook></FaBook>
                                        Add New Forum
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/addNewClass"}>
                                        <FaBook></FaBook>
                                        Add New Class
                                    </NavLink>
                                </li>
                            </>
                        )
                            :
                            (<>
                                {/* User Routes */}
                                <li>
                                    <NavLink to={"/dashboard/userHome"}>
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/activityLog"}>
                                        <FaCalendar></FaCalendar>
                                        Activity Log
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/userProfile"}>
                                        <FaUser></FaUser>
                                        User Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/recommended"}>
                                        <FaUser></FaUser>
                                        Recommended Classes
                                    </NavLink>
                                </li>

                            </>)
                    }
                    {/* shared navlinks  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={"/"}>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/classes"}>
                            <FaList></FaList>
                            Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/trainer"}>
                            <FaShoppingBasket></FaShoppingBasket>
                            Trainer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/gallary"}>
                            <FaEnvelope></FaEnvelope>
                            Gallary
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/forums"}>
                            <FaCommentAlt></FaCommentAlt>
                            Forum
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/*dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;