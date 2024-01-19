import React, { useState } from "react";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import { showNotification } from "./NotificationCreator";

const UserProfile = () => {
  const [imageSrc, setImageSrc] = useState("images/user.png");
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setImageSrc("images/logout.png"); // The source when hovered
  };

  const handleMouseLeave = () => {
    setImageSrc("images/user.png"); // The original source
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    showNotification("Log out", "You have been logged out", "default");
    window.location.href = "http://localhost:3000/home";
  };

  return (
    <>
      {localStorage.getItem("userName") && (
        <div
          className="m_user"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleLogout}
        >
          <img src={imageSrc} height={65} alt="User" />
          <div>{localStorage.getItem("userName")}</div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
