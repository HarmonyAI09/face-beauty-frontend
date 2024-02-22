import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./premium.module.scss";
import { Button } from "@fluentui/react-components";
import Segment from "../Segment";

function PremiumComponent() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: localStorage.getItem("userEmail"),
        });

        if (error) {
            return;
        }

        const requestBody = {
            "email": localStorage.getItem("userEmail"),
        };

        const response = await fetch("http://localhost:8000/user/create-customer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody),
        });

        const customer = await response.json();
        const subscription = await axios.post("http://localhost:8000/user/create-subscription", {
            customer_id: customer.customer_id,
            payment_method_id: paymentMethod.id,
            price_id: "price_1Oks0CItQ91j83DiflP5TzK9"
        });

        if (subscription.status) {
            await axios.post("http://localhost:8000/user/premium", {
                email: localStorage.getItem("userEmail")
            });
            localStorage.setItem("userLevel", 1);
            window.location.reload();
        } else {
        }
    };

    return (
        <Segment title="Premium">
            <CardElement />
            <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
            <Button shape="circular" onClick={handleSubmit} disabled={!stripe}>
                Buy Premium - 17.99$
            </Button>
            </div>
        </Segment>
    );
}

export default PremiumComponent;