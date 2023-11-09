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
  Divider,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
  Image,
  Input,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { UserContext } from "../pages/home";
import { useContext, useState, useEffect } from "react";

import "react-circular-progressbar/dist/styles.css";

const ReportTableHeader = () => {
  return (
    <div style={{ display: "flex", width: "100%", textAlign: "center" }}>
      <div style={{ width: "10%" }}><b>Image</b></div>
      <div style={{ width: "10%" }}><b>Measurement Name</b></div>
      <div style={{ width: "5%" }}><b>Value</b></div>
      <div style={{ width: "5%" }}><b>Your Score</b></div>
      <div style={{ width: "5%" }}><b>Ideal Range</b></div>
      <div style={{ width: "35%" }}><b>Your Measurement's Meaning</b></div>
      <div style={{ width: "30%" }}><b>Improvement Advice (if applicable)</b></div>
    </div>
  );
};

const ReportTableRow = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: "5px",
          textAlign: "center",
        }}
      >
        <div style={{ width: "10%" }}>
          <Image
            shape="circular"
            src={"./images/report/" + props.source + ".jpg"}
            width={70}
            style={{ border: "2px solid purple" }}
          ></Image>
        </div>
        <div style={{ width: "10%" }}>{props.measurement}</div>
        <div style={{ width: "5%" }}>
          {typeof props.value === "number" && Number.isInteger(props.value)
            ? props.value
            : typeof props.value === "number"
              ? props.value.toFixed(1)
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
        <div style={{ width: "5%" }}>
          {Array.isArray(props.range)
            ? props.range.map((item, index) => (
              <React.Fragment key={index}>
                {item.toFixed(2)}
                {index !== props.range.length - 1 && "-"}
              </React.Fragment>
            ))
            : props.range}
        </div>
        <div
          style={{
            width: "25%",
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
            width: "40%",
            textAlign: "left",
            paddingLeft: "5px",
            height: "80px",
            overflowY: "auto",
          }}
        >
          {/* {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph.trim()}</p>
                    ))} */}
          {props.advice}
        </div>
      </div>
      <Divider></Divider>
    </div>
  );
};

export const ViewReportDialog = () => {
  const { gender } = useContext(UserContext);
  const { selectedOption } = useContext(UserContext);
  const { reportNotes, setReportNotes } = useContext(UserContext);
  const { reportScores, setReportScores } = useContext(UserContext);
  const { reportMaxScores, setReportMaxScores } = useContext(UserContext);
  const { reportRanges, setReportRanges } = useContext(UserContext);
  const { reportCurrentValues, setReportCurrentValues } =
    useContext(UserContext);
  const { reportMeasurementNames, setReportMeasurementNames } =
    useContext(UserContext);
  const { reportAdvices, setReportAdvices } = useContext(UserContext);

  const { frontProfileMark, setFrontProfileMark } = useContext(UserContext);
  const { sideProfileMark, setSideProfileMark } = useContext(UserContext);

  useEffect(() => {
  }, [reportNotes]);

  const reportTableRowList = reportNotes.map((note, index) => {
    return (
      <ReportTableRow
        key={index}
        measurement={reportMeasurementNames[index]}
        value={reportCurrentValues[index]}
        score={reportScores[index]}
        range={reportRanges[index]}
        note={note}
        advice={reportAdvices[index]}
        source={index + 1}
      />
    );
  });

  return (
    <Dialog modalType="alert">
      <DialogTrigger disableButtonEnhancement>
        <Button shape="square" style={{ width: "200px", margin: "5px" }}>
          View Report
        </Button>
      </DialogTrigger>
      <DialogSurface
        style={{ width: "90vw", maxWidth: "1920px", height: "90vh" }}
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
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <h1>Harmony </h1>
              <h4>&nbsp;by creatingattractive</h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{ color: "purple", fontSize: "40px" }}>
                {Math.max(
                  ((sideProfileMark + frontProfileMark) / 5).toFixed(1),
                  0
                )}
                % Facial harmony
              </div>
            </div>
          </DialogTitle>
          <DialogContent style={{}}>
            <div>
              <div>
                <div style={{ fontSize: "20px" }}>
                  {"Harmony report : "}
                  {gender ? " Male, " : " Female, "} {selectedOption}
                </div>
                <div style={{ fontSize: "18px", marginTop: "8px" }}>
                  <div>
                    {"Name : "}
                    <Input placeholder="Enter your name here" />
                  </div>
                  {/* <div>
                    <DatePicker placeholder="Select a date..." />
                  </div> */}
                </div>
              </div>
              <div>
                Welcome to Harmony’s full facial analysis. Below you will find a
                list of over 45 facial assessments, what they indicate about
                your face, and any potential improvements associated with each
                measurement. We hope this information is insightful and helps
                you on your journey to looking your best!
              </div>
            </div>
            <Divider style={{ padding: "20px" }}></Divider>
            <ReportTableHeader />
            <Divider></Divider>
            <div className="custom-scroll" style={{ height: "500px" }}>
              {reportTableRowList}
            </div>
            <Divider></Divider>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
