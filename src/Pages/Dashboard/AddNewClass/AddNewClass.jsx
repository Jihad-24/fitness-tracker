import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.profileImage[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const postItem = {
                trainerName: data.trainerName,
                gymClass: data.gymClass,
                experienceYears: data.experienceYears,
                availableTimeSlot: data.availableTimeSlot,
                description: data.description,
                profileImage: res.data.data.display_url
            }
            const postRes = await axiosSecure.post('/classes', postItem)
            console.log(postRes.data);
            if (postRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `added to the classes`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };
    return (
        <div>
            <Helmet>
                <title>AddNewClass || Fitness Tracker</title>
            </Helmet>
            <div className="divider"></div>
            <h1 className="text-center text-2xl md:text-3xl font-bold my-2">Add New Class</h1>
            <div className="divider"></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-medium">Trainer Name*</span>
                            </label>
                            <input {...register("trainerName", { required: true })}

                                type="text" placeholder="Trainer Name"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Select Class Category*</span>
                            </label>
                            <select defaultValue={'default'} {...register("gymClass", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a Category?</option>
                                <option value="Yoga Coach">Yoga Coach</option>
                                <option value="HIIT Coach">HIIT Coach</option>
                                <option value="CrossFit Coach">CrossFit Coach</option>
                                <option value="Pilates Coach">Pilates Coach</option>
                                <option value="Zumba Coach">Zumba Coach</option>
                                <option value="Functional Training Coach">Functional Training Coach</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 my-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Experience Years*</span>
                            </label>
                            <input {...register("experienceYears", { required: true })}

                                type="number" placeholder="Experience Years"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Which Day available and Time*</span>
                            </label>
                            <input {...register("availableTimeSlot", { required: true })}

                                type="text" placeholder="Enter Which Day available and Time" 
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-medium">Description About Class*</span>                        </label>
                        <textarea {...register("description",{ required: true })}

                            className="textarea textarea-bordered h-24"
                            placeholder="Write a short description about class"></textarea>
                    </div>
                    <div className="form-control my-6">
                        <input {...register("profileImage", { required: true })}

                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    <button className="btn bg-[#B58130]">
                        <span className="text-white flex gap-2"><FaStar />  Add Class</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewClass;