

const ExperienceCard = ({ jobPosition, jobDescription, jobFrecuency, jobDate, jobCompany, jobModality }) => {
    return (
        <div className="flex flex-col lg:flex-row bg-[#0f172a] rounded-xl gap-6 mb-4 p-6">
            <div className="lg:w-1/3">
                <p className="font-bold text-2xl">{jobPosition}</p>
                <p className="text-sm">{jobCompany}  | { jobModality}</p>
                <p className="text-sm">{jobDate}</p>
                <button className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-[100px] mt-2 lg:mt-4 hover:bg-white hover:text-[#dfa400]">{jobFrecuency}</button>
            </div>
            <div className="lg:w-2/3 lg:border-l-2 lg:px-6">
                <p className="font-bold uppercase pb-4 text-xl">{jobCompany}</p>
                <ul>
          {jobDescription.map((item, index) => (
            <li className="text-sm list-inside list-disc text-gray-300" key={index}>{item}</li>
          ))}
        </ul>
                
            </div>
        </div>
    )
}

export default ExperienceCard