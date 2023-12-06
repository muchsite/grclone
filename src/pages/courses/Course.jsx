import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BaseURL, scrollTP } from "../home/Home";
import LoadnigMain from "../../loading/LoadnigMain";
import Testimonials from "../../testimonials/Testimonials";
import DOMPurify from "dompurify";
import CheckRating from "../../rating/CheckRating";
import Modules from "../../faq/Modules";
import { useRef } from "react";
import leftimg from "../../images/left.svg";
import right from "../../images/right.svg";
import G from "../../images/G.svg";
import close from "../../images/close.svg";
import yes from "../../images/yes.svg";
import Loading from "../../loading/Loading";
import { convertTime } from "../Webinars/Webinar";
import "./courses.scss";
const Course = () => {
  const { coursesId } = useParams();
  const [course, setCourse] = useState(null);
  const [batch, setBatch] = useState([]);
  const [course2, setCourse2] = useState(null);
  const [courseHtml, setCourseHtml] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recWidth, setRecWidth] = useState(0);
  const [recCount, setRecCount] = useState(0);

  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wh_num, setWh_num] = useState();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [sending, setSending] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [batchId, setBatchId] = useState(0);
  const [contact, setContact] = useState(false);
  const openReg = (id) => {
    setContact(false);
    setRegisterOpen(true);
    setBatchId(id);
  };
  const openContact = () => {
    setContact(true);
    setRegisterOpen(true);
  };
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  useEffect(() => {
    const scroll = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL}/course/${coursesId}`);

        setBatch(res.data.batches);
        setCourse(res.data.course);
        setCourse2(res.data.recommended_course);
        const pureData = DOMPurify.sanitize(res.data.course.desc);
        setCourseHtml(pureData);
        setTestimonials(res.data.testimonials);
        setIsLoading(false);
        scrollTP();
      } catch (error) {
        console.log(error);
      }
    };
    scroll();
    fetchData();
  }, [coursesId]);

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
        setSending(false);
        setRegisterOpen(false);
        setEmail("");
        setName("");
        setWh_num("");
        setMessage("");
        setErrorMessage({});
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
        setEmail("");
        setName("");
        setWh_num("");
        setMessage("");
        setErrorMessage({});
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
    <div>
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <div className="single_course_cont">
          <div className="single_course_hero">
            <h2 className="course_title">{course.title}</h2>
            <img src={course.img} alt="" className="course_hero" />
          </div>
          <div className="course_content">
            <div className="html_text">
              <div dangerouslySetInnerHTML={{ __html: courseHtml }}></div>
            </div>
          </div>
          <Modules data={course?.module} />
          <div className="course_register_cont">
            <h2>Register Now!</h2>
            <div className="batch_cont">
              {batch?.map((item, index) => {
                return (
                  <div className="batch" key={index}>
                    <div className="batch_start batch_info">
                      <h4>Starting Date</h4>
                      <p>
                        {convertTime(item.start_date).month +
                          " " +
                          convertTime(item.start_date).day}
                      </p>
                    </div>
                    <div className="batch_days batch_info">
                      <h4>Days</h4>
                      <p>{item.days_of_week}</p>
                    </div>
                    <div className="batch_timings batch_info">
                      <h4>Time</h4>
                      <p>{item.timing} IST</p>
                    </div>
                    <button onClick={() => openReg(item.id)}>Register</button>
                  </div>
                );
              })}
            </div>
            <div className="contact_course">
              <p>Can't find the right batch or need career counseling?</p>{" "}
              <span onClick={openContact}>Connect with Us!</span>
            </div>
            <div
              className={`course_register ${
                registerOpen && "course_register_open"
              }`}
            >
              <form className="course_form_inputs" onSubmit={handleSubmit}>
                <div className="close_course_form">
                  <img src={G} className="course_logo" alt="" />
                  <img
                    src={close}
                    className="course_close"
                    alt=""
                    onClick={() => setRegisterOpen(false)}
                  />
                </div>
                <div className="course_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name:"
                    value={full_name}
                    required
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="course_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email:"
                    value={email}
                    required
                    className={"email" in errorMessage ? "error_input" : ""}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  {"email" in errorMessage && (
                    <p className="course_error_message">{errorMessage.email}</p>
                  )}
                </div>
                <div className="course_input">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Number:"
                    value={wh_num}
                    required
                    className={"wh_num" in errorMessage ? "error_input" : ""}
                    onChange={(e) => setWh_num(e.currentTarget.value)}
                  />
                  {"wh_num" in errorMessage && (
                    <p className="course_error_message">
                      {errorMessage.wh_num}
                    </p>
                  )}
                </div>
                <div className="course_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Message:"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                  />
                </div>
                <div className="button_div">
                  <div className="bd_l">
                    <button>Submit</button>
                    {sending && (
                      <div className="bdl_abs">
                        <Loading />
                      </div>
                    )}
                  </div>
                  <div
                    className={`success_message ${
                      sentMessage && "success_message_sent"
                    }`}
                  >
                    Message Has Been Sent!
                  </div>
                </div>
              </form>
            </div>
            <div
              className={`course_form_back ${registerOpen && "display_block"}`}
              onClick={() => setRegisterOpen(false)}
            ></div>
          </div>
          {testimonials.length > 0 && (
            <Testimonials testimonials={testimonials} />
          )}
        </div>
      )}
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
                to={`/courses/${item.slug}`}
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
    </div>
  );
};

export default Course;
