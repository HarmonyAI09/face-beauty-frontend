import { Image } from "@fluentui/react-components";
import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { makeStyles } from "@fluentui/react-components";
import { Input, Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../components/NotificationCreator";
import BeautyInput from "../components/BeautyInput";

const Login = ({}) => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("rgb(26,115,232)");

  const handleChangeState = () => {
    setIsSignIn(!isSignIn);
  };

  const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUserName, setUserEmail, setUserLevel, setExpireDate } =
      useContext(AppContext);

    const handleSubmit = () => {
      // Make a POST request to the sign-in endpoint in your backend API
      const formData = {
        mail: email,
        pswd: password,
      };
      fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle success or error response from the backend
          console.log(data);
          if (data.success) {
            showNotification("Success", data.status, "success");
            setUserName(data.name);
            setUserEmail(data.email);
            setUserLevel(data.level);
            setExpireDate(data.expire);
            localStorage.setItem("userName", data.name);
            localStorage.setItem("userEmail", data.email);
            localStorage.setItem("userLevel", data.level);
            localStorage.setItem("expireDate", data.expire);
            navigate("/home");
          } else {
            showNotification("Failed", data.status, "danger");
          }
        })
        .catch((error) => {
          showNotification("Failed", "Sign-in failed.", "danger");
        });
    };


    return (
      <>
        <div
          style={{
            color: "#f4347f",
            fontFamily: `"Google Sans","Noto Sans Myanmar UI",arial,sans-serif`,
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "1.3333",
            wordBreak: "break-word",
            boxSizing: "inherit",
          }}
        >
          Sign in
        </div>
        <form onSubmit={handleSubmit} style={{width:"100%"}}>
          <BeautyInput
            placeholder={"Email"}
            type={"email"}
            value={email}
            onChange={setEmail}
          />
          <BeautyInput
            placeholder={"Password"}
            type={"password"}
            value={password}
            onChange={setPassword}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <div className="m_button" type="submit" onClick={handleSubmit}>
              Sign In
            </div>
          </div>
        </form>
      </>
    );
  };

  const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

      if (!username || !email || !password) {
        // Handle validation error - display a warning or error message
        console.log("Please fill in all the fields");
        return;
      }
      const formData = {
        name: username,
        mail: email,
        pswd: password,
      };
      // Make a POST request to the sign-up endpoint in your backend API
      fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle success or error response from the backend
          if (data.success) {
            showNotification("Success", data.status, "success");
          } else {
            showNotification("Failed", data.status, "danger");
          }
        })
        .catch((error) => {
          showNotification("Failed", "Sign-up failed.", "danger");
          console.error(error);
        });
    };

    return (
      <>
        <div
          style={{
            color: "#f4347f",
            fontFamily: `"Google Sans","Noto Sans Myanmar UI",arial,sans-serif`,
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "1.3333",
            wordBreak: "break-word",
            boxSizing: "inherit",
          }}
        >
          Sign up
        </div>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <BeautyInput
            placeholder={"Username"}
            type={"username"}
            value={username}
            onChange={setUsername}
          />
          <BeautyInput
            placeholder={"Email"}
            type={"email"}
            value={email}
            onChange={setEmail}
          />
          <BeautyInput
            placeholder={"Password"}
            type={"password"}
            value={password}
            onChange={setPassword}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <div className="m_button" type="submit" onClick={handleSubmit}>
              Sign Up
            </div>
          </div>
        </form>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        height: "auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "448px",
          height: "500px",
          padding: "48px 40px 36px",
          border: "2px solid #f4347f",
          borderRadius: "20px",
          backgroundColor: "#fdc2d6",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {isSignIn ? <SignIn /> : <SignUp />}

          <div
            style={{ width: "100%", textAlign: "center", marginTop: "30px" }}
          >
            <div
              style={{
                color: "#f4347f",
                display: "inline-block",
                letterSpacing: "0.25px",
                outline: "0",
                fontSize: "inherit",
                textAlign: "left",
                fontFamily: `roboto,"Noto Sans Myanmar UI",arial,sans-serif`,
                cursor: "pointer",
              }}
              onClick={handleChangeState}
            >
              <b>
                {isSignIn ? "Create account" : "Already have your account?"}
              </b>
            </div>
          </div>
        </div>
      </div>
      {/* <SignUp></SignUp> */}
    </div>
  );
};

export default Login;
