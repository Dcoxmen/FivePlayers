import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import picTitle from "../../img/title.png";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="wrapper col-xl-4">
          <img className="title" src={require('../../img/title.png')} />
          <hr />
          <Link
            to="/register"
            className="btn1 btn btn-lg btn-warning mr-3"
          >
            Sign Up
                  </Link>
          <Link to="/login" className="btn2 btn btn-lg btn-primary ml-3">
            Login

                  </Link>
                </div>
              </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
