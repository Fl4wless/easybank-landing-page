import React from "react";
import "./BenefitCard.css";

const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="benefitCard">
      <img src={icon} alt={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default BenefitCard;
