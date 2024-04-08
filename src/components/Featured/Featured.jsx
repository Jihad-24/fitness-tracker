import { FaBookOpen, FaRunning } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { IoBodyOutline, IoFitnessSharp } from "react-icons/io5";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";



const Featured = () => {
    return (
        <div className="my-12">
            <div className="text-center space-y-4 mb-8">
            <SectionTitle title="Highlighted Offerings" heading="Featured" />
                {/* <h1 className="font-bold text-5xl">Our <span className="text-blue-500">Features</span></h1> */}
                <p className="font-bold text-[#494848]">Transform Your Fitness Journey with Expert Guidance <br /> Your Ultimate Fitness Training Destination</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="pt-8">
                            <FaRunning className="text-6xl"></FaRunning>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Balance Body mind</h2>
                            <p className="text-[#494848]">
                            Achieve harmony between your physical and mental well-being. Our holistic approach integrates mind-body practices, and mindfulness exercises.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="pt-8">
                            <GiFruitBowl className="text-6xl"></GiFruitBowl>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Nutrition Plan</h2>
                            <p className="text-[#494848]">
                            Fuel your body with precision and purpose. Our nutrition plans, curated by experts, are designed to complement your fitness goals. Discover personalized meal guides.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="pt-8">
                            <MdFitnessCenter className="text-6xl"></MdFitnessCenter>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                Fitness & Performance</h2>
                            <p className="text-[#494848]">
                            Unleash your potential and achieve peak fitness levels with our comprehensive fitness and performance training programs. Our certified trainers offer a diverse range of workouts</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="pt-8">
                            <FaBookOpen className="text-6xl"></FaBookOpen>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Routine Programme</h2>
                            <p className="text-[#494848]">
                            Discover a structured routine program designed to fit seamlessly into your lifestyle. Our program encompasses a balanced blend of training, exercises, and recovery sessions.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="pt-8">
                            <IoBodyOutline className="text-6xl"></IoBodyOutline>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Weight Loss Program</h2>
                            <p className="text-[#494848]">
                            Embark on a transformative weight loss journey with our specialized program. Our program is curated to help you shed excess weight through a combination of targeted exercises.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="pt-8">
                            <IoFitnessSharp className="text-6xl"></IoFitnessSharp>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cardio Excercise</h2>
                            <p className="text-[#494848]">
                            Elevate your cardiovascular health and endurance through our diverse range of cardio exercises. From high-energy HIIT sessions to steady-state jogging or cycling.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;