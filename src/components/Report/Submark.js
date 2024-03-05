import { useContext, useState } from "react";
import "./Submark.css";
import { MdVerified, MdOutlineVerified } from "react-icons/md";
import { UserContext } from "../../pages/home";
import { FaSpinner } from "react-icons/fa";
import { GoUnverified } from "react-icons/go";
import { swapObjectKeyValue } from "../../utils/js_support";
import { attributeStringToShort } from "../../utils/profile";
import { OneProfile } from "../../class/Profile";

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
  const { oneProfile, setOneProfile } = useContext(UserContext);
  let senses = [
    "Not Landmarked Yet",
    "Get Front Profile Score",
    "Calculating",
    (oneProfile.front.score / 3.055).toFixed(1).toString() +
      "% Front Profile Score",
  ];
  const { profileMatched } = useContext(UserContext);
  const [state, setState] = useState(
    oneProfile.front.score !== null ? 3 : profileMatched[0] ? 1 : 0
  );
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

  const handleFrontProfileCalc = async () => {
    if (oneProfile.front.imgSrc === null || !oneProfile.isNew) return;
    if (!state) return;
    setState(2);
    const requestBody = {
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
    const shortStringToAttributeString = swapObjectKeyValue(
      attributeStringToShort
    );
    const tempProfile = new OneProfile();
    tempProfile.copy(oneProfile);
    for (let key in requestBody)
      tempProfile.front.setMeasurement(
        shortStringToAttributeString[key],
        requestBody[key]
      );
    await tempProfile.getHarmony("Front");
    setOneProfile(tempProfile);
    setState(3);
    setOneProfile(tempProfile);
  };
  return (
    <div className="frontCalcContainer" onClick={handleFrontProfileCalc}>
      <Submark
        text={senses[state]}
        disable={oneProfile.front.imgSrc === null || !oneProfile.isNew}
        state={state}
      />
    </div>
  );
};

export const SideProfileCalculator = () => {
  const { oneProfile, setOneProfile } = useContext(UserContext);
  let senses = [
    "Not Landmarked Yet",
    "Get Side Profile Score",
    "Calculating",
    (oneProfile.side.score / 1.945).toFixed(1).toString() +
      "% Side Profile Score",
  ];
  const { profileMatched } = useContext(UserContext);
  const [state, setState] = useState(
    oneProfile.side.score !== null ? 3 : profileMatched[1] ? 1 : 0
  );
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

  const handleSideProfileCalc = async () => {
    if (oneProfile.side.imgSrc === null || !oneProfile.isNew) return;
    if (!state) return;
    setState(2);
    const requestBody = {
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
    const shortStringToAttributeString = swapObjectKeyValue(
      attributeStringToShort
    );
    const tempProfile = new OneProfile();
    tempProfile.copy(oneProfile);
    for (let key in requestBody)
      tempProfile.side.setMeasurement(
        shortStringToAttributeString[key],
        requestBody[key]
      );
    tempProfile.getHarmony("Side");
    setOneProfile(tempProfile);
    setState(3);
    setOneProfile(tempProfile);
  };
  return (
    <div className="sideCalcContainer" onClick={handleSideProfileCalc}>
      <Submark
        text={senses[state]}
        disable={oneProfile.side.imgSrc === null || !oneProfile.isNew}
        state={state}
      />
    </div>
  );
};

export default Submark;
