import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./nav.scss";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import phone from "../../images/phone.svg";
import what from "../../images/what.svg";
import email from "../../images/email.svg";
import g from "../../images/G.svg";
import wa from "../../images/wa.svg";

function NavBar() {
  const handlePhoneClick = () => {
    window.location.href = `tel:+91 99101 67228`;
  };
  const [open, setopen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  const [marginBottom, setMarginBottom] = useState(0);
  const divRef = useRef(null);
  const navRef = useRef(null);
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (divRef.current && navRef.current) {
      const height = divRef.current.clientHeight;
      const navHeight = navRef.current.clientHeight;
      if (currentPosition >= height) {
        setScrollPosition(true);
        setMarginBottom(height);
      } else {
        setScrollPosition(false);
        setMarginBottom(0);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const location = useLocation();
  const pathContainsLanding = location.pathname.includes("landing");

  return (
    <nav
      className={`position_fixed ${scrollPosition && "nav_footer_transition"}`}
      style={{ top: -marginBottom }}
    >
      {pathContainsLanding ? (
        <></>
      ) : (
        <div className="nav_wat">
          <Link
            to="https://api.whatsapp.com/send?phone=919650374657"
            target="_blank"
          >
            <img src={wa} alt="" />
          </Link>
        </div>
      )}
      <div className={`nav_footer`} ref={divRef}>
        <div className="nav_footer_logos">
          <Link to="https://www.facebook.com/growingseedtech/" target="_blank">
            <AiFillFacebook color="#ffffff" />
          </Link>
          <Link to="https://www.instagram.com/growingseedtech/" target="_blank">
            <AiFillInstagram color="#ffffff" />
          </Link>
          <Link
            to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGctYQbJSYmhAAAAYsz2cZA2s9LbDnLW53Df8JQD21QCYspc8SExswhiU7maWcHvJJeORuHa-ENWVEbsxd-t3mbIlctxKzLzFuQqGKEMd3rDvpJ_NWO3sb3saoovGoWZdqG9d0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgrowingseed-technologies"
            target="_blank"
          >
            <AiFillLinkedin color="#ffffff" />
          </Link>
        </div>
        <div className="nav_footer_nums">
          <div className="nums_cont dn_for_mobile">
            <img src={what} alt="" />
            +91 965-037-4657
          </div>
          <div className="nums_cont" onClick={handlePhoneClick}>
            <img src={phone} alt="" />
            +91 991-016-7228
          </div>
          <div className="nums_cont dn_for_mobile">
            <img src={email} alt="" />
            +91 896-803-0249
          </div>
        </div>
      </div>
      <div className={`nav_cont`} ref={navRef}>
        <div className="nav_logo">
          <Link to={"/"}>
            <img src={g} alt="" />
          </Link>
        </div>
        <div className="nav_link_cont dn_for_tab_down">
          <NavLink
            to="/"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Courses
          </NavLink>

          <NavLink
            to="/services"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Services
          </NavLink>
          <NavLink
            to="/blogs"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/webinars"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Webinars
          </NavLink>
          <NavLink
            to="/career"
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            Career with Us
          </NavLink>
          <NavLink
            to="/hire"
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            Hire from Us
          </NavLink>
          <NavLink
            to="/contact"
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            Contact Us
          </NavLink>
          {/* <NavLink
            to="/about"
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            About
          </NavLink>

          <NavLink
            to="/events"
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            Events
          </NavLink> */}
        </div>
        <div className="dn_for_large" onClick={() => setopen(!open)}>
          <Hamburger open={open} />
        </div>
        <div className={`ham_links_cont ${open && "ham_link_opoen"}`}>
          <NavLink
            to="/"
            onClick={() => setopen(false)}
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => setopen(false)}
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Courses
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setopen(false)}
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Services
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setopen(false)}
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/webinars"
            onClick={() => setopen(false)}
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Webinars
          </NavLink>
          <NavLink
            to="/career"
            onClick={() => setopen(false)}
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            Career with us
          </NavLink>
          <NavLink
            to="/hire"
            onClick={() => setopen(false)}
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            Hire from Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setopen(false)}
            className={`${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""} nav_link`}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
