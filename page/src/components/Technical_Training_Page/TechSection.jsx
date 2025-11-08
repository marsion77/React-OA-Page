import images from "../../assets/Images";

const TechSection = () => {
    return (
        <>
            <div className="max-w-[1200px] w-[90%] mx-auto">

                <div className="relative inline-block w-full sm:w-[600px]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-400 pl-5 pr-10 w-full rounded-2xl h-[50px] sm:h-[50px] focus:outline-none"
                    />
                    <img
                        src={images.search}
                        alt="search"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                    />
                </div>

                <h1 className="mt-10 text-xl font-semibold">Available Technologies</h1>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap justify-between mt-5 max-w-[1200px] w-[90%] mx-auto gap-5 sm:gap-5 overflow-x-auto">
                {[
                    { bg: "linear-gradient(to right, #2D8FED, #0FADDA)" },
                    { bg: "#40C79A" },
                    { bg: "#A855F7" },
                    { bg: "#F97316" },
                    { bg: "#EC4899" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="h-[138px] sm:h-[138px] w-full sm:w-[216px] border-0 rounded-lg flex-shrink:0 flex flex-col justify-center items-start pl-7 "
                        style={{
                            boxShadow:
                                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                        }}
                    >
                        <div
                            className="w-[45px] h-[35px] flex justify-center items-center  rounded-[5px]"
                            style={{ background: item.bg }}
                        >
                            <img src={images.tag} alt="" className="w-6 h-6" />
                        </div>
                        <p className="mt-2 font-sm font-semibold text-[#4B5563]">React</p>
                        <p className="text-sm text-gray-600">50 Questions</p>
                    </div>
                ))}
            </div>

        </>
    );
};

export default TechSection;
