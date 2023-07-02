import React from "react";
import Banner from "../../components/Banner";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="home-page-wrapper">
      <Banner title='Plan a Plant' />
      <section>
        <h2>
          <NavLink to='/blog' >
            Our Blog
          </NavLink>
        </h2>
      </section>
    </div>
  );
}
