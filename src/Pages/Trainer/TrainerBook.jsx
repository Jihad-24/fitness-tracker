import { FaHeartCircleCheck } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const TrainerBook = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleSilverPlan = event => {
        event.preventDefault();
        const email = user.email;
        const pack = 'silver';
        const price = 25;
        const trainerDoc = { email, pack, price }
        console.log(trainerDoc);
        axiosPublic.post('/plans', trainerDoc)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Join Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/trainer')
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGoldPlan = event => {
        event.preventDefault();
        const email = user.email;
        const pack = 'gold';
        const price = 50;
        const trainerDoc = { email, pack, price }
        console.log(trainerDoc);
        axiosPublic.post('/plans', trainerDoc)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Join Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/trainer')
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleDiamondPlan = event => {
        event.preventDefault();
        const email = user.email;
        const pack = 'diamond';
        const price = 100;
        const trainerDoc = { email, pack, price }
        console.log(trainerDoc);
        axiosPublic.post('/plans', trainerDoc)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Join Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/trainer')
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="mb-20 mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-16 md:mx-10 mx-4">
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title  items-center justify-center text-blue-950"><FaHeartCircleCheck className="text-blue-950" />
                                <span className="text-2xl font-bold">Silver</span></h2>
                            <div className="flex gap-2 py-2 items-center justify-center">
                                <h3 className="text-[#8b8b8b] line-through text-xl">$63</h3>
                                <h2><span className="text-3xl font-semibold">$25</span>/<small className="italic text-[#8b8b8b]">month</small></h2>
                            </div>
                            <p className="text-center py-3 font-medium text-blue-950">Perfect plan for  Beginners</p>
                            <form onSubmit={handleSilverPlan}>
                                <label className="input-group">
                                    <div className="space-y-2">
                                        <div className="flex gap-2 " >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">One Month Free </a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Healthy Eating Guides</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">24/7 Access</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Access to 4 Classes Week</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Meal Planing Tips</a></label>
                                        </div>


                                    </div>
                                </label>
                                <div className="divider mt-12"></div>
                                <div className="card-actions justify-end">
                                    <input className='btn btn-block bg-[#D2B48C]' type="submit" value="Join Now" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title  items-center justify-center text-blue-950"><FaHeartCircleCheck className="text-blue-950" /><span className="text-2xl font-bold">Gold</span></h2>
                            <div className="flex gap-2 py-2 items-center justify-center">
                                <h3 className="text-[#8b8b8b] line-through text-xl">$125</h3>
                                <h2><span className="text-3xl font-semibold">$50</span>/<small className="italic text-[#8b8b8b]">month</small></h2>
                            </div>
                            <p className="text-center py-3 font-medium text-blue-950"> For Serious Enthusiasts</p>
                            <form onSubmit={handleGoldPlan}>
                                <label className="input-group ">
                                    <div className="space-y-2">
                                        <div className="flex gap-2 " >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Two Month Free </a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Unlimited Access to Class</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">24/7 Access</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Access to Exclusive Blog Content</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Access to Challanges</a></label>
                                        </div>


                                    </div>
                                </label>
                                <div className="divider mt-12"></div>
                                <div className="card-actions justify-end">
                                    <input className='btn btn-block bg-[#D2B48C]' type="submit" value="Join Now" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title  items-center justify-center text-blue-950"><FaHeartCircleCheck className="text-blue-950" /><span className="text-2xl font-bold">Diamond</span></h2>
                            <div className="flex gap-2 py-2 items-center justify-center">
                                <h3 className="text-[#8b8b8b] line-through text-xl">$250</h3>
                                <h2><span className="text-3xl font-semibold">$100</span>/<small className="italic text-[#8b8b8b]">month</small></h2>
                            </div>
                            <p className="text-center py-3 font-medium text-blue-950"> When Only The Best Will Do</p>
                            <form onSubmit={handleDiamondPlan}>
                                <label className="input-group ">
                                    <div className="space-y-2">
                                        <div className="flex gap-2 " >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Three Month Free </a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Unlimited Access to Class</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">24/7 Access</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Access to Exclusive Blog Content</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">Access to Challanges</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox" checked
                                                name="" id="" />
                                            <label htmlFor=""><a href="#">1 Personal Training Session/Week</a></label>
                                        </div>


                                    </div>
                                </label>
                                <div className="divider"></div>
                                <div className="card-actions justify-end">
                                    <input className='btn btn-block bg-[#D2B48C]' type="submit" value="Join Now" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrainerBook;