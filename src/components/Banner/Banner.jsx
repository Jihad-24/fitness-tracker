import { Link } from "react-router-dom";


const Banner = () => {
    const carousalText = <>
        <div className='text-white space-y-7 pl-12 w-1/2 '>
            <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold'>Transform Your Fitness Journey with Expert Guidance</h2>
            <p className="hidden md:block ">Discover a variety of Fitness Guidance to your interests and goals. Choose from a diverse selection of Guidance and start your Fitness journey today.</p>
            <div>
                <Link to={'/classes'}><button className="btn btn-primary mr-5">Join Class</button></Link>
            </div>
        </div>

    </>

    return (
        <div className="carousel w-full h-full md:h-[550px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/18Yy6fb/1000-F-630210970-OFh-Ow-Cbr-ZPq6-D5-An46-Ls-VAZQx8-Hsk-Sd-Z.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Nt3cyXv/1000-F-630210307-c-SLP5-Ivv-HJN7-Ydjf2-EUNjortfktc0y-G6.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Rc7wZ98/1000-F-630210629-X0-Nafgk1-QCp2-HIxr2exupphp-G8-R0-SWzo.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/BjsmtjS/1000-F-630210727-UJu-JFqe4x-L26-Lriq-UECa-WEN9ee-BLr-C0q.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;