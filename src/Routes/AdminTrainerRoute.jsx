import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useTrainer from "../hooks/useTrainer";
import PropTypes from "prop-types";


const AdminTrainerRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin();
    const [isTrainer,isTrainerLoading] = useTrainer();
    const location = useLocation();

    if (loading || isAdminLoading || isTrainerLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && isAdmin || isTrainer) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/"}></Navigate>
};
AdminTrainerRoute.propTypes = {
    children: PropTypes.node,
}

export default AdminTrainerRoute;