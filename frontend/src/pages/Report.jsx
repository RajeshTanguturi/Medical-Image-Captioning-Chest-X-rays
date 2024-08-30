import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/report.scss"; // Import the SCSS file

const Report = () => {
  const location = useLocation();
  const { patientDetails, image} = location.state || {};
  const generatedText = "loremdhkjfalkdfhladsfkljhadslkfjlk  dsfkjhsd fkjsdhf jsdfhk sdhfjk sdfkjhsdkjdf sdkjdfhjkshfkjshfjk asdkjfhasdkj fhksdjfhksad fkasdhf"
  return (
    <div className="report-container">
      <h2>Patient Report</h2>
      {patientDetails ? (
        <div className="patient-details">
          <p id="details">Name : <span><p>{patientDetails.patientName}</p></span></p>
          <p id="details">Age : <span><p>{patientDetails.patientAge}</p></span></p>
          <p id="details">Sex : <span><p>{patientDetails.patientSex}</p></span> </p>
        </div>
      ) : (
        <p>No patient details available.</p>
      )}
      {image && (
        <div className="image-container">
          <h6>X-Ray</h6>
          <img src={URL.createObjectURL(image)} alt="Patient" />
        </div>
      )}
      <div className="generated-text">
        <h4>Generated caption by InsightXray</h4>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default Report;
