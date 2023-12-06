import React from "react";
import "./rating.scss";
import star from "../images/star.svg";
import stare from "../images/stare.svg";
import half from "../images/half.svg";
const CheckRating = ({ rating }) => {
  const filledStars = Math.floor(Number(rating));
  const hasHalfStar = Number(rating) % 1 >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  // Create an array to store the div elements for the stars
  const stars = [];

  // Create div elements for filled stars
  for (let i = 0; i < filledStars && i < 5; i++) {
    stars.push(
      <div key={i} className="filled-star">
        <img src={star} style={{ width: "1.3rem", height: "1.3rem" }} alt="" />
      </div>
    );
  }

  // Create div element for half-filled star
  if (hasHalfStar && filledStars < 5) {
    stars.push(
      <div key="half-star" className="half-star">
        <img src={half} style={{ width: "1.3rem", height: "1.3rem" }} alt="" />
      </div>
    );
  }

  //   Create div elements for empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <div key={i + filledStars + (hasHalfStar ? 1 : 0)} className="empty-star">
        <img src={stare} style={{ width: "1.3rem", height: "1.3rem" }} alt="" />
      </div>
    );
  }

  return <div className="rating">{stars}</div>;
};

export default CheckRating;
