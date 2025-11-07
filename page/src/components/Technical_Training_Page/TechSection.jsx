import images from "../../assets/Images";

const TechSection = () => {
    return (

        <>

          <div className="px-10 py-10">
              <input type="text" placeholder="Search..." className="border-[1px] border-black pl-5 w-[350px] rounded-2xl h-[50px]"  />
            <h1 className="mt-10">Available Technologies</h1>
          </div>

            <div className="flex justify-around">
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