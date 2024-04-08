import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/BjsmtjS/1000-F-630210727-UJu-JFqe4x-L26-Lriq-UECa-WEN9ee-BLr-C0q.jpg",
    },
    {
      img: "https://i.ibb.co/Rc7wZ98/1000-F-630210629-X0-Nafgk1-QCp2-HIxr2exupphp-G8-R0-SWzo.jpg",
    },
    {
      img: "https://i.ibb.co/Nt3cyXv/1000-F-630210307-c-SLP5-Ivv-HJN7-Ydjf2-EUNjortfktc0y-G6.jpg",
    },
    {
      img: "https://i.ibb.co/18Yy6fb/1000-F-630210970-OFh-Ow-Cbr-ZPq6-D5-An46-Ls-VAZQx8-Hsk-Sd-Z.jpg",
    },
    {
      img: "https://img.freepik.com/premium-vector/isometric-concept-train-together-reach-your-goal-using-mobile-app-track-your-activity_130740-55.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.973147496.1700747084&semt=ais",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div
      className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
      style={{
        backgroundImage: `url(${
          currentSlider === 0
            ? sliders[sliders.length - 1].img
            : sliders[currentSlider - 1].img
        })`,
      }}
    >
      {/* arrow */}
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* text container here */}
      <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
        <h1 className="lg:text-3xl mb-3">
          Transform Your Fitness Journey with Expert Guidance
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg hidden md:block">
          Discover a variety of Fitness Guidance to your interests and goals.
          Choose from a diverse selection of Guidance and start your Fitness
          journey today.
        </p>
        <Link to={"/classes"}>
          <button className="btn btn-sm text-[12px] md:btn-md md:text-[16px] mt-1 md:mt-3 btn-primary mr-5">
            Join Class
          </button>
        </Link>
      </div>
      {/* slider container */}
      <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div
          className="ease-linear duration-300 flex gap-4 items-center"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 98 : 200)
            }px)`,
          }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <img
              key={inx}
              src={slide.img}
              className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
              } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
              alt={"Transform Your Fitness Journey with Expert Guidance"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

// const carousalText = <>
//     <div className='text-white space-y-7 pl-12 w-1/2 '>
//         <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold'>Transform Your Fitness Journey with Expert Guidance</h2>
//         <p className="hidden md:block ">Discover a variety of Fitness Guidance to your interests and goals. Choose from a diverse selection of Guidance and start your Fitness journey today.</p>
//         <div>
//             <Link to={'/classes'}><button className="btn btn-primary mr-5">Join Class</button></Link>
//         </div>
//     </div>

// </>

// <div className="carousel w-full h-full md:h-[550px]">
//     <div id="slide1" className={`carousel-item relative w-full ${activeSlide === 0 ? 'block' : 'hidden'}`}>
//         <img src="https://i.ibb.co/18Yy6fb/1000-F-630210970-OFh-Ow-Cbr-ZPq6-D5-An46-Ls-VAZQx8-Hsk-Sd-Z.jpg" className="w-full rounded-xl" />
//         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
//             {carousalText}
//         </div>
//         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
//             <a href="#slide4" className="btn btn-circle mr-5">❮</a>
//             <a href="#slide2" className="btn btn-circle">❯</a>
//         </div>
//     </div>
//     <div id="slide2" className={`carousel-item relative w-full ${activeSlide === 1 ? 'block' : 'hidden'}`}>
//         <img src="https://i.ibb.co/Nt3cyXv/1000-F-630210307-c-SLP5-Ivv-HJN7-Ydjf2-EUNjortfktc0y-G6.jpg" className="w-full rounded-xl" />
//         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
//             {carousalText}
//         </div>
//         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
//             <a href="#slide1" className="btn btn-circle mr-5">❮</a>
//             <a href="#slide3" className="btn btn-circle">❯</a>
//         </div>
//     </div>
//     <div id="slide3" className={`carousel-item relative w-full ${activeSlide === 2 ? 'block' : 'hidden'}`}>
//         <img src="https://i.ibb.co/Rc7wZ98/1000-F-630210629-X0-Nafgk1-QCp2-HIxr2exupphp-G8-R0-SWzo.jpg" className="w-full rounded-xl" />
//         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
//             {carousalText}
//         </div>
//         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
//             <a href="#slide2" className="btn btn-circle mr-5">❮</a>
//             <a href="#slide4" className="btn btn-circle">❯</a>
//         </div>
//     </div>
//     <div id="slide4" className={`carousel-item relative w-full ${activeSlide === 3 ? 'block' : 'hidden'}`}>
//         <img src="https://i.ibb.co/BjsmtjS/1000-F-630210727-UJu-JFqe4x-L26-Lriq-UECa-WEN9ee-BLr-C0q.jpg" className="w-full rounded-xl" />
//         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
//             {carousalText}
//         </div>
//         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
//             <a href="#slide3" className="btn btn-circle mr-5">❮</a>
//             <a href="#slide1" className="btn btn-circle">❯</a>
//         </div>
//     </div>
// </div>
