import images from "../../assets/Images";

const ProjectIdeasSection = () => {
  return (
    <>
      <section className="max-w-[1200px] w-[90%] mx-auto mt-15">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[#00AEFF] text-[24px] md:text-[30px] font-semibold mb-5">
              Inspiring Project Ideas
            </h1>
            <p className="mb-6 text-[#5C5A5A] text-[18px] md:text-[22px] leading-8 md:leading-9">
              Our Academy has a placement cell that helps students find jobs after graduation.
              The cell works with companies to bring job opportunities to campus and helps
              students prepare for interviews. The placement cell also provides training and
              workshops to help students develop the skills they need to succeed in the
              workplace. This includes training on communication, teamwork, and problem-solving.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full rounded-2xl object-cover"
              src={images.projectIdea}
              alt="Project Idea"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectIdeasSection;
