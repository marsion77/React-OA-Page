import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const InterviewQue = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-10 mx-[5%]">
      {/* Section Title (Right-aligned) */}
      <h1 className="text-[#00AEFF] text-xl font-semibold mb-6 text-left">
        HR Interview Questions & Answers
      </h1>

      {/* Accordion Card */}
      <div
        className={`w-full border rounded-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "border-[#00AEFF]" : "border-gray-200"
        }`}
      >
        {/* Question Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-6 py-4 text-left"
        >
          <p className="font-medium text-gray-800">
            What is the course duration for Software Programming at Ocean Academy?
          </p>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Dropdown Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-40 px-6 pb-4" : "max-h-0 px-6 pb-0"
          }`}
        >
          <p className="text-gray-600 text-sm leading-relaxed">
            The duration depends on the program. Most courses range from 3 to 6 months,
            with flexible batch timings.
          </p>
        </div>

        {/* Blue Bottom Line */}
        {isOpen && <div className="h-[4px] bg-[#00AEFF] w-full rounded-b-lg" />}
      </div>
    </div>
  );
};

export default InterviewQue;
