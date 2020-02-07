import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "./Home";
import img from "../assets/img/java-saas.png";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div>
        <section className="pt-4 pt-md-11">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                {/* Image */}
                <img
                  src={img}
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                  alt="..."
                  data-aos="fade-up"
                  data-aos-delay={100}
                />
              </div>
              <div
                className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate"
                data-aos="fade-up"
              >
                {/* Heading */}
                <h1 className="display-3 text-center text-md-left">
                  Personal Project Management Tool <br />
                </h1>
                {/* Text */}
                <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                  Create your account to join active projects or start your own
                </p>
                {/* Buttons */}
                <div className="text-center text-md-left">
                  <Link className="btn btn-lg btn-primary mr-2" to="/register">
                    Sign Up
                    <i className="fe fe-arrow-right d-none d-md-inline ml-3" />
                  </Link>
                  <Link to="/" className="btn btn-lg btn-outline-dark mr-2">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
        <Home />
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(Landing);
