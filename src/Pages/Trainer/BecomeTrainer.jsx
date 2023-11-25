import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const BecomeTrainer = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosPublic =useAxiosPublic();



    const handleApplied = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const age = form.age.value;
        const photo = form.photo.value;
        const timeday = form.timeday.value;
        const timeWeek = form.timeWeek.value;
        const timehour = form.timehour.value;
        const skills = {
            skill1: { checked: form.skill1.checked, value: form.skill1.checked ? form.skill1.value : '' },
            skill2: { checked: form.skill2.checked, value: form.skill2.checked ? form.skill2.value : '' },
            skill3: { checked: form.skill3.checked, value: form.skill3.checked ? form.skill3.value : '' },
            skill4: { checked: form.skill4.checked, value: form.skill4.checked ? form.skill4.value : '' }
        };

        // Filter checked skills and create a new object with only checked skills
        const checkedSkills = {};
        for (const [key, value] of Object.entries(skills)) {
            if (value.checked) {
                checkedSkills[key] = value.value;
            }
        }

        const trainerDoc = { email, age, timeday, name, photo, timeWeek, timehour, skills: checkedSkills }
        // console.log(trainerDoc);

        // send data to the server
        axiosPublic.post('/trainers',trainerDoc)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Applied Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
                navigate('/trainer')
            }
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className='md:py-20 py-10 px-3'>
                <h1 className='text-center font-extrabold mb-10 text-purple-500 text-2xl md:text-4xl'>Become a Trainer</h1>
                <form onSubmit={handleApplied}>
                    <div className='md:flex gap-6 justify-center mb-8'>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Full Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Email of The Employer</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='email' defaultValue={user?.email} className="input input-bordered w-full" disabled />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Your Age</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name='age' placeholder="Enter Your Age" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Profile Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' placeholder="Enter Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Select Your Skills</span>
                            </label>
                            <label className="input-group">
                                <div className="flex gap-2">
                                    <div className="flex gap-2" >
                                        <input type="checkbox"
                                            name="skill1" id="skill1" value={'Yoga'} />
                                        <label htmlFor="skill1"><a href="#">Yoga</a></label>
                                    </div>
                                    <div className="flex gap-2" >
                                        <input type="checkbox"
                                            name="skill2" id="skill2" value={'Hiit'} />
                                        <label htmlFor="skill2"><a href="#">Hiit</a></label>
                                    </div>
                                    <div className="flex gap-2" >
                                        <input type="checkbox"
                                            name="skill3" id="skill3" value={'CrossFit'} />
                                        <label htmlFor="skill3"><a href="#">CrossFit</a></label>
                                    </div>
                                    <div className="flex gap-2" >
                                        <input type="checkbox"
                                            name="skill4" id="skill4" value={'Rehub'} />
                                        <label htmlFor="skill4"><a href="#">Rehub</a></label>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Available Time in a week
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='timeWeek' placeholder="Enter Available Time in a week" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Available time in a day
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='timeday' placeholder="Enter Available Time in a day" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>How Many Hour in a day
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="number" name='timehour' placeholder="Enter Available Time hour" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input className='btn btn-block bg-[#D2B48C]' type="submit" value="Apply" />
                </form>

            </div>
        </div>
    );
};

export default BecomeTrainer;