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
        photo : {src : "./images/side.jpg"},
        measurement: { label: "Gonial angle", icon: <DocumentRegular /> },
        value: { value: 122 },
        score: { getScore: 40, maxScore: 40 },
        ideal: { min: 122, max: 123 },
        meaning: { label: "Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape." },
        advice: { label: "" },
    },
    {
        photo : {src : "./images/side.jpg"},
        measurement: { label: "Gonial angle", icon: <DocumentRegular /> },
        value: { value: 122 },
        score: { getScore: 40, maxScore: 40 },
        ideal: { min: 122, max: 123 },
        meaning: { label: "Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape." },
        advice: { label: "" },
    },
    {
        photo : {src : "./images/side.jpg"},
        measurement: { label: "Gonial angle", icon: <DocumentRegular /> },
        value: { value: 122 },
        score: { getScore: 40, maxScore: 40 },
        ideal: { min: 122, max: 123 },
        meaning: { label: "Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape." },
        advice: { label: "" },
    },
    {
        photo : {src : "./images/side.jpg"},
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

export const ViewReportDialog = () => {

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
                    <DialogContent>
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
                        <Table arial-label="Default table">
                            <TableHeader>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableHeaderCell key={column.columnKey}>
                                            {column.label}
                                        </TableHeaderCell>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.map((item) => (
                                    <TableRow key={item.measurement.label}>
                                        <TableCell styles={{ root: { width: '100px' } }}>
                                            <Image shape="circular" src={item.photo.src} width={70} style={{border:"2px solid purple"}}></Image>
                                        </TableCell>
                                        <TableCell idealWidth="100px">
                                                {item.measurement.label}
                                        </TableCell>
                                        <TableCell>
                                            <TableCellLayout>
                                                {item.value.value}
                                            </TableCellLayout>
                                        </TableCell>
                                        <TableCell>{item.score.getScore}/{item.score.maxScore} points</TableCell>
                                        <TableCell>{item.ideal.min}-{item.ideal.max}</TableCell>
                                        <TableCell>{item.meaning.label}</TableCell>
                                        <TableCell>{item.advice.label}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
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