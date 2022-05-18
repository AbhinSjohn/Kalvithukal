import React from "react";
import "./Donate.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
function Donate() {
  return (
    <div className="donate">
      {/* section one */}
      <div className="donate__section">
        {/* left part */}
        <div className="donate__header">
          <h3>
            Does Our Services Help You?
            <br />
            <span className="donate__headerColorChange">Donate Us</span> for
            more of it
          </h3>
          <div className="donate__description">
            <p>
              Your Donation will helps us to stay active and improve our
              services and site for providing better educational material.
            </p>
          </div>
          <div className="donate__button">
            <button>
              Donate Us <FavoriteIcon />
            </button>
          </div>
        </div>
        {/* right part */}
        <img src="media/girl-reading.png" alt="" className="header__image" />
      </div>
      {/* section two */}
      <div className="donate__section">
        {/* left part */}
        <img src="media/boy-reading.png" alt="" className="header__image" />
        {/* right part */}
        <div className="donate__header">
          <h3>
            Want to help us?
            <br />
            <span className="donate__headerColorChange">Upload your</span> study
            material here
          </h3>
          <div className="donate__description">
            <p>
              Upload your document or guide or study material on our website by
              clicking link below
            </p>
          </div>
          <div className="donate__button">
            <button>
              More Details <PictureAsPdfIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
