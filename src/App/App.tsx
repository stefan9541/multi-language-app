import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import Header from "../components/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";

import { LANGUAGES } from "../constants/languages";

import "./App.css";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = LANGUAGES.find((l) => l.code === currentLanguageCode);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("appTitle");
    i18n.changeLanguage(currentLanguageCode);
  }, [currentLanguage, currentLanguageCode]);

  return (
    <Suspense fallback="Loading">
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/:lng?" element={<Home />} />
            <Route path={`/:lng?/about`} element={<About />} />
            <Route path="/:lng/blog" element={<Blog />} />

            {/* Not Found page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
