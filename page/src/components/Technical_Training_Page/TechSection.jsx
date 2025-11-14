import { useState } from "react";
import images from "../../assets/Images";

const TechSection = () => {
  const techs = [
    { name: "Java", questions: 50, bg: "linear-gradient(to right, #2D8FED, #0FADDA)" },
    { name: "Python", questions: 50, bg: "#40C79A" },
    { name: "C", questions: 50, bg: "#A855F7" },
    { name: "C++", questions: 50, bg: "#F97316" },
    { name: "JavaScript", questions: 50, bg: "#EC4899" },
    { name: "Nodejs", questions: 50, bg: "#1D4ED8" },
    { name: "MySQL", questions: 50, bg: "#16A34A" },
    { name: "MongoDB", questions: 50, bg: "#000000" },
    { name: "Reactjs", questions: 50, bg: "#2563EB" },
    { name: "Angular", questions: 50, bg: "#EAB308" },
    { name: "Flutter", questions: 50, bg: "#EAB308" },
    { name: "UI/UX", questions: 50, bg: "#EAB308" },
    { name: "Django", questions: 50, bg: "#EAB308" },
    { name: "HTML", questions: 50, bg: "#EAB308" },
    { name: "CSS", questions: 50, bg: "#EAB308" },
    { name: "Software Testing", questions: 50, bg: "#EAB308" },
    { name: "Bootstrap", questions: 50, bg: "#EAB308" },
    { name: "SpringBoot", questions: 50, bg: "#EAB308" },
    { name: "Data Analytics", questions: 50, bg: "#EAB308" },
  ];

  // state for search term
  const [searchTerm, setSearchTerm] = useState("");

  // filter logic
  const filteredTechs = techs.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-[1200px] w-[90%] mx-auto">
        <div className="relative inline-block w-full sm:w-[600px]">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 pl-5 pr-10 w-full rounded-2xl h-[50px] focus:outline-none"
          />
          <img
            src={images.search}
            alt="search"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        <h1 className="mt-10 text-xl font-semibold text-[#00AEFF]">
          Interview Domains
        </h1>
      </div>

      {/* Scrollable container */}
      <div className="max-w-[1200px] w-[90%] mx-auto mt-10 overflow-x-auto pb-3">
        <div
          className="flex gap-6 sm:gap-8 pb-8 pr-4"
          style={{
            width: "max-content",
          }}
        >
          {filteredTechs.length > 0 ? (
            filteredTechs.map((item, i) => (
              <div
                key={i}
                className="h-[138px] w-[216px] border-0 rounded-xl shrink-0 flex flex-col justify-center items-start pl-7 bg-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] cursor-pointer"
                style={{
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
                }}
              >
                <div
                  className="w-[45px] h-[35px] flex justify-center items-center rounded-[5px]"
                  style={{ background: item.bg }}
                >
                  <img src={images.tag} alt="" className="w-6 h-6" />
                </div>
                <p className="mt-2 text-sm font-semibold text-[#00AEFF]">
                  {item.name}
                </p>
                {/* <p className="text-sm text-gray-600">{item.questions} Questions</p> */}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm pl-4">No results found...</p>
          )}
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        div::-webkit-scrollbar {
          height: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background-color: #00aeff;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background-color: #0092d3;
        }
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default TechSection;
