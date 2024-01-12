import { Image } from "@fluentui/react-components";
import { useEffect, useRef, useState } from "react";

export function FrontSupportImage({ selectedPoint }) {
  const canvasRef = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(selectedPoint);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const circle_radius = 2;
    const moving_circle_radius = 5;

    const markPoints = [
      [
        { x: -99, y: -99 },
        { x: -99, y: -99 },
      ],
      [
        { x: 375, y: 164 },
        { x: 375, y: 164 },
      ], //1
      [
        { x: 253, y: 220 },
        { x: 484, y: 223 },
      ], //2
      [
        { x: 272, y: 270 },
        { x: 464, y: 272 },
      ], //3
      [
        { x: 272, y: 280 },
        { x: 464, y: 282 },
      ], //4
      [
        { x: 364, y: 287 },
        { x: 364, y: 287 },
      ], //5
      [
        { x: 364, y: 300 },
        { x: 364, y: 300 },
      ], //6
      [
        { x: 333, y: 298 },
        { x: 395, y: 300 },
      ], //7
      [
        { x: 332, y: 305 },
        { x: 396, y: 308 },
      ], //8
      [
        { x: 270, y: 324 },
        { x: 475, y: 331 },
      ], //9
      [
        { x: 293, y: 316 },
        { x: 446, y: 318 },
      ], //10
      [
        { x: 275, y: 329 },
        { x: 466, y: 330 },
      ], //11
      [
        { x: 303, y: 326 },
        { x: 436, y: 327 },
      ], //12
      [
        { x: 320, y: 328 },
        { x: 415, y: 327 },
      ], //13
      [
        { x: 293, y: 339 },
        { x: 446, y: 340 },
      ], //14
      [
        { x: 313, y: 339 },
        { x: 416, y: 340 },
      ], //15
      [
        { x: 333, y: 339 },
        { x: 406, y: 340 },
      ], //16
      [
        { x: 225, y: 349 },
        { x: 530, y: 351 },
      ], //17
      [
        { x: 334, y: 423 },
        { x: 406, y: 422 },
      ], //18
      [
        { x: 365, y: 447 },
        { x: 365, y: 447 },
      ], //19
      [
        { x: 381, y: 444 },
        { x: 381, y: 444 },
      ], //20
      [
        { x: 380, y: 470 },
        { x: 380, y: 470 },
      ], //21
      [
        { x: 255, y: 477 },
        { x: 505, y: 475 },
      ], //22
      [
        { x: 318, y: 482 },
        { x: 430, y: 482 },
      ], //23
      [
        { x: 371, y: 484 },
        { x: 371, y: 484 },
      ], //24
      [
        { x: 369, y: 507 },
        { x: 369, y: 507 },
      ], //25
      [
        { x: 270, y: 494 },
        { x: 495, y: 494 },
      ], //26
      [
        { x: 275, y: 514 },
        { x: 493, y: 524 },
      ], //27
      [
        { x: 328, y: 557 },
        { x: 420, y: 557 },
      ], //28
      [
        { x: 367, y: 568 },
        { x: 367, y: 568 },
      ], //29
    ];

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(
      markPoints[selectedPoint[0]][selectedPoint[1]].x * 1,
      markPoints[selectedPoint[0]][selectedPoint[1]].y * 1,
      moving_circle_radius,
      0,
      2 * Math.PI
    );
    context.fillStyle = `rgb(0, 255, 0)`;
    context.fill();
  }, [selectedPoint]);

  return (
    <div style={{ position: "relative" }}>
      <Image src="./images/front_.jpg" width={800} height={800} shape="rounded"></Image>
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
        style={{ position: "absolute", left: "0px", top: "0px" }}
      />
    </div>
  );
}

