import React from "react";
import "../styles/LeftComponent.css"
import SearchBar from "./SearchBar";
import Table from "./Table";
import Resume from "./Resume";

function LeftComponent({ data, Circonscription, candidats, resumeData }) {
  return (
    <div className="left-component">
      <SearchBar />
      <Table Circonscription={Circonscription} data={data} candidats={candidats} />
      <Resume resumeData={resumeData} />
    </div>
  );
}

export default LeftComponent;
