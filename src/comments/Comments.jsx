import axios from "axios";
import React from "react";
import { useState } from "react";
import { BaseURL } from "../pages/home/Home";
import close from "../images/close.svg";
import "./comments.scss";
import { useEffect } from "react";
import yes from "../images/yes.svg";
import Loading from "../loading/Loading";
const Comments = ({ comment, blog, setOpne_comments }) => {
  const [height, setHeight] = useState(false);
  const [nameHolder, setNameHolder] = useState("Add Comment");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const handleFocus = () => {
    setHeight(true);
    setNameHolder("Name:");
  };
  const handleBlur = () => {
    if (!name && !text) {
      setHeight(false);
      setNameHolder("Add Comment");
    }
  };
  const sendComment = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await axios.post(`${BaseURL}/comment/`, {
        blog,
        comment: text,
        name,
      });
      setSending(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 3000);
      setName("");
      setText("");
      comment.unshift({ comment: text, name });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="comments_cont">
      <div className="comments_title_cont">
        <h3>Comments:</h3>
        <img src={close} alt="" onClick={() => setOpne_comments(false)} />
      </div>
      <form
        className={`comment_input ${height ? "comment_focus" : ""}`}
        onSubmit={sendComment}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder={nameHolder}
          onFocus={handleFocus}
          required
          onBlur={handleBlur}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <textarea
          type="text"
          name=""
          id=""
          placeholder="Comment:"
          onFocus={handleFocus}
          required
          onBlur={handleBlur}
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <div className="comment_button_cont">
          <button>Send Comment</button>
          {sending && (
            <div className="coment_loading">
              <Loading />
            </div>
          )}
          {sent && (
            <div className="coment_loading">
              <img src={yes} alt="" className="comment_yes" />
            </div>
          )}
        </div>
      </form>
      <div className="comments">
        {comment?.map((item, index) => {
          return (
            <div className="comment" key={index}>
              <h3>{item.name}:</h3>
              <p>{item.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
