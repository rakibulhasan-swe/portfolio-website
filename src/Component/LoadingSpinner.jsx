import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "black" }}
    >
      <span className="loader text-white">Loading</span>
    </div>
  );
};

export default LoadingSpinner;
