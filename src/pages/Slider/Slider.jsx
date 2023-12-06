import React, { useEffect } from "react";
import { useState } from "react";
import { BaseURL } from "../home/Home";
import "./slider.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { Link } from "react-router-dom";
const Slider = ({ sliders }) => {
  const timerRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const slider_length = sliders?.length;
  const move = (direction) => {
    if (direction > 0) {
      if (activeSlide == 0) {
        setActiveSlide(-200);
      } else {
        setActiveSlide(activeSlide + 100);
      }
    }
    if (direction < 0) {
      if (activeSlide == -200) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide - 100);
      }
    }
  };
  const minSwipeDistance = 50;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    const slideNum = Math.abs(activeSlide / 100) + 1;
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && slideNum !== slider_length) {
      setActiveSlide(activeSlide - 100);
    }
    if (isRightSwipe && activeSlide !== 0) {
      setActiveSlide(activeSlide + 100);
    }
  };
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      move(-1);
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, [move]);
  return (
    <>
      <div className="slider_cont">
        <div
          className="slider"
          style={{ left: `${activeSlide}vw` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {sliders?.length > 0 &&
            sliders.map((item, index) => {
              return (
                <div className={`slide`} key={index}>
                  <h2 className="slide_title">{item.title}</h2>
                  <img
                    src={BaseURL + item.image}
                    alt=""
                    className="slide_img"
                  />
                  <div className="slider_btns">
                    <Link className="slider_link" to="/contact">
                      <span>Atend</span> Live MasterClasses <br />
                      <span>& take the</span> hunger test.
                    </Link>
                    <button>Explore All MasterClasses</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="slider_btn">
        <AiOutlineLeft onClick={() => move(1)} className="slide_left" />
        <AiOutlineRight onClick={() => move(-1)} className="slide_right" />
      </div>
    </>
  );
};

export default Slider;
