import * as React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogActions,
    DialogContent,
    Button,
    CompoundButton,
    Image,
    Switch
} from "@fluentui/react-components";
import { Connected20Filled } from "@fluentui/react-icons";
import { FrontDialogContent, SideDialogContent } from "./NewDialogContent";
import UploadImageCrop from "../components/UploadImageCrop";
import { UserContext } from "../pages/home";
import { useEffect, useRef, useState, useContext } from 'react';

function calculateDistance(point1, point2) {
    const xDiff = point2.x - point1.x;
    const yDiff = point2.y - point1.y;
    const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
    return distance;
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
    let slope = (point3.y - point2.y) / (point3.x - point2.x);
    let yIntercept = point2.y - slope * point2.x;
    let distance = Math.abs(slope * point1.x - point1.y + yIntercept) / Math.sqrt(Math.pow(slope, 2) + 1);
    return distance;
}

export function FrontProfileMappingModal() {
    const { markPoints, setMarkPoints } = useContext(UserContext);

    const { eyeSeparationRatio, setEyeSeparationRatio } = useContext(UserContext);
    const { facialThirds, setFacialThirds } = useContext(UserContext);
    const { lateralCanthalTilt, setLateralCanthalTilt } = useContext(UserContext);
    const { facialWHRatio, setFacialWHRatio } = useContext(UserContext);
    const { jawFrontalAngle, setJawFrontalAngle } = useContext(UserContext);
    const { cheekBoneHeight, setCheekBoneHeight } = useContext(UserContext);
    const { totalFacialWHRatio, setTotalFacialWHRatio } = useContext(UserContext);
    const { bigonialWidth, setBigonialWidth } = useContext(UserContext);
    const { chin2PhiltrumRatio, setChin2PhiltrumRatio } = useContext(UserContext);
    const { neckWidth, setNeckWidth } = useContext(UserContext);
    const { mouthWidth2NoseWidthRatio, setMouseWidth2NoseWidthRatio } = useContext(UserContext);
    const { midFaceRatio, setMidFaceRatio } = useContext(UserContext);
    const { eyebrowPositionRatio, setEyebrowPositionRatio } = useContext(UserContext);
    const { eyeSpacingRatio, setEyeSpacingRatio } = useContext(UserContext);
    const { eyeAspectRatio, setEyeAspectRatio } = useContext(UserContext);
    const { lowerLip2UpperLipRatio, setLowerLip2UpperLipRatio } = useContext(UserContext);
    const { ipsilateralAlarAngle, setIpsilateralAlarAngle } = useContext(UserContext);
    const { deviationOfJFA2IAA, setDeviationOfJFA2IAA } = useContext(UserContext);
    const { eyebrowTilt, setEyebrowTilt } = useContext(UserContext);
    const { bitemporalWidth, setBitemporalWidth } = useContext(UserContext);
    const { lowerThirdProporation, setLowerThirdProporation } = useContext(UserContext);
    const { medialCanthalAngle, setMedialCanthalAngle } = useContext(UserContext);

    const CalculateEyeSeparationRatio = () => {
        const point_12_distance = calculateDistance(markPoints[12][0], markPoints[12][1]);
        const point_17_distance = calculateDistance(markPoints[17][0], markPoints[17][1]);
        setEyeSeparationRatio(point_12_distance * 100 / point_17_distance);
    };
    const CaculateFacialThirds = () => {
        const height_1_5 = markPoints[5][0].y - markPoints[1][0].y;
        const height_5_19 = markPoints[19][0].y - markPoints[5][0].y;
        const height_19_29 = markPoints[29][0].y - markPoints[19][0].y;
        const total = markPoints[29][0].y - markPoints[1][0].y;
        setFacialThirds([height_1_5 * 100 / total, height_5_19 * 100 / total, height_19_29 * 100 / total]);
    };
    const CalculateLateralCanthalTilt = () => {
        const left_lateralCanthalTilt = calculateSharpAngle({ x: -1, y: 0 }, { x: markPoints[11][0].x - markPoints[16][0].x, y: markPoints[11][0].y - markPoints[16][0].y });
        const right_lateralCanthalTilt = calculateSharpAngle({ x: 1, y: 0 }, { x: markPoints[11][1].x - markPoints[16][1].x, y: markPoints[11][1].y - markPoints[16][1].y });
        setLateralCanthalTilt((left_lateralCanthalTilt + right_lateralCanthalTilt) / 2);
    };
    const CalculateFacialWHRatio = () => {
        const width_17s = markPoints[17][1].x - markPoints[17][0].x;
        const height_6_21 = markPoints[21][0].y - markPoints[6][0].y;
        setFacialWHRatio(width_17s / height_6_21);
    };
    const CalculateJawFrontalAngle = () => {
        setJawFrontalAngle(calculateSharpAngle({ x: markPoints[26][0].x - markPoints[28][0].x, y: markPoints[26][0].y - markPoints[28][0].y }, { x: markPoints[26][1].x - markPoints[28][1].x, y: markPoints[26][1].y - markPoints[28][1].y }));
    };
    const CalculateCheekBoneHeight = () => {
        const a = markPoints[21][0].y - (markPoints[17][0].y + markPoints[17][1].y) / 2;
        const b = markPoints[21][0].y - (markPoints[12][0].y + markPoints[12][1].y) / 2;
        setCheekBoneHeight(a * 100 / b);
    };
    const CalculateTotalFacialWHRatio = () => {
        const a = calculateDistance(markPoints[1][0], markPoints[29][0]);
        const b = calculateDistance(markPoints[17][0], markPoints[17][1]);
        setTotalFacialWHRatio(a / b);
    };
    const CalculateBigonialWidth = () => {
        const a = calculateDistance(markPoints[22][0], markPoints[22][1]);
        const b = calculateDistance(markPoints[17][0], markPoints[17][1]);
        setBigonialWidth(a * 100 / b);
    };
    const CalculateChin2PhiltrumRatio = () => {
        const a = calculateDistance(markPoints[29][0], markPoints[25][0]);
        const b = calculateDistance(markPoints[21][0], markPoints[20][0]);
        setChin2PhiltrumRatio(a / b);
    };
    const CalculateNeckWidth = () => {
        const a = calculateDistance(markPoints[27][0], markPoints[27][1]);
        const b = calculateDistance(markPoints[22][0], markPoints[22][1]);
        setNeckWidth(a * 100 / b);
    };
    const CalculateMouthWidth2NoseWidthRatio = () => {
        const a = calculateDistance(markPoints[23][0], markPoints[23][1]);
        const b = calculateDistance(markPoints[18][0], markPoints[18][1]);
        setMouseWidth2NoseWidthRatio(a / b);
    };
    const CalculateMidfaceRatio = () => {
        const a = calculateDistance(markPoints[12][0], markPoints[12][1]);
        const b = markPoints[21][0].y - (markPoints[12][0].y + markPoints[12][1].y) / 2;
        setMidFaceRatio(a / b);
    };
    const CalculateEyebrowPositionRatio = () => {
        const a1 = calculateDistanceFromPointToLine(markPoints[8][0], markPoints[12][0], markPoints[12][1]);
        const a2 = calculateDistanceFromPointToLine(markPoints[8][1], markPoints[12][0], markPoints[12][1]);
        const b1 = calculateDistance(markPoints[10][0], markPoints[14][0]);
        const b2 = calculateDistance(markPoints[10][1], markPoints[14][1]);
        setEyebrowPositionRatio(((a1 / b1) + (a2 / b2)) / 2);
    };
    const CalculateEyeSpacingRatio = () => {
        const a = markPoints[16][1].x - markPoints[16][0].x;
        const b1 = markPoints[16][0].x - markPoints[9][0].x;
        const b2 = markPoints[9][1].x - markPoints[16][1].x;
        setEyeSpacingRatio(((a / b1) + (a / b2)) / 2);
    };
    const CalculateEyeAspectRatio = () => {
        const a1 = calculateDistance(markPoints[16][1], markPoints[11][1]);
        const b1 = calculateDistance(markPoints[10][1], markPoints[14][1]);
        const a2 = calculateDistance(markPoints[16][0], markPoints[11][0]);
        const b2 = calculateDistance(markPoints[10][0], markPoints[14][0]);
        setEyeAspectRatio((a1 / b1 + a2 / b2) / 2);
    };
    const CalculateLowerLip2UpperLipRatio = () => {
        const a = markPoints[25][0].y - markPoints[24][0].y;
        const b = markPoints[24][0].y - markPoints[21][0].y;
        setLowerLip2UpperLipRatio(a / b);
    };
    const CalculateIpsilateralAlarAngle = () => {
        const a = { x: markPoints[9][1].x - markPoints[19][0].x, y: markPoints[9][1].y - markPoints[19][0].y };
        const b = { x: markPoints[9][0].x - markPoints[19][0].x, y: markPoints[9][0].y - markPoints[19][0].y };
        setIpsilateralAlarAngle(calculateSharpAngle(a, b));
    };
    const CalculateDeviationOfJFA2IAA = () => {
        setDeviationOfJFA2IAA(Math.abs(jawFrontalAngle - ipsilateralAlarAngle));
    };
    const CalculateEyebrowTilt = () => {
        const a1 = { x: markPoints[7][1].x - markPoints[7][0].x, y: markPoints[7][1].y - markPoints[7][0].y };
        const b1 = { x: markPoints[4][1].x - markPoints[7][1].x, y: markPoints[4][1].y - markPoints[7][1].y };
        const left = calculateSharpAngle(a1, b1);
        const a2 = { x: markPoints[7][0].x - markPoints[7][1].x, y: markPoints[7][0].y - markPoints[7][1].y };
        const b2 = { x: markPoints[4][0].x - markPoints[7][0].x, y: markPoints[4][0].y - markPoints[7][0].y };
        const right = calculateSharpAngle(a2, b2);
        setEyebrowTilt((left + right) / 2);
    };
    const CalculateBitemporalWidth = () => {
        const a = calculateDistance(markPoints[2][0], markPoints[2][1]);
        const b = calculateDistance(markPoints[17][0], markPoints[17][1]);
        setBitemporalWidth(a * 100 / b);
    };
    const CalculateLowerThirdProporation = () => {
        const a = markPoints[24][0].y - markPoints[19][0].y;
        const b = markPoints[29][0].y - markPoints[19][0].y;
        setLowerThirdProporation(a * 100 / b);
    };
    const CalculateMedialCanthalAngle = () => {
        const a1 = { x: markPoints[13][1].x - markPoints[16][1].x, y: markPoints[13][1].y - markPoints[16][1].y };
        const b1 = { x: markPoints[15][1].x - markPoints[16][1].x, y: markPoints[15][1].y - markPoints[16][1].y };
        const a2 = { x: markPoints[13][0].x - markPoints[16][0].x, y: markPoints[13][0].y - markPoints[16][0].y };
        const b2 = { x: markPoints[15][0].x - markPoints[16][0].x, y: markPoints[15][0].y - markPoints[16][0].y };
        const left = calculateSharpAngle(a2, b2);
        const right = calculateSharpAngle(a1, b1);
        setMedialCanthalAngle((left + right) / 2);
    };

    const handleApplyButtonClick = () => {
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
        CalculateDeviationOfJFA2IAA();
        CalculateEyebrowTilt();
        CalculateBitemporalWidth();
        CalculateLowerThirdProporation();
        CalculateMedialCanthalAngle();
    };

    return (
        <>
            <Dialog>
                <DialogTrigger disableButtonEnhancement>
                    <CompoundButton icon={<Connected20Filled />} style={{ color: "purple", backgroundColor: "rgba(0,0,0,0)", border: "0px" }}>
                    </CompoundButton>
                </DialogTrigger>
                <DialogSurface style={{ width: "100vw", maxWidth: "1920px" }}>
                    <DialogBody >
                        <DialogTitle style={{ color: "purple" }}>Mapping Dialog</DialogTitle>
                        <FrontDialogContent />
                        {/* <UploadImageCrop/> */}
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="primary" onClick={handleApplyButtonClick}>Apply</Button>
                            </DialogTrigger>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </>
    );
}

