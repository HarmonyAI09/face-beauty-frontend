import { FaDownload } from "react-icons/fa";
import "./FileDownload.css";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

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

  const handleGeneratePDF = async () => {
    // const contentElement = document.querySelector('.pdf-container');
    // html2canvas(contentElement)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL("image/png");
    //     const pdf = new jsPDF({
    //       orientation: "landscape",
    //       unit: "px",
    //       format: "a4",
    //     });
    //     pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    //     pdf.save("download.pdf");
    //   })
    //   .catch((err) => console.error("Error", err));
  };

  return (
    <div>
      {content}
      <div className="main_button" onClick={handleGeneratePDF}>
        <FaDownload />
      </div>
    </div>
  );
};

export default FileDownload;