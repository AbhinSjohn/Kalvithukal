import React from "react";
import "./Body.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Body() {
  return (
    <div className="body">
      <div className="body__section">
        <div className="body__firstSection">
          <div className="body__header">
            <h1>
              Welcome to <br></br>
              <span className="body__headerColor">Kalvi</span>thugal
            </h1>
            <div className="body__heart">
              <FavoriteIcon className="body__heartIcon" />
            </div>
          </div>
          <div className="body__description">
            <p>
              We provide study materials for tamilnadu students & teachers to
              enhance their knowledge in their subject.<br></br>
              <br></br> We also provide study tips and tricks via blogging and
              conduct quizzes on one mark of all subjects from the previous
              tamilnadu state board question papers
            </p>
          </div>

          <button className="body__button">
            More Details <ArrowRightAltIcon />
          </button>
        </div>
        <div className="body__secondSection">
          <img className="body__lapImage" src="media/lap-image.jpg" alt="" />
        </div>
      </div>
      <div className="body__footer">
        <div className="body_socialMedias">
          <div className="body__socialMedia">
            <InstagramIcon />
          </div>
          <div className="body__socialMedia">
            <FacebookIcon />
          </div>
          <div className="body__socialMedia">
            <TwitterIcon />
          </div>
        </div>
        <div className="body__rule">
          <hr />
        </div>
        <div className="body__hang">
          <InsertCommentIcon className="body__hangIcon" />
        </div>
      </div>
    </div>
  );
}

export default Body;
