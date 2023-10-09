import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container py-5">
      <div className="text-center">
          <h3 className="fs-2 fw-bold">Our Blogs</h3>
          <p className="fw-light pt-3">
            Latest Blogs and News
          </p>
        </div>
      <div className="row g-4 pt-5 d-flex justify-content-center align-items-center">
        {blog.map((singleBlog) => (
          <Cards key={singleBlog.id} singleBlog={singleBlog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
