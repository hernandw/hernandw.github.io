/* eslint-disable react/prop-types */
import { format } from "@formkit/tempo";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const BlogCard = ({ src, date, author, code, es, en }) => {
  const { locale, t } = useLanguage();
  const currentData = locale === 'en' ? (en || es) : (es || en);
  const langTag = locale === 'en' ? 'en-US' : 'es-ES';

  return (
    <div className="w-[300px] h-[480px] bg-white dark:bg-black text-gray-900 dark:text-white rounded-2xl p-4 border-2 border-[#dfa400] flex flex-col justify-between transform transition-all duration-300 hover:translate-y-[-10px] hover:opacity-90 shadow-md">
      <div>
        <div className="overflow-hidden rounded-xl mb-3">
          <img className="w-full h-[150px] object-cover transform transition-transform duration-300 hover:scale-105" src={src} alt={currentData?.title || "Blog post"} />
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {format(date, "long", langTag)} by {author}
        </p>

        <Link to={code} target="_blank" rel="noopener noreferrer" className="font-bold text-base hover:text-[#dfa400] block mt-2 line-clamp-2">
          {currentData?.title}
        </Link>
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-4 mt-2">
        {currentData?.description}
      </p>

      <div className="pt-2">
        <Link to={code} target="_blank" rel="noopener noreferrer" className="text-xs text-[#dfa400] font-semibold hover:underline block">
          {t('blog.readMore')} &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;