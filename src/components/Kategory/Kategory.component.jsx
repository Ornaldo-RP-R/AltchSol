import React from "react";
import "./Kategory.styles.css";
const Kategory = ({ FirstLayer, SecondLayer, title }) => {
  return (
    <div className="Kategory">
      <span className="Kategoryname">{title}</span>
      {FirstLayer ? (
        <div className="ImageContainer">
          <img className="firstImage" src={FirstLayer} />
          <img className="secondImage" src={SecondLayer} />
        </div>
      ) : (
        <div className="ImageContainer">
          <img className="secondImage" src={SecondLayer} />
        </div>
      )}
    </div>
  );
};
export default Kategory;
