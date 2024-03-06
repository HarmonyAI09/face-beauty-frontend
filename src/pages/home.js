/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { useState, useRef, createContext } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./home.css";

import {
  FrontProfileMappingModal,
  SideProfileMappingModal,
} from "../components/MappingModal";
import { FaCloudUploadAlt } from "react-icons/fa";
import ReportList from "../components/ReportList";
import Reference from "../components/Reference";
import Setting from "../components/Setting";
import { OneProfile } from "../class/Profile";
import { landmarks } from "../utils/landmarks";

export const UserContext = createContext();

// eslint-disable-next-line no-unused-vars

function Home() {
  const [selectedFrontImage, setSelectedFrontImage] = useState(null);
  const [selectedSideImage, setSelectedSideImage] = useState(null);
  const [frontImage, setFrontImage] = useState();
  const [sideImage, setSideImage] = useState();
  const [gender, setGender] = useState(null);
  const [ethnicity, setEthnicity] = useState(null);
  const [frontProfileMark, setFrontProfileMark] = useState(0.0);
  const [sideProfileMark, setSideProfileMark] = useState(0.0);

  const [oneProfile, setOneProfile] = useState(new OneProfile());

  /**************************FRONT PROFILE***************************************/
  const [eyeSeparationRatio, setEyeSeparationRatio] = useState(0.0);
  const [facialThirds, setFacialThirds] = useState([0.0, 0.0, 0.0]);
  const [lateralCanthalTilt, setLateralCanthalTilt] = useState(0.0);
  const [facialWHRatio, setFacialWHRatio] = useState(0.0);
  const [jawFrontalAngle, setJawFrontalAngle] = useState(0.0);
  const [cheekBoneHeight, setCheekBoneHeight] = useState(0.0);
  const [totalFacialWHRatio, setTotalFacialWHRatio] = useState(0.0);
  const [bigonialWidth, setBigonialWidth] = useState(0.0);
  const [chin2PhiltrumRatio, setChin2PhiltrumRatio] = useState(0.0);
  const [neckWidth, setNeckWidth] = useState(0.0);
  const [mouthWidth2NoseWidthRatio, setMouseWidth2NoseWidthRatio] =
    useState(0.0);
  const [midFaceRatio, setMidFaceRatio] = useState(0.0);
  const [eyebrowPositionRatio, setEyebrowPositionRatio] = useState(0.0);
  const [eyeSpacingRatio, setEyeSpacingRatio] = useState(0.0);
  const [eyeAspectRatio, setEyeAspectRatio] = useState(0.0);
  const [lowerLip2UpperLipRatio, setLowerLip2UpperLipRatio] = useState(0.0);
  const [ipsilateralAlarAngle, setIpsilateralAlarAngle] = useState(0.0);
  const [deviationOfJFA2IAA, setDeviationOfJFA2IAA] = useState(0.0);
  const [eyebrowTilt, setEyebrowTilt] = useState(0.0);
  const [bitemporalWidth, setBitemporalWidth] = useState(0.0);
  const [lowerThirdProportion, setLowerThirdProportion] = useState(0.0);
  const [medialCanthalAngle, setMedialCanthalAngle] = useState(0.0);

  /**************************SIDE PROFILE***************************************/
  const [gonialAngle, setGonialAngle] = useState(0.0);
  const [nasofrontalAngle, setNasofrontalAngle] = useState(0.0);
  const [mandibularPlaneAngle, setMandibularPlaneAngle] = useState(0.0);
  const [ramus2MandibleRatio, setRamus2MandibleRatio] = useState(0.0);
  const [facialConvexityGlabella, setFacialConvexityGlabella] = useState(0.0);
  const [submentalCervicalAngle, setSubmentalCervicalAngle] = useState(0.0);
  const [nasofacialAngle, setNasofacialAngle] = useState(0.0);
  const [nasolabialAngle, setNasolabialAngle] = useState(0.0);
  const [orbitalVector, setOrbitalVector] = useState("positive");
  const [totalFacialConvexity, setTotalFacialConvexity] = useState(0.0);
  const [mentolabialAngle, setMentolabialAngle] = useState(0.0);
  const [facialConvexityNasion, setFacialConvexityNasion] = useState(0.0);
  const [nasalProjection, setNasalProjection] = useState(0.0);
  const [nasalW2HRatio, setNasalW2HRatio] = useState(0.0);
  const [rickettsELine, setRickettsELine] = useState("ideal");
  const [holdawayHLine, setHoldawayHLine] = useState("ideal");
  const [steinerSLine, setSteiinerSLine] = useState("ideal");
  const [burstoneLine, setBurstoneLine] = useState("ideal");
  const [nasomentalAngle, setNasomentalAngle] = useState(0.0);
  const [gonion2MouthRelationship, setGonion2MouthRelationship] =
    useState("below");
  const [
    recessionRelative2FrankfortPlane,
    setRecessionRelative2FrankfortPlane,
  ] = useState("none");
  const [browridgeInclinationAngle, setBrowridgeInclinationAngle] =
    useState(0.0);
  const [nasalTipAngle, setNasalTipAngle] = useState(0.0);

  const [markPoints, setMarkPoints] = React.useState([
    [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    [
      { x: 375, y: 164 },
      { x: 375, y: 164 },
    ], //1
    [
      { x: 253, y: 220 },
      { x: 484, y: 223 },
    ], //2
    [
      { x: 272, y: 270 },
      { x: 464, y: 272 },
    ], //3
    [
      { x: 272, y: 280 },
      { x: 464, y: 282 },
    ], //4
    [
      { x: 364, y: 287 },
      { x: 364, y: 287 },
    ], //5
    [
      { x: 364, y: 300 },
      { x: 364, y: 300 },
    ], //6
    [
      { x: 333, y: 298 },
      { x: 395, y: 300 },
    ], //7
    [
      { x: 332, y: 305 },
      { x: 396, y: 308 },
    ], //8
    [
      { x: 270, y: 324 },
      { x: 475, y: 331 },
    ], //9
    [
      { x: 293, y: 316 },
      { x: 446, y: 318 },
    ], //10
    [
      { x: 275, y: 329 },
      { x: 466, y: 330 },
    ], //11
    [
      { x: 303, y: 326 },
      { x: 436, y: 327 },
    ], //12
    [
      { x: 320, y: 328 },
      { x: 415, y: 327 },
    ], //13
    [
      { x: 293, y: 339 },
      { x: 446, y: 340 },
    ], //14
    [
      { x: 313, y: 339 },
      { x: 416, y: 340 },
    ], //15
    [
      { x: 333, y: 339 },
      { x: 406, y: 340 },
    ], //16
    [
      { x: 225, y: 349 },
      { x: 530, y: 351 },
    ], //17
    [
      { x: 334, y: 423 },
      { x: 406, y: 422 },
    ], //18
    [
      { x: 365, y: 447 },
      { x: 365, y: 447 },
    ], //19
    [
      { x: 381, y: 444 },
      { x: 381, y: 444 },
    ], //20
    [
      { x: 380, y: 470 },
      { x: 380, y: 470 },
    ], //21
    [
      { x: 255, y: 477 },
      { x: 505, y: 475 },
    ], //22
    [
      { x: 318, y: 482 },
      { x: 430, y: 482 },
    ], //23
    [
      { x: 371, y: 484 },
      { x: 371, y: 484 },
    ], //24
    [
      { x: 369, y: 507 },
      { x: 369, y: 507 },
    ], //25
    [
      { x: 270, y: 494 },
      { x: 495, y: 494 },
    ], //26
    [
      { x: 275, y: 514 },
      { x: 493, y: 524 },
    ], //27
    [
      { x: 328, y: 557 },
      { x: 420, y: 557 },
    ], //28
    [
      { x: 367, y: 568 },
      { x: 367, y: 568 },
    ], //29
    [{ x: 244, y: 190 }], //30
    [{ x: 225, y: 226 }], //31
    [{ x: 215, y: 292 }], //32
    [{ x: 235, y: 327 }], //33
    [{ x: 225, y: 332 }], //34
    [{ x: 218, y: 334 }], //35
    [{ x: 190, y: 375 }], //36
    [{ x: 260, y: 375 }], //37
    [{ x: 400, y: 375 }], //38
    [{ x: 170, y: 400 }], //39
    [{ x: 168, y: 405 }], //40
    [{ x: 175, y: 422 }], //41
    [{ x: 225, y: 417 }], //42
    [{ x: 195, y: 435 }], //43
    [{ x: 200, y: 440 }], //44
    [{ x: 200, y: 460 }], //45
    [{ x: 237, y: 472 }], //46
    [{ x: 210, y: 484 }], //47
    [{ x: 220, y: 500 }], //48
    [{ x: 385, y: 484 }], //49
    [{ x: 220, y: 530 }], //50
    [{ x: 240, y: 552 }], //51
    [{ x: 258, y: 554 }], //52
    [{ x: 320, y: 560 }], //53
    [{ x: 220, y: 570 }], //54
    [{ x: 352, y: 655 }], //55
    [{ x: 168, y: 327 }], //56
    [{ x: 235, y: 352 }], //57
    [{ x: 210, y: 494 }], //58
    [{ x: 185, y: 428 }], //59
  ]);
  const [RLs, setRLs] = useState([]);

  const [reportNotes, setReportNotes] = useState(Array(45).fill([]));
  const [reportScores, setReportScores] = useState(Array(45).fill([]));
  const [reportMaxScores, setReportMaxScores] = useState(Array(45).fill([]));
  const [reportRanges, setReportRanges] = useState(Array(45).fill([]));
  const [reportValues, setReportValues] = useState(Array(45).fill([]));
  const [reportMeasurementNames, setReportMeasurementNames] = useState(
    Array(45).fill([])
  );
  const [reportAdvices, setReportAdvices] = useState(Array(45).fill([]));

  const [profileMatched, setProfileMatched] = useState([false, false]);

  const frontfileInput = useRef(null);
  const sidefileInput = useRef(null);
  const [frontImgURL, setFrontImgURL] = useState(null);
  const [sideImgURL, setSideImgURL] = useState(null);

  const handleFrontImageSelect = (event) => {
    setSelectedFrontImage(event.target.files[0]);
    formatFrontLandmarks();

    const file = event.target.files[0];
    var img;
    var _URL = window.URL || window.webkitURL;
    if (file) {
      img = new Image();
      var objectUrl = _URL.createObjectURL(file);
      img.onload = function () {
        _URL.revokeObjectURL(objectUrl);
      };
      img.src = objectUrl;
      setFrontImgURL(objectUrl);
      setOneProfile({
        ...oneProfile,
        front: {
          ...oneProfile.front,
          imgUrl: objectUrl,
          imgSrc: event.target.files[0],
        },
      });
    } else {
      setFrontImgURL(null);

      setOneProfile({
        ...oneProfile,
        front: {
          ...oneProfile.front,
          imgUrl: null,
          imgSrc: null,
        },
      });
    }
  };

  const handleSideImageSelect = (event) => {
    setSelectedSideImage(event.target.files[0]);
    formatSideLandmarks();

    const file = event.target.files[0];
    var img;
    var _URL = window.URL || window.webkitURL;
    if (file) {
      img = new Image();
      var objectUrl = _URL.createObjectURL(file);
      img.onload = function () {
        _URL.revokeObjectURL(objectUrl);
      };
      img.src = objectUrl;
      setSideImgURL(objectUrl);
      setOneProfile({
        ...oneProfile,
        side: {
          ...oneProfile.side,
          imgUrl: objectUrl,
          imgSrc: event.target.files[0],
        },
      });
    } else {
      setSideImgURL(null);
      setOneProfile({
        ...oneProfile,
        side: {
          ...oneProfile.side,
          imgUrl: objectUrl,
          imgSrc: null,
        },
      });
    }
  };

  const formatFrontLandmarks = () => {
    let tmpMarks = [...markPoints];
    for (let i = 0; i < 30; i++) {
      tmpMarks[i] = landmarks[i];
    }
    setMarkPoints(tmpMarks);
  };

  const formatSideLandmarks = () => {
    let tmpMarks = [...markPoints];
    for (let i = 30; i < 60; i++) {
      tmpMarks[i] = landmarks[i];
    }
    setMarkPoints(tmpMarks);
  };

  const handleFrontUploadButtonClick = () => {
    frontfileInput.current.click();
  };

  const handleSideUploadButtonClick = () => {
    sidefileInput.current.click();
  };

  return (
    <UserContext.Provider
      value={{
        eyeSeparationRatio,
        facialThirds,
        lateralCanthalTilt,
        facialWHRatio,
        jawFrontalAngle,
        cheekBoneHeight,
        totalFacialWHRatio,
        bigonialWidth,
        chin2PhiltrumRatio,
        neckWidth,
        mouthWidth2NoseWidthRatio,
        midFaceRatio,
        eyebrowPositionRatio,
        eyeSpacingRatio,
        eyeAspectRatio,
        lowerLip2UpperLipRatio,
        ipsilateralAlarAngle,
        deviationOfJFA2IAA,
        eyebrowTilt,
        bitemporalWidth,
        lowerThirdProportion,
        medialCanthalAngle,
        setEyeSeparationRatio,
        setFacialThirds,
        setLateralCanthalTilt,
        setFacialWHRatio,
        setJawFrontalAngle,
        setCheekBoneHeight,
        setTotalFacialWHRatio,
        setBigonialWidth,
        setChin2PhiltrumRatio,
        setNeckWidth,
        setMouseWidth2NoseWidthRatio,
        setMidFaceRatio,
        setEyebrowPositionRatio,
        setEyeSpacingRatio,
        setEyeAspectRatio,
        setLowerLip2UpperLipRatio,
        setIpsilateralAlarAngle,
        setDeviationOfJFA2IAA,
        setEyebrowTilt,
        setBitemporalWidth,
        setLowerThirdProportion,
        setMedialCanthalAngle,

        gonialAngle,
        nasofrontalAngle,
        mandibularPlaneAngle,
        ramus2MandibleRatio,
        facialConvexityGlabella,
        submentalCervicalAngle,
        nasofacialAngle,
        nasolabialAngle,
        orbitalVector,
        totalFacialConvexity,
        mentolabialAngle,
        facialConvexityNasion,
        nasalProjection,
        nasalW2HRatio,
        rickettsELine,
        holdawayHLine,
        steinerSLine,
        burstoneLine,
        nasomentalAngle,
        gonion2MouthRelationship,
        recessionRelative2FrankfortPlane,
        browridgeInclinationAngle,
        nasalTipAngle,
        setGonialAngle,
        setNasofrontalAngle,
        setMandibularPlaneAngle,
        setRamus2MandibleRatio,
        setFacialConvexityGlabella,
        setSubmentalCervicalAngle,
        setNasofacialAngle,
        setNasolabialAngle,
        setOrbitalVector,
        setTotalFacialConvexity,
        setMentolabialAngle,
        setFacialConvexityNasion,
        setNasalProjection,
        setNasalW2HRatio,
        setRickettsELine,
        setHoldawayHLine,
        setSteiinerSLine,
        setBurstoneLine,
        setNasomentalAngle,
        setGonion2MouthRelationship,
        setRecessionRelative2FrankfortPlane,
        setBrowridgeInclinationAngle,
        setNasalTipAngle,
        markPoints,
        setMarkPoints,
        selectedFrontImage,
        setSelectedFrontImage,
        selectedSideImage,
        setSelectedSideImage,
        frontProfileMark,
        setFrontProfileMark,
        sideProfileMark,
        setSideProfileMark,
        gender,
        setGender,
        ethnicity,
        setEthnicity,
        reportNotes,
        setReportNotes,
        reportScores,
        setReportScores,
        reportMaxScores,
        setReportMaxScores,
        reportRanges,
        setReportRanges,
        reportValues,
        setReportValues,
        reportMeasurementNames,
        setReportMeasurementNames,
        reportAdvices,
        setReportAdvices,
        frontImage,
        setFrontImage,
        sideImage,
        setSideImage,
        profileMatched,
        setProfileMatched,
        frontImgURL,
        sideImgURL,
        oneProfile,
        setOneProfile,
        RLs, 
        setRLs
      }}
    >
      <div className="main_parent">
        <ReportList />
        <Setting />
        <div className="main_child m_profile">
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <div className="front_profile">
              <div className="front_photo_area">
                <img
                  className="image_drawer"
                  src="./images/front__.jpg"
                  alt="Front Image"
                ></img>
                <div className="photo_div upload">
                  <input
                    type="file"
                    ref={frontfileInput}
                    accept="image/*"
                    onChange={handleFrontImageSelect}
                    style={{ display: "none" }}
                  />
                  {oneProfile.isNew && !frontImage && (
                    <div
                      className="m_upload_button"
                      onClick={handleFrontUploadButtonClick}
                    >
                      <FaCloudUploadAlt size={30} />
                    </div>
                  )}
                  {oneProfile.isNew && (frontImage || selectedFrontImage) && (
                    <div className={`lock-div show`}>
                      <div
                        style={{
                          borderRadius: "0px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FrontProfileMappingModal />
                      </div>
                    </div>
                  )}
                  {selectedFrontImage && (
                    <img
                      className="image_drawer"
                      src={oneProfile.front.imgUrl}
                      alt="Image description"
                    ></img>
                  )}
                  {!selectedFrontImage && (
                    <img
                      className="image_drawer"
                      src={
                        oneProfile.front.imgUrl
                          ? oneProfile.front.imgUrl
                          : "./images/front_blank.jpg"
                      }
                      alt="Image description"
                    ></img>
                  )}
                </div>
              </div>
            </div>
            <div className="side_profile">
              <div className="side_photo_area">
                <img
                  className="image_drawer"
                  src="./images/side__.jpg"
                  alt="Side Image"
                ></img>
                <div className="photo_div upload">
                  <input
                    type="file"
                    ref={sidefileInput}
                    accept="image/*"
                    onChange={handleSideImageSelect}
                    style={{ display: "none" }}
                  />
                  {oneProfile.isNew &&
                    localStorage.getItem("userLevel") === "1" &&
                    !sideImage && (
                      <div
                        className="m_upload_button"
                        onClick={handleSideUploadButtonClick}
                      >
                        <FaCloudUploadAlt size={30} />
                      </div>
                    )}
                  {oneProfile.isNew &&
                    localStorage.getItem("userLevel") === "1" &&
                    (sideImage || selectedSideImage) && (
                      <div className={`lock-div show`}>
                        <div
                          style={{
                            borderRadius: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <SideProfileMappingModal />
                        </div>
                      </div>
                    )}
                  {selectedSideImage && (
                    <img
                      className="image_drawer"
                      src={oneProfile.side.imgUrl}
                      alt="Image description"
                    ></img>
                  )}
                  {!selectedSideImage && (
                    <img
                      className="image_drawer"
                      src={
                        oneProfile.side.imgUrl
                          ? oneProfile.side.imgUrl
                          : "./images/side_blank.jpg"
                      }
                      alt="Image description"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Reference />
      </div>
    </UserContext.Provider>
  );
}

export default Home;
