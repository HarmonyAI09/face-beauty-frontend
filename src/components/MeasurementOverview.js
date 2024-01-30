import * as React from "react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Image,
} from "@fluentui/react-components";
import { FaSpinner } from "react-icons/fa";

export const MeasurementOverview = (props) => {
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async (id, imageIndex) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/get_image/${id}/${imageIndex}`
        );

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageSrc(url);
        } else {
          console.error("Failed to fetch image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
      setIsLoading(false);
    };
    if (props.id && props.index) {
      fetchImage(props.id, props.index);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        {isLoading ? (
          <FaSpinner size={50} className="spin-animation" />
        ) : (
          <Image
            shape="circular"
            src={imageSrc}
            width={70}
            style={{ border: "2px solid #0d47a1", cursor: "pointer" }}
          ></Image>
        )}
      </DialogTrigger>
      <DialogSurface style={{ backgroundColor: "#bbdefb" }}>
        <DialogBody>
          <DialogTitle style={{ color: "#0d47a1" }}>{props.title}</DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #0d47a1",
                backgroundColor: "#bbdefb",
              }}
            >
              {isLoading ? (
                <FaSpinner size={50} className="spin-animation" />
              ) : (
                <Image shape="rect" src={imageSrc}></Image>
              )}
              <div
                style={{
                  fontWeight: "100",
                  color: "#0d47a1",
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
