import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { FaStar } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewForum = () => {
    const { register, handleSubmit, reset } = useForm()
    const {user}=useAuth();
    const [userRole,setUserRole]=useState([]);
    const axiosPublic = useAxiosPublic();
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

    useEffect(() => {
        setCurrentDate(new Date().toISOString().slice(0, 10));
    }, []);

    useEffect(()=>{
        axiosPublic.get(`/users/${user?.email}`)
        .then(res=>{
            setUserRole(res.data);
        })
    },[axiosPublic,user])
// console.log(userRole);
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const postItem = {
                name: data.name,
                author: data.author,
                content: data.content,
                date: data.date,
                role : userRole?.role,
                image: res.data.data.display_url
            }
            const postRes = await axiosPublic.post('/forums', postItem)
            console.log(postRes.data);
            if (postRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `added to the forums`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div>
            <div className="divider"></div>
            <h1 className="text-center text-2xl md:text-3xl font-bold my-2">Add New Forum</h1>
            <div className="divider"></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-medium">Post Title*</span>
                        </label>
                        <input {...register("name", { required: true })}

                            type="text" placeholder="Post Title"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6 my-6">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Author Name*</span>
                            </label>
                            <input {...register("author", { required: true })}

                                type="text" placeholder="Author name"
                                className="input input-bordered w-full" />
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Post Date*</span>
                            </label>
                            <input {...register("date", { required: true })}
                                defaultValue={currentDate}
                                type="date" placeholder="Price" readOnly
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-medium">Post Content*</span>                        </label>
                        <textarea {...register("content")}

                            className="textarea textarea-bordered h-24"
                            placeholder="Post Details"></textarea>
                    </div>
                    <div className="form-control my-6">
                        <input {...register("image", { required: true })}

                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    <button className="btn bg-[#B58130]">
                        <span className="text-white flex gap-2"> Add Forum<FaStar /></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewForum;