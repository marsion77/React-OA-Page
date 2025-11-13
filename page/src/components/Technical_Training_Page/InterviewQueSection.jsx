import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const InterviewQue = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "Tell me about yourself?",
    answer:
      "Hello, my name is [Your Name]. I recently graduated with a degree in [Your Field/Area of Study] from [Your University]. While I may be new to the professional world, I am eager to apply my theoretical knowledge and passion for [Your Field/Area of Interest] to practical situations. During my studies, I actively engaged in [Any Relevant Projects, Internships, or Extracurricular Activities], which honed my skills in [Key Skills, e.g., research, problem-solving, communication]. I am particularly drawn to opportunities where I can learn and grow, contributing fresh perspectives and a strong work ethic. Outside of academics, I enjoy [Interests or Hobbies], which demonstrate my dedication, adaptability, and ability to work well in teams. I am excited about the chance to embark on my professional journey, eager to absorb new knowledge, and contribute positively to any team or project I join.",
  },
  {
    question: "Why do you want to work for our company?",
    answer:
      "I admire your company's commitment to innovation and the positive impact it has in the industry. I am eager to contribute my skills and grow professionally within such an esteemed organization.",
  },
  {
    question: "What are your strengths?",
    answer:
      "I believe my strengths lie in my strong work ethic, adaptability, and ability to work well in a team. I am also detail-oriented and committed to producing high-quality work.",
  },
  {
    question: "What are your weaknesses?",
    answer:
      "One weakness I have identified is public speaking. To address this, I have been taking public speaking courses and actively seeking opportunities to practice and improve.",
  },
  {
    question: "Where do you see yourself in five years?",
    answer:
      "In five years, I envision myself in a role where I have gained significant experience and expertise in [specific area related to the job], contributing positively to the company's growth and success.",
  },
  {
    question: "Why should we hire you?",
    answer:
      "I believe my combination of skills, enthusiasm, and willingness to learn make me a valuable asset to your team. I am eager to bring fresh perspectives and contribute to the company's objectives.",
  },
  {
    question: "Describe a challenging situation you faced and how you overcame it.",
    answer:
      "During a group project at university, we faced conflicting ideas on the approach. I facilitated open communication, listened to everyone's perspectives, and helped the team reach a consensus, ultimately leading to a successful project completion.",
  },
  {
    question: "What motivates you?",
    answer:
      "I am motivated by challenges and opportunities for growth. I enjoy tackling new projects and tasks that push me to expand my skills and knowledge.",
  },
  {
    question: "How do you handle stress and pressure?",
    answer:
      "I prioritize tasks, break them into smaller manageable steps, and maintain open communication with my team to ensure deadlines are met effectively. I also make sure to take breaks and practice stress-relief techniques such as deep breathing or going for a walk.",
  },
  {
    question: "How do you handle conflicts in a team?",
    answer:
      "I approach conflicts with a calm and open-minded attitude, listening to all perspectives and working towards finding a mutually beneficial resolution. I believe clear communication and compromise are key in resolving conflicts.",
  },
  {
    question: "Tell me about a time when you had to learn something new quickly.",
    answer:
      "In my previous role, I was tasked with learning a new software program within a short timeframe. I dedicated extra hours to self-study, utilized online tutorials, and sought guidance from colleagues, enabling me to become proficient in the software ahead of schedule.",
  },
  {
    question: "Do you have any questions for us?",
    answer:
      "Yes, I am curious to learn more about [specific aspect of the company, such as company culture, opportunities for growth, or current projects]. Additionally, I would like to know more about the team dynamics and how this role contributes to the company's objectives.",
  },
  ];

  return (
    <div className="my-15 max-w-[1200px] w-[90%] mx-auto">
      {/* Section Title */}
      <h1 className="text-[#00AEFF] text-[30px] font-semibold mb-10 text-left">
        HR Interview Questions & Answers
      </h1>

      {/* Accordion List */}
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`w-full rounded-lg overflow-hidden mb-1 ${
              isOpen
                ? "border border-[#00AEFF] shadow-[0_6px_15px_rgba(0,174,255,0.2)]"
                : "border border-transparent"
            }`}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <p className="font-normal text-black">{faq.question}</p>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Dropdown Content */}
            {isOpen && (
              <div className="px-6 pb-4">
                <p className="text-gray-500 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}

            {/* Blue Bottom Line */}
            {isOpen && <div className="h-2 bg-[#00AEFF] w-full rounded-b-lg" />}
          </div>
        );
      })}
    </div>
  );
};

export default InterviewQue;
