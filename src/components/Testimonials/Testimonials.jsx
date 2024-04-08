/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [pageNumber, setPageNumber] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
    const customers= [
        {
          "id": 1,
          "content": "Users appreciate accurate tracking of steps, distance, heart rate, and other metrics. Positive comments often highlight how reliable the device is in capturing their activity levels",
          "author": {
            "name": "Robert Joe",
            "image": "https://i.ibb.co/f1ZDNLm/main-home-team-big-2.jpg",
            "role": "Aliquam illum"
          }
        },
        {
          "id": 2,
          "content": "Customers often talk about the comfort of wearing the tracker throughout the day. A sleek, lightweight design that blends well with their style tends to receive positive feedback.",
          "author": {
            "name": "Jasmin Ruri",
            "image": "https://i.ibb.co/CKSwGWR/main-home-team-big-6.jpg",
            "role": "Aliquam illum"
          }
        },
        {
          "id": 3,
          "content": "Long-lasting battery life is a big plus. Users often prefer trackers that don't require frequent charging, especially for those who engage in intense workouts regularly.",
          "author": {
            "name": "Distinctio Animi",
            "image": "https://i.ibb.co/Zc2p3sm/main-home-team-big-1.jpg",
            "role": "Aliquam illum"
          }
        },
        {
          "id": 4,
          "content": "Positive feedback often focuses on ease of use, intuitive app navigation, and clear data presentation. A user-friendly interface encourages regular engagement with the device.",
          "author": {
            "name": "Distinctio Animi",
            "image": "https://source.unsplash.com/50x50/?portrait?2",
            "role": "Aliquam illum"
          }
        },
        {
          "id": 5,
          "content": "Customers appreciate additional features like sleep tracking, GPS, waterproofing, and compatibility with various workout types. The more versatile the tracker, the better.",
          "author": {
            "name": "Distinctio Animi",
            "image": "https://source.unsplash.com/50x50/?portrait?3",
            "role": "Aliquam illum"
          }
        },
        {
          "id": 6,
          "content": "Positive experiences with customer service, including quick responses, helpful troubleshooting, and efficient warranty processes, can significantly influence customer feedback",
          "author": {
            "name": "Distinctio Animi",
            "image": "https://source.unsplash.com/50x50/?portrait?4",
            "role": "Aliquam illum"
          }
        }
      ];
      

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setCardsPerPage(3);
          } else {
            setCardsPerPage(1);
          }
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      const numberOfPages = Math.ceil((customers?.length || 0) / cardsPerPage);
    
      const updatePageNumber = (newPageNumber) => {
        if (newPageNumber > 0 && newPageNumber <= numberOfPages) {
          setPageNumber(newPageNumber);
        }
      };
    
      const indexOfLastCard = pageNumber * cardsPerPage;
      const indexOfFirstCard = indexOfLastCard - cardsPerPage;
      const currentCards = customers?.slice(indexOfFirstCard, indexOfLastCard);
      
    return (
        <div>
            <div className="container flex flex-col items-center mx-auto">
		<h1 className="p-4 text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
		<h1 className="pb-5 md:pb-10 text-xl font-semibold leadi text-center md:w-8/12 mx-auto">Improved Health Awareness: "Wearing this tracker has made me more aware of my daily activity levels and encouraged me to live a healthier lifestyle"</h1>
	</div>
	<div className="md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
		{
            currentCards?.map(customer=><div key={customer?.id} className="flex flex-col shadow-lg ">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#111827] text-white h-full">
				<p className="relative px-6 py-1 text-lg italic text-center ">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#A78BFA] ">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>{customer?.content}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-[#A78BFA] ">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#A78BFA] ">
				<img src={customer?.author?.image} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  " />
				<p className="text-xl font-semibold leadi">{customer?.author?.name}</p>
				<p className="text-sm uppercase">{customer?.author?.role}</p>
			</div>
		</div>)
        }
	</div>
    {/* Pagination */}
    <div className="flex select-none justify-center items-center gap-1 mt-10">
        {/* left arrow */}
        <div
          onClick={() => updatePageNumber(pageNumber - 1)}
          className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full ${
            pageNumber === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            className="w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7L10 12L15 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center gap-2 bg-white p- shadow-lg rounded-full">
          {[...Array(numberOfPages).keys()].map((item) => (
            <div
              onClick={() => setPageNumber(item + 1)}
              className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 md:px-5 ${
                pageNumber === item + 1 ? "bg-sky-500 text-white" : "bg-white"
              } border-sky-300 font-semibold text-gray-700 py-2 md:py-4 rounded-full`}
              key={item}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <div
          onClick={() => updatePageNumber(pageNumber + 1)}
          className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full ${
            pageNumber === numberOfPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            className="w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
          
        </div>
    );
};

export default Testimonials;


  {/* <div className="text-center w-3/4 mx-auto space-y-4 mb-10">
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
            </div> */}