import React from "react";
import Candidat from "./Candidat";
import "../styles/Banner.css";

function Banner({ candidats }) {
  return (
    <div className="banner">
      <h1>Liste des Candidats</h1>
      <div className="candidats-container">
        {candidats.map((candidat, index) => (
          <Candidat
            key={index}
            score={candidat.score}
            image={candidat.image}
            name={candidat.name}
            nomParti={candidat.nomParti}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
