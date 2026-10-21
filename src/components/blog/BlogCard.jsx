/* eslint-disable react/prop-types */
import { format } from "@formkit/tempo";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const BlogCard = ({ src, date, author, code, es, en }) => {
  const { locale } = useLanguage();
  
  // Selecciona el idioma activo (es o en)
  const currentData = locale === 'en' ? (en || es) : (es || en);
  const langTag = locale === 'en' ? 'en-US' : 'es-ES';

  return (
    <div className="w-[300px] h-[420px] bg-black rounded-2xl p-2 overflow-auto border-2 border-[#dfa400] transform transition-transform duration-300 hover:translate-y-[-10px] hover:opacity-70">
      <div>
        <img className="w-full transform transition-transform duration-300 hover:translate-y-[-10px] hover:grayscale" src={src} alt={currentData?.title || "Blog post"} />
      </div>
      <p className="text-sm text-gray-400 py-4">
        {format(date, "long", langTag)} by {author}
      </p>
      <Link to={code} target="_blank" rel="noopener noreferrer" className="text-white font-bold p-2 lg:mt-4 hover:text-[#dfa400] text-center block">
        {currentData?.title}
      </Link>
      <p className="py-4 text-sm text-gray-300">{currentData?.description}</p>
    </div>
  );
};

export default BlogCard;