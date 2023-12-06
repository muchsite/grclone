import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./webinar.scss";
import { Link } from "react-router-dom";
import { BaseURL, scrollTP } from "../home/Home";
import LoadnigMain from "../../loading/LoadnigMain";
import Faq from "../../faq/Faq";
import Testimonials from "../../testimonials/Testimonials";
import CheckRating from "../../rating/CheckRating";
import leftimg from "../../images/left.svg";
import right from "../../images/right.svg";
import yes from "../../images/yes.svg";
import { convertTime } from "./Webinar";
const Webinars = () => {
  const [webinars, setWebinars] = useState(null);
  const [faqData, setFaqData] = useState(null);
  const [testimonials, setTesimonials] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeW, setActiveW] = useState(true);
  const [recWidth, setRecWidth] = useState(0);
  const [recCount, setRecCount] = useState(0);
  const [course2, setCourse2] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${BaseURL}/webinar/list/?is_active=${activeW}`
        );
        setWebinars(res.data);
        setFaqData(res.data.faqs);
        setTesimonials(res.data.testimonials);
        setCourse2(res.data.recommended_course);
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
  }, [activeW]);

  const recRef = useRef();
  useEffect(() => {
    if (recRef.current) {
      const width = recRef.current.getBoundingClientRect().width;
      setRecWidth(width);
    }
  }, [course2]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const handleRec = (direction) => {
    if (viewportWidth <= 600) {
      if (direction > 0 && recCount <= course2.length - 2) {
        setRecCount(recCount + 1);
      }
    }
    if (viewportWidth < 1163 && viewportWidth > 600) {
      if (direction > 0 && recCount <= course2.length - 3) {
        setRecCount(recCount + 1);
      }
    }
    if (viewportWidth > 1163) {
      if (direction > 0 && recCount <= course2.length - 4) {
        setRecCount(recCount + 1);
      }
    }

    if (direction < 0 && recCount > 0) {
      setRecCount(recCount - 1);
    }
  };

  return (
    <>
      <div className="webinars_cont">
        <h2>WEBINARS</h2>
        <div className="archive_Btns">
          <button
            className={`${activeW ? "curr_state" : "prev_state"}`}
            onClick={() => setActiveW(true)}
          >
            Active
          </button>
          <button
            className={`${activeW ? "prev_state" : "curr_state"}`}
            onClick={() => setActiveW(false)}
          >
            Archived{" "}
          </button>
        </div>
        {isLoading ? (
          <LoadnigMain />
        ) : (
          <>
            <div className="webinars_div_cont">
              {webinars?.webinars.map((item, index) => {
                return (
                  <Link
                    to={activeW && `/webinar/${item.slug}`}
                    className="webinars_item"
                    key={index}
                  >
                    <img src={`${item.img}`} alt="Python Image" />
                    <div className="webinars_text">
                      <h3>{item.title}</h3>
                      <div className="webinar_dates">
                        <p>
                          Starts At :
                          <span>{convertTime(item.start_date_time).all}</span>{" "}
                        </p>
                        <p>
                          Ends At :
                          <span>{convertTime(item.end_date_time).all}</span>{" "}
                        </p>
                      </div>

                      <div className="btn_cont">
                        <p>
                          <span>{item.registration_count}</span> people have
                          registered
                        </p>
                        <button
                          disabled={!activeW && true}
                          className={`${!activeW ? "disapled_btn" : ""}`}
                        >
                          {activeW ? "Register Now" : "Registration has ended"}
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Faq faqData={faqData} />
            <Testimonials testimonials={testimonials} />
            <div className="recomended_courses">
              <h2>Recomended Courses</h2>
              <div className="rec_relative_cont">
                <div
                  className="courses_rec_cont"
                  style={{
                    left: `calc((${recWidth}px + 5rem) * -1 * ${recCount})`,
                  }}
                >
                  {course2?.map((item, index) => (
                    <Link
                      ref={recRef}
                      className="courses_rec_item"
                      to={`/course/${item.slug}`}
                      key={index}
                    >
                      <div>
                        <img src={`${item.img}`} alt="Python Image" />
                        <div className="course_rec_text">
                          <h3>{item.title}</h3>
                          <div className="rec_yeses">
                            {item.extra_details.details?.map((item, index) => {
                              return (
                                <div key={index} className="rec_yes">
                                  <img src={yes} alt="" />
                                  <p>{item}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="course_rating">
                        <CheckRating rating={item.rating} />
                        <h5> ({item?.rating_count})</h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rec_btns">
                <img
                  src={leftimg}
                  alt=""
                  className="test_left"
                  onClick={() => handleRec(-1)}
                />
                <img
                  src={right}
                  alt=""
                  className="test_right"
                  onClick={() => handleRec(1)}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Webinars;
