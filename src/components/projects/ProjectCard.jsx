import { Link } from "react-router-dom"


const ProjectCard = ({src,title, description, demo, code, tech}) => {
  return (
    <div className="w-[300px]">
      <div className="bg-black rounded-2xl p-2 overflow-auto border-2 border-[#dfa400] transform transition-transform duration-300 hover:translate-y-[-10px] hover:opacity-70">
        <img  className="rounded-2xl w-[280px] h-[210px]" src={src} alt={title} />
      </div>
      <h2 className="text-xl font-bold py-2">{title}</h2>
      <p className="text-sm font-thin text-gray-300">{description}</p>
      <div>
        {tech.map((item, index) => (
          <button className="bg-[#0f172a] text-white rounded-lg text-xs p-1 mx-1 font-bold mt-2 lg:mt-4 hover:bg-white hover:text-[#dfa400]" key={index}>{item}</button>
        ))}
      </div>

      <div className="flex justify-between pt-2">
      <Link to={demo} target="_blank" className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-[100px] mt-2 lg:mt-4 hover:bg-white hover:text-[#dfa400] text-center">Live Demo</Link>
      <Link to={code} target="_blank" className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-[100px] mt-2 lg:mt-4 hover:bg-white hover:text-[#dfa400] text-center">Code</Link>
      </div>
    </div>
  )
}

export default ProjectCard