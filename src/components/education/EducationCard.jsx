/* eslint-disable react/prop-types */
import { FaCalendarAlt, FaAward, FaUniversity } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const EducationCard = ({ es, en }) => {
  const { locale } = useLanguage();
  const data = locale === 'en' ? en : es;

  return (
    <div className="flex flex-col w-[100%] bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white rounded-xl gap-2 mb-4 p-6 shadow-md dark:shadow-none border border-gray-200 dark:border-transparent transition-colors duration-300">
      <div className="flex gap-4 items-center text-gray-600 dark:text-gray-300">
        <FaCalendarAlt className="text-[#dfa400]" />
        <p>{data.passingYear}</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaAward className="text-[#dfa400]" />
        <p className="text-xl font-bold">{data.degreeTitle}</p>
      </div>
      <div className="flex gap-4 items-center text-gray-600 dark:text-gray-300">
        <FaUniversity className="text-[#dfa400]" />
        <p>{data.instituteName}</p>
      </div>
    </div>
  );
};

export default EducationCard;