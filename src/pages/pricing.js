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
} from "@fluentui/react-components";

const useStyles = makeStyles({
    main: {
        ...shorthands.gap("16px"),
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },

    card: {
        width: "400px",
        maxWidth: "100%",
        height: "auto",
        justifyContent:"flex-start"
        
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
        <Card className={styles.card} {...props} onClick={()=>{console.log("Hello")}}>
            <CardPreview
                className={styles.grayBackground}
            >
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


            <CardPreview className={styles.grayBackground}>
                <div style={{margin:"10px"}}>
                    {props.benefits.map((benefit, index) => (
                        <div key={index}>{benefit.replace(/ /g, "\u00A0")}</div>
                    ))}
                </div>
            </CardPreview>
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
        "Cross-platform access to subscription"
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
        "Early access to newly developed features"
    ];

    const [selected1, setSelected1] = React.useState(true);
    const [selected2, setSelected2] = React.useState(true);
    const [selected3, setSelected3] = React.useState(true);

    return (
        <div className={styles.main}>
            <CardExample
                selected={selected1}
                benefits={basic_benefits}
                version = {"Basic"}
                monthly_price = {"Default (free)"}
                resource = {"./images/basic.jpg"}
            />
            <CardExample
                selected={selected2}
                benefits={premium_benefits}
                version = {"Premium"}
                monthly_price = {"$17.99 per month"}
                resource = {"./images/premium.jpg"}
            />
            <CardExample
                selected={selected3}
                benefits={professional_benefits}
                version = {"Professional"}
                monthly_price = {"$22.99 per month"}
                resource = {"./images/professional.jpg"}
            />
        </div>
    );
};

export default Pricing;