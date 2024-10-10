import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";



const about = () => {
  return (
    <div className="md:flex justify-center">
      <div className="md:w-1/2">
        <div>
          <div className="flex justify-center pt-28">
            <div className="w-[300px] h-[300px] bg-[#f8f7f7] rounded-full overflow-auto border-4 border-[#dfa400] ">
              <img src="./images/about.png" alt="Williams Hernandez" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://x.com/hernandw" target="_blank">
                <FaTwitter className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-20 -left-24" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://www.instagram.com/hernandwcode" target="_blank">
                <FaInstagram className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2
                absolute -top-10 -left-16" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://www.linkedin.com/in/hernandw/" target="_blank">
                <FaLinkedinIn className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-6 -left-4" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://github.com/hernandw" target="_blank">
                <FaGithub className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-10 -right-16" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://www.williamshernandez.com/" target="_blank">
                <FaGlobe className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-20 -right-24" size={36} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-6 text-gray-400">Full Stack Developer</p>
          <h1 className="text-3xl font-bold text-center">Williams Hernández</h1>
        </div>
      </div>
      <div className=" mt-6 text-gray-300 space-y-4 md:w-1/2 md:mt-32">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Biography</h2>
        <p>
          As a web developer, I am committed to continuous learning in CSS,
          JS, React, and Express. My goal is to enrich the business model and
          enhance the user experience.
        </p>
        <p>
          I am passionate about building excellent software that improves the
          lives of those around me.
        </p>
        <p>
          What sets me apart is my ability to translate ideas into functional
          and appealing code. Alongside my strong command of HTML, CSS, and
          JavaScript, I excel in teamwork, effective communication, and agile
          adaptation to new challenges. My aim is not just to produce code but
          also to provide effective and enjoyable solutions for users.
        </p>
      </div>
    </div>
  )
}

export default about