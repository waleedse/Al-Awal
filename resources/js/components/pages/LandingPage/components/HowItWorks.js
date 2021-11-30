import React, { Component } from "react";

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="container-fluid howitworkmain">
        <div className="row howItTitleBox">
          <div className="col-12 mt-3">

          </div>
        </div>
        <div className="row howItFeatureRow">
          <div className="col-md-5 col-sm-12">
          <h2 className="howItTitle">HOW IT <span style={{fontSize:'56px'}}>WORKS</span></h2>
            <p className="howItText">
              Step-by step guide on how to Create Account and start working with
              Al Awal Capitals
            </p>
           <div className="row">
                <div className="col-md-6">
                <img
                    className="howPointImage"
                    src="/assets/images/user.png"
                    alt="howPointsImage"
                  ></img>
                </div>
           </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <img
              className="howItFeatureImage"
              alt="image"
              src="/assets/images/howItWorks.png"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
