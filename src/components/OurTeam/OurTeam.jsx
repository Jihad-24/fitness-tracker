import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const OurTeam = () => {
    const [classData, setClassData] = useState();
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axiosPublic.get('/teams')
            .then(res => {
                setClassData(res.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axiosPublic])
    
    return (
        <div className="my-16">
            <div className="text-center w-3/4 mx-auto space-y-4 mb-10">
                <h1 className="text-4xl font-bold">Our <span className="text-blue-500">Team</span></h1>
                <p className="text-[#636262] text-xl">Our fitness coaches can enable you to meet your wellness objectives. They can turn into your instructor, your helper, your mentor and your companion.</p>
            </div>
            {!isLoading &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        classData?.map(item => <div key={item._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={item.image} alt="Shoes" className="rounded-xl h-[200px] w-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p className="text-[#757575] font-bold"> {item.teacher}</p>
                            </div>
                        </div>)
                    }
                </div>}
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
    );
};

export default OurTeam;