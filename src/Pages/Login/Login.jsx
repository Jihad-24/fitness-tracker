import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        // login user
        userLogin(email, password)
            .then(result => {
                // console.log(result.user);
                // success alert
                if (result?.user) {
                    Swal.fire({
                        title: "User Login Successfull",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                    navigate(location?.state ? location.state : "/");
                }

            })
            .catch(error => {
                setLoginError(error.message)
                // error alert
                Swal.fire({
                    icon: 'error',
                    title: `${error.message}`
                })
            })

    }


    return (
        <div className='pb-24'>
            <Helmet>
                <title>Login || Fitness Tracker</title>
            </Helmet>
            <div >
                <h1 className="text-4xl mt-10 font-bold text-center" >Login your account!</h1>
                <form
                    onSubmit={handleLogin}
                    className='card-body md:w-3/4 lg:w-1/2 mx-auto'>
                    {
                        loginError && <p className="text-red-700">{loginError}</p>
                    }
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
                    <div className="form-control relative">
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
                        <label className="label">
                            <a
                                href="#"
                                className='label-text-alt link link-hover'>
                                Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4" >

                        <button className="btn btn-primary">Login</button>
                        <SocialLogin></SocialLogin>

                    </div>

                </form>
                <p className="text-center text-[#706F6F] font-medium">Don’t Have An Account ?
                    <Link to={"/register"} className="text-[#F75B5F] font-bold"> Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;