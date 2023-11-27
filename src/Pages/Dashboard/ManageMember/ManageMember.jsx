import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageMember = () => {
    const axiosSecure = useAxiosSecure();
    const [member, setMember] = useState([]);

    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                const data= res.data;
                // console.log(data);
                const members = data?.filter(item=> item.role === 'member');
                setMember(members);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axiosSecure])
// console.log(member);
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>instructions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        member?.map((plan, index) => <tr key={plan._id}>
                            <th>{index + 1}</th>
                            <td>{plan.name}</td>
                            <td>{plan.email}</td>
                            <td>{plan.role}</td>
                            <td>
                              <Link to={`/dashboard/manageMember/${plan._id}`}>
                              <button className="btn btn-sm btn-success">Give</button></Link>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageMember;