import Banner from "../../components/Banner";
import { useTranslation } from "react-i18next";

import "./index.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-us-wrapper">
      <Banner title={t("aboutBanner")} />
      <section>
        <p>{t("blogFirst")}</p>
        <p>{t("blogSecond")}</p>
        <p>{t("blogThird")}</p>
        <p>{t("blogFourth")}</p>
        <p>{t("blogFifth")}</p>
      </section>
    </div>
  );
}
