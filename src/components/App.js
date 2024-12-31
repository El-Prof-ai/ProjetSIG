import React from "react";
import Title from "./Title";
import Banner from "./Banner";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import '../styles/App.css';

function App() {

  const candidats = [
    {
      percentage: 20,
      image: "/img/Kamto.jpeg",
      party: "MRC",
      name: "Maurice KAMTO",
    },
    {
      percentage: 60,
      image: "/img/PaulBiya.jpeg",
      party: "RDPC",
      name: "Paul BIYA",
    },
    {
      percentage: 15,
      image: "/img/CabralLibii.jpeg",
      party: "PCRN",
      name: "Cabral LIBII",
    },
    {
      percentage: 5,
      image: "/img/JosueOsih.jpeg",
      party: "SDF",
      name: "Josue OSIH",
    },
  ];
  const nomCirconscription = "Cameroun";
  const Circonscription = "Régions";
  const data = [
    ["Extrême Nord", "10", "85", "100", "100"],
    ["Nord", "59", "45", "56", "45"],
    ["Adamaoua", "52", "20", "80", "41"],
    ["Est", "22", "35", "28", "35"],
    ["Centre", "41", "45", "25", "41"],
    ["Sud", "99", "20", "78", "61"],
    ["Nord Ouest", "42", "35", "22", "20"],
    ["Ouest", "52", "45", "43", "41"],
    ["Littoral", "45", "20", "15", "61"],
    ["Sud Ouest", "75", "35", "61", "20"],
  ];
  const resumeData = {
    Total_Electeurs_enregistrés: 56898,
    Total_de_votes: 56787,
    Zone: nomCirconscription,
    Tête_de_liste: "Paul BIYA",
  };

  return (
    <div className="app">
      <div className="title">
        <Title />
      </div>
      <hr className="dividerLong" />
      <Banner candidats={candidats}/>
      <hr className="divider" />
      <div className="main-content">
        <LeftComponent Circonscription={Circonscription} data={data} candidats={candidats} resumeData={resumeData} />
        <RightComponent />
      </div>
    </div>
  );
}

export default App;
