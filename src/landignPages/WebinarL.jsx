import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BaseURL, scrollTP } from "../pages/home/Home";
import LoadnigMain from "../loading/LoadnigMain";

import { useRef } from "react";
import g from "../images/G.svg";
import people from "../images/people.svg";
import Loading from "../loading/Loading";
import yes from "../images/yes.svg";
import { convertTime } from "../pages/Webinars/Webinar";
import close from "../images/close.svg";
import DOMPurify from "dompurify";
import "./webinarL.scss";
const WebinarL = () => {
  const { webinarId } = useParams();
  const [webinarData, setWebinarData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [webinar, setWebinar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_Num] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [successReg, setSuccessreg] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [webinarDetail, setWebinarDetail] = useState(null);
  const [gain, setgain] = useState(null);
  const [speaker, setSpeaker] = useState(null);
  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await axios.get(`${BaseURL}/webinar/${webinarId}`);
        setWebinarData(res.data);
        setWebinar(res.data.id);
        const detail = DOMPurify.sanitize(res.data.detail);
        const gain = DOMPurify.sanitize(res.data.gain_from);
        const speaker = DOMPurify.sanitize(res.data.about_speaker);
        setgain(gain);
        setSpeaker(speaker);
        setWebinarDetail(detail);
        setIsLoading(false);
        scrollTP();
      } catch (error) {
        console.log(error);
      }
    };
    fetchWebinar();
  }, []);
  const formRef = useRef();
  const handleScroll = () => {
    if (formRef.current) {
      window.scrollTo({
        top: formRef.current.offsetTop - 120,
        behavior: "smooth",
      });
    } else {
      console.log("errrr");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const states = { name, email, wh_num, webinar };
    setSuccessreg(false);
    setShowLoading(true);
    try {
      const response = await axios.post(
        `${BaseURL}/events-registration/`,
        states
      );
      setSuccessreg(true);
      setShowLoading(false);
      setEmail("");
      setWh_Num("");
      setName("");
    } catch (error) {
      setErrorMessage(error.response.data);
      setShowLoading(false);
      console.log(error);
      setTimeout(() => {
        setErrorMessage({});
      }, 3000);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <div className="webinarL_container">
          {successReg && (
            <div className="webinar_success">
              <div
                className="success_close"
                onClick={() => setSuccessreg(false)}
              >
                <img src={close} alt="webinar" />
              </div>
              <div className="success_text">
                <h2>Thanks for Registering</h2>
                <h2>
                  Link to join WhatsApp group{" "}
                  <span>
                    <a
                      // href={webinar?.whatsapp_group}
                      target="_blank"
                      href={webinarData.whatsapp_group}
                    >
                      Link
                    </a>
                  </span>
                </h2>

                <h3>
                  Join our WhatsApp group for seamless discussions, valuable
                  learning resources, and more! 📚📱 #WebinarCommunity
                </h3>
              </div>
            </div>
          )}
          <div className="sticky_webinarL" onClick={handleScroll}>
            Register Now!
          </div>

          <div className="web_sec_cont">
            <div className="img_cont_web">
              <img
                src={webinarData?.img}
                alt="Webinar Img"
                className="webinar_img_main"
              />
            </div>
            <div className="webinar_info_title">
              <h2>{webinarData?.title}</h2>
              <div className="weinar_title_dates">
                <div className="w_date">
                  <div className="w_date_month">
                    {convertTime(webinarData?.start_date_time).month}
                  </div>
                  <div className="w_date_start_days">
                    {convertTime(webinarData?.start_date_time).day ==
                    convertTime(webinarData?.start_date_time).day ? (
                      <div className="w_date_day">
                        {convertTime(webinarData?.start_date_time).day}
                      </div>
                    ) : (
                      <>
                        <div className="w_date_day">
                          {convertTime(webinarData?.start_date_time).day} -
                          {convertTime(webinarData?.start_date_time).day}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="w_time">
                  <p>Time</p>
                  <h5>
                    {convertTime(webinarData?.start_date_time).time} -
                    {convertTime(webinarData?.end_date_time).time}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} className="wl_form" onSubmit={handleSubmit}>
            <div className="wl_form_head">
              <h2>Register Now!</h2>
              <img src={g} alt="" />
            </div>
            <div className="wl_input_div">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name=""
                id=""
                required
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div className="wl_input_div wl_email">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name=""
                id=""
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className={`${"email" in errorMessage && "outline_red"}`}
              />
              {"email" in errorMessage && (
                <p className="l_webinar_error_message">
                  Pleas provide valid email!
                </p>
              )}
            </div>
            <div className="wl_input_div wl_email">
              <label htmlFor="">Phone:</label>
              <input
                type="number"
                name=""
                id=""
                required
                value={wh_num}
                onChange={(e) => setWh_Num(e.currentTarget.value)}
                className={`${"wh_num" in errorMessage && "outline_red"}`}
              />
              {"wh_num" in errorMessage && (
                <p className="l_webinar_error_message">{errorMessage.wh_num}</p>
              )}
            </div>
            <div className="wl_reg_btn_cont">
              <div className="wl_btn_container">
                <button className="wl_reg_btn">Register</button>
                {showLoading && <Loading />}
                {successReg && <img src={yes} alt="" />}
              </div>
              <div className="buton_icon">
                <img src={people} alt="" />
                <p>{webinarData.registration_count} Have registered</p>
              </div>
            </div>
          </form>
          <div className="l_webinar_text">
            <div className="l_webinar_text_item">
              <div className="webinar_desc_title">About this Session</div>
              <div
                className="html_text_webinar"
                dangerouslySetInnerHTML={{ __html: webinarDetail }}
              ></div>
            </div>
            <div className="l_webinar_text_item">
              <div className="webinar_desc_title">
                What You Will Learn From This Session
              </div>
              <div
                className="html_text_webinar"
                dangerouslySetInnerHTML={{ __html: gain }}
              ></div>
            </div>
            <div className="l_webinar_text_item">
              <div className="webinar_desc_title">
                About GrowingSeed Technologies
              </div>
              <div
                className="html_text_webinar"
                dangerouslySetInnerHTML={{ __html: speaker }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebinarL;
