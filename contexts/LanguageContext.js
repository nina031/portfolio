"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");
  const [translations, setTranslations] = useState(fr);

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setTranslations(savedLanguage === "en" ? en : fr);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);
    setTranslations(newLanguage === "en" ? en : fr);
    localStorage.setItem("language", newLanguage);
  };

  const isEnglish = language === "en";

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage, isEnglish }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
