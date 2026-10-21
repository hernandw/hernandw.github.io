import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector = () => {
  const { locale, switchLanguage } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 bg-gray-800/40 p-1 rounded-lg border border-gray-700/50">
      <button
        onClick={() => switchLanguage('es')}
        className={`p-1.5 rounded-md transition-all text-lg leading-none ${
          locale === 'es' 
            ? 'bg-blue-600/80 shadow-sm scale-110' 
            : 'opacity-50 hover:opacity-100 hover:scale-105'
        }`}
        title="Cambiar a Español"
        aria-label="Español"
      >
        🇪🇸
      </button>

      <button
        onClick={() => switchLanguage('en')}
        className={`p-1.5 rounded-md transition-all text-lg leading-none ${
          locale === 'en' 
            ? 'bg-blue-600/80 shadow-sm scale-110' 
            : 'opacity-50 hover:opacity-100 hover:scale-105'
        }`}
        title="Switch to English"
        aria-label="English"
      >
        🇺🇸
      </button>
    </div>
  );
};