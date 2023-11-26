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

export const MeasurementOverview = (props) => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Image
          shape="circular"
          // src={"./images/report/" + props.source + ".jpg"}
          src={props.source}
          width={70}
          style={{ border: "2px solid purple", cursor: "pointer" }}
        ></Image>
        {/* <img></img> */}
        {/* <img src={props.image_url}></img> */}
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                shape="rect"
                width={500}
                src={props.source}
              ></Image>
              <div>{props.overview}</div>
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
