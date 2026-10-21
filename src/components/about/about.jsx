import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext"; // <--- Importamos el hook de idioma

const About = () => {
  const { t } = useLanguage();

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
              <a href="https://x.com/hernandw" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-20 -left-24" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://www.instagram.com/hernandwcode" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2
                absolute -top-10 -left-16" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://www.linkedin.com/in/hernandw/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-6 -left-4" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://github.com/hernandw" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-10 -right-16" size={36} />
              </a>
            </div>
            <div className=" flex justify-center items-center rounded-full relative">
              <a href="https://www.williamshernandez.com/" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="text-white bg-black hover:bg-[#dfa400] p-2 rounded-full border-2 absolute -top-20 -right-24" size={36} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-6 text-gray-400">{t('about.role')}</p>
          <h1 className="text-3xl font-bold text-center">Williams Hernández</h1>
        </div>
      </div>
      <div className=" mt-6 text-gray-300 space-y-4 md:w-1/2 md:mt-32">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{t('about.biography')}</h2>
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
      </div>
    </div>
  )
}

export default About;