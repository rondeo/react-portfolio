import React from "react";
import { Link } from "react-router-dom";

const BlogItem = props => {
  const {
    id, 
    blog_status,
    content,
    title,
    featured_image_url  
  } = props.blogItem;

  return (
    <div>
    <Link to={`/b/${id}`}>
      <h1>{title}</h1>
    </Link>
      <h1>{content}</h1>
    </div>
  );
};

export default BlogItem;

