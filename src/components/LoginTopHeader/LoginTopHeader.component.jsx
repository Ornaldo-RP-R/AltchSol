import React from "react";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./LoginTopHeader.styles.css";
const LoginTopHeader = () => {
  return (
    <div className="LoginTopHeader">
      <div className="UsernamePassword">
        <div className="Username">
          <FontAwesomeIcon
            icon={faUser}
            color="#F3F3F3"
            size="xs"
          ></FontAwesomeIcon>
          <input
            name="UserName"
            required
            placeholder="Email"
            pattern="(^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$)|(^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$)"
          />
        </div>
        <div className="Password">
          <FontAwesomeIcon
            icon={faKey}
            color="#F3F3F3"
            size="xs"
          ></FontAwesomeIcon>
          <input
            required
            placeholder="Password"
            name="Password"
            pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$"
          />
        </div>
      </div>

      <div className="Question">?</div>
      <div className="Buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
      <div className="SocialMedia">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          color="#F3F3F3"
          size="xs"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faInstagramSquare}
          color="#F3F3F3"
          size="xs"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
export default LoginTopHeader;
