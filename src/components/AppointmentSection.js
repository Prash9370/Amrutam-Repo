import React from "react";

function AppointmentSection() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Appointment Fee</h5>
        <h3 className="text-success">₹699.00</h3>
        <hr />
        <h6>Select your mode of session</h6>
        <div className="btn-group w-100 mb-3">
          <button className="btn btn-outline-secondary">In-Clinic</button>
          <button className="btn btn-success">Video</button>
          <button className="btn btn-outline-secondary">Chat</button>
        </div>
        <h6>Pick a time slot</h6>
        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary">9:00 AM</button>
          <button className="btn btn-outline-success">11:00 AM</button>
          <button className="btn btn-outline-secondary">5:15 PM</button>
        </div>
        <button className="btn btn-success w-100 mt-3">Make an Appointment</button>
      </div>
    </div>
  );
}

export default AppointmentSection;
