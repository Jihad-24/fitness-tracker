import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const RecommendedClass = () => {
    const [recommendedClass, setRecommendedClass] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setIsLoading(true)
        axiosPublic.get('/classes')
        .then(res=>{
            setRecommendedClass(res.data)
            setIsLoading(false)
        })
        .catch(error=>{
            console.log(error.message);
        })
    },[axiosPublic])

    return (
        <div>
             <div className="divider"></div>
            <h1 className="text-center text-2xl md:text-3xl font-bold my-2">Recommended Classes</h1>
            <div className="divider"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {!isLoading &&
                        recommendedClass?.slice(4).map(item => 
                         <div key={item._id} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.profileImage} alt="Shoes" className="rounded-xl h-[200px] w-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Trainer: {item.trainerName}</h2>
                                <h2 className="card-title">Class: {item.gymClass}</h2>
                                <h3>Experience: {item.experienceYears} Years</h3>
                                <h3>Available: {item.availableTimeSlot}</h3>
                               <button className="btn btn-success">Join Now</button>
                            </div>
                        </div>
                       )
                    }
                </div>
                {isLoading &&
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
    );
};

export default RecommendedClass;