import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mb-12">
            <Helmet>
                <title>ErrorPage || Fitness Tracker</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center">
                <img className="w-300px h-150px md:w-[500px] md:h-[300px]" src="https://i.ibb.co/1vjxQW2/3613901.png"  />
            <h1 className="md:text-4xl text-2xl text-center">Not Found</h1>
            </div>
                <p className="md:text-2xl text-xl py-4 text-center">The Page You Are Looking For Is Not Avaliable</p>
            <div className="flex text-center  justify-center">
                <Link to={'/'}>
                <button className="btn btn-accent">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;