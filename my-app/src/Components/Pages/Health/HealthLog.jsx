import React from 'react';

const HealthLog = ({ records }) => {
  return (
   <div style={{ backgroundColor: "#EAEBD0", fontWeight: "bold", padding: "10px" }}>
      <h3 style={{fontWeight:"bold"}}>Health Log</h3>
      {records.length === 0 ? (
        <p style={{ color: "#AF3E3E",paddingLeft:"55px" }}>No records yet.</p>
      ) : (
        records.map((r) => (
          <div
            key={r.id}
            style={{
              border: '2px solid #EAEBD0',
              backgroundColor: "#AF3E3E",
              marginBottom: '10px',
              padding: '8px'
            }}
          >
            <p style={{ color: "#EAEBD0" }}><strong>{r.date}</strong></p>
            <p style={{ color: "#EAEBD0" }}>BP: {r.systolic}/{r.diastolic} mmHg</p>
            <p style={{ color: "#EAEBD0" }}>Weight: {r.weight} kg</p>
            <p style={{ color: "#EAEBD0" }}>Glucose: {r.glucose} mg/dL</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HealthLog;
