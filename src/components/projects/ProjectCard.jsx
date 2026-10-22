/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const ProjectCard = ({ src, code, demo, tech, es, en }) => {
  const { locale, t } = useLanguage();
  const currentData = locale === 'en' ? en : es;

  return (
    <div className="w-[300px] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="bg-gray-100 dark:bg-black rounded-2xl p-2 overflow-auto border-2 border-[#dfa400] transform transition-transform duration-300 hover:translate-y-[-10px] hover:opacity-90 shadow-md">
        <img className="rounded-2xl w-[280px] h-[210px] object-cover" src={src} alt={currentData.title} />
      </div>
      <h2 className="text-xl font-bold py-2">{currentData.title}</h2>
      <p className="text-sm font-thin text-gray-600 dark:text-gray-300">{currentData.description}</p>
      <div>
        {tech.map((item, index) => (
          <button className="bg-gray-200 dark:bg-[#0f172a] text-gray-800 dark:text-white rounded-lg text-xs p-1 mx-1 font-bold mt-2 lg:mt-4 hover:bg-[#dfa400] hover:text-white transition-colors" key={index}>
            {item}
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-2">
        <Link to={demo} target="_blank" rel="noopener noreferrer" className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-[100px] mt-2 lg:mt-4 hover:bg-gray-200 dark:hover:bg-white hover:text-[#dfa400] text-center transition-colors">
          {t('projects.liveDemo')}
        </Link>
        <Link to={code} target="_blank" rel="noopener noreferrer" className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-[100px] mt-2 lg:mt-4 hover:bg-gray-200 dark:hover:bg-white hover:text-[#dfa400] text-center transition-colors">
          {t('projects.code')}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;