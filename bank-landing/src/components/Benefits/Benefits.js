import React from "react";
import BenefitCard from "./BenefitCard";
import "./Benefits.css";
import iconOnline from "../../images/icon-online.svg";
import iconBudgeting from "../../images/icon-budgeting.svg";
import iconOnboarding from "../../images/icon-onboarding.svg";
import iconApi from "../../images/icon-api.svg";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits__content">
        <div className="benefits__header">
          <h2>Why choose Easybank?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perferendis et magnam.
          </p>
        </div>
        <div className="benefits__grid">
          <BenefitCard
            icon={iconOnline}
            title="Online Banking"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum praesentium amet quisquam cumque dolor fugit magnam sint velit dignissimos blanditiis."
          />
          <BenefitCard
            icon={iconBudgeting}
            title="Simple Budgeting"
            text="Lorem ipsum. Laborum praesentium cumque dolor fugit magnam sint velit dignissimos blanditiis."
          />
          <BenefitCard
            icon={iconOnboarding}
            title="Fast Onboarding"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, perferendis? Ratione iure facere magni mollitia!"
          />
          <BenefitCard
            icon={iconApi}
            title="Open API"
            text="Lorem ipsum elit. Ullam natus rerum tempore laboriosam quo dignissimos recusandae magni incidunt! Cumque delectus quidem, veritatis quasi at iure."
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
