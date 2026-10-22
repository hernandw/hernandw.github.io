/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const ProjectCard = ({ src, code, demo, tech, es, en }) => {
  const { locale, t } = useLanguage();
  const currentData = locale === 'en' ? en : es;

  return (
    <div className="w-[340px] bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white rounded-2xl p-5 shadow-lg border border-gray-300 dark:border-gray-800 flex flex-col justify-between transition-colors duration-300">
      <div>
        {/* Contenedor de la imagen */}
        <div className="bg-gray-100 dark:bg-black rounded-xl p-2 overflow-hidden border-2 border-[#dfa400] mb-4">
          <img className="rounded-xl w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-105" src={src} alt={currentData.title} />
        </div>

        {/* Título y Descripción */}
        <h2 className="text-xl font-bold py-2">{currentData.title}</h2>
        <p className="text-sm font-thin text-gray-600 dark:text-gray-300 mb-4">{currentData.description}</p>
        
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map((item, index) => (
            <span className="bg-gray-200 dark:bg-[#1e293b] text-gray-800 dark:text-gray-200 rounded-md text-xs px-2 py-1 font-semibold" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Botones inferiores */}
      <div className="flex justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-800">
        <Link to={demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#dfa400] text-white font-bold py-2 rounded-lg hover:bg-amber-600 text-center transition-colors">
          {t('projects.liveDemo')}
        </Link>
        <Link to={code} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#dfa400] text-white font-bold py-2 rounded-lg hover:bg-amber-600 text-center transition-colors">
          {t('projects.code')}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;