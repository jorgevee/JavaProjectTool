import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section
          className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover"
          style={{ backgroundImage: "url(assets/img/covers/cover-5.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                {/* Heading */}
                <h1 className="display-2 font-weight-bold text-white">
                  We’re Here to Help.
                </h1>
                {/* Text */}
                <p className="lead text-white-75 mb-0">
                  We always want to hear from you! Let us know how we can best
                  help you and we'll do our very best.
                </p>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
      </div>
    );
  }
}

export default Contact;