export function SideProfileMappingModal() {
    const { markPoints, setMarkPoints } = useContext(UserContext);

    const { gonialAngle, setGonialAngle } = useContext(UserContext);
    const { nasofrontalAngle, setNasofrontalAngle } = useContext(UserContext);
    const { mandibularPlaneAngle, setMandibularPlaneAngle } = useContext(UserContext);
    const { ramus2MandibleRatio, setRamus2MandibleRatio } = useContext(UserContext);
    const { facialConvexityGlabella, setFacialConvexityGlabella } = useContext(UserContext);
    const { submentalCervicalAngle, setSubmentalCervicalAngle } = useContext(UserContext);
    const { nasofacialAngle, setNasofacialAngle } = useContext(UserContext);
    const { nasolabialAngle, setNasolabialAngle } = useContext(UserContext);
    const { orbitalVector, setOrbitalVector } = useContext(UserContext);
    const { totalFacialConvexity, setTotalFacialConvexity } = useContext(UserContext);
    const { mentolabialAngle, setMentolabialAngle } = useContext(UserContext);
    const { facialConvexityNasion, setFacialConvexityNasion } = useContext(UserContext);
    const { nasalProjection, setNasalProjection } = useContext(UserContext);
    const { nasalW2HRatio, setNasalW2HRatio } = useContext(UserContext);
    const { rickettsELine, setRickettsELine } = useContext(UserContext);
    const { holdawayHLine, setHoldawayHLine } = useContext(UserContext);
    const { steinerSLine, setSteiinerSLine } = useContext(UserContext);
    const { burstoneLine, setBurstoneLine } = useContext(UserContext);
    const { nasomentalAngle, setNasomentalAngle } = useContext(UserContext);
    const { gonion2MouthRelationship, setGonion2MouthRelationship } = useContext(UserContext);
    const { recessionRelative2FrankfortPlane, setRecessionRelative2FrankfortPlane } = useContext(UserContext);
    const { browridgeInclinationAngle, setBrowridgeInclinationAngle } = useContext(UserContext);
    const { nasalTipAngle, setNasalTipAngle } = useContext(UserContext);

    const CalculateGonialAngle = () => {
        const a = { x: markPoints[38][0].x - markPoints[49][0].x, y: markPoints[38][0].y - markPoints[49][0].y };
        const b = { x: markPoints[52][0].x - markPoints[49][0].x, y: markPoints[52][0].y - markPoints[49][0].y };
        setGonialAngle(calculateSharpAngle(a, b));
    };
    const CalculateNasofrontalAngle = () => {
        const a = { x: markPoints[32][0].x - markPoints[35][0].x, y: markPoints[32][0].y - markPoints[35][0].y };
        const b = { x: markPoints[39][0].x - markPoints[35][0].x, y: markPoints[39][0].y - markPoints[35][0].y };
        setNasofrontalAngle(calculateSharpAngle(a, b));
    };
    const CalculateMandibularPlaneAngle = () => {
        const a = { x: markPoints[47][0].x - markPoints[49][0].x, y: markPoints[47][0].y - markPoints[49][0].y };
        const b = { x: markPoints[52][0].x - markPoints[49][0].x, y: markPoints[52][0].y - markPoints[49][0].y };
        setMandibularPlaneAngle(calculateSharpAngle(a, b));
    };
    const CalculateRamus2MandibleRatio = () => {
        const a = calculateDistance(markPoints[38][0], markPoints[49][0]);
        const b = calculateDistance(markPoints[54][0], markPoints[49][0]);
        setRamus2MandibleRatio(a / b);
    };
    const CalculateFacialConvexityGlabella = () => {
        const a = { x: markPoints[32][0].x - markPoints[43][0].x, y: markPoints[32][0].y - markPoints[43][0].y };
        const b = { x: markPoints[50][0].x - markPoints[43][0].x, y: markPoints[50][0].y - markPoints[43][0].y };
        setFacialConvexityGlabella(calculateSharpAngle(a, b));
    };
    const CalculateSubmentalCervicalAngle = () => {
        const a = { x: markPoints[51][0].x - markPoints[53][0].x, y: markPoints[51][0].y - markPoints[53][0].y };
        const b = { x: markPoints[55][0].x - markPoints[53][0].x, y: markPoints[55][0].y - markPoints[53][0].y };
        setSubmentalCervicalAngle(calculateSharpAngle(a, b));
    };
    const CalculateNasolabialAngle = () => {
        const a = { x: markPoints[41][0].x - markPoints[44][0].x, y: markPoints[41][0].y - markPoints[44][0].y };
        const b = { x: markPoints[45][0].x - markPoints[44][0].x, y: markPoints[45][0].y - markPoints[44][0].y };
        setNasolabialAngle(calculateSharpAngle(a, b));
    };
    const CalculateTotalFacialConvexity = () => {
        const a = { x: markPoints[32][0].x - markPoints[40][0].x, y: markPoints[32][0].y - markPoints[40][0].y };
        const b = { x: markPoints[50][0].x - markPoints[40][0].x, y: markPoints[50][0].y - markPoints[40][0].y };
        setTotalFacialConvexity(calculateSharpAngle(a, b));
    };
    const CalculateFacialConvexityNasion = () => {
        const a = { x: markPoints[35][0].x - markPoints[43][0].x, y: markPoints[35][0].y - markPoints[43][0].y };
        const b = { x: markPoints[50][0].x - markPoints[43][0].x, y: markPoints[50][0].y - markPoints[43][0].y };
        setFacialConvexityNasion(calculateSharpAngle(a, b));
    };
    const CalculateOrbitalVector = () => {
        if (markPoints[57][0].x > markPoints[33][0].x) {
            setOrbitalVector("positive");
        }
        else if (markPoints[57][0].x == markPoints[33][0].x) {
            setOrbitalVector("neutral");
        }
        else {
            setOrbitalVector("negative");
        }
    };
    const CalculateMentolabialAngle = () => {
        const a = { x: markPoints[58][0].x - markPoints[48][0].x, y: markPoints[58][0].y - markPoints[48][0].y };
        const b = { x: markPoints[50][0].x - markPoints[48][0].x, y: markPoints[50][0].y - markPoints[48][0].y };
        setMentolabialAngle(calculateSharpAngle(a, b));
    };
    const CalculateNasalProjection = () => {
        // const a = markPoints[42][0].x - markPoints[40][0].x;
        // const b = calculateDistance(markPoints[35][0], markPoints[40][0]);
        // setNasalProjection(0.6);
        const a = {x:1, y:0};
        const b = {x: markPoints[36][0].x-markPoints[40][0].x, y: markPoints[36][0].y - markPoints[40][0].y};
        setNasalProjection(Math.cos(calculateSharpAngle(a, b)/180*Math.PI));
    };
    const CalculateNasalW2HRatio = () => {
        const a = markPoints[42][0].x - markPoints[40][0].x;
        const b = markPoints[40][0].y - markPoints[56][0].y;
        setNasalW2HRatio(a / b);
    };
    const CalculateRickettsELine = () => {
        setRickettsELine("ideal");
    };
    const CalculateHoldawayHLine = () => {
        setHoldawayHLine("ideal");
    };
    const CalculateSteinerSLine = () => {
        setSteiinerSLine("ideal");
    };
    const CalculateBurstoneLine = () => {
        setBurstoneLine("ideal");
    };
    const CalculateNasofacialAngle = () => {
        const a = { x: markPoints[39][0].x - markPoints[35][0].x, y: markPoints[39][0].y - markPoints[35][0].y };
        const b = { x: markPoints[50][0].x - markPoints[35][0].x, y: markPoints[50][0].y - markPoints[35][0].y };
        setNasofacialAngle(calculateSharpAngle(a, b));
    };
    const CalculateNasomentalAngle = () => {
        const a = { x: markPoints[35][0].x - markPoints[39][0].x, y: markPoints[35][0].y - markPoints[39][0].y };
        const b = { x: markPoints[50][0].x - markPoints[39][0].x, y: markPoints[50][0].y - markPoints[39][0].y };
        setNasomentalAngle(calculateSharpAngle(a, b));
    };
    const CalculateGonion2MouthRelationship = () => {
        setGonion2MouthRelationship("below");
    };
    const CalculateRecessionRelative2FrankfortPlane = () => {
        setRecessionRelative2FrankfortPlane("none");
    };
    const CalculateBrowridgeInclinationAngle = () => {
        const a = { x: 0, y: 1 };
        const b = { x: markPoints[32][0].x - markPoints[31][0].x, y: markPoints[32][0].y - markPoints[31][0].y };
        setBrowridgeInclinationAngle(calculateSharpAngle(a, b));
    };
    const CalculateNasalTipAngle = () => {
        const a = { x: markPoints[36][0].x - markPoints[40][0].x, y: markPoints[36][0].y - markPoints[40][0].y };
        const b = { x: markPoints[41][0].x - markPoints[40][0].x, y: markPoints[41][0].y - markPoints[40][0].y };
        setNasalTipAngle(calculateSharpAngle(a, b));
    };

    const handleApplyButtonClick = () => {
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
    }
    return (
        <>
            <Dialog>
                <DialogTrigger disableButtonEnhancement>
                    <CompoundButton icon={<Connected20Filled />} style={{ color: "purple", backgroundColor: "rgba(0,0,0,0)", border: "0px" }}>
                    </CompoundButton>
                </DialogTrigger>
                <DialogSurface style={{ width: "100vw", maxWidth: "1920px" }}>
                    <DialogBody >
                        <DialogTitle style={{ color: "purple" }}>Mapping Dialog</DialogTitle>
                        <SideDialogContent />
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="primary" onClick={handleApplyButtonClick}>Apply</Button>
                            </DialogTrigger>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </>
    );
}

export default FrontProfileMappingModal;