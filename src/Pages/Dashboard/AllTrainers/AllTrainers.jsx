import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const AllTrainers = () => {
    const [cart] = useCart();


    return (
        <div>
            <div className="overflow-x-auto w-full md:w-3/4 mx-auto">
                <div className="divider"></div>
                <h1 className="text-center text-2xl md:text-4xl font-bold my-2">All Trainers</h1>
                <div className="divider"></div>
                {/* <div className="flex justify-evenly mb-10">
                    <h2 className="text-3xl font-semibold">Total Salary: {totalPrice}</h2>
                    {cart.length ? <Link to={'/dashboard/payment'}>
                        <button className="btn btn-primary px-5">Pay</button>
                    </Link>
                        :
                        <button disabled className="btn btn-primary px-5">Pay</button>
                    }
                </div> */}
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="uppercase font-bold bg-black text-white">
                            <th></th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>salary</th>
                            <th>status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.trainerName}</td>
                                <td>{item.gymClass}</td>
                                <td>${item.price}</td>
                                {
                                    item.status === 'paid' ?
                                        <td>Paid</td> : <td>Pending</td>
                                }
                                <td>
                                    <Link to={`/dashboard/payment/${item._id}`}>
                                        <button className="btn btn-primary px-5">Pay</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainers;