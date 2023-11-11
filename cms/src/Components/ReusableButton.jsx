import React from "react";

const ReusableButton = ({ onClick, type, className, label }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default ReusableButton;
