import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import arrow from "../../images/arrow.svg";
import yes from "../../images/yes.svg";
import Regsister from "../../register/Regsister";
import { useInView } from "react-intersection-observer";
import LoadnigMain from "../../loading/LoadnigMain";
import CareerComponent from "../../career/CareerComponent";
import CheckRating from "../../rating/CheckRating";
import Testimonials from "../../testimonials/Testimonials";
import { convertTime } from "../Webinars/Webinar";

export const BaseURL = "https://growklasdklfjkl.co.in";
export const scrollTP = () => {
  window.scrollTo(0, 0);
};
const Home = () => {
  const [courseItems, setCourseItems] = useState([]);
  const [homeData, sethomeData] = useState({
    sliders: null,
    blogs: null,
    courses: null,
    services: null,
    testimonial: null,
    webinars: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BaseURL);
        sethomeData(res.data);
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

  const { ref: serviceRef, inView: serviceView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: blogsRef, inView: blogsView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: coursesRef, inView: coursesView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: webinarRef, inView: webinarView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [course, setCourse] = useState(0);
  const { sliders, blogs, courses, services, testimonial, webinars } = homeData;

  const [isLoading, setIsLoading] = useState(true);
  const [hoverService, setHoverService] = useState(null);
  const [hoverBlogs, setHoverBlogs] = useState(null);

  const minSwipeDistance = 50;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && course < 2) {
      setCourse(course + 1);
    }
    if (isLeftSwipe && course >= 2) {
      setCourse(0);
    }
    if (isRightSwipe && course <= 0) {
      setCourse(2);
    }
    if (isRightSwipe && course > 0) {
      setCourse(course - 1);
    }
  };

  const [web, setWeb] = useState(0);

  const [touchStartW, setTouchStartW] = useState(null);
  const [touchEndW, setTouchEndW] = useState(null);
  const onTouchStartW = (e) => {
    setTouchEndW(null);
    setTouchStartW(e.targetTouches[0].clientX);
  };

  const onTouchMoveW = (e) => setTouchEndW(e.targetTouches[0].clientX);
  const onTouchEndW = () => {
    if (!touchStartW || !touchEndW) return;
    const distance = touchStartW - touchEndW;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && web < 2) {
      setWeb(web + 1);
    }
    if (isLeftSwipe && web >= 2) {
      setWeb(0);
    }
    if (isRightSwipe && web <= 0) {
      setWeb(2);
    }
    if (isRightSwipe && web > 0) {
      setWeb(web - 1);
    }
  };
  const handleWebClick = (num) => {
    setWeb(num);
  };
  const handleCorsClick = (num) => {
    setCourse(num);
  };

  return (
    <>
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <section>
          <Hero />
          <div className="home_item_cont min_height_for_webinar">
            <h2>Our Upcoming Webinars</h2>
            <Link to="/webinars" target="_blank" className="see_all_cont">
              <p className="see_all">See All Webinars</p>
              <img src={arrow} alt="" />
            </Link>
            <div
              className="home_webinars_cont"
              onTouchStart={onTouchStartW}
              onTouchMove={onTouchMoveW}
              onTouchEnd={onTouchEndW}
              ref={webinarRef}
            >
              {webinars?.length > 0 &&
                webinars.slice(0, 3).map((item, index) => {
                  return (
                    <Link
                      to={`/webinar/${item.slug}`}
                      style={{ zIndex: 4 - index }}
                      className={`home_webinars_item ${
                        web == index
                          ? "active"
                          : web > index
                          ? "past"
                          : "next_web"
                      }`}
                      key={index}
                    >
                      <div className={`webinar_content ${webinarView && ``}`}>
                        <div>
                          <img src={`${item.img}`} alt="Webinars" />
                          <h3>{item.title}</h3>
                        </div>
                        <div className="webinar_text">
                          <div className="webinar_dates">
                            <p>
                              Starts At:
                              <span>
                                {" "}
                                {convertTime(item.start_date_time).all}
                              </span>
                            </p>
                            <p>
                              Ends At:
                              <span>
                                {" "}
                                {convertTime(item.end_date_time).all}
                              </span>
                            </p>
                          </div>
                          <div className="home_web_btn">
                            <h4>
                              {item.registration_count} people have registered
                            </h4>
                            <div>
                              <button>Register Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              <div className="points">
                <div
                  className={`point ${web == 0 && "open_point"}`}
                  onClick={() => handleWebClick(0)}
                ></div>
                <div
                  className={`point ${web == 1 && "open_point"}`}
                  onClick={() => handleWebClick(1)}
                ></div>
                <div
                  className={`point ${web == 2 && "open_point"}`}
                  onClick={() => handleWebClick(2)}
                ></div>
              </div>
            </div>
          </div>
          <div className="home_item_cont">
            <h2>Services</h2>
            <Link to="/services" target="_blank" className="see_all_cont">
              <p className="see_all">See All Services</p>
              <img src={arrow} alt="" />
            </Link>
            <div className="home_service_cont" ref={serviceRef}>
              {services?.length > 0 &&
                services.slice(0, 4).map((item, index) => (
                  <Link
                    target="_blank"
                    to={`/services/${item.slug}`}
                    key={index}
                    className={`hoem_service_item ${
                      serviceView && `service_animation_${index} `
                    }`}
                    onMouseEnter={() => setHoverService(index)}
                    onMouseLeave={() => setHoverService(null)}
                  >
                    <h3
                      className={`home_service_title ${
                        hoverService == index && "home_service_title_active"
                      } `}
                    >
                      {item.title}
                    </h3>
                    <img src={item.image} alt="" />
                    <div
                      className={`service_bacgound ${
                        hoverService == index && "opacity_1"
                      } `}
                    ></div>
                  </Link>
                ))}
            </div>
          </div>
          <Regsister />
          <div className="home_item_cont min_height_for_course">
            <h2>Courses</h2>
            <Link to="/courses" target="_blank" className="see_all_cont">
              <p className="see_all">See All Courses</p>
              <img src={arrow} alt="" />
            </Link>
            <div
              className="home_courses_cont"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              ref={coursesRef}
            >
              {courses?.length > 0 &&
                courses.slice(0, 3).map((item, index) => {
                  return (
                    <Link
                      to={`/course/${item.slug}`}
                      style={{ zIndex: 4 - index }}
                      className={`home_courses_item ${
                        course == index
                          ? "active"
                          : course > index
                          ? "past"
                          : "next"
                      } ${coursesView && `courses_viwe_${index}`}`}
                      key={index}
                    >
                      <img src={`${item.img}`} alt="Python image" />
                      <div className="course_text">
                        <h3>{item.title}</h3>
                        <div className="course_yeses">
                          {item.extra_details.details?.map((item, index) => {
                            return (
                              <div key={index} className="course_yes">
                                <img src={yes} alt="" />
                                <p>{item}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="course_rating">
                        <CheckRating rating={item.rating} />
                        <h5> ({item.rating_count})</h5>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="points">
              <div
                className={`point ${course == 0 && "open_point"}`}
                onClick={() => handleCorsClick(0)}
              ></div>
              <div
                className={`point ${course == 1 && "open_point"}`}
                onClick={() => handleCorsClick(1)}
              ></div>
              <div
                className={`point ${course == 2 && "open_point"}`}
                onClick={() => handleCorsClick(2)}
              ></div>
            </div>
          </div>
          <div className="home_item_cont">
            <h2>Blogs</h2>
            <Link to="/blogs" target="_blank" className="see_all_cont">
              <p className="see_all">See All Blogs</p>
              <img src={arrow} alt="" />
            </Link>
            <div className="home_blog_cont" ref={blogsRef}>
              {blogs?.length > 0 &&
                blogs.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className={`home_blog_item blogs_viwe ${
                      blogsView && `blogs_viwe_${index}`
                    }`}
                    onMouseOver={() => setHoverBlogs(index)}
                    onMouseLeave={() => setHoverBlogs(null)}
                  >
                    <img src={item.image} alt="" />
                    <h3 className="home_blogs_title">{item.title}</h3>
                    <div
                      className={`blogs_hover ${
                        hoverBlogs == index && "blogs_hover_active"
                      } `}
                    >
                      <h3>{item.title}</h3>
                      <Link
                        to={`/blogs/${item.slug}`}
                        target="_blank"
                        className={`details_btn_blogs`}
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <CareerComponent />
          <div className="home_item_cont">
            <Testimonials testimonials={testimonial} home={true} />
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
