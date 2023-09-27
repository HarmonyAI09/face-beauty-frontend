import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeautyNavbar = () => {
    const navigate = useNavigate();

    const handleRedirect = (path) => {
        navigate(path);
    };

    return (
        <div style={{height:"40px", backgroundColor:"#4e224a", color: "#ffffff", display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <div onClick={() => handleRedirect('/community')} style={{cursor: 'pointer'}}>Community</div>
            <div onClick={() => handleRedirect('/resources')} style={{cursor: 'pointer'}}>Resource&Reading</div>
            <div onClick={() => handleRedirect('/home')} style={{cursor: 'pointer'}}>Harmony - Accurate Machine-learning beauty calculator</div>
            <div onClick={() => handleRedirect('/about')} style={{cursor: 'pointer'}}>About</div>
            <div onClick={() => handleRedirect('/contact')} style={{cursor: 'pointer'}}>Contact us</div>
        </div>
    );
}

export default BeautyNavbar;