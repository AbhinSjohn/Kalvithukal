import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="/media/logo.jpg" />
      <div className="header__nav">
        <div className="header__navItem">Home</div>
        <div className="header__navItem">Study Material</div>
        <div className="header__navItem">Services</div>
        <div className="header__navItem">About us</div>
        <div className="header__navItem">Contact us</div>
      </div>
      <div className="header__operation">
        <div className="header__operationItem header__user">
          <AccountCircleIcon className="header__userPhoto" />
          &nbsp;&nbsp;&nbsp;
          <span className="header__userName">Dinkan</span>
        </div>
        <div className="header__modes header__operationItem">
          <NightsStayIcon className="header__modeIcon" />
        </div>
        <div className="header__search header__operationItem">
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
