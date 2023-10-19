import { useEffect, useState } from "react";
import "./Blog.css";
import AnimatedLetters from "../../AnimatedLetters";
import art1 from "/assets/images/art1.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div>
      <div className="project__header">
        <span className="mr-2 tags">&lt;h1&gt;</span>
        <h1 className="text-3xl sm:text-4xl">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t("blog.title")}
            idx={7}
          />
          <span className="ml-2 tags">&lt;/h1&gt;</span>
        </h1>
        <p>{t("blog.description1")}</p>
      </div>

      <div>
        <div className="cards cards--three">
          <img src={art1} className="img-responsive" alt="" />
          <span className="cards--three__rect-1">
            <span className="shadow-1"></span>
            <p>
              <NavLink
                to="https://www.linkedin.com/pulse/servidor-con-node-express-ejs-williams-hernandez-ardila/?trackingId=gFRzS9xLSWKcCAWDv4MZ%2Fg%3D%3D"
                rel="noopener noreferrer"
                target="_blank"
              >
                Servidor con Node + Express + EJS
              </NavLink>
            </p>
          </span>
          <span className="cards--three__rect-2">
            <span className="shadow-2"></span>
          </span>
          <span className="cards--three__circle"></span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
