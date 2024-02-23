/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Draggable from "react-draggable";
import { useEffect, useRef, useState, useContext } from "react";

import { UserContext } from "../pages/home";
import { FaRobot, FaSpinner } from "react-icons/fa";
import { BACKEND_URL } from "../config";

const tipSentence = "MOVE POINTS AROUND AS NEEDED TO COPY THE LEFT IMAGE";
const DraggableCircle = ({ id, color, position, onDrag, isSide }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const radius = 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(15, 15, radius, 0, 2 * Math.PI);
    context.fillStyle = `rgb(255,0,0)`;
    context.fill();
  }, []);

  return (
    <Draggable
      bounds="parent"
      position={{ x: position.x * 1, y: position.y * 1 }}
      onDrag={(e, data) => onDrag(data, id)}
    >
      <div
        style={{
          width: "0px",
          height: "0px",
          left: "-15px",
          top: "-15px",
          borderRadius: "0%",
          backgroundColor: color,
          cursor: "pointer",
          position: "relative",
          display:
            isSide && (id === 54 || id === 56 || id === 34) ? "none" : "block",
        }}
      >
        <canvas ref={canvasRef} width={20} height={20} />
      </div>
    </Draggable>
  );
};

export const FrontTargetMapping = ({
  selectedPoint,
  handleSelectPointChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const imageRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const { markPoints, setMarkPoints } = useContext(UserContext);
  const { selectedFrontImage, frontImage } = useContext(UserContext);
  const [circles, setCircles] = React.useState([
    { id: 1, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 2, color: "blue", issymmetry: true, position: { x: 0, y: 10 } },
    { id: 3, color: "green", issymmetry: true, position: { x: 0, y: 20 } },
    { id: 4, color: "red", issymmetry: true, position: { x: 0, y: 30 } },
    { id: 5, color: "blue", issymmetry: false, position: { x: 0, y: 40 } },
    { id: 6, color: "green", issymmetry: false, position: { x: 0, y: 50 } },
    { id: 7, color: "red", issymmetry: true, position: { x: 0, y: 60 } },
    { id: 8, color: "blue", issymmetry: true, position: { x: 150, y: 150 } },
    { id: 9, color: "green", issymmetry: true, position: { x: 300, y: 300 } },
    { id: 10, color: "red", issymmetry: true, position: { x: 0, y: 0 } },
    { id: 11, color: "blue", issymmetry: true, position: { x: 150, y: 150 } },
    { id: 12, color: "green", issymmetry: true, position: { x: 300, y: 300 } },
    { id: 13, color: "red", issymmetry: true, position: { x: 0, y: 0 } },
    { id: 14, color: "blue", issymmetry: true, position: { x: 150, y: 150 } },
    { id: 15, color: "green", issymmetry: true, position: { x: 300, y: 300 } },
    { id: 16, color: "red", issymmetry: true, position: { x: 0, y: 0 } },
    { id: 17, color: "blue", issymmetry: true, position: { x: 150, y: 150 } },
    { id: 18, color: "green", issymmetry: true, position: { x: 300, y: 300 } },
    { id: 19, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 20, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 21, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 22, color: "blue", issymmetry: true, position: { x: 150, y: 150 } },
    { id: 23, color: "green", issymmetry: true, position: { x: 300, y: 300 } },
    { id: 24, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 25, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 26, color: "green", issymmetry: true, position: { x: 300, y: 300 } },
    { id: 27, color: "red", issymmetry: true, position: { x: 0, y: 0 } },
    { id: 28, color: "blue", issymmetry: true, position: { x: 150, y: 150 } },
    { id: 29, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
  ]);
  const [uploadImageheight, setUploadImageHeight] = useState(0);
  const [uploadImagewidth, setUploadImageWidth] = useState(0);
  const [magnifierMousePosition, setMaginifierMousePosition] = useState([0, 0]);
  const [imgUrl, setImgUrl] = useState("");
  const [scaleImageSize, setScaleImageSize] = useState([0.0, 0.0]);

  const SubRectImage = ({ imageUrl, rect }) => {
    const { x, y, width, height, scaleWidth, scaleHeight } = rect;
    var perX, perY;
    if (uploadImageheight > uploadImagewidth) {
      perX = x * ((uploadImagewidth * 16) / uploadImageheight) - 100;
      perY = y * 16 - 100;
    } else {
      perX = x * 16 - 100;
      perY = y * ((uploadImageheight * 16) / uploadImagewidth) - 100;
    }

    const styles = {
      container: {
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        position: "relative",
        border: "3px solid #0d47a1",
        borderRadius: "99px",
      },
      image: {
        position: "absolute",
        top: `-${perY}px`,
        left: `-${perX}px`,
        width: scaleWidth,
        height: scaleHeight,
      },
    };
    const lineStyles = {
      verticalLine: {
        position: "absolute",
        top: "0",
        left: "50%",
        height: "100%",
        width: "2px", // width of the line
        backgroundColor: "#0d47a1",
        transform: "translateX(-50%)",
      },
      horizontalLine: {
        position: "absolute",
        top: "50%",
        left: "0",
        width: "100%",
        height: "2px", // height of the line
        backgroundColor: "#0d47a1",
        transform: "translateY(-50%)",
      },
    };

    return (
      <div style={styles.container}>
        <img src={imageUrl} alt="Cropped" style={styles.image} />
        <div style={lineStyles.verticalLine}></div>
        <div style={lineStyles.horizontalLine}></div>
      </div>
    );
  };

  useEffect(() => {
    const file = selectedFrontImage;
    var img;
    var _URL = window.URL || window.webkitURL;
    if (file) {
      img = new Image();
      var objectUrl = _URL.createObjectURL(file);
      img.onload = function () {
        setUploadImageHeight(this.height);
        setUploadImageWidth(this.width);
        _URL.revokeObjectURL(objectUrl);
        if (this.height > this.width) {
          setScaleImageSize([(1600 * this.width) / this.height, 1600]);
          setOffset({ x: (800 - (800 * this.width) / this.height) / 2, y: 0 });
        } else {
          setScaleImageSize([1600, (1600 * this.height) / this.width]);
          setOffset({ x: 0, y: (800 - (800 * this.height) / this.width) / 2 });
        }
      };
      img.src = objectUrl;
      setImgUrl(URL.createObjectURL(selectedFrontImage));
    }
  }, [selectedFrontImage]);

  const handleDrag = (data, id) => {
    data.x = data.x / 1;
    data.y = data.y / 1;
    let x1 = 0.0;
    let y1 = 0.0;
    if (scaleImageSize[0] < scaleImageSize[1]) {
      x1 = ((data.x - 400 + scaleImageSize[0] / 4) * 200) / scaleImageSize[0];
      y1 = data.y * 0.125;
    } else if (scaleImageSize[0] > scaleImageSize[1]) {
      x1 = data.x * 0.125;
      y1 = ((data.y - 400 + scaleImageSize[1] / 4) * 200) / scaleImageSize[1];
    } else {
      x1 = data.x * 0.125;
      y1 = data.y * 0.125;
    }
    setMaginifierMousePosition([x1, y1]);
    const updatedCircles = circles.map((circle) => {
      if (circle.id * 2 === id) {
        const updatedMarkPoints = [ ...markPoints ];
        updatedMarkPoints[circle.id][0] = { x: data.x, y: data.y };
        handleSelectPointChange([circle.id, 0]);
        if (!circle.issymmetry) {
          updatedMarkPoints[circle.id][1] = { x: data.x, y: data.y };
        }
        setMarkPoints(updatedMarkPoints);
        return {
          ...circle,
          position: { x: data.x, y: data.y },
        };
      } else if (circle.id * 2 + 1 === id) {
        const updatedMarkPoints = [ ...markPoints ];
        updatedMarkPoints[circle.id][1] = { x: data.x, y: data.y };
        handleSelectPointChange([circle.id, 1]);
        if (!circle.issymmetry) {
          updatedMarkPoints[circle.id][0] = { x: data.x, y: data.y };
        }
        setMarkPoints(updatedMarkPoints);
        return {
          ...circle,
          position: { x: data.x, y: data.y },
        };
      }

      return circle;
    });
    setCircles(updatedCircles);
  };

  const uploadImageStyle = {
    width: uploadImageheight > uploadImagewidth ? "auto" : "800px",
    height: uploadImageheight > uploadImagewidth ? "800px" : "auto",
    margin: "5px",
  };

  const handleMagicButtonClick = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", selectedFrontImage);

      const response = await fetch("http://localhost:8000/frontmagic", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      const updatedMarkPoints = [ ...markPoints ];

      for (let i = 0; i < data.points.length; i++) {
        updatedMarkPoints[i][0] = {
          x: data.points[i][0][0] + offset.x,
          y: data.points[i][0][1] + offset.y,
        };
        updatedMarkPoints[i][1] = {
          x: data.points[i][1][0] + offset.x,
          y: data.points[i][1][1] + offset.y,
        };
      }
      setIsLoading(false);
      setMarkPoints(updatedMarkPoints);
    } catch (error) {
      // Handle any errors
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          zIndex: 7,
          backgroundColor: "#ffffffc0",
          width: "100%",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          color: "red",
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        <b>{tipSentence}</b>
      </div>
      <div
        style={{
          width: "800px",
          height: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          backgroundColor: "#6d546a",
        }}
      >
        {selectedFrontImage && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={imgUrl}
            alt="Image description"
            style={uploadImageStyle}
            ref={imageRef}
          ></img>
        )}
        {!selectedFrontImage && (
          <img
            src={frontImage ? `${BACKEND_URL}/uploads/${frontImage}` : "./images/front_blank.jpg"}
            style={{ width: "800px", height: "800px" }}
          ></img>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1%",
          left: "1%",
          zIndex: 9,
          height: "50px",
          width: "50px",
          border: "2px solid #0d47a1",
          backgroundColor: "#e3f2fd",
          borderRadius: "20px",
          color: "#0d47a1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={handleMagicButtonClick}
      >
        {isLoading ? (
          <FaSpinner size={30} className="spin-animation" />
        ) : (
          <FaRobot size={30} />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1%",
          right: "1%",
        }}
      >
        <SubRectImage
          imageUrl={imgUrl}
          rect={{
            x: magnifierMousePosition[0],
            y: magnifierMousePosition[1],
            width: 200,
            height: 200,
            scaleWidth: scaleImageSize[0],
            scaleHeight: scaleImageSize[1],
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          height: "800px",
          width: "800px",
          zIndex: "5",
        }}
      >
        {circles.map((circle) => (
          <DraggableCircle
            key={circle.id * 2}
            id={circle.id * 2}
            color={circle.color}
            position={markPoints[circle.id][0]}
            onDrag={handleDrag}
            style={{ zIndex: 10 }}
          />
        ))}
        {circles.map((circle) => (
          <DraggableCircle
            key={circle.id * 2 + 1}
            id={circle.id * 2 + 1}
            color={circle.color}
            isSide={false}
            position={markPoints[circle.id][1]}
            onDrag={handleDrag}
            style={{ zIndex: 10 }}
          />
        ))}
      </div>
    </div>
  );
};

export const SideTargetMapping = ({
  selectedPoint,
  handleSelectPointChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const imageRef = useRef(null);
  const { markPoints, setMarkPoints } = useContext(UserContext);
  const { selectedSideImage, sideImage } = useContext(UserContext);
  const [circles, setCircles] = React.useState([
    { id: 30, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 31, color: "blue", issymmetry: false, position: { x: 0, y: 10 } },
    { id: 32, color: "green", issymmetry: false, position: { x: 0, y: 20 } },
    { id: 33, color: "red", issymmetry: false, position: { x: 0, y: 30 } },
    { id: 34, color: "blue", issymmetry: false, position: { x: 0, y: 40 } },
    { id: 35, color: "green", issymmetry: false, position: { x: 0, y: 50 } },
    { id: 36, color: "red", issymmetry: false, position: { x: 0, y: 60 } },
    { id: 37, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 38, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
    { id: 39, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 40, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 41, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
    { id: 42, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 43, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 44, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
    { id: 45, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 46, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 47, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
    { id: 48, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 49, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 50, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 51, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 52, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
    { id: 53, color: "red", issymmetry: false, position: { x: 0, y: 0 } },
    { id: 54, color: "blue", issymmetry: false, position: { x: 150, y: 150 } },
    { id: 55, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
    { id: 56, color: "green", issymmetry: false, position: { x: 300, y: 300 } },
    { id: 57, color: "green", issymmetry: false, position: { x: 300, y: 310 } },
    { id: 58, color: "green", issymmetry: false, position: { x: 300, y: 310 } },
    { id: 59, color: "green", issymmetry: false, position: { x: 300, y: 310 } },
  ]);
  const [uploadImageheight, setUploadImageHeight] = useState(0);
  const [uploadImagewidth, setUploadImageWidth] = useState(0);
  const [magnifierMousePosition, setMaginifierMousePosition] = useState([0, 0]);
  const [imgUrl, setImgUrl] = useState("");
  const [scaleImageSize, setScaleImageSize] = useState([0.0, 0.0]);

  const SubRectImage = ({ imageUrl, rect }) => {
    const { x, y, width, height, scaleWidth, scaleHeight } = rect;
    var perX, perY;
    if (uploadImageheight > uploadImagewidth) {
      perX = x * ((uploadImagewidth * 16) / uploadImageheight) - 100;
      perY = y * 16 - 100;
    } else {
      perX = x * 16 - 100;
      perY = y * ((uploadImageheight * 16) / uploadImagewidth) - 100;
    }

    const styles = {
      container: {
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        position: "relative",
        border: "3px solid #0d47a1",
        borderRadius: "99px",
      },
      image: {
        position: "absolute",
        top: `-${perY}px`,
        left: `-${perX}px`,
        width: scaleWidth,
        height: scaleHeight,
      },
    };
    const lineStyles = {
      verticalLine: {
        position: "absolute",
        top: "0",
        left: "50%",
        height: "100%",
        width: "2px", // width of the line
        backgroundColor: "#0d47a1",
        transform: "translateX(-50%)",
      },
      horizontalLine: {
        position: "absolute",
        top: "50%",
        left: "0",
        width: "100%",
        height: "2px", // height of the line
        backgroundColor: "#0d47a1",
        transform: "translateY(-50%)",
      },
    };

    return (
      <div style={styles.container}>
        <img src={imageUrl} alt="Cropped" style={styles.image} />
        <div style={lineStyles.verticalLine}></div>
        <div style={lineStyles.horizontalLine}></div>
      </div>
    );
  };

  useEffect(() => {
    const file = selectedSideImage;
    var img;
    var _URL = window.URL || window.webkitURL;
    if (file) {
      img = new Image();
      var objectUrl = _URL.createObjectURL(file);
      img.onload = function () {
        setUploadImageHeight(this.height);
        setUploadImageWidth(this.width);
        _URL.revokeObjectURL(objectUrl);
        if (this.height > this.width) {
          setScaleImageSize([(1600 * this.width) / this.height, 1600]);
        } else {
          setScaleImageSize([1600, (1600 * this.height) / this.width]);
        }
      };
      img.src = objectUrl;
      setImgUrl(URL.createObjectURL(selectedSideImage));
    }
  }, [selectedSideImage]);

  const handleDrag = (data, id) => {
    data.x = data.x / 1;
    data.y = data.y / 1;
    let x1 = 0.0;
    let y1 = 0.0;
    if (scaleImageSize[0] < scaleImageSize[1]) {
      x1 = ((data.x - 400 + scaleImageSize[0] / 4) * 200) / scaleImageSize[0];
      y1 = data.y * 0.125;
    } else if (scaleImageSize[0] > scaleImageSize[1]) {
      x1 = data.x * 0.125;
      y1 = ((data.y - 400 + scaleImageSize[1] / 4) * 200) / scaleImageSize[1];
    } else {
      x1 = data.x * 0.125;
      y1 = data.y * 0.125;
    }
    setMaginifierMousePosition([x1, y1]);
    const updatedCircles = circles.map((circle) => {
      if (circle.id === id) {
        const updatedMarkPoints = [ ...markPoints ];
        updatedMarkPoints[circle.id][0] = { x: data.x, y: data.y };
        handleSelectPointChange([circle.id, 0]);
        setMarkPoints(updatedMarkPoints);
        return {
          ...circle,
          position: { x: data.x, y: data.y },
        };
      }
      return circle;
    });
    setCircles(updatedCircles);
  };

  const uploadImageStyle = {
    width: uploadImageheight > uploadImagewidth ? "auto" : "800px",
    height: uploadImageheight > uploadImagewidth ? "800px" : "auto",
    margin: "5px",
  };

  const handleMagicButtonClick = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", selectedSideImage);

      const response = await fetch("http://localhost:8000/sidemagic", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      const updatedMarkPoints = [ ...markPoints ];
      for (let i = 0; i < data.points.length; i++) {
        updatedMarkPoints[i + 30][0] = {
          // x: data.points[i][0] + (800 - (800 * width) / height) / 2,
          x: data.points[i][0],
          y: data.points[i][1],
        };
      }

      setIsLoading(false);
      setMarkPoints(updatedMarkPoints);
    } catch (error) {
      // Handle any errors
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          zIndex: 7,
          backgroundColor: "#ffffffc0",
          width: "100%",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          color: "red",
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        <b>{tipSentence}</b>
      </div>
      <div
        style={{
          width: "800px",
          height: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          backgroundColor: "#6d546a",
        }}
      >
        {selectedSideImage && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={imgUrl}
            alt="Image description"
            style={uploadImageStyle}
            ref={imageRef}
          ></img>
        )}
        {!selectedSideImage && (
          <img
            src={sideImage ? `${BACKEND_URL}/uploads/${sideImage}` : "./images/side_blank.jpg"}
            style={{ width: "800px", height: "800px" }}
          ></img>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1%",
          left: "1%",
          zIndex: 9,
          height: "50px",
          width: "50px",
          border: "2px solid #0d47a1",
          backgroundColor: "#e3f2fd",
          borderRadius: "20px",
          color: "#0d47a1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={handleMagicButtonClick}
      >
        {isLoading ? (
          <FaSpinner size={30} className="spin-animation" />
        ) : (
          <FaRobot size={30} />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1%",
          right: "1%",
        }}
      >
        <SubRectImage
          imageUrl={imgUrl}
          rect={{
            x: magnifierMousePosition[0],
            y: magnifierMousePosition[1],
            width: 200,
            height: 200,
            scaleWidth: scaleImageSize[0],
            scaleHeight: scaleImageSize[1],
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          height: "800px",
          width: "800px",
          zIndex: "5",
        }}
      >
        {circles.map((circle) => (
          <DraggableCircle
            key={circle.id}
            id={circle.id}
            isSide={true}
            color={circle.color}
            position={markPoints[circle.id][0]}
            onDrag={handleDrag}
            style={{ zIndex: 10 }}
          />
        ))}
      </div>
    </div>
  );
};
