import React from "react";
import Candidat from "./Candidat";
import "../styles/Banner.css";

function Banner({ candidats }) {
  return (
    <div className="banner">
        {candidats.map((candidat, index) => (
          <Candidat
            key={index}
            percentage={candidat.percentage}
            image={candidat.image}
            name={candidat.name}
            party={candidat.party}
          />
        ))}
    </div>
  );
}

export default Banner;
