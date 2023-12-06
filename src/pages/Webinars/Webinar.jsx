import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./webinar.scss";
import { BaseURL, scrollTP } from "../home/Home";
import close from "../../images/close.svg";
import people from "../../images/people.svg";
import Loading from "../../loading/Loading";
import LoadnigMain from "../../loading/LoadnigMain";
import DOMPurify from "dompurify";
export const convertTime = (timeString) => {
  let date = new Date(timeString);
  let options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  let formattedTime = date.toLocaleString("en-US", options);

  let day = date.toLocaleString("en-US", { day: "numeric" });
  let month = date.toLocaleString("en-US", { month: "short" });
  let all = `${month} ${day}   ${formattedTime}`;
  return {
    day: day,
    month: month,
    time: formattedTime,
    all,
  };
};
const Webinar = () => {
  const { webinarId } = useParams();
  const [webinar, setWebinar] = useState({});
  const [webinarDetail, setWebinarDetail] = useState(null);
  const [gain, setgain] = useState(null);
  const [speaker, setSpeaker] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_Num] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [successReg, setSuccessreg] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL}/webinar/${webinarId}`);
        setWebinar(res.data);
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
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const states = { name, email, wh_num, webinar: webinar.id };
    setShowLoading(true);
    try {
      const response = await axios.post(
        `${BaseURL}/events-registration/`,
        states
      );
      setSuccessreg(true);
      setShowLoading(false);
      setEmail("");
      setName("");
      setWh_Num("");
    } catch (error) {
      setErrorMessage(error.response.data);
      setShowLoading(false);
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
        <div className="single_webinar_cont">
          {successReg && (
            <div className="webinar_success">
              <div
                className="success_close"
                onClick={() => setSuccessreg(false)}
              >
                <img src={close} alt="" />
              </div>
              <div className="success_text">
                <h2>Thanks for Registering</h2>
                <h2>
                  Link to join WhatsApp group{" "}
                  <span>
                    <a target="_blank" href={webinar.whatsapp_group}>
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
          <div className="web_sec_cont">
            <div className="img_cont_web">
              <img
                src={webinar?.img}
                alt="Webinar Img"
                className="webinar_img_main"
              />
            </div>
            <div className="webinar_info_title">
              <h2>{webinar?.title}</h2>
              <div className="weinar_title_dates">
                <div className="w_date">
                  <div className="w_date_month">
                    {convertTime(webinar?.start_date_time).month}
                  </div>
                  <div className="w_date_start_days">
                    {convertTime(webinar?.start_date_time).day ==
                    convertTime(webinar?.start_date_time).day ? (
                      <div className="w_date_day">
                        {convertTime(webinar?.start_date_time).day}
                      </div>
                    ) : (
                      <>
                        <div className="w_date_day">
                          {convertTime(webinar?.start_date_time).day} -
                          {convertTime(webinar?.start_date_time).day}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="w_time">
                  <p>Time</p>
                  <h5>
                    {convertTime(webinar?.start_date_time).time} -
                    {convertTime(webinar?.end_date_time).time}
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="webinar_sticky">
            <div className="webinar_info">
              <div className="webinar_about">
                <div className="webinar_desc_title">About this Session</div>
                <div
                  className="html_text_webinar"
                  dangerouslySetInnerHTML={{ __html: webinarDetail }}
                ></div>
              </div>
              <div className="webinar_about">
                <div className="webinar_desc_title">
                  What You Will Learn From This Session
                </div>
                <div
                  className="html_text_webinar"
                  dangerouslySetInnerHTML={{ __html: gain }}
                ></div>
              </div>
              <div className="webinar_about">
                <div className="webinar_desc_title">
                  About GrowingSeed Technologies
                </div>
                <div
                  className="html_text_webinar"
                  dangerouslySetInnerHTML={{ __html: speaker }}
                ></div>
              </div>
            </div>
            <div className="webinar_form">
              <h2>Register NOW!</h2>
              <form onSubmit={handleSubmit}>
                <div className="webinar_input">
                  <label htmlFor="">Name: </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="webinar_input">
                  <label htmlFor="">Email:</label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    className={`${"email" in errorMessage && "outline_red"}`}
                  />
                  {"email" in errorMessage && (
                    <p className="error_message">Pleas provide valid email!</p>
                  )}
                </div>
                <div className="webinar_input">
                  <label htmlFor="">Phone:</label>
                  <input
                    type="number"
                    required
                    value={wh_num}
                    className={`${"wh_num" in errorMessage && "outline_red"}`}
                    onChange={(e) => setWh_Num(e.currentTarget.value)}
                  />
                  {"wh_num" in errorMessage && (
                    <p className="error_message">{errorMessage.wh_num}</p>
                  )}
                </div>
                <div className="webinar_btns">
                  <button type="submit">REGISTER</button>
                  {showLoading && <Loading />}
                  <div className="buton_icon">
                    <img src={people} alt="" />
                    <p>{webinar.registration_count} people registered</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Webinar;
