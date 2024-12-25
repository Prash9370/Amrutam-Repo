import React from "react";

function FindDoctorsPage() {
  return (
    <div className="find-doctors-page">
      {/* Header */}
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            AMRUTAM
          </a>
          <div className="ml-auto">
            <a href="/login" className="btn btn-outline-success mr-2">
              Login
            </a>
            <a href="/signup" className="btn btn-success">
              Sign-up
            </a>
          </div>
        </div>
      </header>

      {/* Title */}
      <div className="text-center py-4">
        <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
      </div>

      {/* Filter Section */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <select className="form-select">
                <option>Select Location</option>
                {/* Add locations */}
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="eg. Doctor, specialisation, clinic name"
              />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Filters */}
          <div className="col">
            <select className="form-select">
              <option>Expertise</option>
              {/* Add options */}
            </select>
          </div>
          <div className="col">
            <select className="form-select">
              <option>Gender</option>
              {/* Add options */}
            </select>
          </div>
          <div className="col">
            <select className="form-select">
              <option>Fees</option>
              {/* Add options */}
            </select>
          </div>
          <div className="col">
            <select className="form-select">
              <option>Languages</option>
              {/* Add options */}
            </select>
          </div>
        </div>
      </div>

      {/* Filters Tags */}
      <div className="container">
        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-secondary">Hair Care</span>
          <span className="badge bg-secondary">Female</span>
          <span className="badge bg-secondary">₹0-₹500</span>
          <span className="badge bg-secondary">Hindi</span>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="container my-4">
        <div className="row">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card p-3">
                  <img
                    src="./doctor.png"
                    alt="Doctor"
                    className="card-img-top rounded-circle mx-auto d-block"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Dr. Prerna Narang</h5>
                    <p className="text-muted">
                      Male-Female Infertility <br />
                      7 years of Experience <br />
                      Speaks: English, Hindi, Marathi
                    </p>
                    <p>
                      <strong>Video Consultation:</strong> ₹800 <br />
                      <strong>Chat Consultation:</strong> Free
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-primary">
                        View Profile
                      </button>
                      <button className="btn btn-primary">
                        Book a consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FindDoctorsPage;
