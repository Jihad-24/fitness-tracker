import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const ClassDetails = () => {
    const { id } = useParams();
    const [classData, setClassData] = useState(null);
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axiosPublic.get('/classes')
            .then(res => {
                const data = res.data;
                const foundTrainer = data?.find(trainer => trainer._id == id);
                setClassData(foundTrainer)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axiosPublic, id])

    return (
        <div className="my-16">
            {!isLoading &&
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={classData?.profileImage} alt="Shoes" className=" h-[200px]" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{classData?.trainerName}</h2>
                        <p className="font-semibold">Field: {classData?.gymClass}</p>
                        <p className="font-medium">Exprience: {classData?.yearsOfExperience} Years</p>
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
                        <h3><span className="font-bold">Trainer Available on: </span>{classData?.availableTimeSlot}</h3>
                        <p className="md:w-96"><span className="font-bold">Description: </span>{classData?.description}</p>
                        <Link to={'/trainer'}>
                            <button className="btn btn-primary">Join Now</button>
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

export default ClassDetails;