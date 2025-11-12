import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const InterviewQue = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What is the course duration for Software Programming at Ocean Academy?",
      answer:
        "The duration depends on the program. Most courses range from 3 to 6 months, with flexible batch timings.",
    },
    {
      question: "Do you provide placement support after course completion?",
      answer:
        "Yes, placement guidance and mock interviews are provided to help students prepare for real-world job opportunities.",
    },
    {
      question: "Are weekend batches available for working professionals?",
      answer:
        "Absolutely. We have weekend and evening batches designed to suit the schedules of working professionals.",
    },
  ];

  return (
    <div className="my-15  max-w-[1200px] w-[90%] mx-auto">
      {/* Section Title */}
      <h1 className="text-[#00AEFF] text-[30px]  font-semibold mb-10 text-left">
        HR Interview Questions & Answers
      </h1>

      {/* Accordion List */}
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`w-full rounded-lg overflow-hidden transition-all duration-200 mb-10 ${isOpen ? "border border-[#00AEFF]" : "border border-transparent"
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
            <div
              className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 px-6 pb-4" : "max-h-0 px-6 pb-0"
                }`}
            >
              <p className="text-gray-500 font-medium leading-relaxed">
                {faq.answer}
              </p>
            </div>

            {/* Blue Bottom Line */}
            {isOpen && <div className="h-2 bg-[#00AEFF] w-full rounded-b-lg" />}
          </div>
        );
      })}
    </div>
  );
};

export default InterviewQue;
