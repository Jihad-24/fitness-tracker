import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const {id}=useParams();
    // console.log(id);
    const [cart]=useCart();

    const selectedItem = cart?.find(item => item._id == id);

    return (
        <div>
            <Helmet>
                <title>Payment || Fitness Tracker</title>
            </Helmet>
            <div className="">
            <div className="divider"></div>
                <h1 className="text-center text-2xl md:text-4xl font-bold my-2">All Subscribers</h1>
                <div className="divider"></div>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm selectedItem={selectedItem}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;