import "./App.css";
import { useState, createContext } from "react";
import Home from "./pages/home";
import Resource from "./pages/resource";
import Pricing from "./pages/pricing";
import About from "./pages/about";
import BeautyNavbar from "./components/BeautyNavbar";
import Community from "./pages/community";
import BeautyFootbar from "./components/BeautyFootbar";
import Login from "./pages/login";
import PaySuccess from "./pages/PaySuccess";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css"; // If you're using animation}
import Product from "./components/Product";

export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [expireDate, setExpireDate] = useState("");

  return (
    <Router>
      <AppContext.Provider
        value={{
          userName,
          userEmail,
          userLevel,
          expireDate,
          setUserName,
          setUserEmail,
          setUserLevel,
          setExpireDate,
        }}
      >
        <div
          className="App"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <ReactNotifications />
          <BeautyNavbar></BeautyNavbar>
          <div
            style={{
              height: "-webkit-fill-available",
              justifyContent: "space-around",
              display: "flex",
              alignItems: "center",
              overflowY: "auto",
            }}
          >
            {!localStorage.getItem("userEmail") && (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )}
            {localStorage.getItem("userEmail") && (
              <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/products" element={<Product />} />
                <Route
                  exact
                  path="/checkout-success"
                  element={<PaySuccess />}
                />
                <Route exact path="/resources" element={<Resource />} />
                <Route exact path="/pricing" element={<Pricing />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/community" element={<Community />} />
              </Routes>
            )}
          </div>
          <BeautyFootbar></BeautyFootbar>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
