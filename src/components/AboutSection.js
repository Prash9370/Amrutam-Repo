import React from "react";

function AboutSection() {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">A Little About Me</h5>
        <p className="card-text">
          Hello! I am Dr. Bruce Willis, a Gynecologist at Sanjivni Hospital
          Surat. I love working with my hospital staff and senior doctors. I
          completed my graduation in Gynecology Medicine from XYZ University.
        </p>
        <div>
          <span className="badge bg-light text-dark me-2">English</span>
          <span className="badge bg-light text-dark me-2">Hindi</span>
          <span className="badge bg-light text-dark">Telugu</span>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
