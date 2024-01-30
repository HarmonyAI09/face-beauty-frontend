import { useState } from "react";
import "./Submark.css";
import { MdOutlineVerified } from "react-icons/md";
import { MdVerified } from "react-icons/md";

const Submark = (props) => {
    const [verified, setVerified] = useState(false);
    let className = "submark_container";

    if(props.disable){
        className += " disabled";
    }

    return (
        <div className={className}>
            {verified?<MdVerified/>:<MdOutlineVerified/>}
            {props.text}
        </div>
    )
};

export const FrontProfileCalculator = () => {
    const [sense, setSense] = useState("Get Front Profile Score");
    return (
        <Submark text={sense}/>
    );
};

export const SideProfileCalculator = () => {
    const [sense, setSense] = useState("Get Side Profile Score");
    return (
        <Submark text={sense}/>
    );
};

export default Submark;