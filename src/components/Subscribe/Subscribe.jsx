import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import "./Newsletter.css"


const Subscribe = () => {
    const axiosPublic =useAxiosPublic();
    const { user } = useAuth();

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
            .catch(error=>{
                console.log(error.message);
            })

    }
    return (
        <div className="my-16" style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
             <div className="flex flex-col bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="w-full flex justify-center items-center">
              <div className="w-10/12 px-8 py-10 mx-auto overflow-hidden border border-white bg-black/70 shadow-2xl rounded-xl  lg:max-w-xl">
                {/* Contact form */}
                <h1 className="text-xl font-medium text-white text-center ">
                  Subscribe Now
                </h1>
                <p className="mt-2 text-white text-center ">
                  Your fit journey starts here subscribe !
                </p>
                <form onSubmit={handleSubscribe} className="mt-6">
                  <div className="form-control">
                    <input
                      className="inputs inputs-alt"
                      placeholder="Type your name"
                      required=""
                      type="text"
                      name="name"
                    />
                    <span className="inputs-border inputs-border-alt"></span>
                  </div>
                  <div className="form-control">
                    <input
                      className="inputs inputs-alt"
                      placeholder="Type your email"
                      required=""
                      type="email"
                      name="email"
                    />
                    <span className="inputs-border inputs-border-alt"></span>
                  </div>
                  {user ? (
                    <button
                      type="submit"
                      className="w-full bg-[#854cff9c] mt-5 text-white text-xl space py-1 rounded-lg hover:bg-[#5B1AE9]"
                      style={{ letterSpacing: "5px" }}
                    >
                      Subscribe Now
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled
                      className="w-full bg-[#854cff9c] mt-5 text-white text-xl space py-1 rounded-lg hover:bg-[#5B1AE9]"
                      style={{ letterSpacing: "5px" }}
                    >
                      Subscribe Now
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
            {/* <div >
                <h1 className="text-4xl text-white mt-10 font-bold text-center" >Subscribe Now!</h1>
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
            </div> */}
        </div>
    );
};

export default Subscribe;