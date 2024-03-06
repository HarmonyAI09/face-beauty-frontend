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
  const [id, setId] = React.useState(props.id);
  const [index, setIndex] = React.useState(props.index);
  React.useEffect(()=>{
    setId(props.id);
    setIndex(props.index);
  }, [props, id, index]);
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <img className="overview_img" src={`http://localhost:8000/get_image/${id}/${index}`} />
      </DialogTrigger>
      <DialogSurface style={{ backgroundColor: "#bbdefb" }}>
        <DialogBody className="overview_container">
          <DialogTitle>{Measurements[index]}</DialogTitle>
          <DialogContent className="overview_content">
              <img className="show_img" src={`http://localhost:8000/get_image/${id}/${index}`} />
              <div className="overview_description">
                {MeasurementOverviews[index]}
              </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};