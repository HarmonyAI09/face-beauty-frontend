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
  Image,
} from "@fluentui/react-components";
import { FaSpinner } from "react-icons/fa";

export const MeasurementOverview = (props) => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        {props.isLoading ? (
          <FaSpinner size={50} className="spin-animation"/>
        ) : (
          <Image
            shape="circular"
            src={props.source}
            width={70}
            style={{ border: "2px solid #f4347f", cursor: "pointer" }}
          ></Image>
        )}
      </DialogTrigger>
      <DialogSurface style={{ backgroundColor: "#fbe0e8" }}>
        <DialogBody>
          <DialogTitle style={{ color: "#fe036a" }}>{props.title}</DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #fe036a",
                backgroundColor: "#fdd9e5",
              }}
            >
              {props.isLoading?<FaSpinner size={50} className="spin-animation"/>:<Image shape="rect" src={props.source}></Image>}              
              <div
                style={{
                  fontWeight: "100",
                  color: "#fe036a",
                  height: "292px",
                  overflowY: "auto",
                  marginLeft: "20px",
                  padding: "4px",
                }}
              >
                <div>{props.overview}</div>
              </div>
            </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
