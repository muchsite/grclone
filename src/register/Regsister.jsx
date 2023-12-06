import React from "react";
import "./registation.scss";
import people from "../images/people.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import axios from "axios";
import { BaseURL } from "../pages/home/Home";
import Loading from "../loading/Loading";
import success from "../images/success.svg";
const Regsister = () => {
  const { ref: regRef, inView } = useInView();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [sentMessage, setSentMessage] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const states = {
    full_name: name,
    email,
    wh_num: phone,
    message: "Message from hero",
  };
  const handleReGForm = async (e) => {
    e.preventDefault();
    setSendingMessage(true);
    try {
      const response = await axios.post(`${BaseURL}/contacts/`, states);
      setSentMessage(true);
      setSendingMessage(false);
      setTimeout(() => {
        setSentMessage(false);
      }, 5000);
      setEmail("");
      setName("");
      setPhone("");
      setErrorMessage({});
    } catch (error) {
      setErrorMessage(error.response.data);
      setSendingMessage(false);
      setTimeout(() => {
        // setErrorMessage({});
      }, 3000);
    }
  };
  return (
    <div className="reg_cont" ref={regRef}>
      <div className="reg_text">
        <br />
        <h2>
          "Don't Hunt for a Job, <br></br> Let Employers Hunt for You!"
        </h2>
        <p>
          Discover Courses at <strong>GrowingSeed Technologies</strong>- Where
          Excellence Meets Expertise.
        </p>
      </div>
      <div className="reg_form">
        <h2>
          Book a Live Class, For <span>Free!</span>
        </h2>
        <form onSubmit={handleReGForm}>
          <div className="reg_form_imput">
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Name:"
            />
          </div>
          <div className={`reg_form_imput`}>
            <input
              type="text"
              required
              placeholder="Email:"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className={`${"email" in errorMessage && "outline_red mb-1"}`}
            />
            {"email" in errorMessage && (
              <p className="error_input_p2">{errorMessage.email}</p>
            )}
          </div>
          <div className="reg_form_imput">
            <input
              type="number"
              value={phone}
              required
              placeholder="Phone:"
              onChange={(e) => setPhone(e.currentTarget.value)}
              className={`${"wh_num" in errorMessage && "outline_red mb-1"}`}
            />
            {"wh_num" in errorMessage && (
              <p className="error_input_p2">{errorMessage.wh_num}</p>
            )}
          </div>
          <div className="reg_form_main_btns">
            <button className="continue_btn">
              Continue Booking Live Class
            </button>
            <div className="reg_form_loading">
              {sendingMessage && <Loading />}
              {sentMessage && (
                <img src={success} className="reg_success" alt="" />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Regsister;
