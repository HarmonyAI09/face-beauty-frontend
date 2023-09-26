import * as React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogContent,
    DialogBody,
    DialogActions,
    Button,
} from "@fluentui/react-components";
import { UserContext } from "../pages/home";
import { useContext, useState, useEffect } from "react";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut, easeQuadIn } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

export const ScoreAlert = (props) => {

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

    const { frontProfileMark, setFrontProfileMark } = useContext(UserContext);
    const { sideProfileMark, setSideProfileMark } = useContext(UserContext);
    const { gender } = useContext(UserContext);

    /*********************** I N D I V I D U A L   S T A T E ***********************/
    const [showingScore, setShowingScore] = useState([0.0, 0.0]);

    const handleFrontProfileCalc = async () => {
        const requestBody = {
            gender: gender,
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
            medialCanthalAngle: medialCanthalAngle
        };

        fetch("http://127.0.0.1:8000/getfrontmark/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                const mark = data.mark;
                setFrontProfileMark(mark);
                setShowingScore([data.mark, data.percent]);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    };

    const handleSideProfileCalc = async () => {
        const requestBody = {
            gender: gender,
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
            nasalTipAngle: nasalTipAngle
        };

        fetch("http://127.0.0.1:8000/getsidemark/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data);
                const mark = data.mark;
                setSideProfileMark(mark);
                setShowingScore([data.mark, data.percent]);
            })
            .catch(error => {
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
    };

    useEffect(() => {
        handleCalculateButtonClick();
    }, [eyeSeparationRatio, gonialAngle]);

    return (
        <Dialog modalType="alert">
            <DialogTrigger disableButtonEnhancement>
                <Button shape="square" style={{ width: "200px", margin: "5px" }} onClick={handleCalculateButtonClick}>{props.title} Profile Calculate</Button>
            </DialogTrigger>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>{props.title} Profile Score</DialogTitle>
                    <DialogContent>
                        Your {props.title} Profile Score Is {showingScore[0]} ({showingScore[1]}%) .
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button shape="square" appearance="secondary">Close</Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};