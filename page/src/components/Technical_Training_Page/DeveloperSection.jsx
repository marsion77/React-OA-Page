import images from "../../assets/Images";

const DeveloperSection = () => {
  return (
    <div className="w-full px:10px py-12">
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">

        {/* Left Content */}
        <div className="md:w-1/2 max-w-[600px]">
          <h1 className="text-[#00AEFF] text-[30px] font-semibold mb-4 w-full">
            Elevate Your Technical Skills
          </h1>
          <p className="mb-6 text-gray-700 text-[18px] leading-relaxed">
            Our comprehensive technical training programs combine hands-on
            projects, expert mentorship, and real-world scenarios to prepare you
            for success in the tech industry. From foundational programming to
            advanced frameworks, we’ve got you covered.
          </p>

          <button className="bg-[#00AEFF] text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 shadow-md mt-15">
            <img src={images.developer} alt="" className="w-5 h-5" />
            Developer’s Corner
          </button>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 gap-8 w-full md:w-1/2 max-w-[500px]">
          <div className="bg-[#D9E8FF] flex flex-col justify-center items-start p-5 gap-2 rounded-2xl shadow-sm aspect-[1.5/1]">
            <img src={images.Book} alt="" className="w-[35px] h-[35px]" />
            <p className="text-gray-700">Questions</p>
            <h1 className="text-2xl font-semibold text-[#000000]">500+</h1>
          </div>

          <div className="bg-[#D9E8FF] flex flex-col justify-center items-start p-5 gap-2 rounded-2xl shadow-sm aspect-[1.5/1]">
            <img src={images.students} alt="" className="w-[35px] h-[35px]" />
            <p className="text-gray-700">Students</p>
            <h1 className="text-2xl font-semibold text-[#000000]">50K+</h1>
          </div>

          <div className="bg-[#D9E8FF] flex flex-col justify-center items-start p-5 gap-2 rounded-2xl shadow-sm aspect-[1.5/1]">
            <img src={images.technology} alt="" className="w-[35px] h-[35px]" />
            <p className="text-gray-700">Technologies</p>
            <h1 className="text-2xl font-semibold text-[#000000]">10+</h1>
          </div>

          <div className="bg-[#D9E8FF] flex flex-col justify-center items-start p-5 gap-2 rounded-2xl shadow-sm aspect-[1.5/1]">
            <img src={images.success} alt="" className="w-[35px] h-[35px]" />
            <p className="text-gray-700">Success Rate</p>
            <h1 className="text-2xl font-semibold text-[#000000]">95%</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeveloperSection;
