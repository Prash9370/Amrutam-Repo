import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand text-success" href="/">
        AMRUTAM
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="find-doctors">
              Find Doctors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-us">
              About Us
            </a>
          </li>
        </ul>
        <div className="d-flex ms-3">
          <button className="btn btn-outline-success me-2">Login</button>
          <button className="btn btn-success">Sign-up</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
