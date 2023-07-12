import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import BlogList from "../../components/BlogList";

import "./index.css";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="blog-wrapper">
      <Banner title={t("blogBanner")} />
      <section className="blog-title">
        <h2 className="blog-title">
          {t("blogTitle")}
        </h2>
      </section>
      <section className="blog-list-section">
        <BlogList />
      </section>
    </div>
  );
}
