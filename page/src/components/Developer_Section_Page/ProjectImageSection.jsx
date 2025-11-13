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
    { src: images.ProjectEleven, title: "Travel Booking Website" },
    { src: images.ProjectTwelve, title: "Blog Content Management System" },
  ];

  return (
    <section className="max-w-[1200px] w-[90%] mx-auto py-10 mt-10">
      {/* Scrollable container */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 overflow-y-auto pr-3"
        style={{
          height: "700px", // 👈 fixed height for exactly 6 boxes visible
        }}
      >
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <div className="w-full h-[260px] overflow-hidden rounded-xl shadow-md">
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="mt-6 text-[20PX] font-medium TEXT-[]">{project.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectImageSection;
