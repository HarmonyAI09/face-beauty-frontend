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
    Image
} from "@fluentui/react-components";
import { UserContext } from "../pages/home";
import { useContext, useState, useEffect } from "react";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut, easeQuadIn } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

import {
    FolderRegular,
    EditRegular,
    OpenRegular,
    DocumentRegular,
    PeopleRegular,
    DocumentPdfRegular,
    VideoRegular,
} from "@fluentui/react-icons";

const items = [
    {
        photo: { src: "./images/side.jpg" },
        measurement: { label: "Gonial angle", icon: <DocumentRegular /> },
        value: { value: 122 },
        score: { getScore: 40, maxScore: 40 },
        ideal: { min: 122, max: 123 },
        meaning: { label: "Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape." },
        advice: { label: "" },
    },
    {
        photo: { src: "./images/side.jpg" },
        measurement: { label: "Gonial angle", icon: <DocumentRegular /> },
        value: { value: 122 },
        score: { getScore: 40, maxScore: 40 },
        ideal: { min: 122, max: 123 },
        meaning: { label: "Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape." },
        advice: { label: "" },
    },
    {
        photo: { src: "./images/side.jpg" },
        measurement: { label: "Gonial angle", icon: <DocumentRegular /> },
        value: { value: 122 },
        score: { getScore: 40, maxScore: 40 },
        ideal: { min: 122, max: 123 },
        meaning: { label: "Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape." },
        advice: { label: "" },
    },
    {
        photo: { src: "./images/side.jpg" },
        measurement: { label: "Gonial angle", icon: <DocumentRegular /> },
        value: { value: 122 },
        score: { getScore: 40, maxScore: 40 },
        ideal: { min: 122, max: 123 },
        meaning: { label: "Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape." },
        advice: { label: "" },
    },
];

const columns = [
    { columnKey: "photo", label: "Photo" },
    { columnKey: "measurement", label: "Measurement Name" },
    { columnKey: "value", label: "Value" },
    { columnKey: "score", label: "Score" },
    { columnKey: "ideal", label: "Ideal Range" },
    { columnKey: "meaning", label: "Your Measurement's Meaning" },
    { columnKey: "advice", label: "Improvement advice (if applicable)" },
];

const ReportTableHeader = () => {
    return (
        <div style={{ display: "flex", width: "100%", textAlign: "center" }}>
            <div style={{ width: "10%" }}>Image</div>
            <div style={{ width: "10%" }}>Measurement Name</div>
            <div style={{ width: "5%" }}>Value</div>
            <div style={{ width: "5%" }}>Score</div>
            <div style={{ width: "35%" }}>Your Measurement's Meaning</div>
            <div style={{ width: "35%" }}>Improvement Advice (if applicable)</div>
        </div>
    );
};

const ReportTableRow = (props) => {
    return (
        <div>
            <div style={{ display: "flex", width: "100%", alignItems: "center", marginTop: "5px", textAlign: "center" }}>
                <div style={{ width: "10%" }}><Image shape="circular" src="./images/side.jpg" width={70} style={{ border: "2px solid purple" }}></Image></div>
                <div style={{ width: "10%" }}>{props.measurement}</div>
                <div style={{ width: "5%" }}>{props.value}</div>
                <div style={{ width: "5%" }}>{props.score}</div>
                <div style={{ width: "35%", textAlign: "left", paddingLeft: "5px" }}>{props.note}</div>
                <div style={{ width: "35%", textAlign: "left", paddingLeft: "5px" }}>{props.advice}</div>
            </div>
            <Divider></Divider>
        </div>
    );
};

export const ViewReportDialog = () => {

    const { gender } = useContext(UserContext);
    const { reportNotes, setReportNotes } = useContext(UserContext);
    const { reportScores, setReportScores } = useContext(UserContext);
    const { reportMaxScores, setReportMaxScores } = useContext(UserContext);
    const { reportRanges, setReportRanges } = useContext(UserContext);
    const { reportCurrentValues, setReportCurrentValues } = useContext(UserContext);
    const { reportMeasurementNames, setReportMeasurementNames } = useContext(UserContext);

    useEffect(() => {
        console.log(reportNotes, reportScores, reportMaxScores);
    }, [reportNotes]);

    const reportTableRowList = reportNotes.map((note, index) => {
        return <ReportTableRow key={index} measurement={reportMeasurementNames[index]} value={reportCurrentValues[index]} score={reportScores[index]} note={note} advice="temp" />
    });

    return (
        <Dialog modalType="alert">
            <DialogTrigger disableButtonEnhancement>
                <Button shape="square" style={{ width: "200px", margin: "5px" }}>View Report</Button>
            </DialogTrigger>
            <DialogSurface style={{ width: "90vw", maxWidth: "1920px", height: "90vh" }}>
                <DialogBody>
                    <DialogTitle>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", alignItems: "baseline" }}>
                            <h1>Harmony </h1>
                            <h4>&nbsp;by creatingattractive</h4>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                            <div style={{ color: "purple", }}>68% Facial harmony</div>
                        </div>
                    </DialogTitle>
                    <DialogContent style={{}}>
                        <div>
                            <div style={{ display: "flex" }}>

                                <div>Harmony report </div>
                                <div>male, caucasian</div>
                            </div>
                            <div>
                                Welcome to Harmony’s full facial analysis. Below you will find a list of over 45 facial assessments, what they indicate about your face, and any potential improvements associated with each measurement. We hope this information is insightful and helps you on your journey to looking your best!
                            </div>
                        </div>
                        <Divider style={{ padding: "20px" }}></Divider>
                        <ReportTableHeader />
                        <Divider></Divider>
                        <div className="custom-scroll" style={{ height: "500px" }}>{reportTableRowList}</div>
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