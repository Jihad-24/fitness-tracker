import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";


const TrainerDetails = () => {
    const { id } = useParams();
    const [trainerData, setTrainerData] = useState(null);
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axiosPublic.get('/teacher')
            .then(res => {
                const data = res.data;
                const foundTrainer = data.find(trainer => trainer._id == id);
                setTrainerData(foundTrainer);
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error.message);
            })

    }, [id, axiosPublic])



    return (
        <div>
            <Helmet>
                <title>TrainerDetails || Fitness Tracker</title>
            </Helmet>
            {!isLoading &&
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={trainerData?.profileImage} alt="Shoes" className=" h-[200px]" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{trainerData?.trainerName}</h2>
                        <p className="font-semibold">Field: {trainerData?.gymClass}</p>
                        <p className="font-medium">Exprience: {trainerData?.yearsOfExperience} Years</p>
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
                        <h3><span className="font-bold">Trainer Available on: </span>{trainerData?.availableTimeSlot}</h3>
                        <Link to={'/trainerbooked'}>
                            <button className="btn btn-sm btn-accent">Available Time Slot: {trainerData?.slot}</button>
                        </Link>
                        <p className="md:w-96"><span className="font-bold">Description: </span>{trainerData?.description}</p>

                    </div>
                    <div className="text-center mb-16 ">
                        <h1 className="font-bold text-3xl pb-4">Want Be a Trainer</h1>
                        <Link to={'/becomeTrainer'}>
                            <button className="btn btn-success">Become a Trainer</button>
                        </Link>
                    </div>
                </div>}
            {isLoading &&
                <div className="flex justify-center items-center ">
                    <div className="flex flex-col gap-4 w-52">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>}
        </div>
    );
};

export default TrainerDetails;