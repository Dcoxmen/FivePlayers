import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../PlayerStyle.css";

function One(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Player One Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default One;