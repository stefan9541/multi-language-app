import React from "react";

import { blogItems } from "../../constants/blogItems";
import BlogListItem from "../BlogListItem";
import "./index.css";

export default function BlogList() {
  return (
    <div className="blog-list-wrapper">
      {blogItems.map((item) => {
        return <BlogListItem item={item} />;
      })}
    </div>
  );
}
