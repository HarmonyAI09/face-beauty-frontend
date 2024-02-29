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
} from "@fluentui/react-components";
import { FaSave } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

import { Dismiss24Regular } from "@fluentui/react-icons";
import { UserContext } from "../pages/home";
import { useContext, useState, useEffect } from "react";

import "react-circular-progressbar/dist/styles.css";
import "./ViewReportModalDialog.css";
import NameEdit from "./NameEdit";
import { showNotification } from "./NotificationCreator";
import {
  FrontProfileCalculator,
  SideProfileCalculator,
} from "./Report/Submark";
import TotalProfileScore from "./Report/TotalScore";
import ReportTable from "./Report/ReportTable";

export const ViewReportDialog = () => {
  const { selectedFrontImage, selectedSideImage } = useContext(UserContext);
  const { markPoints } = useContext(UserContext);
  const [isClickable, setIsClickable] = useState(false);
  const { oneProfile } = useContext(UserContext);
  const [reportOwner, setReportOwner] = useState(oneProfile.name);

  const getMeasurementImages = async () => {
    try {
      const formData = new FormData();
      formData.append("front", selectedFrontImage);
      formData.append("side", selectedSideImage);
      formData.append("points", JSON.stringify({ ...markPoints }));
    } catch (error) {
      showNotification("Failed", "Image generation has been failed.", "danger");
      console.error(error);
    }
  };

  useEffect(() => {
    const settingAvability =
      oneProfile.gender !== null && oneProfile.race !== null;
    const profileAvability =
      oneProfile.front.imgSrc !== null || oneProfile.side.imgSrc !== null;
    setIsClickable(settingAvability && profileAvability);
  }, [isClickable, oneProfile]);

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
              <TotalProfileScore />
              <div className="subscore_view">
                <FrontProfileCalculator />
                <SideProfileCalculator />
              </div>
            </div>
          </DialogTitle>
          <DialogContent style={{ color: "#0d47a1" }}>
            <div>
              <div>
                <div className="report_detail">
                  <div className="owner_info">
                    <FaUserCheck />
                    &nbsp;
                    {oneProfile.gender}, {oneProfile.race}, &nbsp;
                    <NameEdit
                      value={oneProfile.name}
                      onValueChange={setReportOwner}
                      disabled={!oneProfile.isNew}
                    />
                    &nbsp;
                    {oneProfile.isNew && localStorage.getItem("userLevel") === "1" && (
                      <div className="report_status">
                        <FaSave
                          onClick={() => {
                            oneProfile.save(localStorage.getItem("userEmail"));
                          }}
                        />
                      </div>
                    )}
                  </div>
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
                Welcome to Harmony’s full facial analysis. Below you will find a
                list of over 45 facial assessments, what they indicate about
                your face, and any potential improvements associated with each
                measurement. We hope this information is insightful and helps
                you on your journey to looking your best!
              </div>
            </div>
            <ReportTable />
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
