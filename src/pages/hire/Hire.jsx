import React, { useState } from "react";
import axios from "axios";
import "./hire.scss";
import { BaseURL } from "../home/Home";
import check from "../../images/check.svg";
import close from "../../images/close.svg";
import G from "../../images/G.svg";
import yes from "../../images/yes.svg";

import training from "../../images/training.svg";
import practice from "../../images/practice.svg";
import cloud from "../../images/cloud.svg";
import learning from "../../images/learning.svg";
import stack from "../../images/stack.svg";
import { useEffect } from "react";
import Loading from "../../loading/Loading";
const Hire = () => {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_num] = useState();
  const [comapny, setCompany] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState("");
  const [hiring_profile, sethiring_profile] = useState(1);
  const states = { full_name, email, wh_num, comapny, hiring_profile };
  const [openHire, setOpenHire] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await axios.post(`${BaseURL}/hirefromus/`, states);
      setSentMessage(true);
      setErrorMessage({});
      setTimeout(() => {
        setSentMessage(false);
      }, 3000);
      setSending(false);
    } catch (error) {
      setErrorMessage(error.response.data);
      setSending(false);
      console.log(error);
    }
  };
  const why = [
    "Specialized IT Talent Pool",
    "Industry-Ready Candidates",
    "Custom Skillsets",
    "Cost-Effective Recruitment",
    "Flexible Hiring Timelines",
    "Continuous Talent Pipeline",
    "Performance Guarantee",
    "24/7 Support",
  ];
  const ready = [
    "Data Science",
    "Cloud Technologies",
    "AI and ML",
    "Programming",
    "Salesforce",
    "Big Data",
    "Web Development",
    "Databases",
    "Testing",
    "Cyber Security",
    "Digital Marketing",
    "Business Intelligence",
  ];
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(BaseURL + "/hiring/profiles");
        setProfiles(res.data);
        const i = res.data[0].id || 1;
        setProfile(i);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);
  return (
    <div className="n_hire_cont">
      {openHire && (
        <div
          className="hire_form_back"
          onClick={() => setOpenHire(false)}
        ></div>
      )}
      <div className={`hire_form ${openHire && "top_0"}`}>
        <form onSubmit={handleSubmit}>
          <div className="hire_form_head">
            <img src={G} alt="" className="hire_logo" />
            <img
              src={close}
              alt=""
              className="hire_close"
              onClick={() => setOpenHire(false)}
            />
          </div>
          <div className="form_input">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              required
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div
            className={`form_input ${
              "email" in errorMessage && "margin_bottom"
            }`}
          >
            <label htmlFor="">Email:</label>
            <input
              type="text"
              required
              className={`${"email" in errorMessage && "error_input"}`}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {"email" in errorMessage && (
              <p className="error_input_p">{errorMessage.email}</p>
            )}
          </div>
          <div
            className={`form_input ${
              "wh_num" in errorMessage && "margin_bottom"
            }`}
          >
            <label htmlFor="">Contact Number:</label>
            <input
              className={`${"wh_num" in errorMessage && "error_input"} `}
              type="number"
              required
              onChange={(e) => setWh_num(e.currentTarget.value)}
            />
            {"wh_num" in errorMessage && (
              <p className="error_input_p">{errorMessage.wh_num}</p>
            )}
          </div>
          <div className="form_input">
            <label htmlFor="">Company:</label>
            <input
              type="text"
              required
              onChange={(e) => setCompany(e.currentTarget.value)}
            />
          </div>
          <div className="form_input">
            <label htmlFor="">Profile:</label>
            <select
              id="input"
              required
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            >
              {profiles.map((item, i) => {
                return (
                  <option value={item.id} key={i}>
                    {item.profile}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="button_div">
            <button type="submit">Submit</button>
            {sentMessage && <img src={yes} className="yes" />}
            {sending && <Loading />}
          </div>
        </form>
      </div>
      <div className="hire_hero">
        <div className="hire_hero_text">
          <h2>
            Effortless IT Hiring: Discover, Select and Hire{" "}
            <span>Exceptional Talent</span>{" "}
          </h2>
          <div className="line"></div>
          <p>
            Streamline your IT recruitment journey with our tailored solutions,
            handpick top talent from our pool of industry experts and experience
            seamless hiring backed by 24/7 support and a performance guarantee.
          </p>
          <button className="hire_btn" onClick={() => setOpenHire(true)}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hire_why">
        <h2>Why Hire from Us?</h2>
        <div className="hero_why_cont">
          {why.map((item, index) => {
            return (
              <div className="hero_why_item" key={index}>
                <img src={yes} alt="" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="special">
        <h2>What Sets Our Exceptional Learners Apart?</h2>
        <div className="special_cont">
          <div className="special_item">
            <img src={training} alt="" className="filter_blue" />
            <div className="special_text">
              <h3>Online Live Training by Industry experts</h3>
              <p>
                Our learners benefit from real-time, online training led by
                seasoned industry experts, who bring their extensive knowledge
                directly to them.
              </p>
            </div>
          </div>
          <div className="special_item">
            <img src={learning} alt="" className="filter_green" />
            <div className="special_text">
              <h3>Practical Learning Excellence</h3>
              <p>
                Our learners excel with practical assignments, projects and real
                world problem-solving, making them invaluable assets to your
                company.
              </p>
            </div>
          </div>
          <div className="special_item">
            <img src={cloud} alt="" className="filter_red" />
            <div className="special_text">
              <h3>Rigorous Technical Challenges</h3>
              <p>
                Our learners excel in their expertise through a series of
                step-by-step technical assessments, progressively refining their
                skills with each test.
              </p>
            </div>
          </div>
          <div className="special_item">
            <img src={practice} alt="" className="filter_red" />
            <div className="special_text">
              <h3>Comprehensive Job-Ready Training</h3>
              <p>
                We equip our learners with comprehensive training that covers
                technical skills, soft skills, logical abilities and managerial
                expertise.
              </p>
            </div>
          </div>
          <div className="special_item">
            <img src={stack} alt="" className="filter_blue" />
            <div className="special_text">
              <h3>Industry-Aligned Curriculum</h3>
              <p>
                Our learners thrive with courses tailored to meet the precise
                requirements of the IT industry, ensuring their readiness for
                successful tech careers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="get_ready">
        <h2>Get Job Ready Candidates with following skills</h2>
        <div className="get_ready_cont">
          {ready.map((item, index) => {
            return (
              <div className="get_ready_item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hire;
