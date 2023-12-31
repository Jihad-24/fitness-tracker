import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";


const Classes = () => {
    const [classData, setClassData] = useState(null);
    const axiosPublic = useAxiosPublic();
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setIsLoading(true)
        axiosPublic.get('/classes')
        .then(res=>{
            setClassData(res.data)
            setIsLoading(false)
        })
        .catch(error=>{
            console.log(error.message);
        })
    },[axiosPublic])
   

    return (
        <div>
            <Helmet>
                <title>Classes || Fitness Tracker</title>
            </Helmet>
            <div className="mb-10">
                <div className="overflow-x-auto">
                    <h1 className="text-center  text-4xl font-bold my-2">Class Scedule</h1>
                    <table className="table w-2/3 mx-auto">
                        {/* head */}
                        <thead>
                            <tr className="uppercase text-center text-white bg-black font-bold ">
                                <th>Sunday</th>
                                <th>Monday</th>
                                <th>tuesday</th>
                                <th className="bg-red-800">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover uppercase text-center font-semibold">
                                <td>Yoga Exercise</td>
                                <td>HIIT Exercise</td>
                                <td>CrossFit Exercise</td>
                                <td>Functional Training</td>
                            </tr>
                            <tr className="hover uppercase text-center font-semibold">
                                <td>HIIT Exercise</td>
                                <td>Yoga Exercise</td>
                                <td>Functional Training</td>
                                <td>CrossFit Exercise</td>
                            </tr>
                            <tr className="hover uppercase text-center font-semibold">
                                <td>CrossFit Exercise</td>
                                <td>Yoga Exercise</td>
                                <td>Functional Training</td>
                                <td>HIIT Exercise</td>
                            </tr>
                            <tr className="hover uppercase text-center font-semibold">
                                <td>Functional Training</td>
                                <td>HIIT Exercise</td>
                                <td>CrossFit Exercise</td>
                                <td>Yoga Exercise</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mb-16">
                <div className="text-center w-3/4 mx-auto">
                    <h1 className="text-4xl font-bold">Our <span className="text-blue-500">Classes</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {!isLoading &&
                        classData?.map(item => 
                       <Link key={item._id} to={`/classes/${item._id}`}>
                         <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.profileImage} alt="Shoes" className="rounded-xl h-[200px] w-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Trainer: {item.trainerName}</h2>
                                <h2 className="card-title">Class: {item.gymClass}</h2>
                                <h3>Experience: {item.experienceYears} Years</h3>
                                <h3>Available: {item.availableTimeSlot}</h3>
                            </div>
                        </div>
                       </Link>)
                    }
                </div>
                {isLoading &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex flex-col gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Classes;