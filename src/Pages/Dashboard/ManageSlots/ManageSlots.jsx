import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ManageSlots = () => {
    const axiosPublic = useAxiosPublic();
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        axiosPublic.get('/plans')
            .then(res => {
                setPlans(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axiosPublic])

    return (
        <div>
            <div className="divider"></div>
            <h1 className="text-center text-2xl md:text-4xl font-bold my-2">Manage Slots</h1>
            <div className="divider"></div>
            <div className="overflow-x-auto w-full md:w-3/4 mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="uppercase font-bold bg-black text-white">
                            <th></th>
                            <th>Email</th>
                            <th>Plan</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            plans?.map((plan, index) => <tr key={plan._id}>
                                <th>{index + 1}</th>
                                <td>{plan.email}</td>
                                <td>{plan.pack}</td>
                                <td>${plan.price}</td>
                                <td>
                                    <button className="btn btn-sm btn-error">Reject</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSlots;