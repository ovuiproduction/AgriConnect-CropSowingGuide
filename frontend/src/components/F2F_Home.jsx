import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Editpost from "./Editpost";
import "../css/F2F_Home.css";

export default function F2F_Home() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const deletepost = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/deletepost", {
        method: "post",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      fetchblogs();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const editpost = async (blog) => {
    navigate("/editpost", { state: blog });
  };

  const fetchblogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/fetchpost", {
        method: "post",
        body: JSON.stringify({}), //fetching from database
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      setBlogs(data.data);
      setStatus(data.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchblogs();
  }, []);
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      ></link>
      <nav className="navbar navbar-expand-lg bg-body-tertiary f2fnavbootstrap">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CSG
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li>
                <a id="viewBlog" className="nav-link" href="/viewblogs">
                  View Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="f2fhomeparent">
        <div className="f2fnav">
          <h1 className="f2fhomeheader">Connect with peers</h1>
        </div>

        <div className="maincontainer">
          <div className="newpostlinkblock">
            <Link className="newpostlink" to="/newpost">
              New post
            </Link>
          </div>

          <div className="card-container">
            {status === "ok" &&
              blogs.map((blog) => (
                <div className="card" key={blog._id}>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary username">
                      {blog.username}
                    </h6>
                    <h5 className="card-title">{blog.blogtitle}</h5>
                    <p className="card-text">{blog.blogcontent}</p>
                    <div className="controls">
                      <button
                        onClick={() => editpost(blog)}
                        type="button"
                        className="btn btn-primary controlbtn"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary controlbtn"
                      >
                        Reply
                      </button>
                      <button
                        onClick={() => deletepost(blog._id)}
                        type="button"
                        className="btn btn-danger controlbtn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* <div class="blogs">
            {status === "ok" &&
              blogs.map((blog) => (
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">{blog.username}</h3>
                    <p class="card-text blogdate">{blog.blogtitle}</p>
                    <p class="card-text">{blog.blogcontent}</p>
                    <div class="controlbtn">
                      <form action="" method="post">
                        <button type="submit" class="btn btn-secondary">
                          Delete
                        </button>
                      </form>
                      <a href="" class="btn btn-success">
                        Read
                      </a>
                      <a href="" class="btn btn-secondary">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div> */}
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
