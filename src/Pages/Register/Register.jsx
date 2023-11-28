import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";


const Register = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = e.target;
        const terms = form.terms.checked;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;

        // reset error & success
        setRegisterError('');
        setSuccess('');

        // validition of password and term
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer!');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/
            .test(password)) {
            setRegisterError('Your password should have at least one uppercase and one special character!');
            return;
        }
        else if (!terms) {
            setRegisterError('Please Accept Our Terms and Condition!');
            return;
        } else if (!photo) {
            setRegisterError('please provide a photoURL')
        } else if (!name) {
            setRegisterError('please provide your Name')
        }

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')
                const userInfo = { name, email, password, photo, role: 'member' };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User has been Created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
                navigate(location?.state ? location.state : "/");

            })
            .catch(error => {
                setRegisterError(error.message)
                //  error alert
                Swal.fire({
                    icon: 'error',
                    title: `${error.message}`
                })
            })
    }


    return (
        <div className='pb-24' >
            <Helmet>
                <title>SignUp || Fitness Tracker</title>
            </Helmet>
            <div className="">
                <h1 className="text-4xl mt-10 font-bold text-center" >Register your account!</h1>
                <form
                    onSubmit={handleRegister}
                    className='card-body md:w-3/4 lg:w-1/2 mx-auto'
                >
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-700">{success}</p>
                    }
                    <div className="form-control " >
                        <label className="label">
                            <span className='label-text'>Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
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
                    <div className="form-control relative" >
                        <label className="label">
                            <span className='label-text'>Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Your Password"
                            className="input input-bordered bg-slate-200" required />
                        <span className="absolute top-[3.2rem] right-3" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div className="form-control " >
                        <label className="label">
                            <span className='label-text'>Your photoURL</span>
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter Your photoURL"
                            className="input input-bordered bg-slate-200" required />
                    </div>
                    <div className="flex" >
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms"><a href="#">Acceept our Terms and Condition</a></label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Register</button>
                        <SocialLogin></SocialLogin>
                    </div>

                </form>
                <p className="text-center text-[#706F6F] font-medium">Already Have An Account ?
                    <Link to={"/login"} className="text-[#F75B5F] font-bold">  Login Now!</Link> </p>

            </div>
        </div>
    );
};

export default Register;