import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";


const Trainer = () => {
    const [trainerData, setTrainerData] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axiosPublic.get('/teacher')
            .then(res => {
                setTrainerData(res.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axiosPublic])

    return (
        <div className="my-20 ">
            <Helmet>
                <title>Trainer || Fitness Tracker</title>
            </Helmet>
            {!isLoading &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        trainerData?.map(trainer =>
                            <div key={trainer._id} className="card  bg-base-100 shadow-xl">
                                <figure><img src={trainer.profileImage} alt="Shoes" className=" h-[200px]" /></figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{trainer.trainerName}</h2>
                                    <p className="font-semibold">Field: {trainer.gymClass}</p>
                                    <p className="font-medium">Exprience: {trainer.yearsOfExperience} Years</p>
                                    <div className="flex gap-4">
                                        <a
                                            href="#facebook"
                                            className="block text-xl text-blue-800"
                                        >
                                            <FaFacebook></FaFacebook>
                                        </a>
                                        <a
                                            href="#twitter"
                                            className="block text-xl text-blue-900"
                                        >
                                            <FaTwitter></FaTwitter>
                                        </a>
                                        <a
                                            href="#instagram"
                                            className="block text-xl text-red-800"
                                        >
                                            <FaInstagram></FaInstagram>
                                        </a>
                                        <a
                                            href="#instagram"
                                            className="block text-xl text-blue-950"
                                        >
                                            <FaLinkedin></FaLinkedin>
                                        </a>
                                    </div>
                                    <Link to={`/trainerbooked/${trainer._id}`}>
                                        <button className="btn btn-sm btn-accent">Available Time Slot: {trainer.slot}</button>
                                    </Link>
                                    <div className="card-actions justify-end">
                                        <Link to={`/trainer/${trainer._id}`}>
                                            <button className="btn btn-primary">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>}
            {isLoading &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className="flex flex-col gap-4 w-52">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-52">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Trainer;