import experience from "../../data/experience.json";
import ExperienceCard from "./ExperienceCard";
import { useLanguage } from "../../context/LanguageContext"; // <--- Importamos el hook

const Experience = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full p-2 md:pl-28 md:pr-10 pt-16">
      <h1 className="text-4xl font-bold pb-10">{t('experience.title')}</h1>
      <div>
        {experience.experience.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Experience;