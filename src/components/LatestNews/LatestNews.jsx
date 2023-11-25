

const LatestNews = () => {
    return (
        <div className="my-16">
            <div className="text-center w-3/4 mx-auto space-y-4 mb-10">
                <h1 className="text-4xl">Latest <span className="text-blue-500">News</span></h1>
                <p className="text-[#636262] text-xl">
                    Stay informed with our comprehensive coverage of the latest events, breaking news, and trending stories from around the world.Our dedicated team of journalists and reporters brings you up-to-the-minute updates.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="relative">
                            <figure><img src="https://i.ibb.co/2k8KH8D/blog-1-375x225.jpg" alt="Shoes" /></figure>
                            <p className="bg-green-600 text-white absolute bottom-0 left-1 px-2 rounded">NOV 30, 2023</p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                Rest your way to health and vitality for health.
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the <span className="text-green-400">Read More...</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="relative">
                            <figure><img src="https://i.ibb.co/wYTKpF2/blog-2-375x225.jpg" alt="Shoes" /></figure>
                            <p className="bg-green-600 text-white absolute bottom-0 left-1 px-2 rounded">NOV 30, 2023</p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                Fat loss, health tips, healthy eating, healthy lifestyle.
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas and devious Semikoli, <span className="text-green-400">Read More...</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">

                        <div className="card-body">
                            <div className="pb-7">
                                <h2 className="card-title">
                                    Rest your way to health and vitality for health.
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p className="text-green-600 pt-1 font-bold">NOV 30, 2023</p>
                            </div>
                            <div className="pb-7">
                                <h2 className="card-title">
                                    Fat loss, health tips, healthy eating, healthy lifestyle.
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p className="text-green-600 pt-1 font-bold">NOV 30, 2023</p>
                            </div>
                            <div className="pb-7">
                                <h2 className="card-title">
                                    Proper way to recharge your body
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p className="text-green-600 pt-1 font-bold">NOV 30, 2023</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;