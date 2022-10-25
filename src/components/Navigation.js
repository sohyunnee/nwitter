import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
  <nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon style={{ marginBottom: 10 }} icon={faTwitter} color={"#04AAFF"} size="2x" />
          <div>Home</div>
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          style={{
            marginTop:1,
            marginLeft: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
          <div style={{ marginTop: 15, fontSize:13.5 }}>
            {userObj.displayName
              ? `${userObj.displayName}의 Profile`
              : "Profile"}
          </div>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