export function SideSupportImage({ selectedPoint }) {
  const canvasRef = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(selectedPoint);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const circle_radius = 2;
    const moving_circle_radius = 5;

    const markPoints = [
      [
        { x: -99, y: -99 },
        { x: -99, y: -99 },
      ],
      [
        { x: 375, y: 164 },
        { x: 375, y: 164 },
      ], //1
      [
        { x: 253, y: 220 },
        { x: 484, y: 223 },
      ], //2
      [
        { x: 272, y: 270 },
        { x: 464, y: 272 },
      ], //3
      [
        { x: 272, y: 280 },
        { x: 464, y: 282 },
      ], //4
      [
        { x: 368, y: 284 },
        { x: 368, y: 284 },
      ], //5
      [
        { x: 368, y: 304 },
        { x: 368, y: 304 },
      ], //6
      [
        { x: 335, y: 294 },
        { x: 398, y: 294 },
      ], //7
      [
        { x: 335, y: 309 },
        { x: 398, y: 309 },
      ], //8
      [
        { x: 270, y: 324 },
        { x: 471, y: 325 },
      ], //9
      [
        { x: 293, y: 316 },
        { x: 446, y: 318 },
      ], //10
      [
        { x: 275, y: 329 },
        { x: 466, y: 330 },
      ], //11
      [
        { x: 303, y: 326 },
        { x: 436, y: 327 },
      ], //12
      [
        { x: 325, y: 326 },
        { x: 415, y: 327 },
      ], //13
      [
        { x: 293, y: 339 },
        { x: 446, y: 340 },
      ], //14
      [
        { x: 313, y: 339 },
        { x: 426, y: 340 },
      ], //15
      [
        { x: 333, y: 339 },
        { x: 406, y: 340 },
      ], //16
      [
        { x: 225, y: 349 },
        { x: 530, y: 351 },
      ], //17
      [
        { x: 333, y: 419 },
        { x: 406, y: 422 },
      ], //18
      [
        { x: 370, y: 450 },
        { x: 370, y: 450 },
      ], //19
      [
        { x: 380, y: 440 },
        { x: 380, y: 440 },
      ], //20
      [
        { x: 380, y: 470 },
        { x: 380, y: 470 },
      ], //21
      [
        { x: 252, y: 472 },
        { x: 505, y: 475 },
      ], //22
      [
        { x: 318, y: 482 },
        { x: 430, y: 482 },
      ], //23
      [
        { x: 371, y: 484 },
        { x: 371, y: 484 },
      ], //24
      [
        { x: 371, y: 504 },
        { x: 371, y: 504 },
      ], //25
      [
        { x: 270, y: 494 },
        { x: 495, y: 494 },
      ], //26
      [
        { x: 275, y: 514 },
        { x: 493, y: 524 },
      ], //27
      [
        { x: 328, y: 557 },
        { x: 420, y: 557 },
      ], //28
      [
        { x: 370, y: 570 },
        { x: 370, y: 570 },
      ], //29
      [{ x: 244, y: 190 }], //30
      [{ x: 225, y: 226 }], //31
      [{ x: 215, y: 292 }], //32
      [{ x: 235, y: 327 }], //33
      [{ x: 225, y: 332 }], //34
      [{ x: 218, y: 334 }], //35
      [{ x: 190, y: 375 }], //36
      [{ x: 260, y: 375 }], //37
      [{ x: 400, y: 375 }], //38
      [{ x: 170, y: 400 }], //39
      [{ x: 168, y: 405 }], //40
      [{ x: 175, y: 422 }], //41
      [{ x: 225, y: 417 }], //42
      [{ x: 195, y: 435 }], //43
      [{ x: 200, y: 440 }], //44
      [{ x: 200, y: 460 }], //45
      [{ x: 237, y: 472 }], //46
      [{ x: 210, y: 484 }], //47
      [{ x: 220, y: 500 }], //48
      [{ x: 385, y: 484 }], //49
      [{ x: 220, y: 530 }], //50
      [{ x: 240, y: 552 }], //51
      [{ x: 258, y: 554 }], //52
      [{ x: 320, y: 560 }], //53
      [{ x: 220, y: 570 }], //54
      [{ x: 352, y: 655 }], //55
      [{ x: 168, y: 327 }], //56
      [{ x: 235, y: 352 }], //57
      [{ x: 210, y: 494 }], //58
      [{ x: 185, y: 428 }], //59
    ];
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(
      markPoints[selectedPoint[0]][selectedPoint[1]].x * 1,
      markPoints[selectedPoint[0]][selectedPoint[1]].y * 1,
      moving_circle_radius,
      0,
      2 * Math.PI
    );
    context.fillStyle = `rgba(0, 255, 0)`;
    context.fill();
  }, [selectedPoint]);

  return (
    <div style={{ position: "relative" }}>
      <Image src="./images/side_.jpg" width={800} height={800}></Image>
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
        style={{ position: "absolute", left: "0px", top: "0px" }}
      />
    </div>
  );
}
