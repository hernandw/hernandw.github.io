import { FaCalendarAlt, FaAward, FaUniversity  } from "react-icons/fa";


const EducationCard = ({passingYear, degreeTitle, instituteName}) => {
  return (
    <div className="flex flex-col w-[100%]  bg-[#0f172a] rounded-xl gap-2 mb-4 p-6">
      <div className="flex gap-4">
      <FaCalendarAlt />
      <p> {passingYear}</p>
      </div>
      <div className="flex gap-4">
      <FaAward /><p className="text-xl font-bold">{degreeTitle}</p>
      </div>
      <div className="flex gap-4">
      <FaUniversity /><p>{instituteName}</p>
      </div>

    </div>
  )
}

export default EducationCard