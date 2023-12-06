import React, { useState } from "react";
import axios from "axios";
import career from "../../images/career.svg";
import hit from "../../images/hit.svg";
import team from "../../images/team.svg";
import money from "../../images/money.svg";
import joinhero from "../../images/joinhero.svg";
import { BaseURL } from "../home/Home";
import yes from "../../images/yes.svg";
import "./career.scss";
import { useRef } from "react";
import { useEffect } from "react";
import Loading from "../../loading/Loading";
const Career = () => {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_num] = useState("");
  const [file, setFile] = useState(null);

  const [sending, setSending] = useState(false);
  const [sent, setsent] = useState(false);
  const [err, seterr] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setsent(false);
    seterr({});
    if (!file) {
      console.error("Please upload an email file");
      return;
    }
    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("resume", file);
    formData.append("email", email);
    formData.append("wh_num", wh_num);
    try {
      const response = await axios.post(`${BaseURL}/career/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSending(false);
      setsent(true);
      setEmail("");
      setWh_num("");
      setName("");
      setFile(null);
    } catch (error) {
      seterr(error.response.data);
      setSending(false);
      console.error("Error sending data:", error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const formRef = useRef();
  const handleScroll = () => {
    if (formRef.current) {
      window.scrollTo({
        top: formRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  console.log(sending);
  return (
    <div className="career_cont">
      <div className="career_hero">
        <div className="career_hero_text">
          <h2>Join Our Dynamic Team!</h2>
          <p>
            Join us in shaping a brighter future and becoming a catalyst for
            change in the IT industry. Be part of our team and directly impact
            the lives of tech enthusiasts across the country. Your journey with
            us is an opportunity to not grow professionally but also to make a
            profound difference in the careers of countless individuals pursuing
            their tech dreams.
          </p>
          <button onClick={handleScroll}>Join Us Now!</button>
        </div>
      </div>
      <div className="career_subTitle">
        <h2>Our Mission: Cultivating Excellence, Empowering Futures</h2>
        <p>
          At GrowingSeed Technologies, we are committed to cultivating
          excellence by providing comprehensive education, training, and
          mentorship programs in the IT sector. Our mission is to empower
          individuals, whether newcomers or experienced professionals, with the
          skills and knowledge necessary to excel in the dynamic world of
          technology. Through our innovative approach and dedicated team of
          instructors, we aim to inspire, transform, and shape the future of IT
          professionals. Together, we strive to create a world where skill knows
          no boundaries, and opportunities are within reach for all.
        </p>
      </div>
      <div className="career_why">
        <h2>Why Join GrowingSeed Technologies?</h2>
        <div className="career_why_divs">
          <div className="career_why_div">
            <img src={team} alt="" className="team_svg" />
            <h3>Shape the Future</h3>
            <p>
              Join us in shaping a brighter future and becoming a catalyst for
              change in the IT industry.
            </p>
          </div>
          <div className="career_why_div">
            <img src={hit} alt="" className="money_svg" />
            <h3>Impact Lives</h3>
            <p>
              Be part of our team and directly impact the lives of tech
              enthusiasts across the country.
            </p>
          </div>
          <div className="career_why_div">
            <img src={money} alt="" className="hit_svg" />
            <h3>Rewarding Careers</h3>
            <p>
              Your Career, Our Commitment: Explore rewarding opportunities with
              competitive compensation at GrowingSeed Technologies
            </p>
          </div>
        </div>
      </div>
      <div className="career_form">
        <img src={career} alt="" />
        <form className="" onSubmit={handleSubmit} ref={formRef}>
          <h3>Join Us Now!</h3>
          <div className="career_form_div">
            <label htmlFor="">Full Name:</label>
            <input
              type="text"
              name=""
              id=""
              required
              value={full_name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className={`career_form_div`}>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name=""
              id=""
              required
              value={email}
              className={"email" in err && "outline_red"}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {"email" in err && <p className="career_error_m">{err.email} </p>}
          </div>
          <div className="career_form_div">
            <label htmlFor="">Phone Number:</label>
            <input
              type="number"
              name=""
              id=""
              required
              value={wh_num}
              className={"wh_num" in err && "outline_red"}
              onChange={(e) => setWh_num(e.currentTarget.value)}
            />
            {"wh_num" in err && <p className="career_error_m">{err.wh_num} </p>}
          </div>
          <div className="career_form_div_file">
            <label htmlFor="">Upload Resume:</label>
            <input type="file" onChange={handleFileChange} required />
          </div>
          <div className="career_loading">
            <button type="submit">Send</button>
            {sending && <Loading />}
            {sent && <img src={yes} alt="" className="contact_sent" />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
