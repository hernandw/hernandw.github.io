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
    <div className="w-[300px] h-[480px] bg-black rounded-2xl p-4 border-2 border-[#dfa400] flex flex-col justify-between transform transition-transform duration-300 hover:translate-y-[-10px] hover:opacity-70">
      <div>
        {/* Imagen del post */}
        <div className="overflow-hidden rounded-xl mb-3">
          <img className="w-full h-[150px] object-cover transform transition-transform duration-300 hover:scale-105" src={src} alt={currentData?.title || "Blog post"} />
        </div>

        {/* Fecha y Autor */}
        <p className="text-xs text-gray-400">
          {format(date, "long", langTag)} by {author}
        </p>

        {/* Título del post */}
        <Link to={code} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-base hover:text-[#dfa400] block mt-2 line-clamp-2">
          {currentData?.title}
        </Link>
      </div>

      {/* Descripción */}
      <p className="text-xs text-gray-300 line-clamp-4 mt-2">
        {currentData?.description}
      </p>

      {/* Enlace inferior */}
      <div className="pt-2">
        <span className="text-xs text-[#dfa400] font-semibold hover:underline">
          Leer artículo completo &rarr;
        </span>
      </div>
    </div>
  );
};

export default BlogCard;