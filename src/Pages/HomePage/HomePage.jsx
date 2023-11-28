import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import FeaturedClasses from "../../components/FeaturedClass/FeaturedClasses";
import LatestNews from "../../components/LatestNews/LatestNews";
import OurTeam from "../../components/OurTeam/OurTeam";
import Subscribe from "../../components/Subscribe/Subscribe";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";


const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Fitness Tracker</title>
            </Helmet>
            <div className="">
            <Banner></Banner>
            <Featured></Featured>
            <WhyChooseUs></WhyChooseUs>
            <FeaturedClasses></FeaturedClasses>
            <Testimonials></Testimonials>
            <LatestNews></LatestNews>
            <OurTeam></OurTeam>
            <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default HomePage;