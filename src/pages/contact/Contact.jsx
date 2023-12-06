import React from "react";
import "./contact.scss";
import contact from "../../images/contact.svg";
import { useState } from "react";
import axios from "axios";
import { BaseURL } from "../home/Home";
import LoadnigMain from "../../loading/LoadnigMain";
import inbox from "../../images/inbox.svg";
import { useEffect } from "react";
import LoadnigBtn from "../../loading/LoadingBtn";
const Contact = () => {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_num] = useState();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [sentMessage, setSentMessage] = useState(false);
  const [sending, setSending] = useState(false);
  const states = { full_name, email, wh_num, message };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await axios.post(`${BaseURL}/contacts/`, states);
      setSentMessage(true);
      setTimeout(() => {
        setSentMessage(false);
      }, 4000);
      setSending(false);
      setEmail("");
      setName("");
      setWh_num("");
      setMessage("");
    } catch (error) {
      setErrorMessage(error.response.data);
      setSending(false);
      setTimeout(() => {
        setErrorMessage({});
      }, 3000);
    }
  };
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <>
      <div className="n_contact_cont">
        <div className="n_contact_titles">
          <h2>Get in touch</h2>
          <h3>We’d love to hear from you. Please fill out this form.</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="n_iputs_div">
            <div className="n_input_div">
              <label htmlFor="">Full Name:</label>
              <input
                type="text"
                value={full_name}
                required
                placeholder="Full Name"
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div className="n_input_div">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                value={email}
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                className={`${"email" in errorMessage && "outline_red"}`}
              />
              {"email" in errorMessage && (
                <p className="contact_error_message">{errorMessage.email}</p>
              )}
            </div>
            <div className="n_input_div">
              <label htmlFor="">Phone Number:</label>
              <input
                type="number"
                value={wh_num}
                required
                placeholder="Phone Number"
                onChange={(e) => setWh_num(e.currentTarget.value)}
                className={`${"wh_num" in errorMessage && "outline_red"}`}
              />
              {"wh_num" in errorMessage && (
                <p className="contact_error_message">{errorMessage.wh_num}</p>
              )}
            </div>
          </div>
          <div className="text_div">
            <label htmlFor="">Type your message here</label>
            <textarea
              type="text"
              value={message}
              required
              placeholder="Type your message here..."
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </div>
          <div className="contanct_send_btn">
            <button>{sending ? <LoadnigBtn /> : "Send message"}</button>
            {sentMessage && <p>Message has been sent!</p>}
          </div>
        </form>
        <div className="contact_open">
          <div className="inbox_div">
            <h2>Our inbox is always open </h2>
            <img src={inbox} alt="" />
          </div>
          <p>‍Reach out to us at info@growingseedtech.com</p>
          <p>We respond within 60-120 minutes during office working hours.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
