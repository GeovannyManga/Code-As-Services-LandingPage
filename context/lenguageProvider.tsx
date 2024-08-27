'use client'
import { TranslationMap } from "../app/interfaces";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: keyof TranslationMap;
  changeLanguage: (lang: keyof TranslationMap) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<keyof TranslationMap>('en');

  const changeLanguage = (lang: keyof TranslationMap) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
