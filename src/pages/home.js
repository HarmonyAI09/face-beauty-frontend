/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { Radio, RadioGroup, Label } from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";
import {
  // Image,
  Divider,
  Tooltip,
  CompoundButton,
} from "@fluentui/react-components";
import { ArrowUploadFilled } from "@fluentui/react-icons";
import { useState, useRef, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "./home.css";

import {
  FrontProfileMappingModal,
  SideProfileMappingModal,
} from "../components/MappingModal";
import { ScoreAlert } from "../components/MarkShowDialog";
import { ViewReportDialog } from "../components/ViewReportModalDialog";
import { FaCloudUploadAlt } from "react-icons/fa";

export const UserContext = createContext();

// eslint-disable-next-line no-unused-vars
const wrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#6e2a65",
  color: "white",
};

function Home() {
  const navigate = useNavigate();

  const [selectedFrontImage, setSelectedFrontImage] = useState(null);
  const [selectedSideImage, setSelectedSideImage] = useState(null);

  const [gender, setGender] = useState(1);
  const [selectedOption, setSelectedOption] = useState("Caucasian");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGenderChange = (value) => {
    setGender(value === "true");
  };

  const [frontProfileMark, setFrontProfileMark] = useState(0.0);
  const [sideProfileMark, setSideProfileMark] = useState(0.0);

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
  const [lowerThirdProporation, setLowerThirdProporation] = useState(0.0);
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
      { x: 368, y: 284 },
      { x: 368, y: 284 },
    ], //5
    [
      { x: 368, y: 304 },
      { x: 368, y: 304 },
    ], //6
    [
      { x: 335, y: 294 },
      { x: 398, y: 294 },
    ], //7
    [
      { x: 335, y: 309 },
      { x: 398, y: 309 },
    ], //8
    [
      { x: 270, y: 324 },
      { x: 471, y: 325 },
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
      { x: 325, y: 326 },
      { x: 415, y: 327 },
    ], //13
    [
      { x: 293, y: 339 },
      { x: 446, y: 340 },
    ], //14
    [
      { x: 313, y: 339 },
      { x: 426, y: 340 },
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
      { x: 333, y: 419 },
      { x: 406, y: 422 },
    ], //18
    [
      { x: 370, y: 450 },
      { x: 370, y: 450 },
    ], //19
    [
      { x: 380, y: 440 },
      { x: 380, y: 440 },
    ], //20
    [
      { x: 380, y: 470 },
      { x: 380, y: 470 },
    ], //21
    [
      { x: 252, y: 472 },
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
      { x: 371, y: 504 },
      { x: 371, y: 504 },
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
      { x: 370, y: 565 },
      { x: 370, y: 565 },
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

  const [reportNotes, setReportNotes] = useState(Array(45).fill([]));
  const [reportScores, setReportScores] = useState(Array(45).fill([]));
  const [reportMaxScores, setReportMaxScores] = useState(Array(45).fill([]));
  const [reportRanges, setReportRanges] = useState(Array(45).fill([]));
  const [reportCurrentValues, setReportCurrentValues] = useState(
    Array(45).fill([])
  );
  const [reportMeasurementNames, setReportMeasurementNames] = useState(
    Array(45).fill([])
  );
  const [reportAdvices, setReportAdvices] = useState(Array(45).fill([]));
  const [uploadImageheight, setUploadImageHeight] = useState(0);
  const [uploadImagewidth, setUploadImageWidth] = useState(0);
  const [sideImageheight, setSideImageHeight] = useState(0);
  const [sideImagewidth, setSideImageWidth] = useState(0);

  const frontfileInput = useRef(null);
  const sidefileInput = useRef(null);

  const handleFrontImageSelect = (event) => {
    setSelectedFrontImage(event.target.files[0]);

    const file = event.target.files[0];
    var img;
    var _URL = window.URL || window.webkitURL;
    if (file) {
      img = new Image();
      var objectUrl = _URL.createObjectURL(file);
      img.onload = function () {
        setUploadImageHeight(this.height);
        setUploadImageWidth(this.width);
        _URL.revokeObjectURL(objectUrl);
      };
      img.src = objectUrl;
    }
  };

  const uploadImageStyle = {
    width: uploadImageheight > uploadImagewidth ? "auto" : "35vh",
    height: uploadImageheight > uploadImagewidth ? "35vh" : "auto",
  };

  const handleSideImageSelect = (event) => {
    setSelectedSideImage(event.target.files[0]);

    const file = event.target.files[0];
    var img;
    var _URL = window.URL || window.webkitURL;
    if (file) {
      img = new Image();
      var objectUrl = _URL.createObjectURL(file);
      img.onload = function () {
        setSideImageHeight(this.height);
        setSideImageWidth(this.width);
        _URL.revokeObjectURL(objectUrl);
      };
      img.src = objectUrl;
    }
  };

  const uploadSideImageStyle = {
    width: sideImageheight > sideImagewidth ? "auto" : "35vh",
    height: sideImageheight > sideImagewidth ? "35vh" : "auto",
  };

  const handleFrontUploadButtonClick = () => {
    frontfileInput.current.click();
  };

  const handleSideUploadButtonClick = () => {
    sidefileInput.current.click();
  };

  const handleRedirect = (path) => {
    navigate(path);
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
        lowerThirdProporation,
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
        setLowerThirdProporation,
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
        selectedSideImage,
        frontProfileMark,
        setFrontProfileMark,
        sideProfileMark,
        setSideProfileMark,
        gender,
        selectedOption,
        reportNotes,
        setReportNotes,
        reportScores,
        setReportScores,
        reportMaxScores,
        setReportMaxScores,
        reportRanges,
        setReportRanges,
        reportCurrentValues,
        setReportCurrentValues,
        reportMeasurementNames,
        setReportMeasurementNames,
        reportAdvices,
        setReportAdvices,
      }}
    >
      <div className="main_parent">
        <div
          className="main_child m_setting"
          style={{
            width: "15%",
            color: "#f4347f",
            backgroundColor: "#fdd9e5",
            zIndex: "100",
          }}
        >
          <div
            style={{
              height: "30px",
              backgroundColor: "#f4347f",
              color: "#fdd9e5",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            Setting
          </div>
          <div
            className="custom-scroll"
            style={{ padding: "7px", color: "#f4347f" }}
          >
            <Divider style={{ padding: "8px", color: "#f4347f" }}>
              Gender
            </Divider>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <RadioGroup style={{ display: "contents" }}>
                <Radio
                  value="true"
                  label="Male"
                  checked={gender}
                  onChange={() => handleGenderChange("true")}
                />
                <Radio
                  value="false"
                  label="Female"
                  checked={!gender}
                  onChange={() => handleGenderChange("false")}
                />
              </RadioGroup>
            </div>
            <Divider style={{ padding: "8px", color: "#f4347f" }}>
              Ethnicity / Race
            </Divider>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <RadioGroup style={{ display: "contents" }}>
                <Radio
                  value="Caucasian"
                  label="Caucasian"
                  checked={selectedOption === "Caucasian"}
                  onChange={handleRadioChange}
                />
                <Radio
                  value="African"
                  label="African"
                  checked={selectedOption === "African"}
                  onChange={handleRadioChange}
                />
                <Radio
                  value="East Asian"
                  label="East Asian"
                  checked={selectedOption === "East Asian"}
                  onChange={handleRadioChange}
                />
                <Radio
                  value="South Asian"
                  label="South Asian"
                  checked={selectedOption === "South Asian"}
                  onChange={handleRadioChange}
                />
                <Radio
                  value="Hispanic"
                  label="Hispanic"
                  checked={selectedOption === "Hispanic"}
                  onChange={handleRadioChange}
                />
                <Radio
                  value="Middle eastern"
                  label="Middle eastern"
                  checked={selectedOption === "Middle eastern"}
                  onChange={handleRadioChange}
                />
                <Radio
                  value="Other"
                  label="Other"
                  checked={selectedOption === "Other"}
                  onChange={handleRadioChange}
                />
              </RadioGroup>
            </div>
            <Divider style={{ padding: "8px", color: "#f4347f" }}>
              Calculate
            </Divider>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ScoreAlert title="Total"></ScoreAlert>
              <ScoreAlert title="Front"></ScoreAlert>
              <ScoreAlert title="Side"></ScoreAlert>
            </div>
            <Divider style={{ padding: "8px", color: "#f4347f" }}>
              Report
            </Divider>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ViewReportDialog></ViewReportDialog>
              <Button
                size="large"
                shape="circular"
                appearance="primary"
                style={{ marginTop: "50px" }}
                onClick={() => handleRedirect("/pricing")}
              >
                Buy Premium
              </Button>
            </div>
          </div>
        </div>
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
                  src="./images/front.jpg"
                  alt="Image description"
                ></img>
                <div className="photo_div upload">
                  <input
                    type="file"
                    ref={frontfileInput}
                    accept="image/*"
                    onChange={handleFrontImageSelect}
                    style={{ display: "none" }}
                  />
                  <div
                    className="m_upload_button"
                    onClick={handleFrontUploadButtonClick}
                  >
                    <FaCloudUploadAlt size={30} />
                  </div>
                  {selectedFrontImage && (
                    <div className={`lock-div show`}>
                      <div
                        style={{
                          borderRadius: "0px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FrontProfileMappingModal/>
                      </div>
                    </div>
                  )}
                  {selectedFrontImage && (
                    <img
                      className="image_drawer"
                      src={URL.createObjectURL(selectedFrontImage)}
                      alt="Image description"
                      style={uploadImageStyle}
                    ></img>
                  )}
                  {!selectedFrontImage && (
                    <img
                      className="image_drawer"
                      src="./images/front_blank.jpg"
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
                  src="./images/side.jpg"
                  alt="Image description"
                ></img>
                <div className="photo_div upload">
                  <input
                    type="file"
                    ref={sidefileInput}
                    accept="image/*"
                    onChange={handleSideImageSelect}
                    style={{ display: "none" }}
                  />
                  <div
                    className="m_upload_button"
                    onClick={handleSideUploadButtonClick}
                  >
                    <FaCloudUploadAlt size={30} />
                  </div>
                  {selectedSideImage && (
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
                      src={URL.createObjectURL(selectedSideImage)}
                      alt="Image description"
                      style={uploadSideImageStyle}
                    ></img>
                  )}
                  {!selectedSideImage && (
                    <img
                      className="image_drawer"
                      src={"./images/side_blank.jpg"}
                      alt="Image description"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_child m_reference">
          <div
            style={{
              height: "30px",
              backgroundColor: "#f4347f",
              color: "#fdd9e5",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
              justifyContent: "space-between",
              paddingRight: "10px",
            }}
          >
            Reference
          </div>
          <div
            className="custom-scroll"
            style={{ padding: "7px", color: "purple" }}
          >
            <Tooltip
              relationship="label"
              content="Follow the photo instructions carefully as it will impact the accuracy of your score."
            >
              <Divider style={{ padding: "8px", color: "purple" }}>
                Photo Requirements
              </Divider>
            </Tooltip>
            <div style={{ paddingLeft: "10px" }}>
              <Label size="small" style={{ color: "purple" }}>
                Follow the photo instructions carefully.
              </Label>
              <div style={{ paddingLeft: "-5px", paddingRight: "10px" }}>
                <div>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "purple", paddingRight: "10px" }}
                  >
                    {" "}
                  </i>
                  <Label size="small" style={{ color: "purple" }}>
                    Generally no selfies to ensure maximal accuracy.{" "}
                  </Label>
                </div>
                <div>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "purple", paddingRight: "10px" }}
                  >
                    {" "}
                  </i>
                  <Label size="small" style={{ color: "purple" }}>
                    Lens distortion will warp your facial features if the camera
                    lens is too close.
                  </Label>
                </div>
                <div>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "purple", paddingRight: "10px" }}
                  >
                    {" "}
                  </i>
                  <Label size="small" style={{ color: "purple" }}>
                    Hair should not be covering the forehead or sides of the
                    face.
                  </Label>
                </div>
                <div>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "purple", paddingRight: "10px" }}
                  >
                    {" "}
                  </i>
                  <Label size="small" style={{ color: "purple" }}>
                    Photo should be well lit and good quality for AI to detect
                    landmarks accurately.
                  </Label>
                </div>
                <div>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "purple", paddingRight: "10px" }}
                  >
                    {" "}
                  </i>
                  <Label size="small" style={{ color: "purple" }}>
                    Face should be turned completely to the front and side for
                    each respective photo.
                  </Label>
                </div>
                <div>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "purple", paddingRight: "10px" }}
                  >
                    {" "}
                  </i>
                  <Label size="small" style={{ color: "purple" }}>
                    Face should have a neutral expression (no smiling or
                    excessive grinning).
                  </Label>
                </div>
              </div>
            </div>
            <Divider style={{ padding: "8px", color: "purple" }}>
              <i
                className="fa-solid fa-circle-exclamation fa-lg"
                style={{ color: "purple" }}
              />
            </Divider>
            <div style={{ paddingLeft: "10px" }}>
              <Label size="medium" style={{ color: "purple" }}>
                <i
                  class="fa-regular fa-clipboard"
                  style={{ color: "purple", paddingRight: "10px" }}
                />
                Note:
              </Label>
              <div style={{ paddingRight: "10px" }}>
                <div>
                  <Label size="small" style={{ color: "purple" }}>
                    Harmony only assesses your facial proportions, angles, and
                    the relative positioning of features. &nbsp;&nbsp;It does
                    not factor in features like hair color, skin color, eye
                    color, skin health, and eye contrast, which can all play a
                    role in facial attractiveness. <br />
                    <br /> You can adjust your score accordingly based on those
                    other factors. &nbsp;&nbsp;For example, if you have severe
                    acne, your overall beauty score may be lower than your
                    harmony score. &nbsp;&nbsp;Though, for the most part your
                    harmony score should represent the majority of criteria that
                    factor into beauty. &nbsp;&nbsp;Think of facial harmony as
                    the foundation of beauty and the rest of your features sit
                    on that foundation.
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default Home;
