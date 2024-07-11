import React, { useState, useEffect } from "react";
import {useNavigate, useLocation } from "react-router-dom";
import "../css/NewPost.css";

export default function ViewBlog() {
  let [blogtitle, setBlogtitle] = useState("");
  let [blogcontent, setBlogcontent] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state.username;

  useEffect(() => {
    setBlogtitle(location.state.blog.blogtitle);
    setBlogcontent(location.state.blog.blogcontent);
  },[]);


  let returnHome = async (e) => {
    e.preventDefault();
    navigate("/farmertofarmer",{state:{username:username}});
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://kit.fontawesome.com/dd438282bc.js"
        crossOrigin="anonymous"
      ></script>

      <nav className="navbar bg-body-tertiary expertNavbar">
        <div className="container-fluid">
          <div className="headingExpert">
            <i onClick={returnHome} className="fa-solid fa-circle-left"></i>
          </div>
        </div>
      </nav>
      <div className="postBlock">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title : <span>{blogtitle}</span>
            </label>
          </div>
          <div className="mb-3">
           <p className="blogtext">{blogcontent}</p>
          </div>
      </div>
    </>
  );
}
