import React from "react";
import Title from "./Title";
import Banner from "./Banner";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import '../styles/App.css';

function App() {

  const candidats = [
    {
      percentage: 75,
      image: "/i,
      party: "PARTY",
      name: "NOM DU CANDIDAT",
    },
    {
      percentage: 60,
      image: "https://via.placeholder.com/100",
      party: "PARTY 2",
      name: "AUTRE CANDIDAT",
    },
  ];

  return (
    <div className="app">
      <div className="title">
        <Title />
      </div>
      <hr className="dividerLong" />
      <Banner candidats={candidats}/>
      <hr className="divider" />
      <div className="main-content">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
}

export default App;
