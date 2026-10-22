/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    // CAMBIO: Si no hay nada guardado, por defecto será 'es' (Español)
    return localStorage.getItem('portfolio_lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', locale);
  }, [locale]);

  const switchLanguage = (lang) => {
    if (translations[lang]) {
      setLocale(lang);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);