import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const ActivityLog = () => {
    const {user}= useAuth();
    const axiosPublic = useAxiosPublic();
    const [activityLog,setActivityLog]=useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
        axiosPublic.get('/plans')
        .then(res=>{
            const data=res.data;
            const findData = data?.filter(activity=> activity.email == user?.email);
            setActivityLog(findData)
            setIsLoading(false)

        })
    },[axiosPublic,user])

    return (
        <div>
            <div className="divider"></div>
            <h1 className="text-center text-2xl md:text-4xl font-bold my-2">Activity Log</h1>
            <div className="divider"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    activityLog?.map(activity=> <div key={activity._id} className="card bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title uppercase text-orange-700">{activity.pack} pack</h2>
                      <p><span className="font-medium">User Name:</span> {activity.name}</p>
                      <p><span className="font-medium">User Email:</span> {activity.email}</p>
                      <p><span className="font-medium">Current Trainer:</span> {activity.trainerName}</p>
                      <p><span className="font-medium">Class Name:</span> {activity.gymClass}</p>
                      <p><span className="font-medium">Available Time:</span> {activity.availableTimeSlot}</p>
                     
                    </div>
                  </div>)
                }
            </div>
            {isLoading &&
                <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
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
                </div>}
        </div>
    );
};

export default ActivityLog;