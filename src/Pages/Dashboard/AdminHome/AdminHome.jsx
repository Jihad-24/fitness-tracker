import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user}=useAuth();
    
    return (
        <div>
            <Helmet>
                <title>AdminHome || Fitness Tracker</title>
            </Helmet>
              <h1 className="md:text-3xl text-center text-xl">
                <span className='text-blue-900'>Hi, Welcome {user?.displayName ? user.displayName : 'Back'}!</span>
            </h1>
        </div>
    );
};

export default AdminHome;