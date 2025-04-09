
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Language = 'english' | 'hindi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isHindi: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    // Check browser language
    const detectLanguage = () => {
      const browserLang = navigator.language;
      // Check if the browser language is Hindi (hi) or English (en)
      if (browserLang.startsWith('hi')) {
        setLanguage('hindi');
        setIsHindi(true);
      } else {
        setLanguage('english');
        setIsHindi(false);
      }
    };

    // Try to detect location/language
    try {
      detectLanguage();
    } catch (error) {
      console.error('Error detecting language:', error);
      // Default to English if there's an error
      setLanguage('english');
      setIsHindi(false);
    }
  }, []);

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsHindi(lang === 'hindi');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, isHindi }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
