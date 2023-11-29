import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useTrainer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        enabled: !!user,
        queryFn: async () => {
        //    setTimeout(async()=>{
            const res = await axiosSecure.get(`/users/trainer/${user?.email}`);
            // console.log(res.data);
            return res.data?.trainer;
        //    },2000)
        }
    })
    return [isTrainer, isTrainerLoading];
};

export default useTrainer;