import React from "react";
import Title from "./Title";
import Banner from "./Banner";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import '../styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="title">
        <Title />
      </div>
      <hr className="dividerLong" />
      <Banner />
      <hr className="divider" />
      <div className="main-content">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
}

export default App;
