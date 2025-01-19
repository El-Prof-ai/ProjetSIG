import React from "react";
import CountdownTimer from "./CountdownTimer";

function Title({ targetDate }) {
  return (
    <div>
      <CountdownTimer targetDate = {targetDate} />
      <hr className="dividerLong" />
      <div className="title">
      Élections présidentielles 2025
      </div>
    </div>
  );
}

export default Title;
