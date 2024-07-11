import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/ReplyPost.css";

export default function NewPost() {
  const [replyData, setReplyData] = useState([]);
  const [replyText, setReplyText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const blogId = location.state.id;
  const username = location.state.username;

  let returnHome = async (e) => {
    e.preventDefault();
    navigate("/farmertofarmer",{state:{username:username}});
  };


  const fetchReplyData = async () => {
    try {
      const response = await fetch("http://localhost:5000/fetch-reply", {
        method: "post",
        body: JSON.stringify({ id: blogId}), //providing to server
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setReplyData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchReplyData();
  }, []);

  const replyPost = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/replypost", {
        method: "post",
        body: JSON.stringify({ blogId: blogId, text: replyText ,commentOwner:username}), //providing to server
        headers: {
          "Content-Type": "application/json",
        },
      });
      setReplyText("");
      fetchReplyData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
     
      <div class="header-reply"><i onClick={returnHome} className="fa-solid fa-circle-left"></i>Comment Box</div>
      <div class="reply-maincontainer">
        <div class="reply-commentsBlock">
          <div class="mainCommentsBlock">
            {replyData &&
              replyData.map((reply) => (
                <div class="commentBox">
                  <p className="comment-owner">{reply.commentOwner}</p>
                  <p>{reply.text}</p>
                </div>
              ))}
          </div>
        </div>
        <div class="commentsWriteBlock">
          <form>
            <div class="mb-3">
              <label for="commentarea" class="form-label">
                Write comment here
              </label>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                name="comment"
                class="form-control"
                id="commentarea"
                rows="5"
                placeholder="comment"
              ></textarea>
            </div>
            <button onClick={replyPost} type="button" class="btn btn-primary">
              comment
            </button>
          </form>
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
