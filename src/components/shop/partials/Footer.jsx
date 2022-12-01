import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        // style={{ background: "#303031", color: "#87898A" }}
        className=" z-10 py-6 px-4 md:px-12 text-center"
      >
        <div className="box-footer container">
          <div className="logo-box"></div>
          <div className="info-box"></div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
