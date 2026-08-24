import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isArabic: boolean;
  dir: 'ltr' | 'rtl';
  t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const langParam = searchParams.get('lang');

  const [language, setLanguageState] = useState<Language>(() => {
    if (langParam === 'ar') return 'ar';
    if (langParam === 'en') return 'en';
    const saved = localStorage.getItem('morganite_lang');
    if (saved === 'ar' || saved === 'en') return saved;
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('morganite_lang', newLang);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('lang', newLang);
    setSearchParams(newParams, { replace: true });
  };

  useEffect(() => {
    if (langParam === 'ar' && language !== 'ar') {
      setLanguageState('ar');
    } else if (langParam === 'en' && language !== 'en') {
      setLanguageState('en');
    }
  }, [langParam]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const isArabic = language === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  const t = (en: string, ar: string) => (language === 'ar' ? ar : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isArabic, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
