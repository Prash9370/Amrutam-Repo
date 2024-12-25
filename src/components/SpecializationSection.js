import React from "react";

const SpecializationSection = () => {
  return (
    <div className="specialization-section my-4">
      <h5 className="fw-bold">I Specialize In</h5>
      <div className="d-flex flex-wrap">
        <div className="badge bg-light text-dark m-1">Women's Health</div>
        <div className="badge bg-light text-dark m-1">Skin Care</div>
        <div className="badge bg-light text-dark m-1">Immunity</div>
        <div className="badge bg-light text-dark m-1">Hair Care</div>
      </div>
    </div>
  );
};

export default SpecializationSection;
