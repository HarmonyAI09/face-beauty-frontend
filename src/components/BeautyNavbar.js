import React from 'react';
import { Image } from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom';

const BeautyNavbar = () => {
    const navigate = useNavigate();

    const handleRedirect = (path) => {
        navigate(path);
    };

    return (
        <div style={{ top: "0px", left: "0px", width: "100%" }}>
            <div style={{ height: "30px", backgroundColor: "#4e224a", color: "#ffffff", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div onClick={() => handleRedirect('/community')} style={{ cursor: 'pointer' }}>Community</div>
                {/* <div onClick={() => handleRedirect('/resources')} style={{ cursor: 'pointer' }}>Resource&Reading</div> */}
                <div onClick={() => handleRedirect('/home')} style={{ cursor: 'pointer' }}>Harmony - Accurate Machine-learning beauty calculator</div>
                <div onClick={() => handleRedirect('/about')} style={{ cursor: 'pointer' }}>About</div>
                {/* <div onClick={() => handleRedirect('/contact')} style={{cursor: 'pointer'}}>Contact us</div> */}
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", backgroundColor: "#6e2a65" }}>
                <Image src="images/left.jpg" height={100}></Image>
                <Image src="images/middle.jpg" height={100}></Image>
                <Image src="images/right.jpg" height={100}></Image>
            </div>
        </div>
    );
}

export default BeautyNavbar;