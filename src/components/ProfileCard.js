import React from "react";

function ProfileCard() {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="doc1.png"
            alt="Dr. Bruce Willis"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Dr. Bruce Willis</h5>
            <p className="card-text text-muted">Gynecologist</p>
            <div className="d-flex align-items-center mb-3">
              <span className="badge bg-warning text-dark me-2">⭐ 4.2</span>
              <small className="text-muted">850 Followers</small>
            </div>
            <button className="btn btn-success w-100">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
