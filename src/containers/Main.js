/*
    Container for fetching all main content, images with text and products
*/

import React, { Component } from "react";
import api from "../utils/api";
import MainComponent from "../components/MainComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      imagetexts: [],
      imagetextlinks: []
    };
  }

  componentDidMount() {
    api.getProducts().then(products =>
      this.setState({
        products
      })
    );

    api.getImageTextLinks().then(imagetextlinks =>
      this.setState({
        imagetextlinks
      })
    );

    api.getImageTexts().then(imagetexts =>
      this.setState({
        imagetexts
      })
    );
  }

  render() {
    return <MainComponent {...this.state} />;
  }
}

export default Main;
