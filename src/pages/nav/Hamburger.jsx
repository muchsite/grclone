import React from "react";

const Hamburger = ({ open }) => {
  return (
    <div className={`nav-icon1 ${open && "open_ham"}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
