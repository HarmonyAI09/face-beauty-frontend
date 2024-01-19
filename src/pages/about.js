import Header from "../components/Header";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { Text, Image } from "@fluentui/react-components";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { Card, CardPreview } from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "90%",
    maxWidth: "100%",
  },
});

function InfoGraphic(props) {
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        border: "3px dashed #0d47a1",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#0d47a1",
        margin: "10px",
        padding: "20px",
      }}
      title={props.desc}
    >
      <br />
      <div style={{ color: "#0d47a1", fontSize: "50px", display: "flex" }}>
        <b>{props.times}</b>
      </div>
      <br />
      <br />
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <b>{props.string}</b>
      </div>
    </div>
  );
}

function OnlyTextIntro(props) {
  return (
    <div
      style={{
        width: "200px",
        border: "3px dashed #0d47a1",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#0d47a1",
        margin: "10px",
        padding: "10px",
        fontSize: "14px",
      }}
    >
      <b>{props.string}</b>
    </div>
  );
}

function About() {
  const styles = useStyles();
  return (
    <div style={{ width: "100%"}}>
      <Card className={styles.card}>
        <CardPreview
          style={{ padding: "20px", paddingLeft: "50px", paddingRight: "50px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "32px",
              margin: "20px",
            }}
          >
            About Us
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                padding: "15px",
                color: "darkslategray",
                fontSize: "14px",
              }}
            >
              <div>
                Harmony is a machine learning model that accurately predicts
                facial attractiveness. It offers a comprehensive analysis of
                facial features and advice tailored to one's unique facial
                attributes. Our mission is to make information that would
                typically cost hundreds of dollars accessible to as many people
                as possible.
              </div>
              <br />
              <div>
                We take pride in providing the most accurate facial
                attractiveness assessment on the market. While other beauty
                calculators exist, we've set ourselves apart through robust ML
                algorithms (for facial landmark detection) and novel facial
                assessments. Harmony also accounts for the subtle variations in
                facial features between ethnic groups.
              </div>
              <br />
              <div>
                While specific beauty standards may evolve, the fundamental
                principles of facial harmony remain consistent. With
                advancements in technology and empirical data at our fingertips,
                we can now quantify these standards. Harmony aims to satisfy the
                curiosity surrounding facial attractiveness. We source our data
                from scientific literature and our predictive AI models.
              </div>
              <br />
              <div>
                As new research emerges in the fields of facial attractiveness,
                orthodontics, and plastic surgery, we will continuously update
                our models to ensure maximal predictive accuracy.
              </div>
              <br />
              <div>
                Harmony and the information it provides are not intended to
                replace a consultation with a surgeon. While we do cater to the
                average person, our service also aims to offer preliminary
                insights to those considering cosmetic surgery. You are welcome
                to share your Harmony report with your surgeon to help plan the
                best course of action. We believe our service can be a valuable
                tool for both surgeons and patients alike.
              </div>
              <br />
              <div>We hope you enjoy using Harmony.</div>
              <br />
              <div style={{ textAlign: "end" }}>
                <b>Ditmar Hoxha, Harmony Founder</b>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <InfoGraphic
                times={"5x+"}
                string={"More facial assessments than competitors"}
              ></InfoGraphic>
              <InfoGraphic
                times={"Robust"}
                string={"ML algorithms catering to your specific face"}
              ></InfoGraphic>
              <InfoGraphic
                times={"15x"}
                string={
                  "Value for your money – 3 hours’ worth of analysis done in seconds"
                }
              ></InfoGraphic>
              <InfoGraphic
                times={"80"}
                string={
                  "Combined facial landmarks in the front and side profile"
                }
              ></InfoGraphic>
            </div>
          </div>
        </CardPreview>
      </Card>
    </div>
  );
}

export default About;
