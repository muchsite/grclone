import React from "react";
import "./CarrerComponent.scss";
import e1 from "../images/e1.jpg";
import e2 from "../images/e2.jpg";
import e3 from "../images/e3.jpg";

import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";

import ma1 from "../images/ma1.jpg";
import ma2 from "../images/ma2.jpg";
import ma3 from "../images/ma3.jpg";
import { useState } from "react";
const data = [
  {
    images: [ma3, e1, e3],
    title: "Unparalleled Expertise and Mentorship",
    desc: "At GrowingSeed Technologies, our commitment to provide exceptional tech training starts with our instructors. Our trainers are not just educators; they are seasoned industry experts with a wealth of hands-on experience. When you choose us, you gain access to mentors who have navigated the challenges of the tech world and achieved success. Their mentorship goes beyond textbook knowledge, providing you with real-world insights, best practices and guidance. We firmly believe that learning directly from those who have excelled in the field is the surest path to success. By opting for our expert-led training, you're not merely acquiring skills; you're mastering them under the tutelage of industry luminaries, giving you a substantial edge in your tech career.",
  },
  {
    images: [e2, ma2, ma1],
    title: "Comprehensive Career Readiness",
    desc: "At GrowingSeed Technologies, we understand that success in the tech industry requires more than just technical know-how. Our training programs are designed to go beyond the ordinary, preparing you for the complete job market. In addition to acquiring technical expertise, you'll also develop essential soft skills, critical thinking abilities and effective managerial proficiency. This comprehensive approach ensures that you don't just secure a job; you excel adn thrive in it. We're committed to shaping well-rounded professionals ready to make an impact from dat one. When you choose us, you emerge as a holistic, job-ready candidate, making you the top choice for employers looking for individuals who bring more than just technical skills to the table.",
  },
  {
    images: [e3, m1, m3],
    title: "Tailored Excellence for Industry Success",
    desc: "At GrowingSeed Technologies, our meticulously crafted curriculum is designed to deliver excellence that stands on its own. We take pride in offering personalized training programs that cater to your unique needs and aspirations. When you choose us, you gain access to a learning experience that is second to none, ensuring you're well-prepared to excel in the dynamic world of IT. With GrowingSeed Technologies, you're not just enrolling in a course; you're embarking on a transformative journey that prepares you not only to secure a job but to thrive in your tech career. We're dedicated to your success and our mission is to empower you with the skills and knowledge necessary to excel in the dynamic world of technology. With us, your tech career doesn't just begin; it takes off on the fast track to success.",
  },
];

const CareerComponent = () => {
  const [activec, setActivec] = useState(0);
  return (
    <div className="carrer_container">
      <h3>Why choose GrowingSeed Technologies?</h3>
      <div className="carrer_btns">
        <div className={`car ${activec == 0 ? "car_active" : ""}`}>
          <p>Unparalleled Expertise and Mentorship</p>
          <div
            className={`carrer_btn ${activec == 0 ? "carrer_btn_active" : ""}`}
            onClick={() => setActivec(0)}
          >
            <div
              className={`carrer_btn_color ${
                activec == 0 && "carrer_btn_color_active"
              }`}
            ></div>
          </div>
        </div>
        <div className={`car  ${activec == 1 ? "car_active" : ""}`}>
          <p>Comprehensive Career Readiness</p>
          <div
            className={`carrer_btn  ${activec == 1 ? "carrer_btn_active" : ""}`}
            onClick={() => setActivec(1)}
          >
            <div
              className={`carrer_btn_color ${
                activec == 1 && "carrer_btn_color_active"
              }`}
            ></div>
          </div>
        </div>
        <div className={`car  ${activec == 2 ? "car_active" : ""}`}>
          <p>Tailored Excellence for Industry Success</p>
          <div
            className={`carrer_btn  ${activec == 2 ? "carrer_btn_active" : ""}`}
            onClick={() => setActivec(2)}
          >
            <div
              className={`carrer_btn_color ${
                activec == 2 && "carrer_btn_color_active"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className={`career_item_container  career_item_container${activec}`}>
        {data?.map((item, index) => {
          return (
            <div className="career_item" key={index}>
              <div className="career_item_images">
                <img
                  src={item.images[0]}
                  alt=""
                  rel="prefetch"
                  className="career_image1"
                />
                <img
                  src={item.images[1]}
                  alt=""
                  rel="prefetch"
                  className="career_image2"
                />
                <img
                  src={item.images[2]}
                  alt=""
                  rel="prefetch"
                  className="career_image3"
                />
              </div>
              <div className="career_item_text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerComponent;
