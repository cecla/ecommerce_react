import React, { Fragment } from "react";
import Main from "../containers/Main";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

const WrapperComponent = _ => (
  <Fragment>
    <Header />
    <Main />
    <Footer />
  </Fragment>
);

export default WrapperComponent;
