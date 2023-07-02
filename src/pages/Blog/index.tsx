import React from "react";
import Banner from "../../components/Banner";
import BlogList from "../../components/BlogList";

import "./index.css";

export default function Blog() {
  return (
    <div className="blog-wrapper">
      <Banner title="Happy Reading" />
      <section className="blog-title">
        <h2 className="blog-title">
          Welcome to the plants.ua Blog – your go-to resource for all things
          plants!
        </h2>
      </section>
      <section className="blog-list-section">
        <BlogList />
      </section>
    </div>
  );
}
