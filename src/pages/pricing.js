import React, { useState, useContext, useEffect } from 'react';
import './pricing.css';
import PayButton from '../components/PayButton';
import { AppContext,  } from "../App";



const PricingOption = ({ plan, price, features, buttonText }) => {
    // const [userEmail, setUserEmail] = useState("");

    const storedUserEmail = localStorage.getItem('userEmail');

    // useEffect(() => {
    //     if (userEmail=="") {
    //         const storedUserEmail = localStorage.getItem('userEmail');
    //         if (userEmail) {
    //             setUserEmail(storedUserEmail);
    //         }
    //     }
    // }, [userEmail, setUserEmail]);
    

    return (
        <div className="pricing-option">
            <h3 className="plan-name">{plan}</h3>
            <p className="price">{price}</p>
            <ul className="features">
                {features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
            <PayButton btnTxt={buttonText} userEmail = {storedUserEmail}>{buttonText}</PayButton>
        </div>
    );
};

const PricingComponent = () => {
    const pricingData = [
        {
            plan: "Premium",
            price: "$17.99/month",
            features: [
                "Full harmony score",
                "Full auto-generated report on your face",
                "   45+ facial assessments",
                "   Scoring breakdown",
                "   Advice where applicable",
                "Up to 5 saved reports at a time",
            ]
        },
    ];

    return (
        <div className="pricing-container">
            {pricingData.map((option, index) => {
                // Render the component only if the plan is "Basic" or "Premium"
                if (option.plan === "Basic") {
                    return (
                        <PricingOption
                            key={index}
                            plan={option.plan}
                            price={option.price}
                            features={option.features}
                            buttonText="Free Trial"
                        />
                    );
                } else if (option.plan === "Premium") {
                    return (
                        <PricingOption
                            key={index}
                            plan={option.plan}
                            price={option.price}
                            features={option.features}
                            buttonText="Buy Premium"
                        />
                    );
                } else {
                    return (
                        <PricingOption
                            key={index}
                            plan={option.plan}
                            price={option.price}
                            features={option.features}
                            buttonText="Buy Enterprise"
                        />
                    );
                }

            })}
        </div>
    );
};

export default PricingComponent;
