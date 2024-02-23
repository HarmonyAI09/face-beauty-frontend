import { useContext, useState } from "react";
import "./ReportList.css";
import { UserContext } from "../pages/home";
import { FaDownload } from "react-icons/fa6";
import { OneProfile } from "../class/Profile";

const SavedReport = (props) => {
  const handleReportDownload = async (e) => {
    e.stopPropagation();
    const response = await fetch(
      `http://localhost:8000/profile/download/${props.report.id}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const blob = await response.blob();

      // Extract filename from Content-Disposition header
      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = props.report.name + '_'+ props.report.gender + '_' + props.report.racial + '.xlsx'; // Fallback filename
      if (contentDisposition && contentDisposition.includes("filename=")) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);
        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, ""); // Remove any surrounding quotes
        }
      }

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor (<a>) element to facilitate download
      const a = document.createElement("a");
      a.href = url;
      a.download = filename; // Use the filename from the Content-Disposition header
      document.body.appendChild(a);
      a.click();

      // Cleanup
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      console.error("Failed to fetch the file");
    }
  };

  return (
    <>
      <div style={{ width: "20%" }}>{props.report.dateAdded}</div>
      <div style={{ width: "20%" }}>{props.report.name}</div>
      <div style={{ width: "20%" }}>{props.report.gender}</div>
      <div style={{ width: "20%" }}>{props.report.racial}</div>
      <div style={{ width: "10%" }} onClick={handleReportDownload}>
        <FaDownload />
      </div>
    </>
  );
};
const ReportList = () => {
  const [reportList, setReportList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { oneProfile, setOneProfile } = useContext(UserContext);

  const handleShowButtonClick = async () => {
    try {
      await fetch(
        `http://localhost:8000/profile/${localStorage.getItem("userEmail")}`
      )
        .then((response) => response.json())
        .then((data) => {
          setReportList(data.profileIDs);
        });
    } catch (error) {
      console.error("Error getting report list:", error);
    }
  };
  const handleReportItemClick = async (index) => {
    const tmpProfile = new OneProfile();
    tmpProfile.copy(oneProfile);
    await tmpProfile.load(reportList[index].id);
    setOneProfile(tmpProfile);
  };
  const handleReportDropboxClick = () => {
    setIsOpen(!isOpen);
  };
  const handleNewProfile = () => {
    const newProfile = new OneProfile();
    setOneProfile(newProfile);
  };
  return (
    <div className="report_dropbox" onClick={() => handleReportDropboxClick()}>
      {isOpen && (
        <>
          <div className="report_list_container">
            <div className="report_list_head">
              <div style={{ width: "20%" }}>Date</div>
              <div style={{ width: "20%" }}>Name</div>
              <div style={{ width: "20%" }}>Gender</div>
              <div style={{ width: "20%" }}>Race</div>
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
          <div onClick={handleNewProfile}>New Profile</div>
        </>
      )}
      <div className="dropbox_handler" onClick={handleShowButtonClick}>
        Saved Profiles
      </div>
    </div>
  );
};

export default ReportList;
