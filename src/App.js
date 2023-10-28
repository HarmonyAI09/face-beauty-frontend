import logo from './logo.svg';
import './App.css';
import JSZip from 'jszip';
import { useState } from 'react';
import Home from './pages/home';
import Resource from './pages/resource';
import Pricing from './pages/pricing';
import About from './pages/about';
import BeautyNavbar from './components/BeautyNavbar';
import Contact from './pages/contact';
import Community from './pages/community';
import BeautyFootbar from './components/BeautyFootbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* , backgroundColor:"pink" */}
      <div className="App" style={{ width: "100%", height: "100vh", position: "relative" }}>
        <BeautyNavbar></BeautyNavbar>
        <div>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/resources" element={<Resource />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/community" element={<Community />} />
            {/* <Route exact path="/contact" element={<Contact/>} /> */}
          </Routes >
        </div>
        <BeautyFootbar></BeautyFootbar>
      </div>
    </Router>
  );
}

export default App;
