/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  Button,
  Divider,
} from "@fluentui/react-components";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

import { Dismiss24Regular } from "@fluentui/react-icons";
import { UserContext } from "../pages/home";
import { useContext, useState, useEffect } from "react";
import { MeasurementOverview } from "./MeasurementOverview";

import "react-circular-progressbar/dist/styles.css";
import "./ViewReportModalDialog.css";
import NameEdit from "./NameEdit";
import { showNotification } from "./NotificationCreator";
import FileDownload from "./FileDownload";
import Submark, {
  FrontProfileCalculator,
  SideProfileCalculator,
} from "./Report/Submark";
import Introduction from "./Report/Introduction";
import Storage from "../utils/storage";
import TotalProfileScore from "./Report/TotalScore";
import ReportTable from "./Report/ReportTable";

const ReportTableHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        textAlign: "center",
        fontSize: "14px",
        fontFamily: "monospace",
        fontWeight: "700",
      }}
    >
      <div style={{ width: "10%" }}>
        <b>IMAGE</b>
      </div>
      <div style={{ width: "10%" }}>
        <b>MEASURE NAME</b>
      </div>
      <div style={{ width: "5%" }}>
        <b>VALUE</b>
      </div>
      <div style={{ width: "5%" }}>
        <b>SCORE</b>
      </div>
      <div style={{ width: "10%" }}>
        <b>IDEAL RANGE</b>
      </div>
      <div style={{ width: "30%" }}>
        <b>MEANING</b>
      </div>
      <div style={{ width: "30%" }}>
        <b>ADVICE</b>
      </div>
    </div>
  );
};

