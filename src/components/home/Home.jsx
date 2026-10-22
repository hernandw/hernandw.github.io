import { useEffect, useState } from "react"
import { useLanguage } from "../../context/LanguageContext"
import './Home.css'

const Home = () => {
  const { t, locale } = useLanguage();
  const texts = t('home.roles');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [locale]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);  
    }, 2000); 

    return () => clearInterval(interval);  
  }, [texts.length]);

  return (
    <div className="flex flex-col md:flex-row md:px-12 md:gap-12 pt-4 md:py-2 items-center md:pl-28 md:pr-10 justify-center text-gray-900 dark:text-white transition-colors duration-300">
      <div className="md:w-1/2 md:h-[94vh]">
        <div className="space-y-12 md:space-y-24 font-bold">
          <div className="hidden md:block">
            <a href="mailto:hernandw@gmail.com" className="hover:text-[#dfa400]">hernandw@gmail.com</a>
          </div>
          <div className="flex flex-col md:p-30">
            <p className="md:text-2xl">{t('home.greeting')}</p>
            <h1 className="text-3xl md:text-4xl py-4">Williams Hernández</h1>
            <div className="text-container">
              <p key={index} className="animated-text">{texts[index]}</p>
            </div>
            <p className="text-xl font-thin text-gray-600 dark:text-gray-300">{t('home.description')}</p>
            <button className="bg-[#dfa400] text-white p-2 rounded-lg w-[120px] mt-8 hover:bg-gray-200 dark:hover:bg-white hover:text-[#dfa400] transition-colors">
              <a href="/contact">{t('home.getInTouch')}</a>
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="flex justify-center items-center md:h-full">
          <img className="w-[200px] md:w-[95%]" src="./images/profile.png" alt="Williams Hernández" />
        </div>
      </div>
    </div>
  )
}

export default Home;