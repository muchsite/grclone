import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import insta from "../../images/insta.svg";
import face from "../../images/face.svg";
import link from "../../images/link.svg";
import G from "../../images/G.svg";
import "./footer.scss";
const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = `tel:+91 99101 67228`;
  };
  const handleEmailClick = () => {
    window.location.href = `mailto:info@growingseedtech.com`;
  };
  const handleEmailClick2 = () => {
    window.location.href = `mailto:courses@growingseedtech.com`;
  };
  return (
    <footer>
      <div className="footer_logo">
        <Link to={"/"}>
          <img src={G} alt="" />
        </Link>
      </div>
      <div className="footer_addres">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/GrowingSeed+Technologies/@26.7957942,80.8745969,15.75z/data=!4m6!3m5!1s0x390ce5f5a2a5678d:0x5eda974e2e52b76d!8m2!3d26.7960982!4d80.879251!16s%2Fg%2F11r7h_66tt?entry=ttu"
        >
          <b>Head office: </b> <br />
          UG-2, J-433, Krishna Nagar Rd, Indralok Colony, Alambagh, Lucknow,
          Uttar Pradesh 226023
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/31,+Block+G,+Sector+3,+Noida,+Uttar+Pradesh+201301,+%E1%83%98%E1%83%9C%E1%83%93%E1%83%9D%E1%83%94%E1%83%97%E1%83%98/@28.580347,77.319814,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce45a1410a8a9:0x6198106a8a774ec3!8m2!3d28.580347!4d77.319814!16s%2Fg%2F11fv4v5gn7?entry=ttu"
        >
          <b>Corporate office: </b> <br /> 1st Floor, G-31, Block G, Sector 3,
          Noida 201301
        </a>
        <p onClick={handlePhoneClick}>Contact: +91 99101 67228</p>
        <a href="mailto:info@growingseedtech.com">
          For general enquiry: info@growingseedtech.com
        </a>
        <a href="mailto:courses@growingseedtech.com">
          For course related queries: courses@growingseedtech.com
        </a>
      </div>
      <div className="footer_links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/webinars">Webinars</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms And Conditions </Link>
        <Link to="/refund">Refund Policy</Link>
      </div>
      <div className="footer_media">
        <Link to="https://www.facebook.com/growingseedtech/" target="_blank">
          <img src={face} alt="" />
        </Link>
        <Link to="https://www.instagram.com/growingseedtech/" target="_blank">
          <img src={insta} alt="" />
        </Link>
        <Link
          to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGctYQbJSYmhAAAAYsz2cZA2s9LbDnLW53Df8JQD21QCYspc8SExswhiU7maWcHvJJeORuHa-ENWVEbsxd-t3mbIlctxKzLzFuQqGKEMd3rDvpJ_NWO3sb3saoovGoWZdqG9d0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgrowingseed-technologies"
          target="_blank"
        >
          <img src={link} alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
