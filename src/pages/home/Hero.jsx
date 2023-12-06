import React, { useEffect } from "react";
import { useState } from "react";
import "./hero.scss";
import people from "../../images/people.svg";
import axios from "axios";
import { BaseURL } from "./Home";
import success from "../../images/success.svg";
import Loading from "../../loading/Loading";
import hero from "../../images/Hero.svg";
import AnimateL from "../../animate/AnimateL";

const Hero = () => {
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
  const handleHeroForm = async (e) => {
    e.preventDefault();
    setSendingMessage(true);
    try {
      const response = await axios.post(`${BaseURL}/contacts/`, states);
      setSentMessage(true);
      setSendingMessage(false);
      setEmail("");
      setName("");
      setPhone("");
      setTimeout(() => {
        setSentMessage(false);
      }, 5000);
    } catch (error) {
      setErrorMessage(error.response.data);
      setSendingMessage(false);
      setTimeout(() => {
        setErrorMessage({});
      }, 7000);
    }
  };
  const arr = "Embark on Your Journey".split("");
  const arr2 = "to a  Flourishing ".split("");
  const arr3 = "Tech Career with Us!".split("");
  const a = 1 + arr.length;
  const b = a + arr2.length;
  const [lclass, setLClass] = useState("animate-letter");
  useEffect(() => {
    setTimeout(() => {
      setLClass("animate-letter-hover");
    }, 5000);
  }, []);
  return (
    <div className="hero_cont">
      <img src={hero} alt="" className="herp" />
      {sentMessage && (
        <div className="sent_message dn_for_tab_down">
          <p>Message has been sent</p>
          <img src={success} alt="" />
        </div>
      )}

      <div className="hero_text">
        <h1>
          <AnimateL arr={arr} lclass={lclass} ind={1} />
          <br />
          <AnimateL arr={arr2} lclass={lclass} ind={a} />
          <br />
          <AnimateL arr={arr3} lclass={lclass} ind={b} />
        </h1>
      </div>
      <div className="hero_form">
        <form onSubmit={handleHeroForm}>
          <h2 className="hero_form_title">
            Book a Live Class, For <span>Free!</span>{" "}
          </h2>
          <div className={`hero_input input_name`}>
            <input
              type="text"
              name=""
              id=""
              value={name}
              required
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Name:"
            />
          </div>
          <div className="hero_input input_name">
            <input
              placeholder="Email:"
              type="text"
              name=""
              id=""
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className={`${"email" in errorMessage && "outline_red"}`}
            />
            {"email" in errorMessage && (
              <p className="error_message">{errorMessage.email}</p>
            )}
          </div>
          <div className="hero_input input_name">
            <input
              type="number"
              name=""
              id=""
              value={phone}
              required
              placeholder="Phone:"
              className={`${"wh_num" in errorMessage && "outline_red"}`}
              onChange={(e) => setPhone(e.currentTarget.value)}
            />
            {"wh_num" in errorMessage && (
              <p className="error_message">{errorMessage.wh_num}</p>
            )}
          </div>
          <div className="hero_form_btns">
            <button className="hero_form_btn">
              Continue Booking Live class
            </button>
            {sendingMessage && <Loading />}
            {sentMessage && <img src={success} alt="" className="hero_yes" />}

            {/* <div className="hero_form_limited dn_for_tab_down">
              <img src={people} alt="" />
              Limited seats left
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
