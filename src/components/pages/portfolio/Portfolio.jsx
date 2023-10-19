import { useEffect, useState } from "react";
import "./Portfolio.css";
import AnimatedLetters from "../../AnimatedLetters";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PortfolioCard from "./PortfolioCard";
import { useTranslation } from "react-i18next";
import es from "/src/components/data/projects/es.json?url";
import en from "/src/components/data/projects/en.json?url";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [datos, setDatos] = useState([]);
  const { t, i18n } = useTranslation();
  let urlBase = i18n.language === "es" ? es : en;
  let etiquetas = t("portfolio.tags");

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
  }, [datos, urlBase]);

  return (
    <div>
      <div className="project__header">
        <span className="mr-2 tags">&lt;h1&gt;</span>
        <h1 className="text-3xl sm:text-4xl">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t("portfolio.title")}
            idx={7}
          />
          <span className="ml-2 tags">&lt;/h1&gt;</span>
        </h1>
      </div>

      <div className="project__container">
        <Tabs>
          <TabList>
            {etiquetas?.map((item, i) => (
              <Tab key={i}>{item}</Tab>
            ))}
          </TabList>
          <div>
            {datos?.map((categ, index) => (
              <TabPanel key={index}>
                <div className="flex flex-wrap justify-center gap-6 pt-6">
                  {categ.name?.map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
