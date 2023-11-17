import logo from './logo.svg';
import './App.css';
import JSZip from 'jszip';
import { useState, useContext, createContext } from 'react';
import Home from './pages/home';
import Resource from './pages/resource';
import Pricing from './pages/pricing';
import About from './pages/about';
import BeautyNavbar from './components/BeautyNavbar';
import Contact from './pages/contact';
import Community from './pages/community';
import BeautyFootbar from './components/BeautyFootbar';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [expireDate, setExpireDate] = useState("");
  // const [userName, setUserName] = useState("Dash");
  // const [userEmail, setUserEmail] = useState("crazydash@gmail.com");
  // const [userLevel, setUserLevel] = useState("2");
  // const [expireDate, setExpireDate] = useState("Tomorrow");

  return (
    <AppContext.Provider value={{userName, userEmail, userLevel, expireDate, setUserName, setUserEmail, setUserLevel, setExpireDate}}>
      <Router>
        {/* , backgroundColor:"pink" */}
        <div className="App" style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <BeautyNavbar ></BeautyNavbar>
          <div style={{height:"-webkit-fill-available", justifyContent:"space-around", display:"flex", alignItems:"center", overflowY: "auto"}}>
            {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
            <Routes>
              {isLoggedIn && <Route exact path="/home" element={<Home />} />}
              {isLoggedIn && <Route exact path="/resources" element={<Resource />} />}
              {isLoggedIn && <Route exact path="/pricing" element={<Pricing />} />}
              {isLoggedIn && <Route exact path="/about" element={<About />} />}
              {isLoggedIn && <Route exact path="/community" element={<Community />} />}
            </Routes >
          </div>
          <BeautyFootbar></BeautyFootbar>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
