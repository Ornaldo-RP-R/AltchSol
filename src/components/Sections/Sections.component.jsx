import React from "react";
import "./Sections.styles.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sections = ({ title, ImageSrc, FilteredValue, HandleChange }) => {
  return (
    <div className="Sections">
      <div className="Search">
        <FontAwesomeIcon icon={faSearch} color="#F4C042" size="xs" />
        <input
          value={FilteredValue}
          onChange={(e) => {
            HandleChange(e);
          }}
        />
      </div>
      <div className="title">
        <img src={ImageSrc} />
        <span>{title}</span>
      </div>
    </div>
  );
};
export default Sections;
