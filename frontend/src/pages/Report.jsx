import React from 'react';

const Report = ({ prediction, age }) => {
  


  return (
    <div>
      {/* Check if flaskResponse exists before accessing its properties */}
      {prediction ? (
        <div>
          <h2>Prediction class: {flaskResponse.prediction_class}</h2>
          <h2>Confidence: {flaskResponse.max_pred}</h2>
        </div>
      ):( <p>loading....</p> )}
    </div>
  );
};

export default Report;
