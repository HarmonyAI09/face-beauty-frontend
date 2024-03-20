import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  Button,
  CompoundButton,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { Connected20Filled } from "@fluentui/react-icons";
import { FrontDialogContent, SideDialogContent } from "./NewDialogContent";
import { UserContext } from "../pages/home";
import { useContext } from "react";
import { showNotification } from "./NotificationCreator";
import { getAngle } from "../utils/geometry";

function calculateDistance(point1, point2) {
  const xDiff = point2.x - point1.x;
  const yDiff = point2.y - point1.y;
  const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
  return distance;
}

function pointPosition(point1, point2, point3){
  const value  = (point2.x - point1.x) * (point3.y - point1.y) - (point2.y - point1.y) * (point3.x - point1.x);
  if (value > 0){
    return 1;
  } else if (value < 0){
    return -1;
  } else {
    return 0;
  }
}

function distanceAndSideOfPointToLine(point1, point2, point3) {
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const [x3, y3] = [point3.x, point3.y];
  const v1 = x3 - x2;
  const v2 = y3 - y2;
  const w1 = x1 - x2;
  const w2 = y1 - y2;
  const dotProduct = v1 * w1 + v2 * w2;
  const vMagnitudeSquared = v1 ** 2 + v2 ** 2;
  const t = dotProduct / vMagnitudeSquared;
  const projectionX = x2 + t * v1;
  const projectionY = y2 + t * v2;
  const distance = Math.sqrt((projectionX - x1) ** 2 + (projectionY - y1) ** 2);
  const determinant = (x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2);
  let side;
  if (determinant > 0) {
    side = 1;
  } else if (determinant < 0) {
    side = -1;
  } else {
    side = 0;
  }

  return { "distance":distance, "side":side };
}

function calculateSharpAngle(line1, line2) {
  const dotProduct = line1.x * line2.x + line1.y * line2.y;
  const magnitude1 = Math.sqrt(line1.x ** 2 + line1.y ** 2);
  const magnitude2 = Math.sqrt(line2.x ** 2 + line2.y ** 2);
  const cosAngle = dotProduct / (magnitude1 * magnitude2);
  const sharpAngle = Math.acos(cosAngle) * (180 / Math.PI);
  return sharpAngle;
}

function calculateDistanceFromPointToLine(point1, point2, point3) {
  if (point3.x === point2.x) {
    return Math.abs(point1.x - point2.x);
  } else {
    let slope = (point3.y - point2.y) / (point3.x - point2.x);
    let yIntercept = point2.y - slope * point2.x;
    let distance =
      Math.abs(slope * point1.x - point1.y + yIntercept) /
      Math.sqrt(Math.pow(slope, 2) + 1);
    return distance;
  }
}


function findIntersectionPoint(point1, point2, point3, point4) {
  const slope1 = (point2.y - point1.y) / (point2.x - point1.x);
  const x = point3.x;
  const y = slope1 * (x - point1.x) + point1.y;
  return { x: point3.x, y: y };
}

