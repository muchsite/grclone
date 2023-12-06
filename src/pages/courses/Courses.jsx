import React, { useState, useEffect } from "react";
import { BaseURL, scrollTP } from "../home/Home";
import axios from "axios";
import { Link } from "react-router-dom";
import "./courses.scss";
import LoadnigMain from "../../loading/LoadnigMain";
import Faq from "../../faq/Faq";
import Testimonials from "../../testimonials/Testimonials";
import CheckRating from "../../rating/CheckRating";
import yes from "../../images/yes.svg";
const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [faqData, setFaqData] = useState(null);
  const [faqData2, setFaqData2] = useState(null);
  const [testimonials, setTesimonials] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeC, setActiveC] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${BaseURL}/course/list/?is_active=${activeC}`
        );
        setCourses(res.data.courses);
        setFaqData(res.data.faqs);
        setTesimonials(res.data.testimonial);
        setFaqData2(res.data);
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
  }, [activeC]);

  return (
    <>
      <div className="courses_cont">
        <h2>COURSES</h2>
        {isLoading ? (
          <LoadnigMain />
        ) : (
          <>
            <div className="courses_divs_cont">
              {courses?.map((item, index) => (
                <Link
                  className="courses_item"
                  to={`/course/${item.slug}`}
                  key={index}
                >
                  <img src={`${item.img}`} alt="Python Image" />
                  <div className="course_text">
                    <h3>{item.title}</h3>
                    <div className="all_course_yeses">
                      {item.extra_details.details?.map((item, index) => {
                        return (
                          <div key={index} className="all_course_yes">
                            <img src={yes} alt="" />
                            <p>{item}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="course_rating">
                    <CheckRating rating={item.rating} />
                    <h5> ({item?.rating_count})</h5>
                  </div>
                </Link>
              ))}
            </div>
            <Faq faqData={faqData} />
            <Testimonials testimonials={testimonials} />
          </>
        )}
      </div>
    </>
  );
};

export default Courses;