export const ViewReportDialog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { gender } = useContext(UserContext);
  const { selectedOption } = useContext(UserContext);
  const { reportNotes } = useContext(UserContext);
  const { reportScores } = useContext(UserContext);
  const { reportRanges } = useContext(UserContext);
  const { reportValues } = useContext(UserContext);
  const { reportMeasurementNames } = useContext(UserContext);
  const { reportAdvices } = useContext(UserContext);

  const { frontProfileMark } = useContext(UserContext);
  const { sideProfileMark } = useContext(UserContext);
  const { selectedFrontImage } = useContext(UserContext);
  const { selectedSideImage } = useContext(UserContext);
  const { markPoints } = useContext(UserContext);
  const [measurementImages, setMeasurementImages] = useState([]);
  const [measureID, setMeasureID] = useState("");
  const [reportOwner, setReportOwner] = useState("unnamed");
  const [isSaving, setIsSaving] = useState(false);
  const [reportList, setReportList] = useState([]);
  const [isClickable, setIsClickable] = useState(false);

  const getMeasurementImages = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("front", selectedFrontImage);
      formData.append("side", selectedSideImage);
      formData.append("points", JSON.stringify({ ...markPoints }));

      console.log(formData);
    } catch (error) {
      setIsLoading(false);
      showNotification("Failed", "Image generation has been failed.", "danger");
      console.error(error);
    }
  };

  const handleReportSave = async () => {
    setIsSaving(true);
    const formData = new FormData();
    formData.append("mail", localStorage.getItem("userEmail"));
    formData.append("reportID", measureID);
    formData.append("gender", gender ? "Male" : "Female");
    formData.append("race", selectedOption);
    formData.append("reportOwner", reportOwner);
    formData.append("keyPoints", JSON.stringify(markPoints));
    formData.append("frontImage", selectedFrontImage);
    formData.append("sideImage", selectedSideImage);
  };

  const getReportList = async () => {
    try {
    } catch (error) {
      console.error("Error getting report list:", error);
    }
  };

  useEffect(() => {
    setReportList([]);
    getReportList();
    Storage.onChange = () => {
      const settingAvability =
        Storage.loadItem("gender") !== null &&
        Storage.loadItem("ethnicity") !== null;
      const profileAvability =
        Storage.loadItem("frontProfile") !== null ||
        Storage.loadItem("sideProfile") !== null;
      setIsClickable(settingAvability && profileAvability);
    };
  }, []);

  const ReportTableRow = (props) => {
    const blurStyle = {
      filter: props.isblur ? "blur(5px)" : "none",
      userSelect: "none",
      pointerEvents: props.isblur ? "none" : "auto",
      display: "flex",
      width: "100%",
      alignItems: "center",
      marginTop: "5px",
      textAlign: "center",
    };

    return (
      <div>
        <div style={blurStyle}>
          <div style={{ width: "10%" }}>
            <MeasurementOverview
              isLoading={isLoading}
              source={measurementImages[props.source]}
              title={props.measurement}
              overview={props.overview}
              id={measureID}
              index={props.source + 1}
              clickable={!props.isblur}
            ></MeasurementOverview>
          </div>
          <div style={{ width: "10%" }}>{props.measurement}</div>
          <div style={{ width: "5%" }}>
            {typeof props.value === "number" && Number.isInteger(props.value)
              ? props.value
              : typeof props.value === "number"
              ? props.value.toFixed(2)
              : typeof props.value === "string"
              ? props.value.charAt(0).toUpperCase() + props.value.slice(1)
              : Array.isArray(props.value)
              ? props.value
                  .map((item) =>
                    typeof item === "number" ? item.toFixed(1) : item
                  )
                  .join(" : ")
              : ""}
          </div>
          <div style={{ width: "5%" }}>{props.score}</div>
          <div style={{ width: "10%" }}>
            {Array.isArray(props.range)
              ? props.range.map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    {index !== props.range.length - 1 && "-"}
                  </React.Fragment>
                ))
              : props.range}
          </div>
          <div
            style={{
              width: "30%",
              textAlign: "left",
              paddingLeft: "5px",
              height: "80px",
              overflowY: "auto",
            }}
          >
            {props.note}
          </div>
          <div
            style={{
              width: "30%",
              textAlign: "left",
              paddingLeft: "5px",
              height: "80px",
              overflowY: "auto",
            }}
          >
            {props.advice}
          </div>
        </div>
        <Divider></Divider>
      </div>
    );
  };

  const startIndex = 0;
  const endIndex = 45;

  const reportTableRowList = reportNotes
    .slice(startIndex, endIndex)
    .map((note, index) => {
      const actualIndex = startIndex + index; // Adjust index based on the start index
      return (
        <ReportTableRow
          key={actualIndex}
          measurement={reportMeasurementNames[actualIndex]}
          value={reportValues[actualIndex]}
          score={reportScores[actualIndex]}
          range={reportRanges[actualIndex]}
          note={note}
          advice={reportAdvices[actualIndex]}
          // overview={measurement_overviews[actualIndex]}
          source={actualIndex}
          isblur={localStorage.getItem("userLevel") === 0 || actualIndex >= 7}
        />
      );
    });

  return (
    <Dialog modalType="alert">
      <DialogTrigger disableButtonEnhancement>
        <Button
          shape="circular"
          onClick={getMeasurementImages}
          style={{ width: "200px", margin: "5px" }}
          disabled={isClickable ? false : true}
        >
          View Report
        </Button>
      </DialogTrigger>
      <DialogSurface
        style={{
          width: "90vw",
          maxWidth: "1920px",
          height: "90vh",
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
                />
              </DialogTrigger>
            }
          >
            <div className="score_group_container">
              <TotalProfileScore/>
              <div className="subscore_view">
                <FrontProfileCalculator />
                <SideProfileCalculator />
              </div>
            </div>
          </DialogTitle>
          <DialogContent style={{ color: "#0d47a1"}}>
            <div>
              <div>
                <div className="report_detail">
                  <div className="owner_info">
                    <FaUserCheck />
                    &nbsp;
                    {gender ? " Male, " : " Female, "} {selectedOption}, &nbsp;
                    <NameEdit
                      value={reportOwner}
                      onValueChange={setReportOwner}
                    />
                    &nbsp;
                    <div className="report_status">
                      <FaSave onClick={handleReportSave} />
                    </div>
                  </div>
                  <FileDownload></FileDownload>
                </div>
              </div>
              <div
                style={{
                  width: "calc(100% - 32px)",
                  padding: "16px",
                  paddingBottom: "0px",
                  color: "#0d47a1",
                  fontWeight: "600",
                  fontSize: "16px",
                  fontFamily: "monospace",
                }}
              >
                Welcome to Harmony’s full facial analysis.
                Below you will find a list of over 45 facial assessments, what
                they indicate about your face, and any potential improvements
                associated with each measurement.
                We hope this information is insightful and helps you on your
                journey to looking your best!
              </div>
            </div>
            <ReportTable/>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
