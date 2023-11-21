import './PayButton.css'
import React, { useState, useContext } from 'react';
import { AppContext } from "../App";


const PayButton = ({ btnTxt, userEmail}) => {
    console.log(userEmail);
    
    const handleCheckout = (type) => {
        if (type === "Buy Premium") {
            fetch('https://43brl8gnkrl5mq-8000.proxy.runpod.net/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ plan: type, userEmail: userEmail}),
            })
            .then(response => response.json()) // Convert the response to JSON
            .then(data => {
                if (data.url) {
                    // Redirect to the Stripe checkout page
                    window.location.href = data.url;
                }
            })
            .catch((error) => console.error('Error:', error));
        } else if(type === "Buy Enterprise"){
            fetch('https://43brl8gnkrl5mq-8000.proxy.runpod.net/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ plan: type }),
            })
            .then(response => response.json()) // Convert the response to JSON
            .then(data => {
                if (data.url) {
                    // Redirect to the Stripe checkout page
                    window.location.href = data.url;
                }
            })
            .catch((error) => console.error('Error:', error));
        } else {
            window.location.href = '/home';
        }
    };

    return (
        <button className="subscribe-button" onClick={() => handleCheckout(btnTxt)}>{btnTxt}</button>
    )
}

export default PayButton;