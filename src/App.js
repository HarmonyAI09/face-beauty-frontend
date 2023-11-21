import './App.css';
import { useState, createContext } from 'react';
import Home from './pages/home';
import Resource from './pages/resource';
import Pricing from './pages/pricing';
import About from './pages/about';
import BeautyNavbar from './components/BeautyNavbar';
import Community from './pages/community';
import BeautyFootbar from './components/BeautyFootbar';
import Login from './pages/login';
import PaySuccess from './pages/PaySuccess';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [expireDate, setExpireDate] = useState("");

  const storedEmail = localStorage.getItem('userEmail');

  return (

    <Router>
      <AppContext.Provider value={{ userName, userEmail, userLevel, expireDate, setUserName, setUserEmail, setUserLevel, setExpireDate }}>
        <div className="App" style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <BeautyNavbar ></BeautyNavbar>
          <div style={{ height: "-webkit-fill-available", justifyContent: "space-around", display: "flex", alignItems: "center", overflowY: "auto" }}>
            {!storedEmail && <Login setIsLoggedIn={setIsLoggedIn} />}
            <Routes>
              {storedEmail && <Route exact path="/home" element={<Home />} />}
              {storedEmail && <Route exact path="/checkout-success" element={<PaySuccess />} />}
              {storedEmail && <Route exact path="/resources" element={<Resource />} />}
              {storedEmail && <Route exact path="/pricing" element={<Pricing />} />}
              {storedEmail && <Route exact path="/about" element={<About />} />}
              {storedEmail && <Route exact path="/community" element={<Community />} />}
            </Routes >
          </div>
          <BeautyFootbar></BeautyFootbar>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
