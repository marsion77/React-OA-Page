import HeadSection from "./HeaderSection";
import DeveloperSection from "./DeveloperSection";
import TechSection from "./TechSection";
import InterviewQue from "./InterviewQue";



const TechnicalPage = () => {
    return (
        <>
            <HeadSection />
           <div className="w-[95%] mx-auto">
             <DeveloperSection/>
            <TechSection/>
            <InterviewQue/>
           </div>
        </>
    )
}

export default TechnicalPage;