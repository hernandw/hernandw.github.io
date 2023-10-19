import { useEffect, useState } from "react";
import AnimatedLetters from "../../AnimatedLetters";
import Box from "../../Box/Box";
import es from "/src/components/data/work/es.json?url";
import en from "/src/components/data/work/en.json?url";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [datos, setDatos] = useState([]);
  const { i18n, t } = useTranslation();

  let urlBase = i18n.language === "es" ? es : en;

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
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
    <div className="resume">
      <div>
        <span className="mr-2 tags">&lt;h1&gt;</span>
        <h1 className="text-3xl sm:text-4xl">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t("resume.title")}
            idx={7}
          />
          <span className="ml-2 tags">&lt;/h1&gt;</span>
        </h1>
        <p className="mb-8">{t("resume.description1")}</p>
        <p className="mb-8">{t("resume.description2")}</p>
        <p className="mb-8">{t("resume.description3")}</p>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          {datos.map((item) => (
            <Box key={item.id} {...item} />
          ))}
        </div>

        <p id="work.id" />
      </div>
    </div>
  );
};

export default Resume;
