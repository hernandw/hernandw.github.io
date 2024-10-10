import ProjectCard from './ProjectCard'
import projects from '../../data/projects.json'

const Projects = () => {
  return (
    <div className="w-full h-full p-2 md:pl-28 md:pr-10 pt-16 ">
      <h1 className="text-4xl font-bold pb-10">My Projects</h1>
      <div className=' flex flex-wrap flex-col md:flex-row justify-center items-center md:items-start md:justify-start  gap-10'>

        {projects.projects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}


      </div>
    </div>
  )
}

export default Projects