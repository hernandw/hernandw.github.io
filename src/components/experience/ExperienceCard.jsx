/* eslint-disable react/prop-types */
import { useLanguage } from "../../context/LanguageContext";

const ExperienceCard = ({ es, en }) => {
    const { locale } = useLanguage();
    const data = locale === 'en' ? en : es;

    return (
        <div className="flex flex-col lg:flex-row bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white rounded-xl gap-6 mb-4 p-6 shadow-md dark:shadow-none border border-gray-200 dark:border-transparent transition-colors duration-300">
            <div className="lg:w-1/3">
                <p className="font-bold text-2xl">{data.jobPosition}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{data.jobCompany} | {data.jobModality}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{data.jobDate}</p>
                <button className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-[120px] mt-2 lg:mt-4 hover:bg-gray-200 dark:hover:bg-white hover:text-[#dfa400] transition-colors">
                    {data.jobFrecuency}
                </button>
            </div>
            <div className="lg:w-2/3 lg:border-l-2 lg:border-gray-300 dark:lg:border-gray-700 lg:px-6">
                <p className="font-bold uppercase pb-4 text-xl">{data.jobCompany}</p>
                <ul>
                    {data.jobDescription.map((item, index) => (
                        <li className="text-sm list-inside list-disc text-gray-600 dark:text-gray-300" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;