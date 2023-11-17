import * as React from "react";
import {
  makeStyles,
  shorthands,
  Button,
  Caption1,
  tokens,
  Text,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import {
  Card,
  CardHeader,
  CardPreview,
  CardProps,
  Input,
} from "@fluentui/react-components";
import { AppContext } from "../App";
import { useContext, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const premiumButtonID = "buy_btn_1OCNIrItQ91j83DiPlJXpWUN";
const professionalButtonID = "buy_btn_1OCJOYItQ91j83Dit4Y6xev8";
const premiumStripePromise =
  "pk_live_51OAYN0ItQ91j83Di07u5o2hHnOhgrfEy1MCFm1lOW4w2siOlaiG2STV1OtlKlxrtvwmfFOm5ab4zI111mhepKVON00VcfYrhsW";
const professionalStripePromise =
  "pk_live_51OAYN0ItQ91j83Di07u5o2hHnOhgrfEy1MCFm1lOW4w2siOlaiG2STV1OtlKlxrtvwmfFOm5ab4zI111mhepKVON00VcfYrhsW";

const stripePromise = loadStripe("pk_live_51OAYN0ItQ91j83Di07u5o2hHnOhgrfEy1MCFm1lOW4w2siOlaiG2STV1OtlKlxrtvwmfFOm5ab4zI111mhepKVON00VcfYrhsW");
const useStyles = makeStyles({
  main: {
    ...shorthands.gap("16px"),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  cardmother: {
    ...shorthands.gap("16px"),
    display: "flex",
    // flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  card: {
    width: "400px",
    maxWidth: "100%",
    height: "auto",
    justifyContent: "flex-start",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  smallRadius: {
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
  },

  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },

  logoBadge: {
    ...shorthands.padding("5px"),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    backgroundColor: "#FFF",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },
});

const CardExample = (props: CardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} {...props}>
      <CardPreview className={styles.grayBackground}>
        <img
          className={styles.smallRadius}
          src={props.resource}
          alt="Presentation Preview"
        />
      </CardPreview>
      <CardHeader
        header={<Text weight="semibold">{props.version}</Text>}
        description={
          <Caption1 className={styles.caption}>{props.monthly_price}</Caption1>
        }
      />

      <div style={{ margin: "10px" }}>
        {props.benefits.map((benefit, index) => (
          <div key={index}>{benefit.replace(/ /g, "\u00A0")}</div>
        ))}
      </div>
    </Card>
  );
};


export const Pricing = () => {
  const styles = useStyles();

  const basic_benefits = [
    "Full harmony score",
    "Access to our community",
    "Best and worst feature breakdown",
    "Celebrity score match",
  ];
  const premium_benefits = [
    "Full harmony score",
    "Full auto-generated report on your face",
    "   45+ facial assessments",
    "   Scoring breakdown",
    "   Advice where applicable",
    "Access to our community",
    "Up to 5 saved reports at a time",
    "Cross-platform access to subscription",
  ];
  const professional_benefits = [
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
  ];

  const [selected1, setSelected1] = React.useState(true);
  const [selected2, setSelected2] = React.useState(true);
  const [selected3, setSelected3] = React.useState(true);

  const { userName, setUserName } = useContext(AppContext);
  const { userLevel, setUserLevel } = useContext(AppContext);
  const { userEmail, setUserEmail } = useContext(AppContext);
  const { expireDate, setExpireDate } = useContext(AppContext);

  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvc, setCVC] = useState("");

  const premiumDetails = {};
  const navigate = useNavigate();
  const purchaseData = {
    email: userEmail
  };

  const handlePremiumCheckout = async () => {
    const stripe = await stripePromise;
    const response = await axios.post('http://localhost:8000/api/create-checkout-session', { plan: 'premium' });
    const sessionId = response.data.sessionId;

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      // Handle any errors that occur
      console.log(result.error.message);
    }
  };

  const handleProfessionalCheckout = async () => {
    const stripe = await stripePromise;
    const response = await axios.post('http://localhost:8000/api/create-checkout-session', { plan: 'professional' });
    const sessionId = response.data.sessionId;
  
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
  
    if (result.error) {
      // Handle any errors that occur
      console.log(result.error.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Input placeholder="1234 1234 1234 1234" style={{ width: "400px" }} value={cardNumber}></Input>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Input placeholder="MM/YY" style={{ width: "200px" }} value={cardDate}></Input>
                    <Input placeholder="CVC" style={{ width: "200px" }} value={cvc}></Input>
                </div>
            </div> */}
      <div className={styles.main}>
        <div>
          <CardExample
            selected={selected1}
            benefits={basic_benefits}
            version={"Basic"}
            monthly_price={"Default (free)"}
            resource={"./images/basic.jpg"}
            onClick={() => {
              console.log("Free Version Clicked!");
            }}
          />
        </div>
        <div className={styles.cardmother}>
          <CardExample
            selected={selected2}
            benefits={premium_benefits}
            version={"Premium"}
            monthly_price={"$17.99 per month"}
            resource={"./images/premium.jpg"}
            btnID={premiumButtonID}
            key={premiumStripePromise}
          />
          <stripe-buy-button
            buy-button-id="buy_btn_1OCNIrItQ91j83DiPlJXpWUN"
            publishable-key="pk_live_51OAYN0ItQ91j83Di07u5o2hHnOhgrfEy1MCFm1lOW4w2siOlaiG2STV1OtlKlxrtvwmfFOm5ab4zI111mhepKVON00VcfYrhsW"
          ></stripe-buy-button>
          {/* <button onClick={handlePremiumCheckout}>Click Here</button> */}
        </div>
        <div className={styles.cardmother}>
          <CardExample
            selected={selected3}
            benefits={professional_benefits}
            version={"Professional"}
            monthly_price={"$22.99 per month"}
            resource={"./images/professional.jpg"}
            btnID={professionalButtonID}
            key={professionalStripePromise}
          />
          <stripe-buy-button
            buy-button-id="buy_btn_1OCJOYItQ91j83Dit4Y6xev8"
            publishable-key="pk_live_51OAYN0ItQ91j83Di07u5o2hHnOhgrfEy1MCFm1lOW4w2siOlaiG2STV1OtlKlxrtvwmfFOm5ab4zI111mhepKVON00VcfYrhsW"
          ></stripe-buy-button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
