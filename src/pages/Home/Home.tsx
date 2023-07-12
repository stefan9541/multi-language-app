import { useTranslation } from "react-i18next";

import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";

type Props = {};

export default function Home({ }: Props) {
  const { t } = useTranslation();

  return (
    <div className="home-page-wrapper">
      <Banner title={t("homeBanner")} />
      <section>
        <h2>
          <NavLink label="ourBlog" to="/blog" />
        </h2>
      </section>
    </div>
  );
}
