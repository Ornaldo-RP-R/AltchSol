import React from "react";
import "./Sections.styles.css";
import { faSearch, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
const Sections = ({ title, ImageSrc }) => {
  return (
    <div className="Sections">
      <div className="Search">
        <FontAwesomeIcon icon={faSearch} color="#F4C042" size="xs" />
        <input />
      </div>
      <div className="title">
        <img src={ImageSrc} />
        <span>{title}</span>
      </div>
    </div>
  );
};
export default Sections;
