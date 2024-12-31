import React from "react";
import '../styles/Candidat.css';
import { ReactComponent as VectorIcon } from "../assets/Bande.svg";

function Candidat({ percentage, image, party, name }) {
  return (
    <div className="candidat">
      <div className="candidat-header">
        <div className="svg-container">
          <VectorIcon className="dynamic-svg" 
          style={{ fill: `hsl(${percentage * 1.2}, 70%, 50%)` }} />
          <div className="percentage-text-on-svg">
            {percentage}%
          </div>
        </div>
        <img src={image} alt={name} className="candidat-image" />
        {/*<div className="percentage-circle">
          <span className="percentage-text">{percentage}%</span>
        </div>*/}
      </div>
      <div className="candidat-bar">
        <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <div>
        <p className="candidat-party">{party}</p>
        <p className="candidat-name">{name}</p>
      </div>
    </div>
  );
}

export default Candidat;
