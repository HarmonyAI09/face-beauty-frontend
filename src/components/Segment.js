import { Divider } from "@fluentui/react-components";
import "./Segment.css"
const Segment = (props) => {
    return (
        <div className="segment_container">
            <Divider className="segment_divider" style={{color:"#1565c0"}}>{props.title}</Divider>
            {props.children}
        </div>
    )
}

export default Segment;