import { Cell, PieChart, Pie } from 'recharts';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const COLORS = ['#0088FE', '#00C49F'];

const Balance = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: Subscribers = [] } = useQuery({
        queryKey: ['subscribes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/subscribes')
            return res.data;
        }
    })

    const { data: Payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })

    // custom shape for pie chart
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const textAnchor = x > cx ? 'start' : 'end';

        return (
            <text x={x} y={y} fill="white" textAnchor={textAnchor} dominantBaseline="central">
                <tspan x={x} dy="0" fontSize="8" fontWeight="bold">{name} </tspan>
                <tspan x={x} dy="1.2em" fontSize="12">{value}</tspan>
            </text>
        );
    };

    const pieChartData = [
        { name: 'Subscribers', value: Subscribers?.length },
        { name: 'Payments', value: Payments?.length },
    ];
    const totalPayments = Payments.reduce((total, item) => total + item.price, 0)
    const balanceRemaining = 1152 - (totalPayments || 0);

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="md:text-3xl text-center text-xl">
                <span className='text-blue-900'>Hi, Welcome {user?.displayName ? user.displayName : 'Back'}!</span>
            </h1>
            <div className="divider"></div>
            <div className="flex justify-around ">
                <h1 className="md:text-3xl text-xl">Toatal Payments: ${totalPayments}</h1>
                <h1 className="md:text-3xl text-xl">Balance Remainnig: ${balanceRemaining}</h1>
            </div>
            <div className=" md:w-full w-[200px] flex justify-center mx-auto ">
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    {/* <Legend /> */}
                </PieChart>
            </div>
        </div>
    );
};

export default Balance;