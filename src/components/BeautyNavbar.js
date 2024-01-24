import React from "react";
import { Image } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";

const BeautyNavbar = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div style={{ top: "0px", left: "0px", width: "100%" }}>
      <div
        style={{
          height: "30px",
          backgroundColor: "#0d47a1",
          color: "#e3f2fd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "500",
          paddingLeft: "10%",
          paddingRight: "10%"
        }}
      >
        <div
          onClick={() => handleRedirect("/community")}
          style={{ cursor: "pointer" }}
        >
          FAQs
        </div>
        <div
          onClick={() => handleRedirect("/home")}
          style={{ cursor: "pointer" }}
        >
          Harmony
        </div>
        <div
          onClick={() => handleRedirect("/products")}
          style={{ cursor: "pointer" }}
        >
          Other products & services
        </div>
        <div
          onClick={() => handleRedirect("/about")}
          style={{ cursor: "pointer" }}
        >
          About
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems:"center",
          width: "100%",
          height: "100px",
          overflow:"hidden",
          backgroundColor: "#1565c0",
          position:"relative"
        }}
      >
        <div style={{fontWeight:"500", fontSize:"100px", color:"white", fontFamily:"fantasy"}}>HARMONY</div>
        <div style={{fontWeight:"500", fontSize:"40px", color:"white", fontFamily:"fantasy"}}>Beta</div>
        <Image src="images/apple.png" height={50} style={{position:"absolute", left:"25px"}}></Image>
        <Image src="images/app.png" height={50} style={{position:"absolute", left:"200px", borderRadius:"5px"}}></Image>
        <UserProfile/>
      </div>
    </div>
  );
};

export default BeautyNavbar;
