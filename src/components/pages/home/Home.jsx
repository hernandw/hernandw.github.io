import { useEffect, useState } from "react";
import "./Home.css";
import AnimatedLetters from "../../AnimatedLetters";
import photo from "/assets/images/profile.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  

  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="template__container">
      <div>
        <h2>
          <span className="mr-2 tags">&lt;h1&gt;</span>
        </h2>
        <h1 className="text-3xl sm:text-4xl">
          <AnimatedLetters
            className="letterClass"
            letterClass={letterClass}
            strArray={[
              "W",
              "i",
              "l",
              "l",
              "i",
              "a",
              "m",
              "s",
              " ",
              "H",
              "e",
              "r",
              "n",
              "á",
              "n",
              "d",
              "e",
              "z",
            ]}
            idx={7}
          />
          <span className="ml-2 tags">&lt;/h1&gt;</span>
        </h1>
        <p className="mt-4">{t("home.description1")}</p>
        <p className="mt-4 mb-4">{t("home.description2")}</p>
        {/* <div className="scroller">
          <span>
            <p>{t("home.scroll1")}</p>
            <p>{t("home.scroll2")}</p>
            <p>{t("home.scroll3")}</p>
            <p>{t("home.scroll4")}</p>
          </span>
        </div> */}
        <p className="mt-4"></p>
        <p></p>
        <div className="flat-button">
          <NavLink to="/contact">{t("home.button")}</NavLink>
        </div>
        
      </div>

      <div>
        <img src={photo} alt="Williams Hernández" />
      </div>
    </div>
  );
};

export default Home;
