import React from "react";
import "./success.scss";
const SuccessW = () => {
  return (
    <div className="success_container">
      <h2>Thank You for Your Submission!</h2>
      <h3>
        Congratulations 🎉, you've just unlocked 🗝️ the gateway to your IT
        career – your journey towards innovation and success starts now! 🚀🌐
      </h3>
      <h4>
        Link to join WhatsApp group{" "}
        <a target="_blank" href={localStorage.getItem("watsapp")}>
          Link
        </a>
      </h4>
    </div>
  );
};

export default SuccessW;
