import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./services.scss";
import { useParams } from "react-router-dom";
import { BaseURL, scrollTP } from "../home/Home";
import LoadnigMain from "../../loading/LoadnigMain";
import Testimonials from "../../testimonials/Testimonials";
import check from "../../images/check.svg";
import check2 from "../../images/check2.svg";
import DOMPurify from "dompurify";
import Loading from "../../loading/Loading";
import success from "../../images/success.svg";
const Service = () => {
  const [service, setService] = useState({});
  const [testimonials, setData] = useState(null);
  const { serviceId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [maxH, setMaxH] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL}/service/${serviceId}`);
        const {
          id,
          image,
          process_image,
          process_points,
          service_included_points,
          slug,
          title,
          why_us_points,
          details,
          why_us_para,
          service_included_para,
        } = res.data.service;
        const why_p = DOMPurify.sanitize(why_us_para);
        const service_p = DOMPurify.sanitize(service_included_para);
        const details_p = DOMPurify.sanitize(details);
        setService({
          id,
          image,
          process_image,
          process_points,
          service_included_points,
          slug,
          title,
          why_us_points,
          details_p,
          service_p,
          why_p,
        });
        setData(res.data.testimonials);
        setIsLoading(false);
        scrollTP();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  const {
    id,
    image,
    process_image,
    process_points,
    service_included_points,
    slug,
    title,
    why_us_points,
    details_p,
    service_p,
    why_p,
  } = service;
  const [opened, setOpend] = useState(null);

  const handleClick = (index) => {
    if (index == opened) {
      setOpend(null);
    } else {
      setMaxH("6rem");
      setOpend(index);
    }
  };

  const formRef = useRef();
  const scrollToFrom = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        top: formRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_num] = useState("");
  const [project, setProject] = useState("");

  const [errorMessage, setErrorMessage] = useState({});
  const [sentMessage, setSentMessage] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const states = { full_name, email, wh_num, project, service: id };
  const handleSub = async (e) => {
    e.preventDefault();
    setSendingMessage(true);
    try {
      const response = await axios.post(
        `${BaseURL}/service-registration/`,
        states
      );
      setSentMessage(true);
      setSendingMessage(false);
      setTimeout(() => {
        setSentMessage(false);
      }, 5000);
      setErrorMessage({});
      setFull_name("");
      setEmail("");
      setWh_num("");
      setProject("");
    } catch (error) {
      setErrorMessage(error.response.data);
      setSendingMessage(false);
      setTimeout(() => {
        // setErrorMessage({});
      }, 3000);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <div className="service_cont">
          <div className="service_content">
            <div className="service_heros">
              <div className="service_hero_text">
                <div
                  className="service_hero_html"
                  dangerouslySetInnerHTML={{ __html: details_p }}
                ></div>
                <button onClick={scrollToFrom}>GET FREE QUOTE</button>
              </div>
              <img src={image} alt="" />
            </div>
            <div className="our_service">
              <div
                dangerouslySetInnerHTML={{ __html: service_p }}
                className="our_service_html"
              ></div>
              <div className="our_servicepoints_container">
                {service_included_points?.points.map((item, index) => {
                  return (
                    <div className="our_service_point" key={index}>
                      <img src={check} alt="" />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="service_process">
              <h2>Our Process</h2>
              <div className="process_content">
                <div className="process_points">
                  {process_points?.map((item, index) => {
                    return (
                      <div className="process_point" key={index}>
                        <h3 onClick={() => handleClick(index)}>{`Step ${
                          index + 1
                        }:${item.title}`}</h3>
                        <p
                          style={{ maxHeight: "0px" }}
                          className={`${index == opened && "pad_for_ans maxH"}`}
                        >
                          {item.details}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <img src={process_image} alt="" />
              </div>
            </div>
            <div className="form_why">
              <div className="service_why">
                <div
                  className="why_us_html"
                  dangerouslySetInnerHTML={{ __html: why_p }}
                ></div>
                <div className="why_us_points_container">
                  {why_us_points?.points.map((item, index) => {
                    return (
                      <div className="why_us_point" key={index}>
                        <img src={check2} alt="" />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="service_form">
                <form action="" onSubmit={handleSub} ref={formRef}>
                  <p>LET'S DISCUSS YOUR PROJECT</p>
                  <div className="service_input">
                    <input
                      type="text"
                      name=""
                      placeholder="Name:"
                      required
                      value={full_name}
                      onChange={(e) => setFull_name(e.currentTarget.value)}
                      id=""
                    />
                  </div>
                  <div className="service_input">
                    <input
                      type="text"
                      name=""
                      placeholder="Email:"
                      className={`${"email" in errorMessage && "outline_red"}`}
                      value={email}
                      required
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      id=""
                    />
                    {"email" in errorMessage && (
                      <p className="service_error_m">{errorMessage.email}</p>
                    )}
                  </div>
                  <div className="service_input">
                    <input
                      type="number"
                      name=""
                      placeholder="Number:"
                      value={wh_num}
                      className={`${"wh_num" in errorMessage && "outline_red"}`}
                      required
                      onChange={(e) => setWh_num(e.currentTarget.value)}
                      id=""
                    />
                    {"wh_num" in errorMessage && (
                      <p className="service_error_m">{errorMessage.wh_num}</p>
                    )}
                  </div>
                  <div className="service_input">
                    <textarea
                      type="text"
                      name=""
                      placeholder="Project:"
                      value={project}
                      required
                      onChange={(e) => setProject(e.currentTarget.value)}
                      id=""
                    />
                  </div>
                  <div className="sevice_btn_cont">
                    <button type="submit">LET'S DISCUSS</button>
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
          </div>
          <Testimonials testimonials={testimonials} />
        </div>
      )}
    </>
  );
};

export default Service;
