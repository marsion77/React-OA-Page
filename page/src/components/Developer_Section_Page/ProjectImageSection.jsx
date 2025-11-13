import images from "../../assets/Images";

const ProjectImageSection = () => {
  const projects = [
    { src: images.ProjectOne, title: "Task Management System" },
    { src: images.ProjectTwo, title: "Appointment Scheduling App" },
    { src: images.ProjectThree, title: "Restaurant Booking Website" },
    { src: images.ProjectFour, title: "Student Information System (SIS)" },
    { src: images.ProjectFive, title: "E-commerce Website" },
    { src: images.ProjectSix, title: "Real Estate Listing Website" },
    { src: images.ProjectSeven, title: "Portfolio Website" },
    { src: images.ProjectEight, title: "Job Portal Platform" },
    { src: images.ProjectNine, title: "Online Learning Dashboard" },
    { src: images.ProjectTen, title: "Fitness Tracking App" },
  ];

  return (
    <section className="max-w-[1200px] w-[90%] mx-auto py-10 mt-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 overflow-y-auto pr-8"
        style={{
          height: "700px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-center bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-all duration-300 p-4 cursor-pointer"
          >
            <div className="w-full h-[260px] overflow-hidden rounded-lg">
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-300"
              />
            </div>
            <h1 className="mt-5 text-[20px] font-semibold text-[#00AEFF]">
              {project.title}
            </h1>
          </div>
        ))}
      </div>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 10px;
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
    </section>
  );
};

export default ProjectImageSection;
