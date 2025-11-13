import images from "../../assets/Images";

const ProjectIdeasSection = () => {
  return (
    <section className="max-w-[1200px] w-[90%] mx-auto mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-[#00AEFF] text-[30px] font-semibold mb-5">
            Inspiring Project Ideas
          </h1>
          <p className="mb-6 text-[black] text-[16px]  md:leading-8">
            Our Academy has a placement cell that helps students find jobs after graduation.
            The cell works with companies to bring job opportunities to campus and helps
            students prepare for interviews. The placement cell also provides training and
            workshops to help students develop the skills they need to succeed in the
            workplace. This includes training on communication, teamwork, and problem-solving.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-[90%] h-auto rounded-2xl object-cover"
            src={images.projectIdea}
            alt="Project Idea"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectIdeasSection;
