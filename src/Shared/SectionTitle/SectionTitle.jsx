/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, title }) => {
  return (
    <div className="text-center py-5">
      <h1 className="text-lg text-orange-600">----{heading}----</h1>
      <div className="border w-11/12 md:w-3/12 my-3 mx-auto border-[#5B1AE9]"></div>
      <p className="text-2xl font-medium text-black uppercase">{title}</p>
      <div className="border w-11/12 md:w-3/12 mt-3 mx-auto border-[#5B1AE9]"></div>
    </div>
  );
};

export default SectionTitle;
