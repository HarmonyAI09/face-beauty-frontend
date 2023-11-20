import React from 'react';
import './pricing.css'; // Make sure to create a corresponding CSS file

const PricingOption = ({ plan, price, features }) => {
    return (
        <div className="pricing-option">
            <h3 className="plan-name">{plan}</h3>
            <p className="price">{price}</p>
            <ul className="features">
                {features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
            <button className="subscribe-button">Buy</button>
        </div>
    );
};

const PricingComponent = () => {
    const pricingData = [
        {
            plan: "Basic",
            price: "Free",
            features: [
              "Full harmony score",
              "Access to our community",
              "Best and worst feature breakdown",
              "Celebrity score match",
            ]
        },
        {
            plan: "Premium",
            price: "$17.99/month",
            features: [
              "Full harmony score",
              "Full auto-generated report on your face",
              "   45+ facial assessments",
              "   Scoring breakdown",
              "   Advice where applicable",
              "Access to our community",
              "Up to 5 saved reports at a time",
              "Cross-platform access to subscription",
            ]
        },
        {
            plan: "Enterprise",
            price: "$22.99/month",
            features: [
              "Full harmony score",
              "Full page auto-generated report on your face",
              "   45+ facial assessments",
              "   Scoring breakdown",
              "   Advice where applicable",
              "Access to our community",
              "Unlimited reports saved at one time",
              "Cross-platform access to subscription",
              "Idealize : AI-gen beauty simulation",
              "Professional profile badge",
              "Early access to newly developed features",
            ]
        }
    ];

    return (
        <div className="pricing-container">
            {pricingData.map((option, index) => (
                <PricingOption key={index} plan={option.plan} price={option.price} features={option.features} />
            ))}
        </div>
    );
};

export default PricingComponent;
