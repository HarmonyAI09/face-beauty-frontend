import React from "react";
import { Image } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

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
          backgroundColor: "#f4347f",
          color: "#fdc2d6",
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
          Community
        </div>
        <div
          onClick={() => handleRedirect("/home")}
          style={{ cursor: "pointer" }}
        >
          Harmony
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
          justifyContent: "space-evenly",
          alignItems:"center",
          width: "100%",
          height: "100px",
          overflow:"hidden",
          backgroundColor: "#fc72a6",
        }}
      >
        <div style={{fontWeight:"500", fontSize:"100px", color:"white", fontFamily:"fantasy"}}>HARMONY</div>
        <Image src="images/right.png" height={200}></Image>
      </div>
    </div>
  );
};

export default BeautyNavbar;
