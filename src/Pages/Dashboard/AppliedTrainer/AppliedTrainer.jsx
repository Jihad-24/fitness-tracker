/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import emailjs from '@emailjs/browser';

const AppliedTrainer = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth();
    const navigate =useNavigate();
    const [appliedTrainer, setAppliedTrainer] = useState(null)
    const form = useRef();

    const sendEmail = (item, e) => {
        e.preventDefault();

        emailjs.send(
            'service_5ouchdh',
            'template_85nth8e',
            {
                to_name: item.name,
                user_email: item.email,
            },
            'VzcyFsNAIJWzcwEmB'
        )
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        axiosSecure.get('/trainers')
            .then(res => {
                setAppliedTrainer(res.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axiosSecure])

    const { data: userRole = [], refetch } = useQuery({
        queryKey: ['users',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data;
        }
    });


    const handleMakeTrainer = user => {
        axiosSecure.patch(`/users/${user.email}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Trainer Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/dashboard/appliedTrainer')
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-3/4 mx-auto">
                <div className="divider"></div>
                <h1 className="text-center text-2xl md:text-4xl font-bold my-2">Applied Trainers</h1>
                <div className="divider"></div>
                <form ref={form}>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="uppercase font-bold bg-black text-white">
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appliedTrainer?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <label htmlFor={`my_modal_${index}`} className="btn"><FaEye /></label>
                                    <input type="checkbox" id={`my_modal_${index}`} className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box text-center">
                                            <div className="flex justify-center items-center">
                                                <img className="w-24 h-24" src={item.photo} alt="" />
                                            </div>
                                            <h3 className="text-lg font-bold">Name:   {item.name}</h3>
                                            <p className="py-4"><span className="font-bold">Email:</span> {item.email}</p>
                                            <p><span className="font-bold">Available:
                                            </span> {item.timeWeek}
                                            </p>
                                            <p><span className="font-bold">Skills:</span>  {Object.values(item.skills).map((skill, skillIndex) => (
                                                <span className="pr-2" key={skillIndex}>{skill},</span>
                                            ))}</p>
                                            <div className="flex gap-4 items-center justify-center py-3">
                                                <button onClick={()=>handleMakeTrainer(item)}
                                                className="btn btn-success btn-sm">Confirmation</button>
                                                 <button type="button" className="btn btn-sm btn-error" onClick={(e) => sendEmail(item, e)}>Reject</button>
                                            </div>
                                        </div>
                                        <label className="modal-backdrop" htmlFor={`my_modal_${index}`}>Close</label>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                </form>
            </div>
        </div>
    );
};

export default AppliedTrainer;