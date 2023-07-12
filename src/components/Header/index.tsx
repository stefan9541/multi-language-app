import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/languages";
import NavLink from "../NavLink";

import "./index.css";

export default function Header({}) {
  const { i18n } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  return (
    <header className="main-header">
      <nav className="main-navigation">
        <div>
          <NavLink label="headerHome" to="/" />
          <NavLink label="headerAbout" to="/about" />
          <NavLink label="headerBlog" to="/blog" />
        </div>

        <select onChange={onChangeLang} defaultValue={i18n.language}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
