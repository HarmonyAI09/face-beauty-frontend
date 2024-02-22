import Segment from "../Segment";
import { ViewReportDialog } from "../ViewReportModalDialog";
import "./Report.css";

const Analyze = () => {
    return (
        <Segment title="Analyze">
            <div className="report_container">
                <ViewReportDialog/>
                <div className="note">
                    Note1: "Gender" and "Ethnicity" must be selected.
                    Note2: At least one of profiles must be uploaded.
                </div>
            </div>
        </Segment>
    );
}

export default Analyze;