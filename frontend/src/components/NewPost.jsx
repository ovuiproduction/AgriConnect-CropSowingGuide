import React, { useState } from "react";
import {useNavigate,useLocation } from "react-router-dom";
import Alert, { AlertSuccess, AlertWarning } from "./Alert"; 
import "../css/NewPost.css";

export default function NewPost() {
  const [blogtitle, setBlogtitle] = useState("");
  const [blogcontent, setBlogcontent] = useState("");
  const [postSaveStatus,setPostSaveStatus] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const username = location.state.username;

  const savePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/savepost", {
        method: "post",
        body: JSON.stringify({ username, blogtitle, blogcontent }), //providing to server
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if(data.status == "ok"){
        setPostSaveStatus(true);
        setTimeout(()=>{
          navigate("/farmertofarmer",{state:{username:username}});
        },[2000]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
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
      {postSaveStatus && <AlertSuccess/>}
      <div className="postBlock">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              value={blogtitle}
              onChange={(e) => setBlogtitle(e.target.value)}
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter blog title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Content
            </label>
            <textarea
              value={blogcontent}
              onChange={(e) => setBlogcontent(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>
          <button onClick={savePost} type="button" className="btn btn-primary">
            Send Post
          </button>
        </form>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
