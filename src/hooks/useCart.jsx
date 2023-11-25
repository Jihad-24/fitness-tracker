import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const axiosPublic = useAxiosPublic();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosPublic.get('/teacher')
            return res.data;
        }
    })
    return [cart, refetch];
};

export default useCart;