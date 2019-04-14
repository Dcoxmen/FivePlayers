import React from "react";
import "../PlayerStyle.css";

function Two(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Player Two Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Two;