export function FrontProfileMappingModal() {
  const { markPoints, setMarkPoints } = useContext(UserContext);
  const { RLs, setRLs} = useContext(UserContext);

  const { setEyeSeparationRatio } = useContext(UserContext);
  const { setFacialThirds } = useContext(UserContext);
  const { setLateralCanthalTilt } = useContext(UserContext);
  const { setFacialWHRatio } = useContext(UserContext);
  const { jawFrontalAngle, setJawFrontalAngle } = useContext(UserContext);
  const { setCheekBoneHeight } = useContext(UserContext);
  const { setTotalFacialWHRatio } = useContext(UserContext);
  const { setBigonialWidth } = useContext(UserContext);
  const { setChin2PhiltrumRatio } = useContext(UserContext);
  const { setNeckWidth } = useContext(UserContext);
  const { setMouseWidth2NoseWidthRatio } = useContext(UserContext);
  const { setMidFaceRatio } = useContext(UserContext);
  const { setEyebrowPositionRatio } = useContext(UserContext);
  const { setEyeSpacingRatio } = useContext(UserContext);
  const { setEyeAspectRatio } = useContext(UserContext);
  const { setLowerLip2UpperLipRatio } = useContext(UserContext);
  const { ipsilateralAlarAngle, setIpsilateralAlarAngle } =
    useContext(UserContext);
  const { setDeviationOfJFA2IAA } = useContext(UserContext);
  const { setEyebrowTilt } = useContext(UserContext);
  const { setBitemporalWidth } = useContext(UserContext);
  const { setLowerThirdProportion } = useContext(UserContext);
  const { setMedialCanthalAngle } = useContext(UserContext);
  const { profileMatched, setProfileMatched } = useContext(UserContext);

  const { oneProfile, setOneProfile } = useContext(UserContext);
  let data;

  const CompleteMarkPoints = async() => {
    const formData = new FormData();
    formData.append("points", JSON.stringify({markPoints}))
    const response = await fetch("http://localhost:8000/repair", {
      method: "POST",
      body: formData,
    });
    data = await response.json();
    setMarkPoints(data.points);
    setRLs(data.RLs);
  };
  const CalculateEyeSeparationRatio = () => {
    const point_12_distance = calculateDistance(
      markPoints[12][0],
      markPoints[12][1]
    );
    const point_17_distance = calculateDistance(
      markPoints[17][0],
      markPoints[17][1]
    );
    setEyeSeparationRatio(
      parseFloat((point_12_distance * 100) / point_17_distance).toFixed(2)
    );
  };
  const CaculateFacialThirds = () => {
    const height_1_5 = markPoints[5][0].y - markPoints[1][0].y;
    const height_5_19 = markPoints[19][0].y - markPoints[5][0].y;
    const height_19_29 = markPoints[29][0].y - markPoints[19][0].y;
    const total = markPoints[29][0].y - markPoints[1][0].y;
    setFacialThirds([
      parseFloat((height_1_5 * 100) / total).toFixed(2),
      parseFloat((height_5_19 * 100) / total).toFixed(2),
      parseFloat((height_19_29 * 100) / total).toFixed(2),
    ]);
  };
  const CalculateLateralCanthalTilt = () => {
    const left_lateralCanthalTilt = calculateSharpAngle(
      { x: -1, y: 0 },
      {
        x: markPoints[11][0].x - markPoints[16][0].x,
        y: markPoints[11][0].y - markPoints[16][0].y,
      }
    );
    const right_lateralCanthalTilt = calculateSharpAngle(
      { x: 1, y: 0 },
      {
        x: markPoints[11][1].x - markPoints[16][1].x,
        y: markPoints[11][1].y - markPoints[16][1].y,
      }
    );
    setLateralCanthalTilt(
      parseFloat(
        (left_lateralCanthalTilt + right_lateralCanthalTilt) / 2
      ).toFixed(2)
    );
  };
  const CalculateFacialWHRatio = () => {
    const width_17s = markPoints[17][1].x - markPoints[17][0].x;
    const height_6_21 = markPoints[21][0].y - markPoints[6][0].y;
    setFacialWHRatio(parseFloat(width_17s / height_6_21).toFixed(2));
  };
  const CalculateJawFrontalAngle = () => {
    setJawFrontalAngle(
      parseFloat(
        calculateSharpAngle(
          {
            x: markPoints[26][0].x - markPoints[28][0].x,
            y: markPoints[26][0].y - markPoints[28][0].y,
          },
          {
            x: markPoints[26][1].x - markPoints[28][1].x,
            y: markPoints[26][1].y - markPoints[28][1].y,
          }
        )
      ).toFixed(2)
    );
  };
  const CalculateCheekBoneHeight = () => {
    const a =
      markPoints[21][0].y - (markPoints[17][0].y + markPoints[17][1].y) / 2;
    const b =
      markPoints[21][0].y - (markPoints[12][0].y + markPoints[12][1].y) / 2;
    setCheekBoneHeight(parseFloat((a * 100) / b).toFixed(2));
  };
  const CalculateTotalFacialWHRatio = () => {
    const a = calculateDistance(markPoints[1][0], markPoints[29][0]);
    const b = calculateDistance(markPoints[17][0], markPoints[17][1]);
    setTotalFacialWHRatio(parseFloat(a / b).toFixed(2));
  };
  const CalculateBigonialWidth = () => {
    const a = calculateDistance(markPoints[22][0], markPoints[22][1]);
    const b = calculateDistance(markPoints[17][0], markPoints[17][1]);
    setBigonialWidth(parseFloat((a * 100) / b).toFixed(2));
  };
  const CalculateChin2PhiltrumRatio = () => {
    const RLs = data.RLs;
    const a = calculateDistanceFromPointToLine(markPoints[25][0], RLs[15][0], RLs[15][1]);
    const b = calculateDistanceFromPointToLine(markPoints[20][0], RLs[17][0], RLs[17][1]);
    setChin2PhiltrumRatio(parseFloat(a / b).toFixed(2));
  };
  const CalculateNeckWidth = () => {
    const a = calculateDistance(markPoints[27][0], markPoints[27][1]);
    const b = calculateDistance(markPoints[22][0], markPoints[22][1]);
    setNeckWidth(parseFloat((a * 100) / b).toFixed(2));
  };
  const CalculateMouthWidth2NoseWidthRatio = () => {
    const a = calculateDistance(markPoints[23][0], markPoints[23][1]);
    const b = calculateDistance(markPoints[18][0], markPoints[18][1]);
    setMouseWidth2NoseWidthRatio(parseFloat(a / b).toFixed(2));
  };
  const CalculateMidfaceRatio = () => {
    const a = calculateDistance(markPoints[12][0], markPoints[12][1]);
    const b =
      markPoints[21][0].y - (markPoints[12][0].y + markPoints[12][1].y) / 2;
    setMidFaceRatio(parseFloat(a / b).toFixed(2));
  };
  const CalculateEyebrowPositionRatio = () => {
    const a1 = calculateDistanceFromPointToLine(
      markPoints[8][0],
      markPoints[12][0],
      markPoints[12][1]
    );
    const a2 = calculateDistanceFromPointToLine(
      markPoints[8][1],
      markPoints[12][0],
      markPoints[12][1]
    );
    const b1 = calculateDistance(markPoints[10][0], markPoints[14][0]);
    const b2 = calculateDistance(markPoints[10][1], markPoints[14][1]);
    setEyebrowPositionRatio(parseFloat((a1 / b1 + a2 / b2) / 2).toFixed(2));
  };
  const CalculateEyeSpacingRatio = () => {
    const a = markPoints[16][1].x - markPoints[16][0].x;
    const b1 = markPoints[16][0].x - markPoints[9][0].x;
    const b2 = markPoints[9][1].x - markPoints[16][1].x;
    setEyeSpacingRatio(parseFloat((a / b1 + a / b2) / 2).toFixed(2));
  };
  const CalculateEyeAspectRatio = () => {
    const a1 = calculateDistance(markPoints[16][1], markPoints[11][1]);
    const b1 = calculateDistance(markPoints[10][1], markPoints[14][1]);
    const a2 = calculateDistance(markPoints[16][0], markPoints[11][0]);
    const b2 = calculateDistance(markPoints[10][0], markPoints[14][0]);
    setEyeAspectRatio(parseFloat((a1 / b1 + a2 / b2) / 2).toFixed(2));
  };
  const CalculateLowerLip2UpperLipRatio = () => {
    const a = markPoints[25][0].y - markPoints[24][0].y;
    const b = markPoints[24][0].y - markPoints[21][0].y;
    setLowerLip2UpperLipRatio(parseFloat(a / b).toFixed(2));
  };
  const CalculateIpsilateralAlarAngle = () => {
    const a = {
      x: markPoints[9][1].x - markPoints[19][0].x,
      y: markPoints[9][1].y - markPoints[19][0].y,
    };
    const b = {
      x: markPoints[9][0].x - markPoints[19][0].x,
      y: markPoints[9][0].y - markPoints[19][0].y,
    };
    setIpsilateralAlarAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateDeviationOfJFA2IAA = () => {
    const a = calculateSharpAngle(
      {
        x: markPoints[26][0].x - markPoints[28][0].x,
        y: markPoints[26][0].y - markPoints[28][0].y,
      },
      {
        x: markPoints[26][1].x - markPoints[28][1].x,
        y: markPoints[26][1].y - markPoints[28][1].y,
      }
    );
    const b = calculateSharpAngle(
      {
        x: markPoints[9][1].x - markPoints[19][0].x,
        y: markPoints[9][1].y - markPoints[19][0].y,
      },
      {
        x: markPoints[9][0].x - markPoints[19][0].x,
        y: markPoints[9][0].y - markPoints[19][0].y,
      }
    );
    setDeviationOfJFA2IAA(parseFloat(Math.abs(a - b)).toFixed(2));
  };
  const CalculateEyebrowTilt = () => {
    const RLs = data.RLs;
    const a0 = [markPoints[7][0], markPoints[4][0]];
    const b0 = [RLs[10][0], RLs[10][1]];
    const left = getAngle(a0, b0);
    const a1 = [markPoints[7][1], markPoints[4][1]];
    const b1 = [RLs[10][0], RLs[10][1]];
    const right = getAngle(a1, b1);
    console.log(left, right);
    setEyebrowTilt(parseFloat((left + right) / 2).toFixed(2));
  };
  const CalculateBitemporalWidth = () => {
    const a = calculateDistance(markPoints[2][0], markPoints[2][1]);
    const b = calculateDistance(markPoints[17][0], markPoints[17][1]);
    setBitemporalWidth(parseFloat((a * 100) / b).toFixed(2));
  };
  const CalculateLowerThirdProportion = () => {
    const a = markPoints[24][0].y - markPoints[19][0].y;
    const b = markPoints[29][0].y - markPoints[19][0].y;
    setLowerThirdProportion(parseFloat((a * 100) / b).toFixed(2));
  };
  const CalculateMedialCanthalAngle = () => {
    const a1 = {
      x: markPoints[13][1].x - markPoints[16][1].x,
      y: markPoints[13][1].y - markPoints[16][1].y,
    };
    const b1 = {
      x: markPoints[15][1].x - markPoints[16][1].x,
      y: markPoints[15][1].y - markPoints[16][1].y,
    };
    const a2 = {
      x: markPoints[13][0].x - markPoints[16][0].x,
      y: markPoints[13][0].y - markPoints[16][0].y,
    };
    const b2 = {
      x: markPoints[15][0].x - markPoints[16][0].x,
      y: markPoints[15][0].y - markPoints[16][0].y,
    };
    const left = calculateSharpAngle(a2, b2);
    const right = calculateSharpAngle(a1, b1);
    setMedialCanthalAngle(parseFloat((left + right) / 2).toFixed(2));
  };

  const handleApplyButtonClick = async() => {
    await CompleteMarkPoints();
    CalculateEyeSeparationRatio();
    CaculateFacialThirds();
    CalculateLateralCanthalTilt();
    CalculateFacialWHRatio();
    CalculateJawFrontalAngle();
    CalculateCheekBoneHeight();
    CalculateTotalFacialWHRatio();
    CalculateBigonialWidth();
    CalculateChin2PhiltrumRatio();
    CalculateNeckWidth();
    CalculateMouthWidth2NoseWidthRatio();
    CalculateMidfaceRatio();
    CalculateEyebrowPositionRatio();
    CalculateEyeSpacingRatio();
    CalculateEyeAspectRatio();
    CalculateLowerLip2UpperLipRatio();
    CalculateIpsilateralAlarAngle();
    CalculateEyebrowTilt();
    CalculateBitemporalWidth();
    CalculateLowerThirdProportion();
    CalculateMedialCanthalAngle();
    CalculateDeviationOfJFA2IAA();
    let tempProfile = profileMatched;
    tempProfile[0] = true;
    setProfileMatched(tempProfile);
    oneProfile.mapPoints = markPoints;
    showNotification(
      "Saved",
      "Front profile landmarks have been saved.",
      "info"
    );
  };

  return (
    <>
      <Dialog modalType="alert">
        <DialogTrigger disableButtonEnhancement>
          <CompoundButton
            icon={<Connected20Filled />}
            style={{
              color: "#0d47a1",
              backgroundColor: "rgba(0,0,0,0)",
              border: "0px",
            }}
          ></CompoundButton>
        </DialogTrigger>
        <DialogSurface
          style={{
            maxWidth: "1700px",
            maxHeight: "1000px",
            backgroundColor: "#bbdefb",
          }}
        >
          <DialogBody>
            <DialogTitle
              action={
                <DialogTrigger action="close">
                  <Button
                    appearance="subtle"
                    aria-label="close"
                    icon={<Dismiss24Regular />}
                    onClick={handleApplyButtonClick}
                  />
                </DialogTrigger>
              }
            ></DialogTitle>
            <FrontDialogContent />
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
}

export function SideProfileMappingModal() {
  const { markPoints, setMarkPoints } = useContext(UserContext);
  const { RLs, setRLs} = useContext(UserContext);

  const { setGonialAngle } = useContext(UserContext);
  const { setNasofrontalAngle } = useContext(UserContext);
  const { setMandibularPlaneAngle } = useContext(UserContext);
  const { setRamus2MandibleRatio } = useContext(UserContext);
  const { setFacialConvexityGlabella } = useContext(UserContext);
  const { setSubmentalCervicalAngle } = useContext(UserContext);
  const { setNasofacialAngle } = useContext(UserContext);
  const { setNasolabialAngle } = useContext(UserContext);
  const { setOrbitalVector } = useContext(UserContext);
  const { setTotalFacialConvexity } = useContext(UserContext);
  const { setMentolabialAngle } = useContext(UserContext);
  const { setFacialConvexityNasion } = useContext(UserContext);
  const { setNasalProjection } = useContext(UserContext);
  const { setNasalW2HRatio } = useContext(UserContext);
  const { setRickettsELine } = useContext(UserContext);
  const { setHoldawayHLine } = useContext(UserContext);
  const { setSteiinerSLine } = useContext(UserContext);
  const { setBurstoneLine } = useContext(UserContext);
  const { setNasomentalAngle } = useContext(UserContext);
  const { setGonion2MouthRelationship } = useContext(UserContext);
  const { setRecessionRelative2FrankfortPlane } = useContext(UserContext);
  const { setBrowridgeInclinationAngle } = useContext(UserContext);
  const { setNasalTipAngle } = useContext(UserContext);
  const { profileMatched, setProfileMatched } = useContext(UserContext);

  const { oneProfile, setOneProfile } = useContext(UserContext);
  let data;

  const CompleteMarkPoints = async() => {
    const formData = new FormData();
    formData.append("points", JSON.stringify({markPoints}))
    const response = await fetch("http://localhost:8000/repair", {
      method: "POST",
      body: formData,
    });
    data = await response.json();
    setMarkPoints(data.points);
    setRLs(data.RLs);
  };
  const CalculateGonialAngle = () => {
    const a = {
      x: markPoints[38][0].x - markPoints[49][0].x,
      y: markPoints[38][0].y - markPoints[49][0].y,
    };
    const b = {
      x: markPoints[52][0].x - markPoints[49][0].x,
      y: markPoints[52][0].y - markPoints[49][0].y,
    };
    setGonialAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateNasofrontalAngle = () => {
    const a = {
      x: markPoints[32][0].x - markPoints[35][0].x,
      y: markPoints[32][0].y - markPoints[35][0].y,
    };
    const b = {
      x: markPoints[39][0].x - markPoints[35][0].x,
      y: markPoints[39][0].y - markPoints[35][0].y,
    };
    setNasofrontalAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateMandibularPlaneAngle = () => {
    const RLs = data.RLs;
    const a = {
      x: RLs[2][0].x - RLs[2][1].x,
      y: RLs[2][0].y - RLs[2][1].y,
    };
    const b = {
      x: markPoints[52][0].x - markPoints[49][0].x,
      y: markPoints[52][0].y - markPoints[49][0].y,
    };
    setMandibularPlaneAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateRamus2MandibleRatio = () => {
    const a = calculateDistance(markPoints[38][0], markPoints[49][0]);
    const b = calculateDistance(markPoints[54][0], markPoints[49][0]);
    setRamus2MandibleRatio(parseFloat(a / b).toFixed(2));
  };
  const CalculateFacialConvexityGlabella = () => {
    const a = {
      x: markPoints[32][0].x - markPoints[43][0].x,
      y: markPoints[32][0].y - markPoints[43][0].y,
    };
    const b = {
      x: markPoints[50][0].x - markPoints[43][0].x,
      y: markPoints[50][0].y - markPoints[43][0].y,
    };
    setFacialConvexityGlabella(
      parseFloat(calculateSharpAngle(a, b)).toFixed(2)
    );
  };
  const CalculateSubmentalCervicalAngle = () => {
    const a = {
      x: markPoints[51][0].x - markPoints[53][0].x,
      y: markPoints[51][0].y - markPoints[53][0].y,
    };
    const b = {
      x: markPoints[55][0].x - markPoints[53][0].x,
      y: markPoints[55][0].y - markPoints[53][0].y,
    };
    setSubmentalCervicalAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateNasolabialAngle = () => {
    const a = {
      x: markPoints[41][0].x - markPoints[44][0].x,
      y: markPoints[41][0].y - markPoints[44][0].y,
    };
    const b = {
      x: markPoints[45][0].x - markPoints[44][0].x,
      y: markPoints[45][0].y - markPoints[44][0].y,
    };
    setNasolabialAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateTotalFacialConvexity = () => {
    const a = {
      x: markPoints[32][0].x - markPoints[40][0].x,
      y: markPoints[32][0].y - markPoints[40][0].y,
    };
    const b = {
      x: markPoints[50][0].x - markPoints[40][0].x,
      y: markPoints[50][0].y - markPoints[40][0].y,
    };
    setTotalFacialConvexity(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateFacialConvexityNasion = () => {
    const a = {
      x: markPoints[35][0].x - markPoints[43][0].x,
      y: markPoints[35][0].y - markPoints[43][0].y,
    };
    const b = {
      x: markPoints[50][0].x - markPoints[43][0].x,
      y: markPoints[50][0].y - markPoints[43][0].y,
    };
    setFacialConvexityNasion(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateOrbitalVector = () => {
    const RLs = data.RLs;
    const a = RLs[8][0].y < RLs[8][1].y? 0 : 1;
    const b = 1 - a;
    const t = distanceAndSideOfPointToLine(markPoints[57][0], RLs[8][a], RLs[8][b]);
    console.log(t['distance']);
    if (t["distance"] <= 2) {
      setOrbitalVector("neutral");
      return;
    }
    if (t["side"] === 1) {
      setOrbitalVector("negative");
    } else {
      setOrbitalVector("positive");
    }
  };
  const CalculateMentolabialAngle = () => {
    const a = {
      x: markPoints[58][0].x - markPoints[48][0].x,
      y: markPoints[58][0].y - markPoints[48][0].y,
    };
    const b = {
      x: markPoints[50][0].x - markPoints[48][0].x,
      y: markPoints[50][0].y - markPoints[48][0].y,
    };
    setMentolabialAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateNasalProjection = () => {
    const RLs = data.RLs;
    const a = calculateDistanceFromPointToLine(markPoints[40][0], RLs[3][0], RLs[3][1]);
    const b = calculateDistance(markPoints[40][0], markPoints[34][0]);
    setNasalProjection(parseFloat(a / b).toFixed(2));
  };
  const CalculateNasalW2HRatio = () => {
    const RLs = data.RLs;
    const a = calculateDistanceFromPointToLine(markPoints[40][0], RLs[3][0], RLs[3][1])
    const b = calculateDistance(markPoints[40][0], markPoints[56][0]);
    setNasalW2HRatio(parseFloat(a / b).toFixed(2));
  };
  const CalculateRickettsELine = () => {
    const a = distanceAndSideOfPointToLine(
      markPoints[45][0],
      markPoints[40][0],
      markPoints[50][0]
    );
    const b = distanceAndSideOfPointToLine(
      markPoints[47][0],
      markPoints[40][0],
      markPoints[50][0]
    );
    if (a["side"] !== 1 || b["side"] !== 1) {
      setRickettsELine("unideal");
      return;
    }
    if (a['distance'] / b['distance'] >= 1.5 && a['distance'] / b['distance'] <= 2.5) {
      setRickettsELine("ideal");
      return;
    }
    if (
      (a['distance'] / b['distance'] >= 1 && a['distance'] / b['distance'] <= 1.5) && 
      (a['distance'] / b['distance'] >= 2.5 && a['distance'] / b['distance'] <= 3)
    ) {
      setRickettsELine("near ideal");
      return;
    }
    setRickettsELine("unideal");
  };
  const CalculateHoldawayHLine = () => {
    const a = distanceAndSideOfPointToLine(
      markPoints[47][0],
      markPoints[45][0],
      markPoints[50][0]
    );
    console.log(a);
    console.log(Math.abs(a["distance"]));
    console.log(Math.abs(a["distance"])<=6.0);
    if (Math.abs(a["distance"]) <= 6.0) {
      setHoldawayHLine("ideal");
      return;
    }
    else if (Math.abs(a["distance"]) <= 15.0) {
      setHoldawayHLine("near ideal");
      return;
    }
    setHoldawayHLine("unideal");
  };
  const CalculateSteinerSLine = () => {
    const a = distanceAndSideOfPointToLine(
      markPoints[45][0],
      markPoints[59][0],
      markPoints[50][0]
    );
    if (Math.abs(a["distance"]) <= 6) {
      setSteiinerSLine("ideal");
      return;
    }
    if (Math.abs(a["distance"]) <= 15) {
      setSteiinerSLine("near ideal");
      return;
    }
    setSteiinerSLine("unideal");
  };
  const CalculateBurstoneLine = () => {
    const a = distanceAndSideOfPointToLine(
      markPoints[45][0],
      markPoints[43][0],
      markPoints[50][0]
    );
    const b = distanceAndSideOfPointToLine(
      markPoints[47][0],
      markPoints[43][0],
      markPoints[50][0]
    );
    console.log(a, b, "(((((");
    if (a['distance'] / b['distance'] >= 1.3 && a['distance'] / b['distance'] <= 1.8) {
      setBurstoneLine("ideal");
      return;
    }
    if (
      (a['distance'] / b['distance'] >= 1.1 && a['distance'] / b['distance'] <= 1.3)&&
      (a['distance'] / b['distance'] >= 1.8 && a['distance'] / b['distance'] <= 2)
    ) {
      setBurstoneLine("near ideal");
      return;
    }
    setBurstoneLine("unideal");
  };
  const CalculateNasofacialAngle = () => {
    const a = {
      x: markPoints[39][0].x - markPoints[35][0].x,
      y: markPoints[39][0].y - markPoints[35][0].y,
    };
    const b = {
      x: markPoints[50][0].x - markPoints[35][0].x,
      y: markPoints[50][0].y - markPoints[35][0].y,
    };
    setNasofacialAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateNasomentalAngle = () => {
    const a = {
      x: markPoints[35][0].x - markPoints[40][0].x,
      y: markPoints[35][0].y - markPoints[40][0].y,
    };
    const b = {
      x: markPoints[50][0].x - markPoints[40][0].x,
      y: markPoints[50][0].y - markPoints[40][0].y,
    };
    setNasomentalAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };
  const CalculateGonion2MouthRelationship = () => {
    setGonion2MouthRelationship("below");
  };
  const CalculateRecessionRelative2FrankfortPlane = () => {
    let RLs = data.RLs;    
    RLs[5].sort(function(a, b){
      return a.y - b.y;
    });
    const pos = pointPosition(markPoints[35][0], RLs[5][1], RLs[5][0]);
    const d = calculateDistanceFromPointToLine(markPoints[35][0], RLs[5][0], RLs[5][1]);
    if (pos === 1) {
      setRecessionRelative2FrankfortPlane("none");
      return;
    }
    if (d <= 4) {
      setRecessionRelative2FrankfortPlane("slight");
      return;
    }
    if (d <= 8) {
      setRecessionRelative2FrankfortPlane("moderate");
      return;
    }
    setRecessionRelative2FrankfortPlane("extreme");
  };
  const CalculateBrowridgeInclinationAngle = () => {
    const RLs = data.RLs;
    const a = { 
      x: RLs[7][0].x - RLs[7][1].x, 
      y: RLs[7][0].y - RLs[7][1].y, 
    };
    const b = {
      x: markPoints[32][0].x - markPoints[31][0].x,
      y: markPoints[32][0].y - markPoints[31][0].y,
    };
    const angle = parseFloat(calculateSharpAngle(a, b)).toFixed(2);
    if(angle >= 90){
      setBrowridgeInclinationAngle(180 - angle);
    } else {
      setBrowridgeInclinationAngle(angle);
    }
  };
  const CalculateNasalTipAngle = () => {
    const a = {
      x: markPoints[36][0].x - markPoints[40][0].x,
      y: markPoints[36][0].y - markPoints[40][0].y,
    };
    const b = {
      x: markPoints[41][0].x - markPoints[40][0].x,
      y: markPoints[41][0].y - markPoints[40][0].y,
    };
    setNasalTipAngle(parseFloat(calculateSharpAngle(a, b)).toFixed(2));
  };

  const handleApplyButtonClick = async() => {
    await CompleteMarkPoints();
    CalculateGonialAngle();
    CalculateNasofrontalAngle();
    CalculateMandibularPlaneAngle();
    CalculateRamus2MandibleRatio();
    CalculateFacialConvexityGlabella();
    CalculateSubmentalCervicalAngle();
    CalculateNasolabialAngle();
    CalculateTotalFacialConvexity();
    CalculateFacialConvexityNasion();
    CalculateOrbitalVector();
    CalculateMentolabialAngle();
    CalculateNasalProjection();
    CalculateNasalW2HRatio();
    CalculateRickettsELine();
    CalculateHoldawayHLine();
    CalculateSteinerSLine();
    CalculateBurstoneLine();
    CalculateNasofacialAngle();
    CalculateNasomentalAngle();
    CalculateGonion2MouthRelationship();
    CalculateRecessionRelative2FrankfortPlane();
    CalculateBrowridgeInclinationAngle();
    CalculateNasalTipAngle();
    let tempProfile = profileMatched;
    tempProfile[1] = true;
    setProfileMatched(tempProfile);
    oneProfile.mapPoints = markPoints;
    showNotification(
      "Saved",
      "Side profile landmarks have been saved.",
      "info"
    );
  };
  return (
    <>
      <Dialog modalType="alert">
        <DialogTrigger disableButtonEnhancement>
          <CompoundButton
            icon={<Connected20Filled />}
            style={{
              color: "#0d47a1",
              backgroundColor: "rgba(0,0,0,0)",
              border: "0px",
            }}
          ></CompoundButton>
        </DialogTrigger>
        <DialogSurface
          style={{
            maxWidth: "1700px",
            maxHeight: "1000px",
            backgroundColor: "#bbdefb",
          }}
        >
          <DialogBody>
            <DialogTitle
              action={
                <DialogTrigger action="close">
                  <Button
                    appearance="subtle"
                    aria-label="close"
                    icon={<Dismiss24Regular />}
                    onClick={handleApplyButtonClick}
                  />
                </DialogTrigger>
              }
            ></DialogTitle>
            <SideDialogContent />
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
}
