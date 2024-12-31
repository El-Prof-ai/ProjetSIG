import React from "react";
import "../styles/Resume.css";

function Table({ resumeData }) {

  return (
    <div className="table-container-resume">
        <div className="title-table-resume">
            <p >RESUME</p>
        </div>
      <table className="custom-table-resume">
        <tbody>
        {Object.entries(resumeData).map(([key, value], index) => (
            <tr key={index} >
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
