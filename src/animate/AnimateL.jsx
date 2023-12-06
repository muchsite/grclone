import React from "react";
import "./animate.scss";
function AnimateL({ lclass, arr, ind }) {
  return (
    <span>
      {arr.map((letter, index) => {
        return (
          <span key={index} className={`${lclass} _${ind + index}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default AnimateL;
