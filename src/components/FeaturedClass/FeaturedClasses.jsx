import { useEffect, useState } from "react";


const FeaturedClasses = () => {
    const [classData,setClassData]=useState();

    useEffect(()=>{
        fetch('/class.json')
        .then(res=> res.json())
        .then(data=>{
            setClassData(data)
        })
    },[])
    return (
        <div className="my-16">
          <div className="text-center w-3/4 mx-auto space-y-4 mb-10">
            <h1 className="text-4xl font-bold">Our <span className="text-blue-500">Classes</span></h1>
            <p className="text-[#636262] text-xl">Our fitness coaches can enable you to meet your wellness objectives. They can turn into your instructor, your helper, your mentor and your companion.</p>
          </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
            classData?.map(item => <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={item.profileImage} alt="Shoes" className="rounded-xl h-[200px] w-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Trainer: {item.trainerName}</h2>
              <h2 className="card-title">Class: {item.gymClass}</h2>
              <h3>Experience: {item.experienceYears} Years</h3>
              <h3>Available: {item.availableTimeSlot}</h3>
              <p>Details: {item.description}</p>
            </div>
          </div>)
           }
       </div>
        </div>
    );
};

export default FeaturedClasses;