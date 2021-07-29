import React from "react";
import Article from "./Article";
import "./ArticlesSection.css";
import CurrencyImg from "../../images/image-currency.jpg";
import RestaurantImg from "../../images/image-restaurant.jpg";
import PlaneImg from "../../images/image-plane.jpg";
import ConfettiImg from "../../images/image-confetti.jpg";

const ArticlesSection = () => {
  return (
    <div className="articles-section">
      <div className="articles-section__content">
        <h2>Latest Articles</h2>
        <div className="ASCard_wrapper">
          <Article
            image={CurrencyImg}
            author="Clarie Robinson"
            title="Lorem ipsum dolor sit amet."
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum assumenda perferendis dignissimos a quibusdam impedit corporis. Voluptatibus, provident non."
          />
          <Article
            image={RestaurantImg}
            title="Lorem ipsum dolor sit amet consectetur."
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum assumenda perferendis dignissimos a quibusdam impedit corporis. Voluptatibus, provident non."
          />
          <Article
            image={PlaneImg}
            title="Lorem ipsum dolor sit amet consectetur adipisicing."
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum assumenda perferendis dignissimos a quibusdam. Voluptatibus, provident non."
          />
          <Article
            image={ConfettiImg}
            title="Lorem ipsum dolor sit amet consectetur.
"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum assumenda perferendis dignissimos a quibusdam impedit corporis. Voluptatibus, provident non.
"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
