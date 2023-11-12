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

export const appContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("");
  const [userLevel, setUserLevel] = useState(0);
  const [exporeDate, setExpireDate] = useState();

  return (
    <appContext.Provider value={{}}>
      <Router>
        {/* , backgroundColor:"pink" */}
        <div className="App" style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <BeautyNavbar ></BeautyNavbar>
          <div>
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
    </appContext.Provider>
  );
}

export default App;
