import React from "react";
import Title from "./Title";
import Banner from "./Banner";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import '../styles/App.css';

function App() {

  const candidats = [
    {
      percentage: 90,
      image: "/img/Kamto.jpeg",
      party: "MRC",
      name: "Maurice KAMTO",
    },
    {
      percentage: 10,
      image: "/img/PaulBiya.jpeg",
      party: "RDPC",
      name: "Paul BIYA",
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
