import images from "../../assets/Images";

const TechSection = () => {
    const techs = [
        { name: "React", questions: 50, bg: "linear-gradient(to right, #2D8FED, #0FADDA)" },
        { name: "Node.js", questions: 40, bg: "#40C79A" },
        { name: "MongoDB", questions: 35, bg: "#A855F7" },
        { name: "Express", questions: 45, bg: "#F97316" },
        { name: "JavaScript", questions: 60, bg: "#EC4899" },
        { name: "Python", questions: 70, bg: "#1D4ED8" },
        { name: "Django", questions: 55, bg: "#16A34A" },
        { name: "Next.js", questions: 48, bg: "#000000" },
        { name: "TypeScript", questions: 30, bg: "#2563EB" },
        { name: "HTML/CSS", questions: 80, bg: "#EAB308" },
    ];

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

            {/* Scrollable container */}
            <div className="max-w-[1200px] w-[90%] mx-auto mt-10 overflow-x-auto">
                <div
                    className="flex gap-5 sm:gap-5 pb-8" // 👈 Increased from pb-3 to pb-8 for bottom space
                    style={{
                        width: "max-content",
                    }}
                >
                    {techs.map((item, i) => (
                        <div
                            key={i}
                            className="h-[138px] w-[216px] border-0 rounded-lg shrink-0 flex flex-col justify-center items-start pl-7"
                            style={{
                                boxShadow:
                                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                            }}
                        >
                            <div
                                className="w-[45px] h-[35px] flex justify-center items-center rounded-[5px]"
                                style={{ background: item.bg }}
                            >
                                <img src={images.tag} alt="" className="w-6 h-6" />
                            </div>
                            <p className="mt-2 text-sm font-semibold text-[#4B5563]">
                                {item.name}
                            </p>
                            <p className="text-sm text-gray-600">
                                {item.questions} Questions
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TechSection;
