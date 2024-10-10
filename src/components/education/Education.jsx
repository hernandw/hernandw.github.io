import education from '../../data/education.json';

import EducationCard from "./EducationCard";
import SkillCard from './SkillCard';




const Education = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:pl-28 md:pr-10  '>
    <div className="w-full h-full p-2 ">
      <h1 className="text-4xl font-bold pb-10">Education</h1>
      <div>
      <div>
      {education.education.map((item) => (
            <EducationCard key={item.id} {...item} />
          ))}
      </div>
      <div>

      </div>
      </div>
    </div>
    <div className="w-full h-full p-2">
      <h1 className="text-4xl font-bold pb-10">Skill</h1>
      <div>
      <div className='flex w-[100%] flex-wrap gap-6 justify-center md:justify-start'>
      {education.skill.map((item) => (
            <SkillCard key={item.id} {...item} />
          ))}
      </div>
      <div>

      </div>
      </div>
    </div>
    </div>
  )
}

export default Education