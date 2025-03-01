import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: require("../public/locales/fr/translation.json") },
      en: { translation: require("../public/locales/en/translation.json") },
    },
    fallbackLng: "fr", // Langue par défaut
    interpolation: { escapeValue: false }, // Pas besoin d'échappement pour React
  });

export default i18n;
