import Header from "../components/Header";
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { Text, Image } from "@fluentui/react-components";

const WebGLComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Create a WebGL renderer
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(300, window.innerHeight);

        // Create a scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(1, 1, 1);

        // Create a camera
        const camera = new THREE.PerspectiveCamera(
            75,
            300 / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Create a geometry
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cube
            // cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Render the scene with the camera
            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return <canvas ref={canvasRef} />;
};

function About() {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>            
            <div style={{padding:"30px", fontSize:"32px", color:"purple"}}>About US</div>
            <div style={{padding:"15px", color:"purple", fontSize:"14px"}}>
                <div>Harmony is a Machine-learning model that accurately predicts facial attractiveness – it is available across our web-app and mobile devices (App store & Google Play store).
                Ditmar Hoxha, Harmony’s founder, set out to create a unique way to quantify beauty and solve the aesthetic concerns of regular people and clinicians alike. Along with measuring facial attractiveness, Harmony gives our users an extensive look at exactly what makes up their face and provides general advice in accordance with one’s specific facial features.
                Our aim is to make information that would typically cost hundreds of dollars accessible to as many people as possible for a fraction of the cost.</div>
                <br/>
                <div>We offer the most accurate assessment of facial attractiveness on the market due to the methodological diligence behind our beauty formula.
                There are a lot of different beauty calculators out there, but they all seem to fall short of being considered accurate.
                We’re changing that through our revolutionary methods of assessing beauty -- this includes our robust ML algorithms to accurately detect facial landmarks and our novel facial assessments invented exclusively for Harmony.
                All other facial analysis services on the market consider only a few parameters, often fewer  than 10 facial assessments.
                As a result, they will gloss over meaningful portions of your face and end up with inaccurate and inconsistent results across different faces.
                Harmony also makes sure to account for the subtle variations in facial features between ethnic groups.</div>
                <br/>
                <div>While specific standards of beauty are always changing, the foundational standards of facial harmony have not.
                We can now quantify those standards due to the rapid advancements in technology and large amounts of empirical data available at our fingertips.
                Everyone is curious about their physical appearance – we help address that curiosity.</div>
                <br/>
                <div>The material presented by Harmony is highly technical, but we try to present it in a digestible manner for the average person in the hopes of creating future beauty experts. 
                We source our data from scientific literature as well as our own predictive AI models and package it in a way that helps you. 
                As new literature on facial attractiveness, orthodontics, and plastic surgery become available, we will update our models to ensure maximal predictive accuracy.</div>
                <br/>
                <div>Harmony and the information therein are not intended as a substitute to a consultation with a plastic surgeon.
                Along with satisfying the curiosity of the average user, this service aims to provide precursory insight for those who are seeking cosmetic surgery; you are more than welcome to show your report to your surgeon to help you achieve your desired goals.
                In fact, we believe this service can be a useful tool for surgeons and patients alike, providing all of the information a surgeon needs to determine the best plan for your face.</div>
            </div>
            <div>
                <Image style={{margin:"20px"}} src="./images/about1.jpg"></Image>
                <Image style={{margin:"20px"}} src="./images/about2.jpg"></Image>
                <Image style={{margin:"20px"}} src="./images/about3.jpg"></Image>
                <Image style={{margin:"20px"}} src="./images/about4.jpg"></Image>
            </div>
        </div>
    );
}

export default About;