import { useEffect, useState } from "react";
import "./Skill.css";
import AnimatedLetters from "../../AnimatedLetters";
import es from "/src/components/data/study/es.json?url";
import en from "/src/components/data/study/en.json?url";

import BoxE from "../../Box/BoxE";
import { useTranslation } from "react-i18next";

const Skill = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [datos, setDatos] = useState([]);
  const { i18n } = useTranslation();
  
  const { t } = useTranslation();
  let urlBase = i18n.language === "es" ? es : en;

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  useEffect(() => {
    try {
      TagCanvas.Start("myCanvas", "tags");
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(urlBase);
      const data = await res.json();
      setDatos(data);
    };

    getData();
  }, [urlBase]);

  return (
    <div className="skill">
      <div>
        <span className="mr-2 tags">&lt;h1&gt;</span>
        <h1 className="text-3xl sm:text-4xl">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t("education.title")}
            idx={7}
          />
          <span className="ml-2 tags">&lt;/h1&gt;</span>
        </h1>
        <p>{t("education.description1")}</p>
      </div>

      <div>
        <div className="skill__box">
          <div className="flex flex-col gap-4 skill__box_1">
            {datos?.map((item) => (
              <BoxE key={item.id} {...item} />
            ))}
          </div>
          <div className="skill__box_2">
            <div id="myCanvasContainer">
              <canvas width="300" height="300" id="myCanvas">
                <p>
                  In Internet Explorer versions up to 8, things inside the
                  canvas are inaccessible!
                </p>
              </canvas>
            </div>

            <div id="tags">
              <ul>
                <li>
                  <a>Google</a>
                </li>
                <li>
                  <a>HTML5</a>
                </li>
                <li>
                  <a>CSS3</a>
                </li>
                <li>
                  <a>Javascript</a>
                </li>
                <li>
                  <a>JQuery</a>
                </li>
                <li>
                  <a>Bootstrap</a>
                </li>
                <li>
                  <a>Tailwind</a>
                </li>
                <li>
                  <a>Git</a>
                </li>
                <li>
                  <a>GitHub</a>
                </li>
                <li>
                  <a>Api</a>
                </li>
                <li>
                  <a>React</a>
                </li>
                <li>
                  <a>React-Router-Dom</a>
                </li>
                <li>
                  <a>Hooks</a>
                </li>
                <li>
                  <a>Node</a>
                </li>
                <li>
                  <a>Express</a>
                </li>
                <li>
                  <a>SQL</a>
                </li>
                <li>
                  <a>Postgres</a>
                </li>
                <li>
                  <a>MySQL</a>
                </li>
                <li>
                  <a>Sequelize</a>
                </li>
                <li>
                  <a>Ejs</a>
                </li>
                <li>
                  <a>Pug</a>
                </li>
                <li>
                  <a>Moodle</a>
                </li>
                <li>
                  <a>Wordpress</a>
                </li>
                <li>
                  <a>Trabajo en Equipo</a>
                </li>
                <li>
                  <a>Responsabilidad</a>
                </li>
                <li>
                  <a>Scrum Master</a>
                </li>
                <li>
                  <a>Figma</a>
                </li>
                <li>
                  <a>VSC</a>
                </li>
                <li>
                  <a>Windows</a>
                </li>
                <li>
                  <a>Terminal</a>
                </li>
                <li>
                  <a>Ubuntu</a>
                </li>
                <li>
                  <a>Figma</a>
                </li>
                <li>
                  <a>Context</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
