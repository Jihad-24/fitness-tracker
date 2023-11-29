/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Helmet } from "react-helmet";


const Forums = () => {
    const [postData, setPostData] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 6;

    useEffect(() => {
        setIsLoading(true);
        axiosPublic.get(`/forums?page=${page}&limit=${limit}`) // Pass page and limit as query parameters
            .then(res => {
                setPostData(res.data.result);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [axiosPublic, page, limit]);
    // useEffect(() => {
    //     setIsLoading(true)
    //     axiosPublic.get('/forums')
    //         .then(res => {
    //             setPostData(res.data)
    //             setIsLoading(false)
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }, [axiosPublic])
    const handlePagination = (direction) => {
        if (direction === "prev" && page > 1) {
            setPage(page - 1);
        } else if (direction === "next") {
            setPage(page + 1);
        }
    };
    const handleUpVote = (postId) => {
        axiosPublic.post(`/forums/${postId}/upvote`)
            .then((res) => {
                // console.log(res.data);
                // console.log('Up-vote successful');
                updateVoteCount(postId);
            })
            .catch((error) => {
                console.error('Error up-voting:', error.message);
            });
    };

    const handleDownVote = (postId) => {
        axiosPublic.post(`/forums/${postId}/downvote`)
            .then((res) => {
                // console.log(res.data);
                // console.log('Down-vote successful');
                updateVoteCount(postId);
            })
            .catch((error) => {
                console.error('Error down-voting:', error.message);
            });
    };

    const updateVoteCount = (postId) => {
        axiosPublic.get(`/forums/${postId}`)
            .then(res => {
                const updatedPostData = postData.map(post => {
                    if (post._id === postId) {
                        return { ...post, upVotes: res.data.upVotes, downVotes: res.data.downVotes };
                    }
                    return post;
                });
                setPostData(updatedPostData);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="mt-10 mb-20">
            <Helmet>
                <title>Forums || Fitness Tracker</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {!isLoading && postData.length ?
                    (postData?.map(post =>
                        <div key={post._id} className="card bg-base-100 shadow-xl">

                            <div className="card-body">
                                <div className="flex gap-5">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={post.image} />
                                        </div>
                                    </div>
                                    <h2 className="card-title">{post.author}</h2>
                                    <p className="badge badge-secondary">{post.role}</p>
                                </div>
                                <p className="pt-2">{post.content}</p>
                            </div>
                            <figure><img className="w-full h-52" src={post.image} alt="Shoes" /></figure>
                            <div className="divider"></div>
                            <div className="flex gap-6 pb-3 justify-center">
                                <button className="btn btn-sm" onClick={() => handleUpVote(post._id)}>
                                    <AiFillLike className="text-xl" />
                                    <span>{post.upVotes}</span>
                                </button>
                                <button className="btn btn-sm" onClick={() => handleDownVote(post._id)}>
                                    <AiFillDislike className="text-xl" />
                                    <span>{post.downVotes}</span></button>
                            </div>
                        </div>)) :
                    (<div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
                        <h1 className="text-2xl font-bold text-center">There are no More Forums wait for Admin or Trainer to Add New Forums</h1>
                    </div>)

                }
            </div>
            {isLoading &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className="flex flex-col gap-4 w-52">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-52">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                </div>}
            <div className="flex justify-center pt-10">
                <div className="join">
                    <button className="join-item btn" onClick={() => handlePagination("prev")}>
                        « Prev
                    </button>
                    <button disabled={!postData.length} className="join-item btn" onClick={() => handlePagination("next")}>
                        Next »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forums;