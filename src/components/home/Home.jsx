import { useEffect, useState } from "react"
import './Home.css'


const Home = () => {
  const texts = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Teacher IT"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);  // Cicla entre los textos
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);  // Limpiar el intervalo cuando el componente se desmonte
  }, [texts.length]);// Cambia cada 2 segundos


  return (
    <div className="flex flex-col md:flex-row md:px-12 md:gap-12 pt-4 md:py-2 items-center md:pl-28 md:pr-10  justify-center">
      <div className="md:w-1/2  md:h-[94vh]">
        <div className="space-y-12 md:space-y-24 font-bold">
          <div className="hidden md:block">
            <a href="mailto:hernandw@gmail.com" className="hover:text-[#dfa400]">hernandw@gmail.com</a>
          </div>
          <div className="flex flex-col md:p-30">
            <p className="md:text-2xl">Hello, My name is</p>
            <h1 className=" text-3xl md:text-4xl py-4">Williams Hernández</h1>
            <div className="text-container">
              <p key={index} className="animated-text">{texts[index]}</p>
            </div>
            <p className="text-xl font-thin">I focused on crafting clean & user‑friendly experiences. I am
              passionate about building excellent software that improves the lives
              of those around me.</p>
            <button className="bg-[#dfa400] text-white p-2 rounded-lg w-[100px] mt-8 hover:bg-white hover:text-[#dfa400]"><a href="/contact">Get in touch</a></button>
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

export default Home