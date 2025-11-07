import images from "../../assets/Images";

const TechSection = () => {
    return (

        <>

 <div className="px-[5%]">
  {/* Input with image inside */}
  <div className="relative inline-block">
    <input
      type="text"
      placeholder="Search..."
      className="border-2 border-black pl-5 pr-10 w-[600px] rounded-2xl h-[50px] focus:outline-none"
    />
    <img
      src={images.search}  // replace with your actual image path
      alt="search"
      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
    />
  </div>

  <h1 className="mt-10 text-xl font-semibold">Available Technologies</h1>
</div>


            <div className="flex justify-between px-[5%] mt-5">
                <div className="h-[138px] w-[216px] border-2 rounded-lg flex flex-col justify-center items-start pl-5">
                    <div
                        className="w-[45px] h-[35px] flex justify-center items-center rounded-[5px]"
                        style={{ background: "linear-gradient(to right, #2D8FED, #0FADDA)" }}
                    >
                        <img src={images.tag} alt="" className="w-6 h-6" />
                    </div>
                    <p className="mt-2 font-medium text-gray-800">React</p>
                    <p className="text-sm text-gray-600">50 Questions</p>
                </div>


                <div className="h-[138px] w-[216px] border-2 rounded-lg flex flex-col justify-center items-start pl-5">
                    <div
                        className="w-[45px] h-[35px]  flex justify-center items-center rounded-[5px]"
                        style={{ background: "linear-gradient(to right, #2D8FED, #0FADDA)" }}
                    >
                        <img src={images.tag} alt="" className="w-6 h-6" />
                    </div>
                    <p className="mt-2 font-medium text-gray-800">React</p>
                    <p className="text-sm text-gray-600">50 Questions</p>
                </div>


                <div className="h-[138px] w-[216px] border-2 rounded-lg flex flex-col justify-center items-start pl-5">
                    <div
                        className="w-[45px] h-[35px]  flex justify-center items-center rounded-[5px]"
                        style={{ background: "linear-gradient(to right, #2D8FED, #0FADDA)" }}
                    >
                        <img src={images.tag} alt="" className="w-6 h-6" />
                    </div>
                    <p className="mt-2 font-medium text-gray-800">React</p>
                    <p className="text-sm text-gray-600">50 Questions</p>
                </div>

                <div className="h-[138px] w-[216px] border-2 rounded-lg flex flex-col justify-center items-start pl-5">
                    <div
                        className="w-[45px] h-[35px]  flex justify-center items-center rounded-[5px]"
                        style={{ background: "linear-gradient(to right, #2D8FED, #0FADDA)" }}
                    >
                        <img src={images.tag} alt="" className="w-6 h-6" />
                    </div>
                    <p className="mt-2 font-medium text-gray-800">React</p>
                    <p className="text-sm text-gray-600">50 Questions</p>
                </div>


                <div className="h-[138px] w-[216px] border-2 rounded-lg flex flex-col justify-center items-start pl-5">
                    <div
                        className="w-[45px] h-[35px]  flex justify-center items-center rounded-[5px]"
                        style={{ background: "linear-gradient(to right, #2D8FED, #0FADDA)" }}
                    >
                        <img src={images.tag} alt="" className="w-6 h-6" />
                    </div>
                    <p className="mt-2 font-medium text-gray-800">React</p>
                    <p className="text-sm text-gray-600">50 Questions</p>
                </div>

            </div>

        </>
    )
}

export default TechSection;