import React from "react";
import "./Kategory.styles.css";
const Kategory = ({ FirstLayer, SecondLayer, title }) => {
  return (
    <div className="Kategory">
      <span className="Kategoryname">{title}</span>
      {FirstLayer ? (
        <div className="ImageContainer">
          <img className="firstImage" alt="Nothing To Show" src={FirstLayer} />
          <img
            className="secondImage"
            alt="Nothing To Show"
            src={SecondLayer}
          />
        </div>
      ) : (
        <div className="ImageContainer">
          <img
            className="secondImage"
            alt="Nothing To Show"
            src={SecondLayer}
          />
        </div>
      )}
    </div>
  );
};
export default Kategory;
