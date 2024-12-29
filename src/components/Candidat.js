import React from "react";

function Candidat({ percentage, image, party, name }) {
  return (
    <div className="candidat">
      <div className="candidat-header">
        <img src={image} alt={name} className="candidat-image" />
        <div className="percentage-circle">
          <span className="percentage-text">{percentage}%</span>
        </div>
      </div>
      <div className="candidat-bar">
        <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="candidat-info">
        <p className="party-name">{party}</p>
        <p className="candidat-name">{name}</p>
      </div>
    </div>
  );
}

export default Candidat;
