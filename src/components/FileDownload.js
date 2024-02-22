import { FaDownload } from "react-icons/fa";
import "./FileDownload.css";

const FileDownload = () => {
  const content = (
    <div className="pdf-container offscreen">
      <div className="pdf-title">100% FACIAL HARMONY</div>
      <div className="pdf-score-detail">
        <div>Front Profile: 100%</div>
        <div>Side Profile: 100%</div>
      </div>
      <div className="pdf-owner-info">Male, Caucasian, Joshua Lee</div>
      <div className="pdf-table"></div>
    </div>
  );
  return (
    <div>
      {content}
      <div className="main_button" onClick={()=>{}}>
        <FaDownload />
      </div>
    </div>
  );
};

export default FileDownload;