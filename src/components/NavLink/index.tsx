import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./index.css";

type Props = {
  to: string;
  label: string;
};

const isActive = ({ isActive }: { isActive: boolean }) =>
  `link ${isActive ? "active" : ""}`;

export default function NavLink({ label = "", to = "" }: Props) {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  return (
    <Link className={isActive} to={`/${language}${to}`}>
      {t(label)}
    </Link>
  );
}
