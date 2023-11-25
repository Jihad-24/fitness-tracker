import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const ClassDetails = () => {
    const { id } = useParams();
    const [classData, setClassData] = useState(null);

    useEffect(() => {
        fetch('/class.json')
            .then(res => res.json())
            .then(data => {
                const foundTrainer = data.find(trainer => trainer._id == id);
                setClassData(foundTrainer);
            })
    }, [id])
    return (
        <div className="my-16">
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
                    <button className="btn btn-sm btn-accent">Available Time Slot: {classData?.slot}</button>
                    <p className="md:w-96"><span className="font-bold">Description: </span>{classData?.description}</p>
                    <Link to={'/trainer'}>
                        <button className="btn btn-primary">Join Now</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;