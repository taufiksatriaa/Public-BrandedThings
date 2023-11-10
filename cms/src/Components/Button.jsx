import React from "react";
const Button = ({ onClick, label, type, className }) => {
  return (
    <button onClick={onClick} type={type} className={`btn ${className}`}>
      {label}
    </button>
  );
};

export default Button;
