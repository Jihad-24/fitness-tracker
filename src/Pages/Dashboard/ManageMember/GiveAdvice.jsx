import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet';

const GiveAdvice = () => {
    const { id } = useParams();
    // console.log(id);
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();
    const [member, setMember] = useState([]);
// console.log(member);
    useEffect(() => {
        axiosPublic.get(`/users`)
            .then(res => {
                const data= res.data;
                // console.log(data);
                const members = data?.find(item=> item._id == id);
                // console.log(members);
                setMember(members);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axiosPublic,id])
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_5ouchdh', 
            'template_zu0c0mr', 
            form.current, 
            'VzcyFsNAIJWzcwEmB')
            .then((result) => {
                console.log(result.text);
                navigate('/dashboard/manageMember')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-10/12 mx-auto'>
            <Helmet>
                <title>GiveAdvice || Fitness Tracker</title>
            </Helmet>
            <form className='flex flex-col space-y-4 justify-center' ref={form} onSubmit={sendEmail}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="Type here" className="input input-bordered w-full max-w-xs " />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Advice To</span>
                    </label>
                    <input type="email" defaultValue={member.email}  name="user_email"  className="input input-bordered w-full max-w-xs" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Message</span>
                    </label>
                    <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <input className='btn btn-sm btn-primary' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default GiveAdvice;