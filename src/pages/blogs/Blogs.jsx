import React, { useState, useEffect, useRef } from "react";
import "./blogs.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BaseURL, scrollTP } from "../home/Home";
import LoadnigMain from "../../loading/LoadnigMain";
import CheckRating from "../../rating/CheckRating";
import leftimg from "../../images/left.svg";
import right from "../../images/right.svg";
import yes from "../../images/yes.svg";
const Blogs = () => {
  const url = `${BaseURL}/blog/list/`;
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [course2, setCourse2] = useState(null);
  const [recWidth, setRecWidth] = useState(0);
  const [recCount, setRecCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setBlogs(res.data.blogs);
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
  }, []);

  const [hoverBlogs, setHoverBlogs] = useState(null);
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
        <div className="blogs">
          <h2>BLOGS</h2>
          <div className="blog_cont">
            {blogs?.map((item, index) => (
              <div
                key={index}
                className="home_blog_item"
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
                    className="details_btn_blogs"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
        </div>
      )}
    </>
  );
};

export default Blogs;
