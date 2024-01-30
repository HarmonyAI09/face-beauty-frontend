import Segment from "../Segment";
import { ViewReportDialog } from "../ViewReportModalDialog";
import "./Report.css";

const Analyze = () => {
    return (
        <Segment title="Analyze">
            <div className="report_container">
                <ViewReportDialog/>
                <div className="note">
                    Note: "Gender" and "Ethnicity" must be selected.
                </div>
            </div>
        </Segment>
    );
}

export default Analyze;