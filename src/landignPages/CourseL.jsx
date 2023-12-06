import React, { useState, useRef } from "react";
import "./courseL.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { BaseURL, scrollTP } from "../pages/home/Home";
import LoadnigMain from "../loading/LoadnigMain";
import Modules from "../faq/Modules";
import yes from "../images/yes.svg";
import CheckRating from "../rating/CheckRating";
import leftimg from "../images/left.svg";
import right from "../images/right.svg";
import logo from "../images/G.svg";
import close from "../images/close.svg";
import Loading from "../loading/Loading";

const CourseL = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [course2, setCourse2] = useState(null);
  const [courseHtml, setCourseHtml] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recWidth, setRecWidth] = useState(0);
  const [recCount, setRecCount] = useState(0);

  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_num] = useState();
  const [message, setMessage] = useState("");
  const [batchId, setBatchId] = useState(0);
  const [batch, setBatch] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const [sentMessage, setSentMessage] = useState(false);
  const [sending, setSending] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [contact, setContact] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL}/course/${courseId}`);
        setBatch(res.data.batches);
        setCourse(res.data.course);
        setCourse2(res.data.recommended_course);
        const pureData = DOMPurify.sanitize(res.data.course.desc);
        setCourseHtml(pureData);
        setIsLoading(false);
        scrollTP();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const dateToSeq = (dateString) => {
    const monthAbbreviations = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const monthIndex = dateObj.getMonth();
    const monthAbbreviation = monthAbbreviations[monthIndex];
    const seqString = `${monthAbbreviation} ${day}`;
    return seqString;
  };
  const states = {
    name: full_name,
    email,
    wh_num,
    message,
    course: course?.id,
    batch: batchId,
  };
  const states2 = {
    full_name,
    email,
    wh_num,
    message,
  };
  const regRef = useRef();
  const scrollToRegister = () => {
    setContact(true);
    setRegisterOpen(true);
  };
  const openReg = (id) => {
    setContact(false);
    setRegisterOpen(true);
    setBatchId(id);
  };
  const openContact = () => {
    setContact(true);
    setRegisterOpen(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    if (!contact) {
      try {
        const response = await axios.post(
          `${BaseURL}/course-registration/`,
          states
        );
        setSentMessage(true);
        setErrorMessage({});
        setName("");
        setEmail("");
        setWh_num("");
        setMessage("");
        setSending(false);
        setRegisterOpen(false);
        setTimeout(() => {
          alert("Message has been sent!");
          setSentMessage(false);
        }, 1000);
      } catch (error) {
        setErrorMessage(error.response.data);
        setSending(false);
        console.log(error);
      }
    }
    if (contact) {
      try {
        const response = await axios.post(`${BaseURL}/contacts/`, states2);
        setSentMessage(true);
        setRegisterOpen(false);
        setErrorMessage({});
        setName("");
        setEmail("");
        setWh_num("");
        setMessage("");
        setTimeout(() => {
          alert("Message has been sent!");
          setSentMessage(false);
        }, 1000);
        setSending(false);
      } catch (error) {
        console.log(error);
        setErrorMessage(error.response.data);
        setSending(false);
      }
    }
  };
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
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <>
          <div className="l_course_container">
            <div
              className={`l_courses_sticky setVisible`}
              onClick={scrollToRegister}
            >
              Resgister Now!
            </div>
            <div
              onClick={() => setRegisterOpen(false)}
              className={`l_courses_register_back ${
                registerOpen && "display_block"
              }`}
            ></div>
            <div
              className={`l_courses_register ${
                registerOpen && "l_course_open"
              }`}
            >
              <div className="l_form_header">
                <img src={logo} alt="" className="l_form_header_logo" />
                <img
                  src={close}
                  alt=""
                  className="l_form_header_close"
                  onClick={() => setRegisterOpen(false)}
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="l_courses_inp_div">
                  <label htmlFor="">Name:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={full_name}
                    required
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
                <div className={`l_courses_inp_div `}>
                  <label htmlFor="">Email:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={email}
                    required
                    className={`${"email" in errorMessage && "outline_red"}`}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  {"email" in errorMessage && <p>{errorMessage.email}</p>}
                </div>
                <div className="l_courses_inp_div">
                  <label htmlFor="">Number:</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    value={wh_num}
                    required
                    className={`${"wh_num" in errorMessage && "outline_red"}`}
                    onChange={(e) => setWh_num(e.currentTarget.value)}
                  />
                  {"wh_num" in errorMessage && <p>{errorMessage.wh_num}</p>}
                </div>
                <div className="l_courses_inp_div">
                  <label htmlFor="">Message:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={message}
                    required
                    onChange={(e) => setMessage(e.currentTarget.value)}
                  />
                </div>
                <div className="l_course_register">
                  <button>Register</button>
                  {sending && <Loading />}
                  {sentMessage && <img src={yes} alt="" />}
                </div>
              </form>
            </div>
            <div className="l_course_hero">
              <img src={course.img} alt="Course Hero" />
            </div>

            <div className="single_course_l">
              <div className="course_content">
                <h2 className="course_title">{course.title}</h2>
                <div className="course_html_text">
                  <div dangerouslySetInnerHTML={{ __html: courseHtml }}></div>
                </div>
              </div>
              <Modules data={course?.module} landing={true} />
              {/* <div className="landing_course_batches" ref={regRef}>
                <h2>Register Now!</h2>
                <div className="l_batch_container">
                  {batch?.map((item, index) => {
                    return (
                      <div className="l_batch" key={index}>
                        <div className="batch_start batch_info">
                          <h4>Starting Date</h4>
                          <p>{dateToSeq(item.start_date)}</p>
                        </div>
                        <div className="batch_days batch_info">
                          <h4>Days</h4>
                          <p>{item.days_of_week}</p>
                        </div>
                        <div className="batch_timings batch_info">
                          <h4>Time</h4>
                          <p>{item.timing} IST</p>
                        </div>
                        <button onClick={() => openReg(item.id)}>
                          Register
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="contact_course">
                  <p>Can't find the right batch or need career counseling?</p>
                  <span onClick={openContact}>Connect with Us!</span>
                </div>
              </div> */}
              <div className="recomended_courses_L">
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
                        to={`/courses/${item.slug}`}
                        key={index}
                      >
                        <div>
                          <img src={`${item.img}`} alt="Python Image" />
                          <div className="course_rec_text">
                            <h3>{item.title}</h3>
                            <div className="rec_yeses">
                              {item.extra_details.details?.map(
                                (item, index) => {
                                  return (
                                    <div key={index} className="rec_yes">
                                      <img src={yes} alt="" />
                                      <p>{item}</p>
                                    </div>
                                  );
                                }
                              )}
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
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseL;
