import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src="media/logo.jpg" />
      <div className="footer_contents">
        <div className="footer__list">
          <div className="footerListHead">
            <h3 className="footerListItemHead">Company</h3>
            <ul className="footerUl">
              <li>Home</li>
              <li>About Us</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footerListHead">
            <h3 className="footerListItemHead">Store</h3>
            <ul className="footerUl">
              <li>Tamil Nadu State</li>
              <li>TNPSC</li>
              <li>CBSC</li>
              <li>UPSC</li>
            </ul>
          </div>
          <div className="footerListHead">
            <h3 className="footerListItemHead">Services</h3>
            <ul className="footerUl">
              <li>Study Material</li>
              <li>Quizzes</li>
              <li>Group</li>
              <li>Courses</li>
            </ul>
          </div>
        </div>
        <div className="footer__social">
          <div className="footer__socialHead">Follow Our Socials</div>
          <div className="footer__socialMedias">
            <div className="footer__socialMedia">
              <InstagramIcon />
            </div>
            <div className="footer__socialMedia">
              <FacebookIcon />
            </div>
            <div className="footer__socialMedia">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">Copyright@2020 Kalvithugal</div>
    </div>
  );
}

export default Footer;
