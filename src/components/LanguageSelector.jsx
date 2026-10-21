
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector = () => {
  const { locale, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-800/80 p-1 rounded-lg border border-gray-700 shadow-md">
      <button
        onClick={() => switchLanguage('es')}
        className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
          locale === 'es' 
            ? 'bg-blue-600 text-white shadow' 
            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
        }`}
        title="Español"
      >
        ES
      </button>

      <button
        onClick={() => switchLanguage('en')}
        className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
          locale === 'en' 
            ? 'bg-blue-600 text-white shadow' 
            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};