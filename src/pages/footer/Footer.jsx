import React from "react";
import { Link } from "react-router-dom";
import insta from "../../images/insta.svg";
import face from "../../images/face.svg";
import link from "../../images/link.svg";
import twit from "../../images/twit.svg";
import G from "../../images/G.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <Link to={"/"}>
          <img src={G} alt="" />
        </Link>
      </div>
      <div className="footer_addres">
        <p>
          <b>Head office: </b> <br />
          UG-2, J-433, Krishna Nagar Rd, Indralok Colony, Alambagh, Lucknow,
          Uttar Pradesh 226023
        </p>
        <p>
          <b>Corporate office: </b> <br /> B 8 & 9, Second floor, Block B,
          Sector 1, Noida 201301
        </p>
        <p>Contact: +91 99101 67228</p>
        <p>For general enquiry: info@growingseedtech.com</p>
        <p>For course related queries: courses@growingseedtech.com</p>
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
