import es from "/assets/icons/es.svg";
import en from "/assets/icons/en.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaUserLarge,
  FaHouse,
  FaBriefcase,
  FaBlog,
  FaNewspaper,
  FaPhoneVolume,
  FaUserGraduate,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import './Header.css'

const Header = () => {
      const [nav, setNav] = useState(false);
      const { i18n } = useTranslation();
  return (
    <div>
      {/* MENU MOBILE */}
      <div className="nav__mobile">
        <div className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-white border-2 rounded-full font-signature">
          Wh
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <img
              onClick={() => i18n.changeLanguage("es")}
              className="banderas"
              src={es}
              alt="Español"
            />
          </div>

          <div>
            <img
              onClick={() => i18n.changeLanguage("en")}
              className="banderas"
              src={en}
              alt="Ingles"
            />
          </div>
        </div>
        <div
          className="pr-4 text-white cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {/* MENU MOBILE DESPLEGABLE */}
        {/* {nav && (
          <nav className="flex items-center justify-around w-full text-gray-500 bg-gradient-to-b from-black to-gray-800 nav__aside">
            <NavLink to="/home" activeclassname="active" className="home-link">
              <FaHouse size={25} />
            </NavLink>

            <NavLink
              to="/about"
              activeclassname="active"
              className="about-link"
            >
              <FaUserLarge size={25} />
            </NavLink>

            <NavLink
              to="/resume"
              activeclassname="active"
              className="resume-link"
            >
              <FaNewspaper size={25} />
            </NavLink>
            <NavLink
              to="/skill"
              activeclassname="active"
              className="skill-link"
            >
              <FaUserGraduate size={25} />
            </NavLink>

            <NavLink
              to="/portfolio"
              activeclassname="active"
              className="portfolio-link"
            >
              <FaBriefcase size={25} />
            </NavLink>

            <NavLink to="/blog" activeclassname="active" className="blog-link">
              <FaBlog size={25} />
            </NavLink>

            <NavLink
              to="/contact"
              activeclassname="active"
              className="contact-link"
            >
              <FaPhoneVolume size={25} />
            </NavLink>
          </nav>
        )} */}
        {nav && (
          <div className="text-gray-500 mobile__menu_desplegable bg-gradient-to-b from-black to-gray-800 ">
            <NavLink to="/home" activeclassname="active" className="home-link">
              <FaHouse size={25} />
            </NavLink>

            <NavLink
              to="/about"
              activeclassname="active"
              className="about-link"
            >
              <FaUserLarge size={25} />
            </NavLink>

            <NavLink
              to="/resume"
              activeclassname="active"
              className="resume-link"
            >
              <FaNewspaper size={25} />
            </NavLink>
            <NavLink
              to="/skill"
              activeclassname="active"
              className="skill-link"
            >
              <FaUserGraduate size={25} />
            </NavLink>

            <NavLink
              to="/portfolio"
              activeclassname="active"
              className="portfolio-link"
            >
              <FaBriefcase size={25} />
            </NavLink>

            <NavLink to="/blog" activeclassname="active" className="blog-link">
              <FaBlog size={25} />
            </NavLink>

            <NavLink
              to="/contact"
              activeclassname="active"
              className="contact-link"
            >
              <FaPhoneVolume size={25} />
            </NavLink>
          </div>
        )}
      </div>

      {/* MENU LATERAL */}

      <div className="nav__lateral">
        <div className="nav__aside">
          <div className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-white border rounded-full font-signature logo">
            Wh
          </div>
          <nav className="flex flex-col items-center justify-center w-20 pt-20 text-white ">
            <hr />
            <NavLink to="/home" activeclassname="active" className="home-link">
              <FaHouse size={25} />
            </NavLink>
            <hr />
            <NavLink
              to="/about"
              activeclassname="active"
              className="about-link"
            >
              <FaUserLarge size={25} />
            </NavLink>
            <hr />
            <NavLink
              to="/resume"
              activeclassname="active"
              className="resume-link"
            >
              <FaNewspaper size={25} />
            </NavLink>
            <hr />
            <NavLink
              to="/skill"
              activeclassname="active"
              className="skill-link"
            >
              <FaUserGraduate size={25} />
            </NavLink>
            <hr />
            <NavLink
              to="/portfolio"
              activeclassname="active"
              className="portfolio-link"
            >
              <FaBriefcase size={25} />
            </NavLink>
            <hr />
            <NavLink to="/blog" activeclassname="active" className="blog-link">
              <FaBlog size={25} />
            </NavLink>
            <hr />
            <NavLink
              to="/contact"
              activeclassname="active"
              className="contact-link"
            >
              <FaPhoneVolume size={25} />
            </NavLink>
            <hr />
          </nav>
          <div className="flex flex-col gap-4 mt-20">
            <div>
              <img
                onClick={() => i18n.changeLanguage("es")}
                className="banderas"
                src={es}
                alt="Español"
              />
            </div>

            <div>
              <img
                onClick={() => i18n.changeLanguage("en")}
                className="banderas"
                src={en}
                alt="Ingles"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
