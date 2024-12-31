import React from "react";
import "../styles/Table.css";

function Table({ data, Circonscription, candidats }) {
  const headers = [Circonscription];
  for (let i =0; i < candidats.length; i++) {

    const NomParty = candidats[i].party;
    headers.push(NomParty);
  }

  return (
    <div className="table-container">
      <div className="icon-container">
        <img src="/img/Instagram.png" alt="Icon" className="icon" />
      </div>
      <p className="title-table">DETAILS > CAMEROUN</p>
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
