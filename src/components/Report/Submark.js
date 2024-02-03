import { useContext, useState } from "react";
import "./Submark.css";
import { MdVerified, MdOutlineVerified } from "react-icons/md";
import { UserContext } from "../../pages/home";
import { FaSpinner } from "react-icons/fa";
import { GoUnverified } from "react-icons/go";
import {
  MeasureValues,
  MeasureScores,
  MeasureRanges,
  MeasureNotes,
  MeasureAdvices,
} from "../../utils/text";

const Submark = (props) => {
  let className = "submark_container";
  if (props.disable) {
    className += " disabled";
  }

  let stateClass = "submark_state";
  if (props.state === 2) {
    stateClass += " spin-animation";
  }
  const stateIcon = () => {
    if (props.state === 0) {
      return <GoUnverified />;
    } else if (props.state === 1) {
      return <MdOutlineVerified />;
    } else if (props.state === 2) {
      return <FaSpinner />;
    } else if (props.state === 3) {
      return <MdVerified />;
    }
  };

  return (
    <div className={className}>
      <div className={stateClass}>{stateIcon()}</div>
      &nbsp;
      {props.text}
    </div>
  );
};

export const FrontProfileCalculator = () => {
  let senses = [
    "Not Landmarked Yet",
    "Get Front Profile Score",
    "% Front Profile Score",
  ];
  const { profileMatched } = useContext(UserContext);
  const [state, setState] = useState(profileMatched[0] ? 1 : 0);
  const [sense, setSense] = useState(senses[state]);
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
  const { lowerThirdProporation } = useContext(UserContext);
  const { medialCanthalAngle } = useContext(UserContext);
  const { setFrontProfileMark } = useContext(UserContext);
  const { oneProfile } = useContext(UserContext);

  const handleFrontProfileCalc = async () => {
    if (oneProfile.frontProfile.imgSrc === null) return;
    if (!state) return;
    setState(2);
    const requestBody = {
      gender: oneProfile.gender === "Male",
      racial: oneProfile.race,
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
      lowerThirdProporation: lowerThirdProporation,
      medialCanthalAngle: medialCanthalAngle,
    };
    console.log("aaa", requestBody);
    // fetch("http://localhost:8000/getfrontscore", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(requestBody),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setState(3);
    //     setSense((data.score / 3.055).toFixed(2).toString() + senses[2]);
    //     sessionStorage.setItem("frontProfileScore", data.score);
    //     setFrontProfileMark(data.score);
    //     for (let i = 0; i < 22; i++) {
    //       MeasureValues[i] = data.values[i];
    //       MeasureScores[i] = data.scores[i];
    //       MeasureRanges[i] = data.ranges[i];
    //       MeasureNotes[i] = data.notes[i];
    //       MeasureAdvices[i] = data.advices[i];
    //     }
    //   });
      oneProfile.frontProfile.mainProcess("Male", "Caucasian", "getfrontscore");
  };
  return (
    <div className="frontCalcContainer" onClick={handleFrontProfileCalc}>
      <Submark
        text={sense}
        disable={oneProfile.frontProfile.imgSRC === null}
        state={state}
      />
    </div>
  );
};

export const SideProfileCalculator = () => {
  let senses = [
    "Not Landmarked Yet",
    "Get Side Profile Score",
    "% Side Profile Score",
  ];
  const { profileMatched } = useContext(UserContext);
  const [state, setState] = useState(profileMatched[1] ? 1 : 0);
  const [sense, setSense] = useState(senses[state]);
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
  const { setSideProfileMark } = useContext(UserContext);
  const { oneProfile } = useContext(UserContext);

  const handleSideProfileCalc = async () => {
    if (oneProfile.sideProfile.imgSrc === null) return;
    setState(1);
    const requestBody = {
      gender: oneProfile.gender === "Male",
      racial: oneProfile.race,
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
        setState(2);
        setSense((data.score / 1.955).toFixed(2).toString() + senses[2]);
        sessionStorage.setItem("sideProfileScore", data.score);
        setSideProfileMark(data.score);
        for (let i = 22; i < 45; i++) {
          MeasureValues[i] = data.values[i - 22];
          MeasureScores[i] = data.scores[i - 22];
          MeasureRanges[i] = data.ranges[i - 22];
          MeasureNotes[i] = data.notes[i - 22];
          MeasureAdvices[i] = data.advices[i - 22];
        }
        console.log(MeasureNotes);
      });
  };
  return (
    <div className="sideCalcContainer" onClick={handleSideProfileCalc}>
      <Submark text={sense} disable={true} state={state} />
    </div>
  );
};

export default Submark;