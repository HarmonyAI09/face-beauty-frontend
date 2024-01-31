/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
} from "@fluentui/react-components";
import "./MeasurementOverview.css";
import { MeasurementOverviews, Measurements } from "../utils/text";

export const MeasurementOverview = (props) => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <img className="overview_img" src={`http://localhost:8000/get_image/${props.id}/${props.index}`} />
      </DialogTrigger>
      <DialogSurface style={{ backgroundColor: "#bbdefb" }}>
        <DialogBody className="overview_container">
          <DialogTitle>{Measurements[props.index-1]}</DialogTitle>
          <DialogContent className="overview_content">
              <img className="show_img" src={`http://localhost:8000/get_image/${props.id}/${props.index}`} />
              <div className="overview_description">
                {MeasurementOverviews[props.index-1]}
              </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
