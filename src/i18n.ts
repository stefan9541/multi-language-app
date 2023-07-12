import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(i18nBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['cookie', ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: "http://localhost:3000/i18n/{{lng}}.json",
    },
  });

export default i18n;
