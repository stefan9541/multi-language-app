import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/languages";
import "./index.css";
type Props = {};

const isActive = ({ isActive }: any) => `link ${isActive ? "active" : ""}`;

export default function Header({}: Props) {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  const i18T = t("header", { returnObjects: true }) as any;

  return (
    <header className="main-header">
      <nav className="main-navigation">
        <div>
          <NavLink className={isActive} to="/">
            {i18T.home}
          </NavLink>
          <NavLink className={isActive} to="/about">
            {i18T.about}
          </NavLink>
          <NavLink className={isActive} to="/blog">
            {i18T.blog}
          </NavLink>
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
