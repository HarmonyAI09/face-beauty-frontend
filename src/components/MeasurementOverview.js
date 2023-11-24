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
        {/* <Button>Open dialog</Button> */}
        <Image
          shape="circular"
          src={"./images/report/" + props.source + ".jpg"}
          width={70}
          style={{ border: "2px solid purple", cursor: "pointer" }}
        ></Image>
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
                src={"./images/report/" + props.source + ".jpg"}
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
