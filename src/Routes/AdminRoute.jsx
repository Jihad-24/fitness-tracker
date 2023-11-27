import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import PropTypes from "prop-types";
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/"}></Navigate>
};
AdminRoute.propTypes = {
    children: PropTypes.node,
}

export default AdminRoute;