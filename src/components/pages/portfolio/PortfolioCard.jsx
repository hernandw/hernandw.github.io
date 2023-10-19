import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PortfolioCard = ({ project }) => {
  const { t } = useTranslation();
  return (
    <article className="card card--1">
      <div className="card__info-hover"></div>
      <div className="card__img"></div>
      <a href="#" className="card_link">
        <img className="card__img--hover" src={project.img} alt="" />
      </a>
      <div className="card__info">
        <span className="card__category"> {project.title}</span>
        <h3 className="text-red-500 card__title">{project.subTitle}</h3>
        <span className="card__by">
          by{" "}
          <div className="flex justify-between">
            <Link to={project.demoLink} target="_blank" className=" btn btn-card">
              {t("portfolio.button.demo")}
            </Link>
            <Link to ={project.codeLink} target="_blank" className="btn-card">{t("portfolio.button.code")}</Link>
          </div>
        </span>
      </div>
    </article>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default PortfolioCard;
