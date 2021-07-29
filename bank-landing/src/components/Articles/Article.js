import React from "react";
import "./Article.css";

const Article = ({ image, title, text }) => {
  return (
    <div className="article">
      <header className="atricle__header">
        <img src={image} alt="article header" />
      </header>
      <div className="article__content">
        <p className="article__author">By clarie Robinson</p>
        <h5>Recieve money in any currency with no fees</h5>
        <p className="latestArticle__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molest met
          consectetur adipisicing e ias, esse?
        </p>
      </div>
    </div>
  );
};

export default Article;
