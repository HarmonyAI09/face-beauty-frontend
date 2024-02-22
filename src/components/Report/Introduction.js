import { useEffect } from "react";
import "./Introduction.css";
import NameEdit from "../NameEdit";

const Introduction = () => {
    useEffect(()=>{
    })
    return (
        <div className="introduction_container">
            <div className="unique_info">
                {sessionStorage.getItem("gender")}{","}&nbsp;
                {sessionStorage.getItem("ethnicity")}{","}&nbsp;
                <NameEdit value={"HEHEH"}/>
            </div>
        </div>
    );
}

export default Introduction;