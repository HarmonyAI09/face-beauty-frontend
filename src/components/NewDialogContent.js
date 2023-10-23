import {
    Button,
    DialogContent,
} from "@fluentui/react-components";

import {ResizeImage20Filled, Subtract20Filled, Add20Filled, ArrowMoveInward20Filled} from "@fluentui/react-icons";

import {FrontSupportImage, SideSupportImage} from "./SupportImage";
import {FrontTargetMapping, SideTargetMapping} from "./TargetMapping";
import { useEffect, useRef, useState } from 'react';


export function FrontDialogContent() {
    
    const [selectedPoint, setSelectedPoint] = useState([0,0]);

    const handleSelectPointChange = (newSelectedPoint) =>{
        setSelectedPoint(newSelectedPoint);
    }

    return (
            <DialogContent style={{ display: "flex" }}>
                <div style={{ width: "100%", display: "flex", justifyContent:"space-evenly" }}>
                    <FrontSupportImage selectedPoint={selectedPoint}></FrontSupportImage>
                    <FrontTargetMapping selectedPoint={selectedPoint} handleSelectPointChange={handleSelectPointChange}></FrontTargetMapping>
                </div>
            </DialogContent>
    );
}

export function SideDialogContent() {
    
    const [selectedPoint, setSelectedPoint] = useState([0,0]);

    const handleSelectPointChange = (newSelectedPoint) =>{
        setSelectedPoint(newSelectedPoint);
    }
    return (
            <DialogContent style={{ display: "flex" }}>
                <div style={{ width: "100%", display: "flex", justifyContent:"space-evenly" }}>
                    <SideSupportImage selectedPoint={selectedPoint}></SideSupportImage>
                    <SideTargetMapping selectedPoint={selectedPoint} handleSelectPointChange={handleSelectPointChange}></SideTargetMapping>
                </div>
            </DialogContent>
    );

}
