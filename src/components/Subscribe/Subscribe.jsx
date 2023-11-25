import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Subscribe = () => {
    const axiosPublic =useAxiosPublic();

    const handleSubscribe = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const userInfo = { name, email};
        axiosPublic.post('/subscribes', userInfo)
            .then(res => {
                
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Subscribe Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })

    }
    return (
        <div className="my-16">
            <div >
                <h1 className="text-4xl mt-10 font-bold text-center" >Subscribe Now!</h1>
                <form
                    onSubmit={handleSubscribe}
                    className='card-body md:w-3/4 lg:w-1/2 mx-auto'>
                    <div className="form-control " >
                        <label className="label">
                            <span className='label-text'>Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            className="input input-bordered bg-slate-200" required />
                    </div>
                    <div className="form-control " >
                        <label className="label">
                            <span className='label-text'>Email Address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            className="input input-bordered bg-slate-200" required />
                    </div>
                    <div className="form-control mt-4" >
                        <button className="btn btn-primary">Subscribe</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Subscribe;