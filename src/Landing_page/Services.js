import React from "react";
import "./Services.css";
import SchoolIcon from "@material-ui/icons/School";
import ComputerIcon from "@material-ui/icons/Computer";
import TelegramIcon from "@material-ui/icons/Telegram";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
function Services() {
  return (
    <div className="services__container">
      <div className="services">
        <div className="services__head">
          <h2>Our Services</h2>
          <p className="services__description">
            We provide study materials for tamilnadu students & teacher to
            enhance their knowledge in their subject.
          </p>
        </div>
        <div className="services__list">
          <div className="services__listItem">
            <SchoolIcon className="services__listIcon" />
            <p className="services__listdescription">
              Learn from the best study materials provided by us which is
              collected from all over TamilNadu Teachers
            </p>
          </div>
          <div className="services__listItem">
            <ComputerIcon className="services__listIcon" />
            <p className="services__listdescription">
              Test yourself and your knowledge by attending quizzes or post your
              own quizzes
            </p>
          </div>
          <div className="services__listItem">
            <TelegramIcon className="services__listIcon" />
            <p className="services__listdescription">
              Create courses to earn or buy courses to learn
            </p>
          </div>
          <div className="services__listItem">
            <InsertCommentIcon className="services__listIcon" />
            <p className="services__listdescription">
              Connect with others, send messages and share materials in groups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
