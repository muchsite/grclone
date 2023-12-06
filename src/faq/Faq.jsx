import React from "react";
import { useState, useRef } from "react";
import "./faq.scss";

function Faq({ faqData }) {
  const [opened, setOpend] = useState(null);
  const answerRef = useRef(null);
  const handleClick = (index) => {
    if (index == opened) {
      setOpend(null);
    } else {
      setOpend(index);
    }
  };
  const getAnswerMaxHeight = (index) => {
    return index === opened ? answerRef?.current.scrollHeight + "px" : "0";
  };

  return (
    <div className="faqs_cont">
      <h3>F.A.Q</h3>
      <div className="faqs_content">
        {faqData?.map((item, index) => {
          return (
            <div className="faq" key={index}>
              <div className="plus" onClick={() => handleClick(index)}>
                <div className="horizontal"></div>
                <div
                  className={`vertical ${index == opened && "vertical_opened"}`}
                ></div>
              </div>
              <div className="faq_text">
                <h4>{item.question}</h4>
                <p
                  className={`faq_answer ${index == opened && "margin_top"}`}
                  ref={answerRef}
                  style={{ maxHeight: getAnswerMaxHeight(index) }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
