import { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import emailjs from '@emailjs/browser';

const ManageSlots = () => {
    const axiosPublic = useAxiosPublic();
    const [plans, setPlans] = useState([]);
    const form = useRef();

    const sendEmail = (plan, e) => {
        e.preventDefault();

        emailjs.send(
            'service_5ouchdh',
            'template_85nth8e',
            {
                to_name: plan.name,
                user_email: plan.email,
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
        axiosPublic.get('/plans')
            .then(res => {
                setPlans(res.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [axiosPublic]);

    return (
        <div>
            <div className="divider"></div>
            <h1 className="text-center text-2xl md:text-4xl font-bold my-2">Manage Slots</h1>
            <div className="divider"></div>
            <div className="overflow-x-auto w-full mx-auto">
                <form ref={form}>
                    <table className="table table-zebra">
                        <thead>
                            <tr className="uppercase font-bold bg-black text-white">
                                <th>name</th>
                                <th>Email</th>
                                <th>Plan</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans?.map((plan) => (
                                <tr key={plan._id} className="text-left">
                                    <td> {plan.name} </td>
                                    <td>{plan.email} </td>
                                    <td>{plan.pack}</td>
                                    <td>${plan.price}</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-error" onClick={(e) => sendEmail(plan, e)}>Reject</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default ManageSlots;
