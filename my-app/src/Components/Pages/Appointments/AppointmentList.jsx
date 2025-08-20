import React from 'react';

const AppointmentList = ({ appointments, onDelete, onComplete }) => {
  return (
    <div>
      <h3>Appointments</h3>
      {appointments.length === 0 ? (
        <p style={{ paddingLeft: "50px", color: "brown" }}>No appointments available.</p>
      ) : (
        appointments.map((a) => (
          <div className="animated-card"
            key={a._id}
            style={{
              border: "1px solid #EAEBD0"  ,
              backgroundColor: "#AF3E3E",
              padding: '10px',
              marginBottom: '10px',
              paddingLeft: "50px",
              color: "#EAEBD0",
              boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
              opacity: a.completed ? 0.6 : 1, // visually show completed
            }}
          >
            <p><strong>{a.title}</strong></p>
            <p>{a.date} </p>
            <p>{a.time}</p>
            <p>Location: {a.location}</p>  {/*  updated here */}

            {a.completed ? (
              <span className="button-28" >Completed</span>
            ) : (
              <>
                {onDelete && (
                  <button className="button-28"
                    onClick={() => onDelete(a._id)}
                  >
                    Delete
                  </button>
                )}
                {onComplete && (
                  <button className="button-28"
                    onClick={() => onComplete(a._id)}
                  >
                    Complete
                  </button>
                )}
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AppointmentList;
