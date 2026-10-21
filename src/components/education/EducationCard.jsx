/* eslint-disable react/prop-types */
import { FaCalendarAlt, FaAward, FaUniversity } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const EducationCard = ({ es, en }) => {
  const { locale } = useLanguage();
  const data = locale === 'en' ? en : es;

  return (
    <div className="flex flex-col w-[100%] bg-[#0f172a] rounded-xl gap-2 mb-4 p-6">
      <div className="flex gap-4 items-center">
        <FaCalendarAlt />
        <p>{data.passingYear}</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaAward />
        <p className="text-xl font-bold">{data.degreeTitle}</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaUniversity />
        <p>{data.instituteName}</p>
      </div>
    </div>
  );
};

export default EducationCard;