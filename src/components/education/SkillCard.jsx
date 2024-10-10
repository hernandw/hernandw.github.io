

const SkillCard = ({skillName, src}) => {
  return (
    <div className="flex w-[80px] flex-col flex-wrap bg-[#dee6f8] text-black justify-center items-center rounded-xl gap-4 mb-4 p-2 transform transition-transform duration-300 hover:translate-y-[-10px] hover:opacity-75">
        
       <div> 
       <img className="w-[40px]" src={src} alt={skillName} />
       </div>
       <div>
       <p className=" text-sm font-semibold italic">{skillName}</p>
       </div>

    </div>
  )
}

export default SkillCard