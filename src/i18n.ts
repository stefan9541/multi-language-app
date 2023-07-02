import i18n from "i18next";
// import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  // .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            about: "About us",
            blog: "Blog"
          },
          blogBanner: "Happy Reading",
          blogTitle:
            "Welcome to the plants.ua Blog – your go-to resource for all things plants!",
        },
      },
      ua: {
        translation: {
          header: {
            home: "Домашня Сторінка",
            about: "Про нас",
            blog: "Блог"
          },
          blogBanner: "Приємного читання",
          blogTitle:
            "Ласкаво просимо до блогу plants.ua – вашого улюбленого ресурсу для всього, що стосується рослин!",
        },
      },
    },
    // backend: {
    //   loadPath: `http://localhost:3000/i18n/{{lng}}.json`,
    // },
  });

export default i18n;
