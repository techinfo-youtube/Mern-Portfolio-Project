import React from "react";
import "./Menus.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>

              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>

              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experince
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout />
              </div>
              <div className="nav-link">
                <FcReadingEbook />
              </div>

              <div className="nav-link">
                <FcBiotech />
              </div>

              <div className="nav-link">
                <FcVideoProjector />
              </div>
              <div className="nav-link">
                <FcPortraitMode />
              </div>
              <div className="nav-link">
                <FcBusinessContact />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
