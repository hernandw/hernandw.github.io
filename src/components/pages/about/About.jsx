import { useEffect, useState } from "react";
import "./About.css";
import AnimatedLetters from "../../AnimatedLetters";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <div className="about">
      <div className="w-full lg:w-1/2">
        <span className="mr-2 tags">&lt;h1&gt;</span>
        <h1 className="text-3xl sm:text-4xl">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t("about.title")}
            idx={7}
          />
          <span className="ml-2 tags">&lt;/h1&gt;</span>
        </h1>
        <p>{t("about.description1")}</p>
        <p>{t("about.description2")}</p>
        <p>{t("about.description3")}</p>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="circle-container">
          <div className="social">
            <NavLink
              to="https://twitter.com/hernandw"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter size={18} />
            </NavLink>
          </div>
          <div className="social">
            <NavLink
              rel="noreferrer"
              target="_blank"
              to="https://www.linkedin.com/in/hernandw/"
            >
              <FaLinkedin size={18} />
            </NavLink>
          </div>
          <div className="social">
            <NavLink
              rel="noreferrer"
              target="_blank"
              to="https://github.com/hernandw"
            >
              <FaGithub size={18} />
            </NavLink>
          </div>
          <div className="social">
            <NavLink to="https://www.williamshernandez.com/">
              <FaGlobe size={18} />
            </NavLink>
          </div>
          <div className="social">
            <NavLink
              rel="noreferrer"
              target="_blank"
              to="https://www.instagram.com/hernandwcode/"
            >
              <FaInstagram size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
