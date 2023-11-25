import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const TrainerDetails = () => {
    const { id } = useParams();
    const [trainerData, setTrainerData] = useState(null);

    useEffect(() => {
        fetch('/trainer.json')
            .then(res => res.json())
            .then(data => {
                const foundTrainer = data.find(trainer => trainer._id == id);
                setTrainerData(foundTrainer);
            })
    }, [id])



    return (
        <div>
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
                    <button className="btn btn-sm btn-accent">Available Time Slot: {trainerData?.slot}</button>
                    <p className="md:w-96"><span className="font-bold">Description: </span>{trainerData?.description}</p>
                    <Link to={'/becomeTrainer'}>                    <button className="btn btn-success">Become a Trainer</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;