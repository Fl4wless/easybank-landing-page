import React from "react";
import "./Hero.css";
import Button from "./UI/Button";
import bgdesktop from "../images/bg-intro-desktop.svg";
import mockup from "../images/image-mockups.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>Next generation digital banking</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          reprehenderit harum, ea quis officia provident minima et consequuntur
          quia odit!
        </p>
        <Button>Request Invite</Button>
      </div>
      <div className="hero__right">
        <img className="hero-bg-img" src={bgdesktop} alt="header" />
        <img className="hero-bg-mockup" src={mockup} alt="mockup" />
      </div>
    </div>
  );
};

export default Hero;
