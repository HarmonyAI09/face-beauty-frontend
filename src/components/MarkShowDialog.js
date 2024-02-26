import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  Button,
} from "@fluentui/react-components";
import { UserContext } from "../pages/home";
import { useContext, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { LoadingComponent } from "./Loading";
import { showNotification } from "./NotificationCreator";

export const ScoreAlert = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { eyeSeparationRatio } = useContext(UserContext);
  const { facialThirds } = useContext(UserContext);
  const { lateralCanthalTilt } = useContext(UserContext);
  const { facialWHRatio } = useContext(UserContext);
  const { jawFrontalAngle } = useContext(UserContext);
  const { cheekBoneHeight } = useContext(UserContext);
  const { totalFacialWHRatio } = useContext(UserContext);
  const { bigonialWidth } = useContext(UserContext);
  const { chin2PhiltrumRatio } = useContext(UserContext);
  const { neckWidth } = useContext(UserContext);
  const { mouthWidth2NoseWidthRatio } = useContext(UserContext);
  const { midFaceRatio } = useContext(UserContext);
  const { eyebrowPositionRatio } = useContext(UserContext);
  const { eyeSpacingRatio } = useContext(UserContext);
  const { eyeAspectRatio } = useContext(UserContext);
  const { lowerLip2UpperLipRatio } = useContext(UserContext);
  const { ipsilateralAlarAngle } = useContext(UserContext);
  const { deviationOfJFA2IAA } = useContext(UserContext);
  const { eyebrowTilt } = useContext(UserContext);
  const { bitemporalWidth } = useContext(UserContext);
  const { lowerThirdProportion } = useContext(UserContext);
  const { medialCanthalAngle } = useContext(UserContext);
  const { gonialAngle } = useContext(UserContext);
  const { nasofrontalAngle } = useContext(UserContext);
  const { mandibularPlaneAngle } = useContext(UserContext);
  const { ramus2MandibleRatio } = useContext(UserContext);
  const { facialConvexityGlabella } = useContext(UserContext);
  const { submentalCervicalAngle } = useContext(UserContext);
  const { nasofacialAngle } = useContext(UserContext);
  const { nasolabialAngle } = useContext(UserContext);
  const { orbitalVector } = useContext(UserContext);
  const { totalFacialConvexity } = useContext(UserContext);
  const { mentolabialAngle } = useContext(UserContext);
  const { facialConvexityNasion } = useContext(UserContext);
  const { nasalProjection } = useContext(UserContext);
  const { nasalW2HRatio } = useContext(UserContext);
  const { rickettsELine } = useContext(UserContext);
  const { holdawayHLine } = useContext(UserContext);
  const { steinerSLine } = useContext(UserContext);
  const { burstoneLine } = useContext(UserContext);
  const { nasomentalAngle } = useContext(UserContext);
  const { gonion2MouthRelationship } = useContext(UserContext);
  const { recessionRelative2FrankfortPlane } = useContext(UserContext);
  const { browridgeInclinationAngle } = useContext(UserContext);
  const { nasalTipAngle } = useContext(UserContext);

  const { frontProfileMark, setFrontProfileMark } = useContext(UserContext);
  const { sideProfileMark, setSideProfileMark } = useContext(UserContext);
  const { selectedOption } = useContext(UserContext);
  const { reportNotes, setReportNotes } = useContext(UserContext);
  const { reportScores, setReportScores } = useContext(UserContext);
  const { reportMaxScores, setReportMaxScores } = useContext(UserContext);
  const { reportRanges, setReportRanges } = useContext(UserContext);
  const { reportValues, setreportValues } =
    useContext(UserContext);
  const { reportMeasurementNames, setReportMeasurementNames } =
    useContext(UserContext);
  const { reportAdvices, setReportAdvices } = useContext(UserContext);

  /*********************** I N D I V I D U A L   S T A T E ***********************/
  const [showingScore, setShowingScore] = useState([0.0, 0.0]);

  const handleFrontProfileCalc = async () => {
    const gender = sessionStorage.getItem("gender");
    const ethnicity = sessionStorage.getItem("ethnicity");
    if (gender === null) {
      showNotification("Warning", "You need to select the gender.", "Warning");
      return;
    }
    if (ethnicity === null) {
      showNotification("Warning", "You need to select the ethnicity/race.", "Warning");
      return;
    }
    setIsLoading(true);
    const requestBody = {
      gender: gender,
      racial: selectedOption,
      eyeSeparationRatio: eyeSeparationRatio,
      facialThirds: facialThirds,
      lateralCanthalTilt: lateralCanthalTilt,
      facialWHRatio: facialWHRatio,
      jawFrontalAngle: jawFrontalAngle,
      cheekBoneHeight: cheekBoneHeight,
      totalFacialWHRatio: totalFacialWHRatio,
      bigonialWidth: bigonialWidth,
      chin2PhiltrumRatio: chin2PhiltrumRatio,
      neckWidth: neckWidth,
      mouthWidth2NoseWidthRatio: mouthWidth2NoseWidthRatio,
      midFaceRatio: midFaceRatio,
      eyebrowPositionRatio: eyebrowPositionRatio,
      eyeSpacingRatio: eyeSpacingRatio,
      eyeAspectRatio: eyeAspectRatio,
      lowerLip2UpperLipRatio: lowerLip2UpperLipRatio,
      ipsilateralAlarAngle: ipsilateralAlarAngle,
      deviationOfJFA2IAA: deviationOfJFA2IAA,
      eyebrowTilt: eyebrowTilt,
      bitemporalWidth: bitemporalWidth,
      lowerThirdProportion: lowerThirdProportion,
      medialCanthalAngle: medialCanthalAngle,
    };

    fetch("http://localhost:8000/getfrontscore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setFrontProfileMark(data.score);
        setShowingScore([data.score, data.score / 3.055]);
        const tempNotes = [...reportNotes];
        const templateScores = [...reportScores];
        const templateMaxScores = [...reportMaxScores];
        const templateRanges = [...reportRanges];
        const templateValues = [...reportValues];
        const templateMeasurements = [...reportMeasurementNames];
        const templateAdvices = [...reportAdvices];
        for (let i = 0; i < 22; i++) {
          tempNotes[i] = data.notes[i];
          templateScores[i] = data.scores[i];
          templateMaxScores[i] = data.maxs[i];
          templateRanges[i] = data.ranges[i];
          templateValues[i] = data.values[i];
          templateMeasurements[i] = data.names[i];
          templateAdvices[i] = data.advices[i];
        }
        setReportNotes(tempNotes);
        setReportScores(templateScores);
        setReportMaxScores(templateMaxScores);
        setReportRanges(templateRanges);
        setreportValues(templateValues);
        setReportMeasurementNames(templateMeasurements);
        setReportAdvices(templateAdvices);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSideProfileCalc = async () => {
    const gender = sessionStorage.getItem("gender");
    if (gender !== null) {
      showNotification("Warning", "You need to select the gender.", "Warning");
      return;
    }
    setIsLoading(true);
    const requestBody = {
      gender: gender,
      racial: selectedOption,
      gonialAngle: gonialAngle,
      nasofrontalAngle: nasofrontalAngle,
      mandibularPlaneAngle: mandibularPlaneAngle,
      ramus2MandibleRatio: ramus2MandibleRatio,
      facialConvexityGlabella: facialConvexityGlabella,
      submentalCervicalAngle: submentalCervicalAngle,
      nasofacialAngle: nasofacialAngle,
      nasolabialAngle: nasolabialAngle,
      orbitalVector: orbitalVector,
      totalFacialConvexity: totalFacialConvexity,
      mentolabialAngle: mentolabialAngle,
      facialConvexityNasion: facialConvexityNasion,
      nasalProjection: nasalProjection,
      nasalW2HRatio: nasalW2HRatio,
      rickettsELine: rickettsELine,
      holdawayHLine: holdawayHLine,
      steinerSLine: steinerSLine,
      burstoneLine: burstoneLine,
      nasomentalAngle: nasomentalAngle,
      gonion2MouthRelationship: gonion2MouthRelationship,
      recessionRelative2FrankfortPlane: recessionRelative2FrankfortPlane,
      browridgeInclinationAngle: browridgeInclinationAngle,
      nasalTipAngle: nasalTipAngle,
    };

    fetch("http://localhost:8000/getsidescore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        setSideProfileMark(data.score);
        setShowingScore([data.score, data.score / 1.945]);
        const tempNotes = [...reportNotes];
        const templateScores = [...reportScores];
        const templateMaxScores = [...reportMaxScores];
        const templateRanges = [...reportRanges];
        const templateValues = [...reportValues];
        const templateMeasurements = [...reportMeasurementNames];
        const templateAdvices = [...reportAdvices];
        for (let i = 0; i < 45; i++) {
          tempNotes[i + 22] = data.notes[i];
          templateScores[i + 22] = data.scores[i];
          templateMaxScores[i + 22] = data.maxs[i];
          templateRanges[i + 22] = data.ranges[i];
          templateValues[i + 22] = data.values[i];
          templateMeasurements[i + 22] = data.names[i];
          templateAdvices[i + 22] = data.advices[i];
        }
        setReportNotes(tempNotes);
        setReportScores(templateScores);
        setReportMaxScores(templateMaxScores);
        setReportRanges(templateRanges);
        setreportValues(templateValues);
        setReportMeasurementNames(templateMeasurements);
        setReportAdvices(templateAdvices);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleCalculateButtonClick = () => {
    if (props.title === "Front") {
      handleFrontProfileCalc();
    }
    if (props.title === "Side") {
      handleSideProfileCalc();
    }
    if (props.title === "Total") {
      // handleFrontProfileCalc();
      // handleSideProfileCalc();
      setShowingScore([
        frontProfileMark + sideProfileMark,
        (frontProfileMark + sideProfileMark) / 5,
      ]);
    }
  };

  const isFrontTitle = props.title === "Front";
  const isSideTitle = props.title === "Side";
  const isTotalTitle = props.title === "Total";

  const isDisabled =
    (isFrontTitle && eyeSeparationRatio === 0.0) ||
    (isSideTitle && gonialAngle === 0.0) ||
    (isTotalTitle && (eyeSeparationRatio === 0.0 || gonialAngle === 0.0));

  return (
    <Dialog modalType="alert">
      <DialogTrigger disableButtonEnhancement>
        <Button
          shape="rect"
          style={{ width: "200px", margin: "5px" }}
          onClick={handleCalculateButtonClick}
          disabled={isDisabled}
        >
          {props.title} Profile
        </Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
            <DialogTitle>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {isLoading ? (
                  <LoadingComponent />
                ) : (
                  <>
                    {props.title} Profile Harmony Score {" - "}
                    {Math.max(parseFloat(showingScore[1]).toFixed(1), 0)}%
                  </>
                )}
              </div>
            </DialogTitle>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button shape="rect" appearance="secondary">
                Close
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
