

const WhyChooseUs = () => {
    return (
        <div className="my-16">
            <div className="text-center w-3/4 mx-auto space-y-4 mb-10">
                <h1 className="text-4xl font-bold"><span className="text-blue-500">About</span> Us</h1>
                <p className="text-[#636262] text-xl">Our fitness coaches can enable you to meet your wellness objectives. They can turn into your instructor, your helper, your mentor and your companion. Our fitness coaches are degreed and confirmed by a certify wellness association.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <div className="card bg-base-100 shadow-xl">
                            <img src="https://i.ibb.co/St3QJWM/cash-1.jpg" alt="Shoes" className="rounded-t-md" />
                        <div className="card-body items-center text-center bg-green-400">
                            <h2 className="card-title">Nutrition Strategies</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                            <img src="https://i.ibb.co/gZ5ktbW/cash-2.jpg" alt="Shoes" className="rounded-t-md" />
                        <div className="card-body items-center text-center bg-green-400">
                            <h2 className="card-title">Workout Routine</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                            <img src="https://i.ibb.co/DCMcBCh/cash-3.jpg" alt="Shoes" className="rounded-t-md" />
                        <div className="card-body items-center text-center bg-green-400">
                            <h2 className="card-title">Individual Support</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;