

const Testimonials = () => {
    return (
        <div>
            <div className="text-center w-3/4 mx-auto space-y-4 mb-10">
                <h1 className="text-4xl font-bold"><span className="text-blue-500">What Our </span> Customers Say</h1>
                <p className="text-[#636262] text-xl">Thousands of people got benefit of our programs.</p>

            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex gap-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/f1ZDNLm/main-home-team-big-2.jpg" />
                            </div>
                        </div>
                        <div className="">
                            <h1 className=" text-2xl font-bold">Robert Joe</h1>
                            <p className="text-green-400">I lost 10 pounds in 1 week</p>
                            <p>
                                This gym deserves more than 5 stars! The trainers here are top-notch. Their extensive knowledge and friendly approach create an incredibly welcoming environment.
                            </p>

                        </div>

                    </div>
                    <div className="flex gap-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/CKSwGWR/main-home-team-big-6.jpg" />
                            </div>
                        </div>
                        <div className="">
                            <h1 className=" text-2xl font-bold">Jasmin Ruri</h1>
                            <p className="text-green-400">I lost 8 pounds in 1 week</p>
                            <p>
                                Absolutely thrilled with my experience at this gym! The trainers are phenomenal, offering not just workouts but genuine support and guidance.
                            </p>

                        </div>

                    </div>
                    <div className="flex gap-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/Zc2p3sm/main-home-team-big-1.jpg" />
                            </div>
                        </div>
                        <div className="">
                            <h1 className=" text-2xl font-bold">Robert Joe</h1>
                            <p className="text-green-400">I lost 5 pounds in 1 week</p>
                            <p>
                                If I could give this gym six stars, I would! The trainers here are exceptional, providing unparalleled support and expertise.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;