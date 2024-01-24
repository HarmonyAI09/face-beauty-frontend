import { useContext, useState } from "react";
import "./ReportList.css";
import { UserContext } from "../pages/home";
import { BACKEND_URL } from "../config";
const ReportList = () => {
  const [reportList, setReportList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedFrontImage, setSelectedSideImage } = useContext(UserContext);
  const {
    gender,
    setGender,
    selectedOption,
    setSelectedOption,
    setFrontImage,
    setSideImage,
    setMarkPoints
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
    setSelectedOption(item.race);
    setFrontImage(item.front_image);
    setSideImage(item.side_image);
    setSelectedFrontImage(null);
    setSelectedSideImage(null);

    loadKeyPoints(item.id);
  };

  const loadKeyPoints = item_id => {
    fetch(`${BACKEND_URL}/details/${item_id}`)
      .then(res => res.json())
      .then(data => {
        const keypoints = JSON.parse(data.keyPoints)
        console.log('markPoints', keypoints)
        setMarkPoints(keypoints)
      })
      .catch(error => console.error(error))
  }
  return (
    <div className="report_dropbox" onClick={() => handleReportDropboxClick()}>
      {isOpen && (
        <div className="report_list_container">
          <div className="report_list_head">
            <div style={{ width: "20%" }}>Date</div>
            <div style={{ width: "20%" }}>Name</div>
            <div style={{ width: "20%" }}>Gender</div>
            <div style={{ width: "20%" }}>Ethnicity</div>
          </div>
          <div className="report_list_body">
            {reportList.map((report, index) => (
              <div key={index} className="report_list_item" onClick={() => handleReportItemClick(index)}>
                <div style={{ width: "20%" }}>{report.date}</div>
                <div style={{ width: "20%" }}>{report.owner}</div>
                <div style={{ width: "20%" }}>{report.gender}</div>
                <div style={{ width: "20%" }}>{report.race}</div>
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
