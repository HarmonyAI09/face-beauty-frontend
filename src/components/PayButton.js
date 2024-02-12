import './PayButton.css'
import React from 'react';

const PayButton = ({ btnTxt, userEmail}) => {    
    const handleCheckout = (type) => {
        if (type === "Buy Premium") {
            fetch('http://localhost:8000/cash/create-checkout-session', {
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
            fetch('http://localhost:8000/create-checkout-session', {
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