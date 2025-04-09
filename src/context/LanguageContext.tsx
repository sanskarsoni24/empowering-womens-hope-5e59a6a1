
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
    // Check browser language and geolocation for better language detection
    const detectLanguage = async () => {
      try {
        // First check browser language
        const browserLang = navigator.language;
        let detectedLang: Language = 'english';
        
        // Check if the browser language is Hindi or other Indian languages
        if (browserLang.startsWith('hi') || 
            browserLang.startsWith('mr') || 
            browserLang.startsWith('gu') || 
            browserLang.startsWith('pa') || 
            browserLang.startsWith('bn') || 
            browserLang.startsWith('ta') || 
            browserLang.startsWith('te') || 
            browserLang.startsWith('kn') || 
            browserLang.startsWith('ml')) {
          detectedLang = 'hindi';
        }
        
        // Try to get more precise location info if available
        if (navigator.geolocation) {
          // Use timeout to not block the UI if geolocation is slow
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Geolocation timeout')), 3000)
          );
          
          try {
            // This is a best-effort enhancement - we'll still have language detection even if this fails
            const position = await Promise.race([
              new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition(
                  (position) => resolve(position),
                  () => resolve(null) // Silently continue if permission denied
                );
              }),
              timeoutPromise
            ]);
            
            if (position) {
              // If we got coordinates and they seem to be in India
              // Simple check for India's approximate coordinates
              const coords = (position as GeolocationPosition).coords;
              const isInIndia = 
                coords.latitude >= 8 && coords.latitude <= 37 && 
                coords.longitude >= 68 && coords.longitude <= 97;
                
              if (isInIndia) {
                // If we're reasonably sure we're in India, prefer Hindi
                detectedLang = 'hindi';
              }
            }
          } catch (error) {
            // Silently continue with browser language if geolocation fails or times out
            console.log("Geolocation not available or timed out, using browser language");
          }
        }
        
        // Update state based on best detection method available
        setLanguage(detectedLang);
        setIsHindi(detectedLang === 'hindi');
        
        // Store preference for future visits
        localStorage.setItem('preferredLanguage', detectedLang);
        
      } catch (error) {
        console.error('Error detecting language:', error);
        // Default to English if there's an error
        setLanguage('english');
        setIsHindi(false);
      }
    };

    // First check if there's a stored preference
    const storedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
    
    if (storedLanguage) {
      setLanguage(storedLanguage);
      setIsHindi(storedLanguage === 'hindi');
    } else {
      // If no stored preference, try to detect
      detectLanguage();
    }
  }, []);

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsHindi(lang === 'hindi');
    localStorage.setItem('preferredLanguage', lang);
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
