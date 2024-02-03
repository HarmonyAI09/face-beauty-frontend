import { useContext, useState } from "react";
import "./ReportList.css";
import { UserContext } from "../pages/home";
import { BACKEND_URL } from "../config";
import { FaDownload } from "react-icons/fa6";

const SavedReport = (props) => {
  const handleReportDownload = () => {
    console.log("Report Download Button Clicked");
  }

  return (
    <>
      <div style={{ width: "20%" }}>{props.report.date}</div>
      <div style={{ width: "20%" }}>{props.report.owner}</div>
      <div style={{ width: "20%" }}>{props.report.gender}</div>
      <div style={{ width: "20%" }}>{props.report.race}</div>
      <div style={{ width: "10%" }} onClick={handleReportDownload}><FaDownload /></div>
    </>
  );
};
const ReportList = () => {
  const [reportList, setReportList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedFrontImage, setSelectedSideImage } =
    useContext(UserContext);
  const {
    setGender,
    setEthnicity,
    setFrontImage,
    setSideImage,
    setMarkPoints,
  } = useContext(UserContext);

  const handleShowButtonClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/reports/${localStorage.getItem("userEmail")}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setReportList(data);
        });
    } catch (error) {
      console.error("Error getting report list:", error);
    }
  };
  const handleReportItemClick = async (index) => {
    setAsSavedWork(index);
  };
  const handleReportDropboxClick = () => {
    setIsOpen(!isOpen);
  };
  const setAsSavedWork = async (index) => {
    console.log(reportList[index]);
    const item = reportList[index];
    setGender(item.gender === "true");
    setEthnicity(item.race);
    setFrontImage(item.front_image);
    setSideImage(item.side_image);
    setSelectedFrontImage(null);
    setSelectedSideImage(null);

    loadKeyPoints(item.id);
  };

  const loadKeyPoints = (item_id) => {
    fetch(`${BACKEND_URL}/details/${item_id}`)
      .then((res) => res.json())
      .then((data) => {
        const keypoints = JSON.parse(data.keyPoints);
        console.log("markPoints", keypoints);
        setMarkPoints(keypoints);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="report_dropbox" onClick={() => handleReportDropboxClick()}>
      {isOpen && (
        <div className="report_list_container">
          <div className="report_list_head">
            <div style={{ width: "20%" }}>Date</div>
            <div style={{ width: "20%" }}>Name</div>
            <div style={{ width: "20%" }}>Gender</div>
            <div style={{ width: "20%" }}>Ethnicity</div>
            <div style={{ width: "10%" }}></div>
          </div>
          <div className="report_list_body">
            {reportList.map((report, index) => (
              <div
                key={index}
                className="report_list_item"
                onClick={() => handleReportItemClick(index)}
              >
                <SavedReport report={report} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="dropbox_handler" onClick={handleShowButtonClick}>
        Saved Profiles
      </div>
    </div>
  );
};

export default ReportList;
