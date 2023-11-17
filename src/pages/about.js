import Header from "../components/Header";
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { Text, Image } from "@fluentui/react-components";
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
    shorthands,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
    Divider
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

    return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "1024px",
        maxWidth: "100%",
    },
});

function InfoGraphic (props) {
    return(
        <div style={{width:"180px", height:"180px", border:"3px dashed purple", borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", color:"purple", margin:"10px", padding:"20px"}}
        title = {props.desc}>
            <br/>
            <div style={{color:"purple", fontSize:"50px", display:"flex", }}><b>{props.times}</b></div>
            <br/>
            <br/>
            <div style={{marginLeft:"auto", marginRight:"auto"}}><b>{props.string}</b></div>
        </div>
    );
};

function OnlyTextIntro (props) {
    return(
        <div style={{width:"200px", border:"3px dashed purple", borderRadius:"10px", display:"flex", flexDirection:"column", 
            alignItems:"center", justifyContent:"center", color:"purple", margin:"10px", padding:"10px", fontSize:"14px"}}>
            <b>{props.string}</b>
        </div>
    );
};

function About() {
    const styles = useStyles();
    return (
        <div style={{ width: "100%", paddingTop: "300px", paddingBottom: "30px" }}>
            <Card className={styles.card}>

                <CardPreview style={{ padding: "20px" }}>
                    <div style={{display:"flex", justifyContent:"center", fontSize:"32px", margin:"20px"}}>About Us</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <div style={{ padding: "15px", color: "darkslategray", fontSize: "14px" }}>
                            <div>Harmony is a machine learning model that accurately predicts facial attractiveness. 
                                It is available through our web app and mobile devices, including the App Store and Google Play. 
                                Alongside its facial attractiveness assessment, Harmony offers a comprehensive analysis of facial features, providing personalized advice tailored to one's unique facial attributes. 
                                Our mission is to make information that would typically cost hundreds of dollars accessible to as many people as possible.</div>
                            <br />
                            <div>We take pride in providing the most accurate facial attractiveness assessment on the market, thanks to our revolutionary beauty formula. 
                                While numerous beauty calculators exist, we've set ourselves apart through our innovative methods. 
                                These methods include robust machine learning algorithms for detecting facial landmarks and novel facial assessments. 
                                Unlike other facial analysis services, which often consider fewer than ten facial parameters, we delve into the nuances of your facial structure, 
                                ensuring accuracy across various faces. Harmony also accounts for subtle facial feature variations between different ethnic groups.</div>
                            <br />
                            <div>While specific beauty standards may evolve, the fundamental principles of facial harmony remain consistent. 
                                With the rapid advancements in technology and the wealth of empirical data at our fingertips, we can now quantify these standards. 
                                Harmony aims to satisfy the curiosity surrounding one’s physical appearance.
                                Our material is highly technical, but we present it in a user-friendly manner to foster future beauty experts. 
                                We source our data from scientific literature and our predictive AI models, packaging it to be accessible and informative. </div>
                            <br />
                            <div>As new research emerges in the fields of facial attractiveness, orthodontics, and plastic surgery, we continuously update our models to ensure maximum predictive accuracy.</div>
                            <br />
                            <div>It's essential to clarify that Harmony and the information it provides are not intended to replace a consultation with a plastic surgeon. 
                                While we cater to the curiosity of the average user, our service also aims to offer preliminary insights to those considering cosmetic surgery. 
                                You are welcome to share your Harmony report with your surgeon to help them plan your facial enhancements. 
                                We believe our service can be a valuable tool for both surgeons and patients, providing the necessary information for the best approach to facial transformation.</div>
                            <br/>
                            <div>We hope you enjoy using Harmony.</div>
                            <br/>
                            <div style={{textAlign:"end"}}><b>Ditmar - Harmony Founder</b></div>
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <InfoGraphic times={"5x+"} string={"More facial assessments than competitors"}></InfoGraphic>
                            <InfoGraphic times={"Robust"} string={"ML algorithms catering to your specific face"}></InfoGraphic>
                            <InfoGraphic times={"15x"} string={"Value for your money within Harmony report alone"}></InfoGraphic>
                            <InfoGraphic times={"80"} string={"Combined facial landmarks in the front and side profile"}></InfoGraphic>
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <OnlyTextIntro string={"More detail than an initial consultation with a surgeon at a fraction of the cost"}></OnlyTextIntro>
                            <OnlyTextIntro string={"Time effective -- get 3 hours’ worth of human analysis in seconds(helps surgeons too!)"}></OnlyTextIntro>
                            <OnlyTextIntro string={"First-of-its-kind features like “idealize”, only possible through Harmony’s unique beauty formula and algorithms."}></OnlyTextIntro>
                            <OnlyTextIntro string={"Continual improvements based on user feedback  "}></OnlyTextIntro>
                        </div>
                    </div>
                </CardPreview>
            </Card>
        </div>
    );
}

export default About;