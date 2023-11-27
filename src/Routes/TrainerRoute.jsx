import PropTypes from "prop-types";
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useTrainer from "../hooks/useTrainer";

const TrainerRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isTrainer, isTrainerLoading] = useTrainer();
    const location = useLocation();

    if (loading || isTrainerLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && isTrainer) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/"}></Navigate>
};
TrainerRoute.propTypes = {
    children: PropTypes.node,
}

export default TrainerRoute;