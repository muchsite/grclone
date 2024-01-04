import React, { useState, useRef } from "react";
import "./courseL.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import clw from "../images/clw.webp";
import close from "../images/close.svg";
import Loading from "../loading/Loading";
import lwb from "../images/lwb.svg";
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
  const [message, setMessage] = useState(
    "Message from landing page of courses. Course name:" + courseId
  );
  const [batchId, setBatchId] = useState(0);
  const [batch, setBatch] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const [sentMessage, setSentMessage] = useState(false);
  const [sending, setSending] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const [reaload, setReload] = useState(false);
  const navigate = useNavigate();
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
  }, [reaload]);

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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
    try {
      const response = await axios.post(`${BaseURL}/contacts/`, states2);
      setSentMessage(true);
      setRegisterOpen(false);
      setErrorMessage({});
      setName("");
      setEmail("");
      setWh_num("");
      setSentMessage(false);
      setSending(false);
      navigate("/landing/courses/success");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
      setSending(false);
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

  const reload = () => {
    setReload(!reaload);
  };
  return (
    <div className="clh">
      <div className="coursesL_hero">
        <div className={`l_courses_register`}>
          <div className="l_form_header">
            <img src={logo} alt="" className="l_form_header_logo" />
            <p>Register Now!</p>
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
            {/* <div className="l_courses_inp_div">
              <label htmlFor="">Message:</label>
              <input
                type="text"
                name=""
                id=""
                value={message}
                required
                onChange={(e) => setMessage(e.currentTarget.value)}
              />
            </div> */}
            <div className="l_course_register">
              <button>Register</button>
              {sending && <Loading />}
              {sentMessage && <img src={yes} alt="" />}
            </div>
          </form>
        </div>
        <img src={clw} alt="" className="course_hero_img_l" />
        <img src={lwb} alt="" className="course_hero_img_l_2" />
      </div>
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <>
          <div className="l_course_container">
            <div className={`l_courses_sticky`} onClick={scrollToRegister}>
              Register Now!
            </div>

            <div className="l_course_hero">
              {/* <img src={course.img} alt="Course Hero" /> */}
            </div>

            <div className="single_course_l">
              <div className="course_content">
                <h2 className="course_title">{course.title}</h2>
                <div className="course_html_text">
                  <div dangerouslySetInnerHTML={{ __html: courseHtml }}></div>
                </div>
              </div>
              <Modules data={course?.module} landing={true} />

              <div className="recomended_courses_L">
                <h2>Recommended Courses</h2>
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
                        to={`/landing/course/${item.slug}`}
                        key={index}
                        onClick={() => reload()}
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
    </div>
  );
};

export default CourseL;
