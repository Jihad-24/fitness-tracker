import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Subscribers = () => {
    const axiosPublic = useAxiosPublic();
    const [subscribers, setSubscribers] = useState();

    useEffect(() => {
        axiosPublic.get('/subscribes')
            .then(res => {
                setSubscribers(res.data)
            })
            .catch(error=>{
                console.log(error.message);
            })
    }, [axiosPublic])



    return (
        <div>
            <div className="overflow-x-auto w-3/4 mx-auto">
            <div className="divider"></div>
                <h1 className="text-center text-4xl font-bold my-2">All Subscribers</h1>
                <div className="divider"></div>
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
                        subscribers?.map((item,index)=> <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td className="text-green-600">Subscribed</td>
                        </tr>)
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscribers;