import React, { useEffect } from "react";
import "./testimonials.scss";
import { BaseURL } from "../pages/home/Home";
import { useState } from "react";
import leftimg from "../images/left.svg";
import right from "../images/right.svg";
import { useRef } from "react";
const Testimonials = ({ testimonials, home }) => {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const testRef = useRef();
  useEffect(() => {
    if (testRef.current) {
      const width = testRef.current.getBoundingClientRect().width;
      setWidth(width);
    }
  }, []);
  const handleClick = (direction) => {
    if (viewportWidth <= 600) {
      if (direction > 0 && left <= testimonials.length - 2) {
        setLeft(left + 1);
      }
    }
    if (viewportWidth < 1163 && viewportWidth > 600) {
      if (direction > 0 && left <= testimonials.length - 3) {
        setLeft(left + 1);
      }
    }
    if (viewportWidth > 1163) {
      if (direction > 0 && left <= testimonials.length - 5) {
        setLeft(left + 1);
      }
    }
    if (direction < 0 && left > 0) {
      setLeft(left - 1);
    }
  };

  return (
    <div className="comp_testimonials_containter">
      {home ? <h2>Testimonials</h2> : <h3>Testimonials</h3>}
      <div
        className="testimonial_cont"
        style={{ left: `calc((${width}px + 3rem) * -1 * ${left})` }}
      >
        {testimonials?.map((item, index) => {
          return (
            <div className="testimonial_item" key={index} ref={testRef}>
              <div className="testimonial_image_cont">
                <img src={item.image} alt="hello" />
                <div className="testimonial_ifo">
                  <h4>{item.name}</h4>
                  {item.age ? <p>{item.age} year-old</p> : <></>}
                  <p>{item.profession} </p>
                </div>
              </div>
              <p className="test_desc">{item.testimonial}</p>
            </div>
          );
        })}
      </div>
      <div className="test_btn_cont">
        <img
          src={leftimg}
          alt=""
          className="test_left"
          onClick={() => handleClick(-1)}
        />
        <img
          src={right}
          alt=""
          className="test_right"
          onClick={() => handleClick(1)}
        />
      </div>
    </div>
  );
};

export default Testimonials;
