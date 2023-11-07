import {
    Button,
    DialogContent,
    Image,
    Label,
    Slider
} from "@fluentui/react-components";
import { useState } from "react";

function UploadImageCrop() {
    const [scale, setScale] = useState(50);
    const [width, setWidth] = useState(1600);
    const handleSliderChange = (event, newValue) =>{
        setScale(newValue);
    }
    return (
        <DialogContent style={{ display: "flex" }}>
            <div className="image-viewer" style={{ width: "800px", height:"800px", backgroundColor:"gray"}}>
                <Image src="./images/test.jpg" width={((scale.value)*width)/100} style={{minWidth:"800px"}}></Image>
            </div>
            <Slider vertical min={1} max={100} defaultValue={scale} onChange={handleSliderChange}/>
        </DialogContent>
    );
}

export default UploadImageCrop;