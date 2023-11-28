import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";


const Subscribers = () => {
    const axiosSecure = useAxiosSecure();
    const [subscribers, setSubscribers] = useState();

    useEffect(() => {
        axiosSecure.get('/subscribes')
            .then(res => {
                setSubscribers(res.data)
            })
            .catch(error=>{
                console.log(error.message);
            })
    }, [axiosSecure])



    return (
        <div>
            <Helmet>
                <title>Subscribers || Fitness Tracker</title>
            </Helmet>
            <div className="overflow-x-auto w-full md:w-3/4 mx-auto">
            <div className="divider"></div>
                <h1 className="text-center text-2xl md:text-4xl font-bold my-2">All Subscribers</h1>
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